<script lang="ts">
	import { Button } from "flowbite-svelte";
    import {selectedDate} from '$lib/store'
    import {
        format
        } from "date-fns";

    let newSelectedDate: Date;
    let titleDate: string;
    selectedDate.subscribe((value) => {
      newSelectedDate = value;
      titleDate = format(newSelectedDate, "dd-MM-yyyy");
	});

    
     


    export let appointments = [ 
    {   
        patientName: "Neil Sims",
        treatment: "Cleaning",
        day: "2021-05-12",
        time: "08:00",
        staff: "Dr. John Doe",
    },
    {
        patientName: "Neil Sims",
        treatment: "Cleaning",
        day: "2021-05-12",
        time: "08:00",
        staff: "Dr. John Doe",
    },
           ];
  </script>
  
  <div class="bg-white w-2/6 mt-16 rounded-lg ml-72 h-[calc(100vh-70px)] shadow-md overflow-auto no-scrollbar">
    <h2 class="text-lg font-semibold mb-4 pl-4 pt-5">Appointments for {titleDate}</h2>
    
    {#if appointments.length === 0}
      <p class="text-gray-600">No appointments for this day.</p>
    {:else}
      <ul>
        {#each appointments as appointment, index}
        <div class="divider"></div>
        <Button class="w-full hover:bg-gray-100" on:click={() => console.log("clicked")}>
          <li class="">
            <div class="flex items-start">
              
              <div class="ml-4 justify-start">
                <p class="font-semibold text-black">{appointment.patientName}</p>
                <p class="text-sm text-gray-600">{appointment.treatment} with {appointment.staff}</p>
                <p class="text-xs text-gray-600">{appointment.day} - {appointment.time}</p>
              </div>
            </div>
           
          </li>
        </Button>
        {/each}
      </ul>
    {/if}
  </div>