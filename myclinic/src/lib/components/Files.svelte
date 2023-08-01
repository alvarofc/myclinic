<script lang="ts">
    import Uploader from "./Uploader.svelte";
    // import necessary libraries for email functionality
    let uploadFile:ArrayBufferTypes // variable to store uploaded file
  
    let files = [
        {name: "test.pdf", size: 1000},
        {name: "test2.pdf", size: 2000},
    ]; // array to store uploaded files
    let uploadMode = false; // flag to toggle upload mode
  
    function handleUpload() {
      // function to handle file upload
      // add uploaded file to the files array
      // reset upload mode flag
    }
  
    function handleDelete(file) {
      // function to handle file deletion
      // remove file from the files array
    }
  
    function handleSend(file) {
      // function to handle file sending via email
      // use email library to send file to user's email
    }
  </script>

{#if !uploadMode}
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => uploadMode = true}>
  Upload File
</button>
{:else}
<Uploader on:upload={handleUpload} bind:uploadMode bind:uploadFile  />

{/if}
<!-- code for upload mode -->
{#if files.length > 0}
<div class="mt-8">
  {#each files as file}
    <div class="flex items-center justify-between border-b border-gray-400 py-2">
      <span class="text-gray-700">{file.name}</span>
      <div class="flex gap-4">
        <button class="  text-white font-bold py-2 px-4 rounded" on:click={() => handleDelete(file)}>
            <svg class="w-6 h-6 text-gray-800 hover:text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
              </svg>
        </button>
        <button class=" text-white font-bold py-2 px-4 rounded" on:click={() => handleSend(file)}>
            <svg class="w-6 h-6 text-gray-800 hover:text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
              </svg>
        </button>
        <button class=" text-white font-bold py-2 px-4 rounded" on:click={() => handleSend(file)}>
          <svg class="w-6 h-6 text-gray-800 hover:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
          </svg>
        </button>
      </div>
    </div>
  {/each}
</div>
{:else}
<p>No Files Uploaded</p>
{/if}
  