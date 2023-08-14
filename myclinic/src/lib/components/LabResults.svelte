<script lang="ts">
    import { Modal } from 'flowbite-svelte';
  
    export let labResults: {
      date: string;
      testName: string;
      result: string;
      referenceRange: string;
    }[] = [];
  
    let showModal = false;
    let modalType: 'add' | 'edit' = 'add';
    let activeIndex: number | null = null;
    let tempLabResult = {
      date: '',
      testName: '',
      result: '',
      referenceRange: ''
    };
  
    function openModal(type: 'add' | 'edit', index: number | null = null) {
      modalType = type;
      activeIndex = index;
      tempLabResult = index !== null ? { ...labResults[index] } : {
        date: '',
        testName: '',
        result: '',
        referenceRange: ''
      };
      showModal = true;
    }
  
    function confirmModal() {
      if (modalType === 'add') {
        labResults.push(tempLabResult);
      } else if (modalType === 'edit' && activeIndex !== null) {
        labResults[activeIndex] = tempLabResult;
      }
      closeModal();
    }
  
    function closeModal() {
      showModal = false;
      modalType = 'add';
      activeIndex = null;
      tempLabResult = {
        date: '',
        testName: '',
        result: '',
        referenceRange: ''
      };
    }
  
    function deleteLabResult(index: number) {
      labResults.splice(index, 1);
    }
  </script>
  
  <section class="bg-white p-6 mt-6 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold mb-4">Lab Results</h3>
  
    <div class="space-y-4">
      <h4 class="font-medium text-lg">Results:</h4>
      <ul>
        {#each labResults as result, index}
          <li class="border p-4 rounded mb-2">
            <div class="flex justify-between items-center">
              <span class="font-medium">{result.date}: {result.testName} - {result.result} ({result.referenceRange})</span>
              <div>
                <button class="text-blue-600 mr-2" on:click={() => openModal('edit', index)}>Edit</button>
                <button class="text-red-500" on:click={() => deleteLabResult(index)}>Delete</button>
              </div>
            </div>
          </li>
        {/each}
      </ul>
      <button class="mt-2 text-blue-600" on:click={() => openModal('add')}>+ Add Lab Result</button>
    </div>
  
    {#if showModal}
      <Modal title={modalType === 'add' ? 'Add Lab Result' : 'Edit Lab Result'} bind:open={showModal} outsideclose>
        <div class="space-y-4">
          <input type="date" bind:value={tempLabResult.date} class="w-full p-2 border rounded" placeholder="Date" />
          <input type="text" bind:value={tempLabResult.testName} class="w-full p-2 border rounded" placeholder="Test Name" />
          <input type="text" bind:value={tempLabResult.result} class="w-full p-2 border rounded" placeholder="Result" />
          <input type="text" bind:value={tempLabResult.referenceRange} class="w-full p-2 border rounded" placeholder="Reference Range" />
          <div class="flex justify-end">
            <button class="text-gray-600 mr-2" on:click={closeModal}>Cancel</button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={confirmModal}>Confirm</button>
          </div>
        </div>
      </Modal>
    {/if}
  </section>
  