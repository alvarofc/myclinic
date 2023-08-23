<script>
    import { Button, Input, Checkbox, Modal } from "flowbite-svelte";
  
    let reminders = [
      { title: "Meeting", note: "With team at 3pm", completed: false },
      { title: "Dentist", note: "At 5pm", completed: false },
    ];
  
    let newTitle = "";
    let newNote = "";
    let showModal = false;
  
    function addReminder() {
      if (newTitle.trim() && newNote.trim()) {
        reminders = [...reminders, { title: newTitle, note: newNote, completed: false }];
        newTitle = "";
        newNote = "";
        showModal = false;
      }
    }
  
    function toggleCompletion(index) {
      reminders[index].completed = !reminders[index].completed;
    }
  </script>
  
  <div class="  h-full ">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Reminders</h2>
      <button class="btn btn-square btn-ghost" on:click={()=>showModal=true}>
        <svg class="w-4 h-4 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
          </svg>
    </button>
    </div>
  
    <div class="flex-1 overflow-y-auto  no-scrollbar" style="max-height: 200px;">
      <ul>
        {#if reminders.length === 0 || reminders.filter((reminder) => !reminder.completed).length === 0}
          <li class="text-gray-500 text-center">No reminders</li>
        {/if}
        {#each reminders as reminder, index}
        {#if !reminder.completed}
          <li class="flex items-center justify-between mb-2 border-b ">
            <div class="flex items-center">
              <Checkbox bind:checked={reminder.completed}  />
              <div class="ml-2">
                <p class="font-medium">{reminder.title}</p>
                <p class="text-sm text-gray-500">{reminder.note}</p>
              </div>
            </div>
            
          </li>
            {/if}
        {/each}
      </ul>
    </div>
  
    
      <Modal title="Add Reminder" bind:open={showModal} outsideclose>
        <Input bind:value={newTitle} placeholder="Title" class="mb-2" />
        <Input bind:value={newNote} placeholder="Note" class="mb-2" />
        <Button on:click={addReminder} color="blue">Add Reminder</Button>
      </Modal>
    
  </div>
  
  <style>
    /* Add any additional styles here */
  </style>
  