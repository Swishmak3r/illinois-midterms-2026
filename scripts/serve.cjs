#!/usr/bin/env node
'use strict';
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || process.argv[2] || 4173);
const types = { '.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2','.json':'application/json' };
const server = http.createServer(async (req,res) => {
  try {
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405,{Allow:'GET, HEAD'}).end(); return; }
    let pathname = decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    const file = path.resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    if (pathname.split('/').some(part => part.startsWith('.'))) { res.writeHead(403).end(); return; }
    const content = await fs.readFile(file);
    res.writeHead(200,{ 'Content-Type':types[path.extname(file)] || 'application/octet-stream','Content-Length':content.length,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) { res.writeHead(error.code === 'ENOENT' ? 404 : 400,{'Content-Type':'text/plain'}).end('Not found'); }
});
server.listen(port,'127.0.0.1',() => console.log('Local preview: http://127.0.0.1:' + port));
