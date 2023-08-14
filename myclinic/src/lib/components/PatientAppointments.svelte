<script lang="ts">
    import { Modal } from 'flowbite-svelte';
  
    export let appointments = {
      upcoming: [] as any[],
      past: [] as any[]
    };
  
    let showModal = false;
    let modalType = ''; // 'add' or 'edit'
    let activeCategory = ''; // 'upcoming' or 'past'
    let activeIndex = null;
    let tempAppointment = {
      date: '',
      time: '',
      provider: '',
      note: ''
    };
  
    function openModal(type, category, index = null) {
      modalType = type;
      activeCategory = category;
      activeIndex = index;
      tempAppointment = index !== null ? { ...appointments[category][index] } : {
        date: '',
        time: '',
        provider: '',
        note: ''
      };
      showModal = true;
    }
  
    function confirmModal() {
      if (modalType === 'add') {
        appointments[activeCategory].push(tempAppointment);
      } else if (modalType === 'edit') {
        appointments[activeCategory][activeIndex] = tempAppointment;
      }
      closeModal();
    }
  
    function closeModal() {
      showModal = false;
      modalType = '';
      activeCategory = '';
      activeIndex = null;
      tempAppointment = {
        date: '',
        time: '',
        provider: '',
        note: ''
      };
    }
  
    function deleteAppointment(category, index) {
      appointments[category].splice(index, 1);
    }
  </script>
  
  <section class="bg-white p-6 mt-6 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold mb-4">Appointments</h3>
  
    <!-- Upcoming Appointments -->
    <div class="space-y-4">
      <h4 class="font-medium text-lg">Upcoming Appointments:</h4>
      <ul>
        {#each appointments.upcoming as appointment, index}
          <li class="border p-4 rounded mb-2">
            <div class="flex justify-between items-center">
              <span class="font-medium">{appointment.date} at {appointment.time} with {appointment.provider}</span>
              <div>
                <button class="text-blue-600 mr-2" on:click={() => openModal('edit', 'upcoming', index)}>Edit</button>
                <button class="text-red-500" on:click={() => deleteAppointment('upcoming', index)}>Delete</button>
              </div>
            </div>
            <p class="mt-2 text-gray-600">{appointment.note}</p>
          </li>
        {/each}
      </ul>
      <button class="mt-2 text-blue-600" on:click={() => openModal('add', 'upcoming')}>+ Add Appointment</button>
    </div>
  
    <!-- Past Appointments -->
    <div class="space-y-4 mt-6">
      <h4 class="font-medium text-lg">Past Appointments:</h4>
      <ul>
        {#each appointments.past as appointment, index}
          <li class="p-4 rounded mb-2 border-b">
            <div class="flex justify-between items-center">
              <span class="font-medium">{appointment.date} at {appointment.time} with {appointment.provider}</span>
              <div>
                <button class="text-blue-600 mr-2" on:click={() => openModal('edit', 'past', index)}>Edit</button>
                <button class="text-red-500" on:click={() => deleteAppointment('past', index)}>Delete</button>
              </div>
            </div>
            <p class="mt-2 text-gray-600">{appointment.note}</p>
          </li>
        {/each}
      </ul>
      <button class="mt-2 text-blue-600" on:click={() => openModal('add', 'past')}>+ Add Past Appointment</button>
    </div>
  
    <!-- Modal -->
    {#if showModal}
      <Modal title={modalType === 'add' ? 'Add Appointment' : 'Edit Appointment'} bind:open={showModal} outsideclose>
        <div class="space-y-4">
          <input type="date" bind:value={tempAppointment.date} class="w-full p-2 border rounded" placeholder="Date" />
          <input type="time" bind:value={tempAppointment.time} class="w-full p-2 border rounded" placeholder="Time" />
          <input type="text" bind:value={tempAppointment.provider} class="w-full p-2 border rounded" placeholder="Provider" />
          <textarea bind:value={tempAppointment.note} class="w-full p-2 border rounded" placeholder="Note"></textarea>
          <div class="flex justify-end">
            <button class="text-gray-600 mr-2" on:click={closeModal}>Cancel</button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={confirmModal}>Confirm</button>
          </div>
        </div>
    </Modal>
  {/if}
</section>

  