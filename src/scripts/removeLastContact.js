import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.length = contacts.length - 1;
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(contacts, undefined, contacts.length),
      );
    } else {
      console.log('No contacts to remove');
    }
  } catch (err) {
    console.error(err);
  }
};

removeLastContact();
