import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await getAllContacts();
    const contact = createFakeContact();
    contacts.push(contact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
