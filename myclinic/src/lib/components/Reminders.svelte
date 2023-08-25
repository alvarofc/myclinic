<script>
    import { Button, Input, Checkbox, Modal } from "flowbite-svelte";
  
    let reminders = [
      { title: "Meeting", note: "With team at 3pm", completed: false },
      { title: "Dentist", note: "At 5pm", completed: false },
      { title: "Shopping", note: "Buy groceries", completed: false },
    ];
  
    let newTitle = "";
    let newNote = "-";
    let showModal = false;
    export let remindersModal = false;
  
    function addReminder() {
      if (newTitle.trim() && newNote.trim()) {
        reminders = [...reminders, { title: newTitle, note: newNote, completed: false }];
        newTitle = "";
        newNote = "-";
        showModal = false;
      }
    }
  
    function toggleCompletion(index) {
      reminders[index].completed = !reminders[index].completed;
    }
  </script>
  
 
    <div class="flex-1 overflow-y-auto  no-scrollbar h-3/4" style="">
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
 
    
      <Modal title="Add Reminder" bind:open={remindersModal} outsideclose>
        <Input bind:value={newTitle} placeholder="Title" class="mb-2" />
        <Input bind:value={newNote} placeholder="Note" class="mb-2" />
        <Button on:click={addReminder} color="blue">Add Reminder</Button>
      </Modal>
    
  
  
  <style>
    /* Add any additional styles here */
  </style>
  