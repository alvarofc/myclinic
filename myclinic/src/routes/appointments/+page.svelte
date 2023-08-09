<script lang="ts">
    import {Button, Select} from 'flowbite-svelte';
    import TimeSlot from '$lib/components/TimeSlot.svelte';
    import { supabase } from '$lib/supabaseClient';
    import Calendar from '$lib/components/Calendar.svelte';
    import {selectedDate} from '$lib/store'
    import LandingNav from '$lib/components/LandingNav.svelte'

  
    let specialty = '';
    let page = 1;
    let clinicName = 'Clinic Name';
    let staff = '';
  
    let specialties = [
        {name: 'None', value: ''},
        {name: 'Dentist', value: "dentist"},
        {name: 'Pediatrician', value: "pediatrician"},
        {name: 'Cardiologist', value: "cardiologist"},
        {name: 'Dermatologist', value: "dermatologist"},
        {name: 'Gynecologist', value: "gynecologist"},
    ];
    let specialists = [
        {
            id: 1,
            name: 'Bonnie Green',
            specialty: ['Dentist', 'Pediatrician'],
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
            description: 'Bonnie drives the technical strategy of the flowbite platform and brand.'
        },
        {
            id: 2,
            name: 'Jese Leos',
            specialty: ['Dentist', 'Pediatrician'],
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
            description: 'Jese drives the technical strategy of the flowbite platform and brand.'
        },
        {
            id: 3,
            name: 'Jese Leos',
            specialty: ['Dentist', 'Pediatrician'],
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
            description: 'Jese drives the technical strategy of the flowbite platform and brand.'
        },
        {
            id: 4,
            name: 'Jese Leos',
            specialty: ['Dentist', 'Pediatrician'],
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
            description: 'Jese drives the technical strategy of the flowbite platform and brand.'
        },
        {
            id: 5,
            name: 'Jese Leos',
            specialty: ['Dentist', 'Pediatrician'],
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
            description: 'Jese drives the technical strategy of the flowbite platform and brand.'
        },
        {
            id: 6,
            name: 'Jese Leos',
            specialty: ['Dentist', 'Pediatrician'],
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
            description: 'Jese drives the technical strategy of the flowbite platform and brand.'
        },
        {
            id: 7,
            name: 'Jese Leos',
            specialty: ['Dentist', 'Pediatrician'],
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
            description: 'Jese drives the technical strategy of the flowbite platform and brand.'
        },
        {
            id: 8,
            name: 'Jese Leos',
            specialty: ['Dentist', 'Pediatrician'],
            description: 'Jese drives the technical strategy of the flowbite platform and brand.'
        },
    ];
    
   

</script>
<LandingNav signup={false}/>
{#if page == 1 &&  specialties.length > 1}
<section class="bg-white dark:bg-gray-900 h-screen flex items-center justify-center"> 
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col items-center"> 
        <div class="text-center mb-8 lg:mb-16"> 
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to {clinicName}</h2> 
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Select a specialty</p> 
        </div>  
        <div class="w-full flex flex-col items-center content-start md:-mt-10"> 
            <Select items={specialties} bind:value={specialty} class="w-full" /> 
            <Button color={specialty== '' ? 'light' : 'blue'} size="lg" class="mt-8 ml-3 grow" on:click={() => {page=2}}>{specialty== '' ? 'Skip' : 'Continue'}</Button> 
        </div>     
    </div> 
</section>
{:else if (page == 2 && specialists.length > 1) || (specialties.length == 0 && specialists.length > 1)}
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Choose one of our excelent professionals</p>
            <div class="flex flex flex-row justify-center items-center w-2/4 mx-auto">
                <Button class="grow" color="light" on:click={() => {page=1}}>Back</Button>
                <Button class="grow ml-8" color="blue" on:click={() => {page=3}}>Anyone</Button>
            </div>
        </div> 
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            {#each specialists as specialist}
            <div class="card p-4  border rounded shadow hover:shadow-lg transition cursos-pointer">
                <img class="w-30 h-30 rounded-lg mx-auto" src={specialist.image} alt={`${specialist.name} Avatar`}>
                
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {specialist.name}
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">
                        {specialist.specialty.join(' | ')}
                    </span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                    <Button color="blue" size="lg" class="float-right sm:w-full sm:mb-4" on:click={()=>{staff=specialist.id;  page=3}}>Select</Button>
                </div>
            </div> 
            {/each}
    </div>
  </section>
    {:else if page == 3}
    <section class="flex justify-between items-start "> 
        <div class="w-2/4 mr-8 h-2/4"> 
            <Calendar appointment={false}/> 
        </div> 
        <div class="slots-container p-4  mt-16 border rounded-lg shadow w-2/4 bg-white  md:mr-6"> 
            <!--Time slots--> 
            <div> 
                <label for="time" class="block text-gray-700 text-sm font-bold mb-2">Available time slots</label> 
                <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4">  <!-- Adjusted grid layout here -->
                    {#each ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"] as hour} 
                        {#each ["00", "30"] as minute} 
                            <div class="rounded-md shadow-sm mb-2"> 
                                <button class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"> 
                                    {hour}:{minute} 
                                </button> 
                            </div> 
                        {/each} 
                    {/each} 
                </div> 
            </div> 
        </div> 
    </section>
    
    
  {/if}

  
  
  
  
  <style>
    /* Additional styles if needed */
  </style>
  