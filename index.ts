import { parser } from './divider/parser';
import { divide } from './helpers/compositionDivide';
import { stringify } from './helpers/create';
// import { exampleInputData } from '../helpers' // TODO api

const output = ''; // TODO API

import fs from 'fs';

export const fileCreator = async (path: string, _options?: any): Promise<void> => {
  const input = await import(path);
  const defaultObject = input.default;
  const parsedObject = parser(defaultObject)

  const dividedObject = divide(parsedObject!);
  
  dividedObject.forEach((d) => {
    const split = path.split('/');
    const pathResult = path.slice(0, split.length - 1);
    fs.writeFile(`${''}${d.name}.js`, stringify(d), function (err) {
      if (err) throw err;
      console.log('Success!');
    })
  })
}

const path = process.argv[2];
fileCreator(path);