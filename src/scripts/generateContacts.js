import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await getAllContacts();
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      contacts.push(contact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
