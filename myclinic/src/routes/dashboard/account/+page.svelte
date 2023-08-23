<script>
  import { Modal,Tabs, TabItem, Toggle, Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, } from 'flowbite-svelte';

  let name = "John Doe";
  let email = "johndoe@example.com";
  let profilePicture = ""; // URL or path to the profile picture
  let currentPassword = "";
  let newPassword = "";
  let confirmPassword = "";
  let twoFactorAuth = false;
  let language = "English";
  let timezone = "UTC";
  let notifications = true;
  let availableDays = { monday: {
    open: true,
    start: "12:00",
    end: "13:00"
  },
  tuesday: {
    open: true,
    start: "12:00",
    end: "13:00"
  },
  wednesday: {
    open: true,
    start: "12:00",
    end: "13:00"
  },
  thursday: {
    open: true,
    start: "12:00",
    end: "13:00"
  },
  friday: {
    open: true,
    start: "12:00",
    end: "13:00"
  },
  saturday: {
    open: false,
    start: "12:00",
    end: "13:00"
  },
  sunday: {
    open: false,
    start: "12:00",
    end: "13:00"
  }
  }
  let profileModal = false;
  let securityModal = false;
  let preferencesModal = false;
  let availabilityModal = false;
  let breakTime = {
    monday : {
      break: true,
      start: "12:00",
      end: "13:00"
    },
    tuesday : {
      break: true,
      start: "12:00",
      end: "13:00"
    },
    wednesday : {
      break: true,
      start: "12:00",
      end: "13:00"
    },
    thursday : {
      break: true,
      start: "12:00",
      end: "13:00"
    },
    friday : {
      break: true,
      start: "12:00",
      end: "13:00"
    },
    saturday : {
      break: false,
      start: "12:00",
      end: "13:00"
    },
    sunday : {
      break: false,
      start: "12:00",
      end: "13:00"
    }
  

  }
    

  


  function saveProfile() {
    // Logic to save profile information
  }

  function changePassword() {
    // Logic to change password
  }

  function savePreferences() {
    // Logic to save user preferences
  }

  function saveAvailability() {
    // Logic to save availability settings
  }
</script>

<main class="p-4 max-w-2xl mx-auto">
  <h1 class="text-2xl font-semibold mb-6">Account Settings</h1>

  <!-- Profile Information -->
  <section class="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 class="text-xl font-medium mb-4">Profile Information</h2>
    <div class="space-y-4">
      <img src={profilePicture} alt="Profile Picture" class="w-24 h-24 rounded-full">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={() =>profileModal=true}>Edit Profile</button>
    </div>
  </section>

  <!-- Security -->
  <section class="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 class="text-xl font-medium mb-4">Security</h2>
    <div class="space-y-4">
      <p>Password: ********</p>
      <p>Two-Factor Authentication: {twoFactorAuth ? "Enabled" : "Disabled"}</p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={() => securityModal=true}>Edit Security</button>
    </div>
  </section>

  <!-- Preferences -->
  <section class="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 class="text-xl font-medium mb-4">Preferences</h2>
    <div class="space-y-4">
      <p>Language: {language}</p>
      <p>Timezone: {timezone}</p>
      <p>Notifications: {notifications ? "Enabled" : "Disabled"}</p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={() => preferencesModal=true}>Edit Preferences</button>
    </div>
  </section>

  <!-- Availability -->
  <section class="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 class="text-xl font-medium mb-4">Availability</h2>
    <Table hoverable={true}>

      <TableHead>
       
        <TableHeadCell>Monday</TableHeadCell>
        <TableHeadCell>Tuesday</TableHeadCell>
        <TableHeadCell>Wednesday</TableHeadCell>
        <TableHeadCell>Thursday</TableHeadCell>
        <TableHeadCell>Friday</TableHeadCell>
        <TableHeadCell>Saturday</TableHeadCell>
        <TableHeadCell>Sunday</TableHeadCell>
        
      </TableHead>
      <TableBody>
        {#each Object.keys(availableDays) as day}
          <TableBodyCell>
            {availableDays[day]['open'] ? `${availableDays[day]['start']} - ${availableDays[day]['end']}` : "Not available"}
          </TableBodyCell>
        {/each}
      </TableBody>
      
      
    </Table>
    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4" on:click={() => availabilityModal=true}>Edit Availability</button>
  </section>

  <!-- Modals -->
  <!-- Profile Modal -->
  <Modal bind:open={profileModal} outsideclose id="profileModal" title="Edit Profile">
    <div class="space-y-4">
      <!-- Add the content for editing profile here -->
      <!-- Example: Name input -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" bind:value={name} class="mt-1 p-2 w-full border rounded-md">
      </div>
      <!-- Continue with other profile fields... -->
      <button on:click={saveProfile} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
    </div>
  </Modal>

  <!-- Security Modal -->
  <Modal bind:open={securityModal} outsideclose id="securityModal" title="Edit Security">
    <div class="space-y-4">
      <!-- Add the content for editing security settings here -->
      <!-- Example: Current Password input -->
      <div>
        <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password</label>
        <input type="password" id="currentPassword" bind:value={currentPassword} class="mt-1 p-2 w-full border rounded-md">
      </div>
      <!-- Continue with other security fields... -->
      <button on:click={changePassword} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Change Password</button>
    </div>
  </Modal>

  <!-- Preferences Modal -->
  <Modal bind:open={preferencesModal} outsideclose id="preferencesModal" title="Edit Preferences">
    <div class="space-y-4">
      <!-- Add the content for editing preferences here -->
      <!-- Example: Language dropdown -->
      <div>
        <label for="language" class="block text-sm font-medium text-gray-700">Language</label>
        <select id="language" bind:value={language} class="mt-1 p-2 w-full border rounded-md">
          <option>English</option>
          <!-- Add other languages as options... -->
        </select>
      </div>
      <!-- Continue with other preferences fields... -->
      <button on:click={savePreferences} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Preferences</button>
    </div>
  </Modal>

  <!-- Availability Modal -->
  <Modal bind:open={availabilityModal} outsideclose id="availabilityModal" title="Edit Availability"> 
    
        <Tabs style="underline"> 
          {#each Object.keys(availableDays) as day}
            <TabItem value={day}> 
                <div slot="title" class="flex items-center gap-2 {availableDays[day].open ? 'text-green-500' : 'text-red-500'}"> 
                    {day.toUpperCase()} 
                </div> 
                <div class="space-y-4"> 
                <div class="flex flex-col space-y-4"> <!-- This wrapper ensures the sections are stacked vertically -->
                    <!-- Opening hours selector and open/close switch -->
                    <div class=""> 
                      
                        <Toggle bind:checked={availableDays[day].open} >{availableDays[day].open ? "Open" : "Closed"}</Toggle> 
                        <p class="pt-4">Set opening hours: </p>
                        {#if availableDays.monday} 
                        <div class="flex items-center gap-4">
                                
                                <input type="time" id="mondayStart" bind:value={availableDays[day].start} class="mt-1 p-2 w-full border rounded-md"> 
                                
                                <div class="divider lg:divider-horizontal">TO</div> 
                                    <input type="time" id="mondayEnd" bind:value={availableDays[day].end} class="mt-1 p-2 w-full border rounded-md"> 
                                
                        </div> 
                        {/if} 
                    </div>
                    <!-- Break time logic -->
                    {#if availableDays[day].open}
                      <Toggle bind:checked={breakTime[day].break}>Break</Toggle> 
                      <p class="pt-4">Set break time: </p>
                    <div class="flex items-center gap-4">
                      
                        {#if   breakTime[day].break} 
                        
                            <input type="time" id="mondayBreakStart" bind:value={breakTime[day].start} class="mt-1 p-2 w-full border rounded-md"> 
                            <div class="divider lg:divider-horizontal">TO</div>  
                            <input type="time" id="mondayBreakEnd" bind:value={breakTime[day].end} class="mt-1 p-2 w-full border rounded-md"> 
                        {/if} 
                      </div>
                      {/if}
                    
                </div>
            </TabItem> 
           {/each}

        </Tabs> 
        <svelte:fragment slot="footer"> 
            <Button on:click={() => alert('Handle "success"')} color="blue">Save</Button> 
            <Button on:click={() => availabilityModal = false} color="gray">Cancel</Button>
        </svelte:fragment> 
</Modal>

</main>
