import { airtableToken } from '$env/static/private'
import Airtable from 'airtable';
import type { PageServerLoad, Actions } from './$types';
const base = new Airtable({apiKey: airtableToken}).base('appm8dC1gxfRqYrLk');
let successForm = false;

export const load = ((event) => {
  return {
    successForm: successForm
  };
}) satisfies PageServerLoad;



export const actions = {
	
	contact: async (event) => {
    const data = await event.request.formData();
		console.log(event)
    base('Contacts').create([
      {
        "fields": {
          "Name": data.get('name'),
          "Account": data.get('company'),
          "Phone #": data.get('phone'),
          "Email Address": data.get('email')
        }
      }], function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.getId());
          });
          successForm = true;
        });
        
}}satisfies Actions;;