<script>
	import { Button } from "flowbite-svelte";

    export let appointments = [ 
           ];
  </script>
  
  <div class="bg-white w-2/6 mt-16 rounded-lg ml-72 h-[calc(100vh-70px)] shadow-md overflow-auto no-scrollbar">
    <h2 class="text-lg font-semibold mb-4">Appointments</h2>
    
    {#if appointments.length === 0}
      <p class="text-gray-600">No appointments for this day.</p>
    {:else}
      <ul>
        {#each appointments as appointment, index}
        <div class="divider"></div>
        <Button class="w-full" on:click={() => console.log("clicked")}>Accept
          <li class="relative p-4 hover:bg-gray-100 transition">
            <div class="flex items-start">
              
              <div class="ml-4">
                <p class="text-base font-semibold">{appointment.patientName}</p>
                <p class="text-sm text-gray-600">{appointment.treatment}</p>
                <p class="text-xs text-gray-600">{appointment.day} - {appointment.time}</p>
              </div>
            </div>
           
          </li>
        </Button>
        {/each}
      </ul>
    {/if}
  </div>