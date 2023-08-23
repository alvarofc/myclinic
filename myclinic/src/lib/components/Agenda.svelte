<script lang="ts">
	import { Button } from "flowbite-svelte";
    import {selectedDate} from '$lib/store'
    import {onMount} from 'svelte';
    import {
        format,
        isEqual
        } from "date-fns";


    export let marginLeft: string = "ml-72";
    export let marginTop: string = "mt-16";
    export let width: string = "w-2/6";
    export let height: string = "h-[calc(100vh-70px)]";
    export let date = $selectedDate
    export let appointments = [ 
    {   
        patientName: "Neil Sims",
        treatment: "Cleaning",
        day: "2021-05-12",
        time: "08:30",
        staff: "Dr. John Doe",
        finish: "09:15",
        accepted: true,
    },
    {   
        patientName: "Adam Smith",
        treatment: "Cleaning",
        day: "2021-05-12",
        time: "10:30",
        staff: "Dr. John Doe",
        finish: "11:15",
        accepted: false,
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
    setInterval(() => {
        currentDate = new Date();
        currentHour = currentDate.getHours();
        currentMinute = currentDate.getMinutes();
    }, 1000 * 60);

    let container: HTMLDivElement;
    onMount(() => {
        const centerOffset = container.clientHeight / 2;
        container.scrollTop = (currentHour * 64) + (currentMinute * (64 / 60)) - centerOffset;
    });
    
  </script>
  <div  class="flex flex-col bg-white {width} {marginTop} rounded-lg {marginLeft} {height} shadow-md overflow-hidden">
  
    <h2 class="text-lg font-semibold mb-4 pl-4 pt-5 sticky top-0 bg-white z-20">
      Appointments for {format(date, "dd-MM-yyyy")}
    </h2>
  
    <div bind:this={container} class="relative flex-1 overflow-y-auto  no-scrollbar">
      <div class="relative z-0">
        {#each Array.from({ length: 24 }) as _, i}
          <div class="border-b h-16 pl-4">
            {i}:00
          </div>
        {/each}
  
        
          {#each appointments as appointment}
            <div  
              class="absolute {appointment.accepted? "bg-blue-500": "bg-blue-300"} rounded-lg text-white  pl-2 ml-10 w-3/4" 
              style="top: {(timeToMinutes(appointment.time)) * 64 / 60}px; height: {(timeToMinutes(appointment.finish) - timeToMinutes(appointment.time)) * 64 / 60}px;"
            >
              {appointment.patientName}
            </div>
          {/each}
       
      </div>
  
      {#if isEqual(currentDate.getDate(), $selectedDate.getDate())}
        <div class="absolute bg-red-500 w-full h-0.5 left-0 z-10" 
          style="top: {((currentHour) * 64) + (currentMinute * (64 /60))}px;"
        ></div>
      {/if}
    </div>
  </div>
  