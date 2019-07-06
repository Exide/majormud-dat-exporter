import { Argv, Arguments, CommandBuilder } from 'yargs';
import parser from './parser';

export const command: string = 'items [filename]';

export const desc: string = 'Export item information';

export const builder: CommandBuilder = (yargs: Argv) => yargs
    .positional('filename', {
        type: 'string',
        describe: 'MajorMUD DAT file containing item information'
    })
    .demandOption('filename');

export async function handler(args: Arguments) {
    const filename: string = `${args.filename}`;
    return parser(filename);
}
