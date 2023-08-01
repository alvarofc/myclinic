<script>
  import { Card, Button } from "flowbite-svelte";
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
          {#each requests as appointment, index}
            <div class="border rounded-lg p-4 flex flex-col justify-between">
              <div class="mb-2">
                <h2 class="text-lg font-semibold">{appointment.patient}</h2>
                <p>{appointment.request}</p>
                <p class="text-gray-500">{appointment.date} at {appointment.time}</p>
              </div>
              <div class="flex justify-around pt-3">
                <Button color='green' size="sm" outline={true} on:click={() => acceptAppointment(index)} ><svg class="w-5 h-5 "  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg></Button>
                <Button color='red' size="sm" outline={true} on:click={() => declineAppointment(index)}><svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg></Button>
                <Button color='yellow' size="sm" outline={true} on:click={() => rescheduleAppointment(index)}><svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
                </svg></Button>
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