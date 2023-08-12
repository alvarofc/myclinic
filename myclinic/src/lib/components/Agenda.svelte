<script lang="ts">
	import { Button } from "flowbite-svelte";
    import {selectedDate} from '$lib/store'
    
    import {
        format
        } from "date-fns";


    export let appointments = [ 
    {   
        patientName: "Neil Sims",
        treatment: "Cleaning",
        day: "2021-05-12",
        time: "08:30",
        staff: "Dr. John Doe",
        finish: "09:15",
    },
    
           ];

    function timeToMinutes(time: string) {
        let hours = parseInt(time.split(":")[0]);
        let minutes = parseInt(time.split(":")[1]);
        return hours * 60 + minutes;
    }
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentPosition = currentHour * 60 + currentMinute;
    console.log(currentDate)
  </script>
  
  <div class="relative bg-white w-2/6 mt-16 rounded-lg ml-72 h-[calc(100vh-70px)] shadow-md overflow-y-auto  no-scrollbar">
    <h2 class="text-lg font-semibold mb-4 pl-4 pt-5">Appointments for {format($selectedDate, "dd-MM-yyyy")}</h2>
    
    {#if appointments.length === 0}
      <p class="text-gray-600">No appointments for this day.</p>
    {:else}
      <div class="relative z-0">
      {#each Array.from({ length: 24 }) as _, i}
      <div class="border-b h-16 pl-4">
        {i}:00
    
      </div>
      {/each}
      <div class="border-b h-16">
        {#each appointments as appointment}
          <div 
            class="absolute bg-blue-500 rounded-lg text-white p-1 pl-2  ml-9 w-4/5"
            style="top: {(timeToMinutes(appointment.time)) * 64 / 60}px; height: {(timeToMinutes(appointment.finish) - timeToMinutes(appointment.time)) * 64 / 60}px;"

          >
            {appointment.patientName}

          </div>
        {/each}
      </div>
    </div>  
    {/if}
  <div class="absolute bg-red-500 w-full h-0.5 left-0 z-10"
    style="top: {((currentHour+1) * 64) + (currentMinute * (64 /60))}px;"
  ></div>
  </div>