<script lang="ts">
    import { Modal } from 'flowbite-svelte';
  
    export let medicalHistory = {
      pastDiagnoses: [] as string[],
      surgeries: [] as string[],
      allergies: [] as string[],
      medications: [] as string[],
      familyHistory: ''
    };
  
    let showModal = false;
    let modalType = ''; // 'add' or 'edit'
    let activeList = ''; // 'pastDiagnoses', 'surgeries', etc.
    let activeIndex = null; 
    let tempData = '';
  
  
  
    function confirmModal() {
      if (modalType === 'add') {
        medicalHistory[activeList].push(tempData);
      } else if (modalType === 'edit') {
        medicalHistory[activeList][activeIndex] = tempData;
      }
      closeModal();
    }
    function openModal( type, list, index = null){
        showModal = true;
        modalType = type;
        activeList = list;
        activeIndex = index;
        tempData = index != 'null' ? medicalHistory[list][index] : '';
    }
  
    function closeModal() {
      showModal = false;
      modalType = '';
      activeList = '';
      activeIndex = null;
      tempData = '';
    }
  
    function deleteItem(list, index) {
      medicalHistory[list].splice(index, 1);
    }
  </script>
  
  <section class="bg-white p-6 mt-6 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold mb-4">Medical History</h3>
  
    <!-- Utility function to render each section -->
    {#each ['pastDiagnoses', 'surgeries', 'allergies', 'medications'] as list}
      <div class="space-y-4">
        <h4 class="font-medium text-lg">{list.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</h4>
        <ul class="list-disc pl-5">
          {#each medicalHistory[list] as item, index}
            <li class="flex items-center justify-between ">
              <span>{item}</span>
              <div>
                <button class="text-blue-600 mr-2" on:click={() => openModal('edit', list, index)}>Edit</button>
                <button class="text-red-500" on:click={() => deleteItem(list, index)}>Delete</button>
              </div>
            </li>

          {/each}
        </ul>
        <button class="mt-2 text-blue-600" on:click={() => openModal('add', list)}>+ Add</button>
      </div>
    {/each}
  
    <!-- Family Medical History -->
    <div class="space-y-4">
      <h4 class="font-medium text-lg">Family Medical History:</h4>
      <p>{medicalHistory.familyHistory}</p>
      <button class="text-blue-600" on:click={() => openModal('edit', 'familyHistory')}>Edit</button>
    </div>
  
    <!-- Modal -->
    {#if showModal}
      <Modal title={modalType === 'add' ? 'Add Item' : 'Edit Item'} bind:open={showModal} outsideclose>
        <div class="space-y-4">
          <input type="text" bind:value={tempData} class="w-full p-2 border rounded" placeholder="Enter data..." />
          <div class="flex justify-end">
            <button class="text-gray-600 mr-2" on:click={closeModal}>Cancel</button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={confirmModal}>Confirm</button>
          </div>
        </div>
      </Modal>
    {/if}
  </section>
  