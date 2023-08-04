<script>
    import {Button, Select} from 'flowbite-svelte';
    let page = 1;
    let availableHours = [];
    let clinicName = "Alan's dental clinic";
    let specialties = [
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
            image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars',
            description: 'Jese drives the technical strategy of the flowbite platform and brand.'
        },
    ];
    let specialist = '';
    
   

</script>

{#if page == 1 &&  specialties.length > 1}
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to {clinicName}</h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Select a specialty or look at all our </p>
        </div> 
        <div class="w-2/4 items-center">
        <Select items={specialties}/>
        <Button color="blue" size="lg" class="float-right mt-8" on:click={() => {page=2}}>Continue</Button>
        </div>
    </div>
  </section>
{:else if (page == 2 && specialists.length > 1) || (specialties.length == 0 && specialists.length > 1)}
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Choose one of our excelent professionals</p>
            <div class="flex flex-row justify-around w-2/4">
                <Button class="grow" color="light" on:click={() => {page=1}}>Back</Button>
                <Button class="grow ml-8" color="blue">Anyone</Button>
            </div>
        </div> 
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {#each specialists as specialist}
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={specialist.image} alt={`${specialist.name} Avatar`}>
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">{specialist.name} </a>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">
                        {specialist.specialty.join(' | ')}
                    </span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                    <Button color="blue" size="lg" class="float-right sm:w-full sm:mb-4">Select</Button>
                </div>
            </div> 
            {/each}
    </div>
  </section>
  {/if}