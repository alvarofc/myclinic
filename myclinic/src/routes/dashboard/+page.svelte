<script>
  import { Card, Button, ButtonGroup } from "flowbite-svelte";
  let requests  = [
    {
      patient: "Neil Sims",
      date: "2021-05-12",
      time: "08:00",
      request: "cleaning"
    },
    {
      patient: "Neil Sims",
      date: "2021-05-12",
      time: "08:00",
      request: "cleaning"
    },
    {
      patient: "Neil Sims",
      date: "2021-05-12",
      time: "08:00",
      request: "cleaning"
    },
    {
      patient: "Neil Sims",
      date: "2021-05-12",
      time: "08:00",
      request: "cleaning"
    },
    {
      patient: "Neil Sims",
      date: "2021-05-12",
      time: "08:00",
      request: "cleaning"
    },
    {
      patient: "Neil Sims",
      date: "2021-05-12",
      time: "08:00",
      request: "cleaning"
    },
    {
      patient: "Neil Sims",
      date: "2021-05-12",
      time: "08:00",
      request: "cleaning"
    },
    {
      patient: "Neil Sims",
      date: "2021-05-12",
      time: "08:00",
      request: "cleaning"
    },
  ]
  function acceptAppointment(index) {
    // logic to accept appointment
  }

  function declineAppointment(index) {
    // logic to decline appointment
  }

  function rescheduleAppointment(index) {
    // logic to reschedule appointment
  }
</script>
<body>
    <script src="https://unpkg.com/flowbite@1.3.2/dist/flowbite.js"></script>
    
</body>
<main class="p-4 md:ml-64 h-auto pt-20">
  <h1 class="text-lg font-semibold mb-4">Your day</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      
      
      <Card >
        <p>Appointments today</p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">5</h5>
      </Card>
      
      <Card >
        <svg class="w-6 h-6 text-geen-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
        <p>Requests</p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2</h5>
      </Card>
      <Card >
        <div class="justify-left space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <svg class="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/>
          </svg>
          <p>Next appointments</p>
        </div>
      
        
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2</h5>
      </Card>
    
    </div>
    
    
   
    <div class="  mb-4">
      <h1 class="text-lg font-semibold mb-4">Requested Appointments</h1>
      
      {#if requests.length === 0}
        <p>No appointments found.</p>
      {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
          {#each requests as appointment, index}
            <div class="border rounded-lg shadow-md bg-white p-4 flex flex-col justify-between">
              <div class="mb-2">
                <h2 class="text-lg font-semibold">{appointment.patient}</h2>
                <p>{appointment.request}</p>
                <p class="text-gray-500">{appointment.date} at {appointment.time}</p>
              </div>
              <div class="flex pt-3">
                <ButtonGroup size="xs">
                  <Button size="xs">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-primary-500 dark:text-primary-400"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    Profile
                  </Button>
                  <Button size="xs">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-primary-500 dark:text-primary-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>
                    Settings
                  </Button>
                  <Button size="xs">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-primary-500 dark:text-primary-400"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>
                    Messages
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          {/each}
          </div>
      {/if}
    </div>
   
    
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
      ></div>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
      ></div>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
      ></div>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
      ></div>
    </div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
    ></div>
    <div class="grid grid-cols-2 gap-4">
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
      ></div>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
      ></div>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
      ></div>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
      ></div>
    </div>
  </main>