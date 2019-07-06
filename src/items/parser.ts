import { readFile } from '../utils';

export default async function (filename: string) {
    console.log(`parsing ${filename}`);
    const data = await readFile(filename);
    console.log(`${data.length} bytes`);
}
