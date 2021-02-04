import { RequestHandler } from "express";
import { readFileSync, writeFileSync } from 'fs';

const maps: any = {};
const infos: any = {};

export const breakpointResume: RequestHandler = (req, res) => {

    const fileMd5 = req.body.md5;
    let percentage = '';
    
    if (req.file) {
        if (!maps[`${fileMd5}`]) {
            maps[`${fileMd5}`] = {};
        }
        if (!infos[`${fileMd5}`]) {
            infos[`${fileMd5}`] = {};
        }

        infos[`${fileMd5}`].total = Number(req.body.total);
        infos[`${fileMd5}`].name = req.body.name;
        maps[`${req.body.md5}`][req.body.index] = req.file.filename;

        percentage = `${(Object.keys(maps[`${fileMd5}`]).length / infos[`${fileMd5}`].total * 100).toFixed(2) }%`;

        if (Object.keys(maps[`${fileMd5}`]).length === infos[`${fileMd5}`].total) {
            const chunks: Buffer[] = [];
            Object.keys(maps[`${fileMd5}`]).sort().forEach(key => {
                const content = readFileSync(`./uploads/${maps[`${fileMd5}`][key]}`);
                chunks.push(content);
            });
            writeFileSync(`./uploads/${infos[`${fileMd5}`].name}`, Buffer.concat(chunks));
            maps[`${fileMd5}`] = {};
            infos[`${fileMd5}`] = {};
        }
    }

    res.json({
        data: {
            percentage
        }
    }).end();
}