import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const count = contacts.length;
    return count;
  } catch (err) {
    console.error(err);
  }
};

console.log(await countContacts());
