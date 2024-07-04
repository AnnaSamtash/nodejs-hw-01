import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const contacts = await getAllContacts();
    contacts.length = contacts.length - 1;
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error(err);
  }
};

removeLastContact();
