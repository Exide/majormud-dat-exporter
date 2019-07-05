import * as fs from 'fs';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

(async () => {

  const datFile = process.argv[2];
  const data = await readFile(datFile);
  console.log(`${data.length} bytes`);

})();
