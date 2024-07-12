import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const contact = createFakeContact();
    contacts.push(contact);
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts, undefined, contacts.length),
    );
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
