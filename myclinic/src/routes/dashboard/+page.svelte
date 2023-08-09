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
        <div class="flex flex-wrap">
          {#each requests as appointment, index}
            <div class="border rounded-lg shadow-md bg-white p-5 flex flex-col  mx-auto my-2">
              <div class="mb-4">
                <h2 class="text-lg font-semibold">{appointment.patient}</h2>
                <p>{appointment.request}</p>
                <p class="text-gray-500">Dr. whoever</p>
                <p class="text-gray-500">{appointment.date} at {appointment.time}</p>
              </div>
              <div class="flex justify-between mt-auto">
                <button class="btn btn-primary btn-sm" on:click={()=>acceptAppointment(index)}>
                  Accept
                </button>
                <button class="btn btn-danger btn-sm ml-3" on:click={()=>declineAppointment(index)}>
                  Decline
                </button>
                <button class="btn btn-info btn-sm ml-3" on:click={null}>
                  Schedule
                </button>
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