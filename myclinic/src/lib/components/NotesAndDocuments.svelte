<script lang="ts">
	import { Fileupload, Label, Helper } from 'flowbite-svelte';
  import Notes from './Notes.svelte';
    let note = '';
    let documents = [
        {
            name: 'Lab Results',
            url: 'https://www.google.com'
        },
        {
            name: 'X-Ray',
            url: 'https://www.google.com'
        },
        {
            name: 'MRI',
            url: 'https://www.google.com'
        }
    ];
    let fileInput;
  
    async function addNote() {
      if (note.trim()) {
        // Add the note to your database
        /* const { data, error } = await supabase
          .from('notes')
          .insert([{ content: note, patient_id: data.session.user.id }]);
        
        if (error) {
          console.error("Error adding note:", error);
        } else {
          // Refresh notes or add to a local list
        }
      } */
    }
    }
  
    async function uploadDocument() {
      const file = fileInput.files[0];
      if (file) {
        const filePath = `documents/${file.name}`;
        console.log(filePath);
        /* const { error } = await supabase.storage.from('documents').upload(filePath, file);
  
        if (error) {
          console.error("Error uploading document:", error);
        } else {
          // Refresh document list or add to a local list
        } */
      }
      
    }
  
    async function fetchDocuments() {
      /* const { data, error } = await supabase.storage.from('documents').list('documents/');
  
      if (error) {
        console.error("Error fetching documents:", error);
      } else {
        documents = data;
      } */
      return documents;
    }
  
    fetchDocuments();
  </script>
  
  <section class="bg-white p-6 mt-6 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold mb-4">Notes and Documents</h3>
    <!-- Notes -->
    <Notes />
    <!-- Documents -->
    <div class="space-y-4 mt-6">
        <h4 class="font-medium text-lg">Upload Document:</h4>
        <Fileupload id="with_helper" class="mb-2" bind:this={fileInput}/>
        
        <button on:click={uploadDocument} class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Upload</button>
    
        <h4 class="font-medium text-lg mt-4">Documents:</h4>
        <ul>
          {#each documents as document}
            <li class="border p-4 rounded mb-2">
              <div class="flex justify-between items-center">
                <span class="font-medium">{document.name}</span>
                <div>
                  <a target="_blank" rel="noopener noreferrer">Download</a>
                  <button class="text-red-600 ml-2">Delete</button>
                  <button> Send</button>
                </div>
              </div>
              <!-- <a href={supabase.storage.from('documents').getPublicUrl(document.name)} target="_blank" rel="noopener noreferrer">
                {document.name}
              </a> -->
              
            </li>
          {/each}
        </ul>
      </div>
  
    
  
  </section>
  