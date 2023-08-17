<script>
  import { Modal } from 'flowbite-svelte';

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
  let availableDays = { monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: false, sunday: false };
  let availableHours = { start: "09:00", end: "17:00" };
  let profileModal = false;
  let securityModal = false;
  let preferencesModal = false;
  let availabilityModal = false;


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
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <img src={profilePicture} alt="Profile Picture" class="w-24 h-24 rounded-full">
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
    <div class="space-y-4">
      <p>Days: {availableDays.monday}</p>
      <p>Hours: {availableHours.start} - {availableHours.end}</p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" on:click={() => availabilityModal=true}>Edit Availability</button>
    </div>
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
    <div class="space-y-4">
      <!-- Days checkboxes -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Available Days</label>
        <!-- Example for Monday, repeat for other days -->
        <div>
          <input type="checkbox" id="monday" bind:checked={availableDays.monday}>
          <label for="monday" class="ml-2">Monday</label>
        </div>
        <div>
          <input type="checkbox" id="tuesday" bind:checked={availableDays.tuesday}>
          <label for="tuesday" class="ml-2">Tuesday</label>
        </div>
        <div>
          <input type="checkbox" id="wednesday" bind:checked={availableDays.wednesday}>
          <label for="wednesday" class="ml-2">Wednesday</label>
        </div>
        <div> 
          <input type="checkbox" id="thursday" bind:checked={availableDays.thursday}>
          <label for="thursday" class="ml-2">Thursday</label>
        </div>
        <div>
          <input type="checkbox" id="friday" bind:checked={availableDays.friday}>
          <label for="friday" class="ml-2">Friday</label>
        </div>
        <div>
          <input type="checkbox" id="saturday" bind:checked={availableDays.saturday}>
          <label for="saturday" class="ml-2">Saturday</label>
        </div>
        <div>
          <input type="checkbox" id="sunday" bind:checked={availableDays.sunday}>
          <label for="sunday" class="ml-2">Sunday</label>
        </div>
        <!-- Repeat for other days... -->
      </div>
      <!-- Hours input -->
      <div>
        <label for="startHour" class="block text-sm font-medium text-gray-700">Start Hour</label>
        <input type="time" id="startHour" bind:value={availableHours.start} class="mt-1 p-2 w-full border rounded-md">
      </div>
      <div>
        <label for="endHour" class="block text-sm font-medium text-gray-700">End Hour</label>
        <input type="time" id="endHour" bind:value={availableHours.end} class="mt-1 p-2 w-full border rounded-md">
      </div>
      <button on:click={saveAvailability} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Availability</button>
    </div>
  </Modal>
</main>
