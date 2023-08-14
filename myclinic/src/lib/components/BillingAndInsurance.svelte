<script>
    import { Modal } from 'flowbite-svelte';
  
    export let billingRecords = [];
    export let insuranceDetails = {
      provider: '',
      policyNumber: '',
      coverageDetails: ''
    };
  
    let showModal = false;
    let modalType = ''; // 'billing' or 'insurance'
    let activeIndex = null;
    let tempBillingRecord = {
      date: '',
      amount: '',
      description: '',
      status: 'unpaid'
    };
    let tempInsuranceDetails = { ...insuranceDetails };
  
    function openModal(type, index = null) {
      modalType = type;
      activeIndex = index;
      if (type === 'billing') {
        tempBillingRecord = index !== null ? { ...billingRecords[index] } : {
          date: '',
          amount: '',
          description: '',
          status: 'unpaid'
        };
      } else if (type === 'insurance') {
        tempInsuranceDetails = { ...insuranceDetails };
      }
      showModal = true;
    }
  
    function confirmModal() {
      if (modalType === 'billing') {
        if (activeIndex !== null) {
          billingRecords[activeIndex] = tempBillingRecord;
        } else {
          billingRecords.push(tempBillingRecord);
        }
      } else if (modalType === 'insurance') {
        insuranceDetails = tempInsuranceDetails;
      }
      closeModal();
    }
  
    function closeModal() {
      showModal = false;
      modalType = '';
      activeIndex = null;
      tempBillingRecord = {
        date: '',
        amount: '',
        description: '',
        status: 'unpaid'
      };
      tempInsuranceDetails = { ...insuranceDetails };
    }
  
    function deleteBillingRecord(index) {
      billingRecords.splice(index, 1);
    }
  </script>
  
  <section class="bg-white p-6 mt-6 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold mb-4">Billing and Insurance</h3>
  
    <!-- Billing Records -->
    <div class="space-y-4">
      <h4 class="font-medium text-lg">Billing Records:</h4>
      <ul>
        {#each billingRecords as record, index}
          <li class="border p-4 rounded mb-2">
            <div class="flex justify-between items-center">
              <span class="font-medium">{record.date}: ${record.amount} - {record.description} ({record.status})</span>
              <div>
                <button class="text-blue-600 mr-2" on:click={() => openModal('billing', index)}>Edit</button>
                <button class="text-red-500" on:click={() => deleteBillingRecord(index)}>Delete</button>
              </div>
            </div>
          </li>
        {/each}
      </ul>
      <button class="mt-2 text-blue-600" on:click={() => openModal('billing')}>+ Add Billing Record</button>
    </div>
  
    <!-- Insurance Details -->
    <div class="space-y-4 mt-6">
      <h4 class="font-medium text-lg">Insurance Details:</h4>
      <p>Provider: {insuranceDetails.provider}</p>
      <p>Policy Number: {insuranceDetails.policyNumber}</p>
      <p>Coverage Details: {insuranceDetails.coverageDetails}</p>
      <button class="mt-2 text-blue-600" on:click={() => openModal('insurance')}>Edit Insurance Details</button>
    </div>
  
    <!-- Modal for Billing -->
    {#if showModal && modalType === 'billing'}
      <Modal title="Billing Record" bind:open={showModal} outsideclose>
        <div class="space-y-4">
          <input type="date" bind:value={tempBillingRecord.date} class="w-full p-2 border rounded" placeholder="Date" />
          <input type="text" bind:value={tempBillingRecord.amount} class="w-full p-2 border rounded" placeholder="Amount" />
          <input type="text" bind:value={tempBillingRecord.description} class="w-full p-2 border rounded" placeholder="Description" />
          <select bind:value={tempBillingRecord.status} class="w-full p-2 border rounded">
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
          </select>
          <div class="flex justify-end">
            <button class="text-gray-600 mr-2" on:click={closeModal}>Cancel</button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={confirmModal}>Confirm</button>
          </div>
        </div>
      </Modal>
    {/if}
  
    <!-- Modal for Insurance -->
    {#if showModal && modalType === 'insurance'}
      <Modal title="Insurance Details" bind:open={showModal} outsideclose>
        <div class="space-y-4">
            <input type="text" bind:value={tempInsuranceDetails.provider} class="w-full p-2 border rounded" placeholder="Provider" />
            <input type="text" bind:value={tempInsuranceDetails.policyNumber} class="w-full p-2 border rounded" placeholder="Policy Number" />
            <textarea bind:value={tempInsuranceDetails.coverageDetails} class="w-full p-2 border rounded" placeholder="Coverage Details"></textarea>
            <div class="flex justify-end">
              <button class="text-gray-600 mr-2" on:click={closeModal}>Cancel</button>
              <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={confirmModal}>Confirm</button>
            </div>
          </div>
        </Modal>
      {/if}
    </section>
      