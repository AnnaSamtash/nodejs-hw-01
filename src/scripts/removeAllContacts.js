import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.length = 0;
      await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    } else {
      console.log('No contacts to remove');
    }
  } catch (err) {
    console.error(err);
  }
};

removeAllContacts();
