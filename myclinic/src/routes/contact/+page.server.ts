import { airtableToken } from '$env/static/private'
import Airtable from 'airtable';
import type { PageServerLoad, Actions } from './$types';
const base = new Airtable({apiKey: airtableToken}).base('appm8dC1gxfRqYrLk');


export const load = ((event) => {
  return {
    props: {}
  };
}) satisfies PageServerLoad;



export const actions = {
	
	contact: async (event) => {
    const data = await event.request.formData();
		
    
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
            return { success: false };
          }
          records.forEach(function (record) {
            console.log(record.getId());
          });
          
        }); 
        return { success: true };
        
}}satisfies Actions;;