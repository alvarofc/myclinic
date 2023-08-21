<script>
    import { Modal } from 'flowbite-svelte';

    let clinicName = '';
    let clinicUsername = '';
    let openingDays = '';
    let openingHours = '';
    let clinicLogo;
    let clinicAdmins = [];
    let contactInfo = '';
    let address = '';
    let website = '';

    let showModal = false;
    let modalContent = '';
</script>

<main class="p-4 max-w-2xl mx-auto">
    <div class="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 class="text-2xl font-bold mb-6">Clinic Settings</h1>

        <!-- Clinic Name -->
        <div class="mb-4">
            <h3 class="font-semibold text-lg">Clinic Name</h3>
            <p>{clinicName}</p>
            <button class="text-blue-500" on:click={() => { showModal = true; modalContent = 'clinicName'; }}>Edit</button>
        </div>

        <!-- Clinic Username -->
        <div class="mb-4">
            <h3 class="font-semibold text-lg">Clinic Username</h3>
            <p>{clinicUsername}</p>
            <button class="text-blue-500" on:click={() => { showModal = true; modalContent = 'clinicUsername'; }}>Edit</button>
        </div>

        <!-- Opening Days and Hours -->
        <div class="mb-4">
            <h3 class="font-semibold text-lg">Opening Days and Hours</h3>
            <p>{openingDays}, {openingHours}</p>
            <button class="text-blue-500" on:click={() => { showModal = true; modalContent = 'opening'; }}>Edit</button>
        </div>

        <!-- Clinic Logo -->
        <div class="mb-4">
            <h3 class="font-semibold text-lg">Clinic Logo</h3>
            {#if clinicLogo}
                <img src={URL.createObjectURL(clinicLogo[0])} alt="Clinic Logo" class="mt-2 h-24 w-24 object-cover">
            {/if}
            <button class="text-blue-500" on:click={() => { showModal = true; modalContent = 'logo'; }}>Edit</button>
        </div>

        <!-- Clinic Admins -->
        <div class="mb-4">
            <h3 class="font-semibold text-lg">Clinic Admins</h3>
            <ul>
                {#each clinicAdmins as admin}
                    <li>{admin}</li>
                {/each}
            </ul>
            <button class="text-blue-500" on:click={() => { showModal = true; modalContent = 'admins'; }}>Edit</button>
        </div>

        <!-- Contact Information -->
        <div class="mb-4">
            <h3 class="font-semibold text-lg">Contact Information</h3>
            <p>{contactInfo}</p>
            <button class="text-blue-500" on:click={() => { showModal = true; modalContent = 'contact'; }}>Edit</button>
        </div>

        <!-- Address -->
        <div class="mb-4">
            <h3 class="font-semibold text-lg">Address</h3>
            <p>{address}</p>
            <button class="text-blue-500" on:click={() => { showModal = true; modalContent = 'address'; }}>Edit</button>
        </div>

        <!-- Website -->
        <div class="mb-4">
            <h3 class="font-semibold text-lg">Website</h3>
            <p>{website}</p>
            <button class="text-blue-500" on:click={() => { showModal = true; modalContent = 'website'; }}>Edit</button>
        </div>
    </div>

    <!-- Modals for editing -->
    {#if showModal}
        <Modal bind:open={showModal}>
            {#if modalContent === 'clinicName'}
                
                <!-- Modal content for editing clinic name -->

                <div class="mb-4">
                    <h3 class="font-semibold text-lg">Website</h3>
                    <input type="text" class="border border-gray-300 rounded w-full p-2 mt-2" placeholder="Website" bind:value={website}>
                    <button on:click={()=> showModal=false} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
                </div>

            {/if}
            {#if modalContent === 'clinicUsername'}
                <!-- Modal content for editing clinic username -->
                <!-- ... -->
                <div class="mb-4">
                    <h3 class="font-semibold text-lg">Website</h3>
                    <input type="text" class="border border-gray-300 rounded w-full p-2 mt-2" placeholder="Website" bind:value={website}>
                    <button on:click={()=> showModal=false} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
                </div>
            {/if}
            {#if modalContent === 'opening'}
                <!-- Modal content for editing opening days and hours -->
                <div class="mb-4">
                    <h3 class="font-semibold text-lg">Website</h3>
                    <input type="text" class="border border-gray-300 rounded w-full p-2 mt-2" placeholder="Website" bind:value={website}>
                    <button on:click={()=> showModal=false} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
                </div>
            
            {/if}
            {#if modalContent === 'logo'}
                <!-- Modal content for editing clinic logo -->
                <div class="mb-4">
                    <h3 class="font-semibold text-lg">Website</h3>
                    <input type="text" class="border border-gray-300 rounded w-full p-2 mt-2" placeholder="Website" bind:value={website}>
                    <button on:click={()=> showModal=false} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
                </div>
                
            {/if}
            {#if modalContent === 'admins'}
                <!-- Modal content for editing clinic admins -->
                <div class="mb-4">
                    <h3 class="font-semibold text-lg">Website</h3>
                    <input type="text" class="border border-gray-300 rounded w-full p-2 mt-2" placeholder="Website" bind:value={website}>
                    <button on:click={()=> showModal=false} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
                </div>
            {/if}
            {#if modalContent === 'contact'}
                <!-- Modal content for editing contact information -->
                <div class="mb-4">
                    <h3 class="font-semibold text-lg">Website</h3>
                    <input type="text" class="border border-gray-300 rounded w-full p-2 mt-2" placeholder="Website" bind:value={website}>
                    <button on:click={()=> showModal=false} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
                </div>
            {/if}
            {#if modalContent === 'address'}
                <!-- Modal content for editing address -->
                <div class="mb-4">
                    <h3 class="font-semibold text-lg">Website</h3>
                    <input type="text" class="border border-gray-300 rounded w-full p-2 mt-2" placeholder="Website" bind:value={website}>
                    <button on:click={()=> showModal=false} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
                </div>
                
            {/if}
            {#if modalContent === 'website'}
                <!-- Modal content for editing website -->
                <!--Input for website and confirmation button-->
                <div class="mb-4">
                    <h3 class="font-semibold text-lg">Website</h3>
                    <input type="text" class="border border-gray-300 rounded w-full p-2 mt-2" placeholder="Website" bind:value={website}>
                    <button on:click={()=> showModal=false} class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Profile</button>
                </div>



                
            {/if}
            <!-- ... Add other modal contents similarly ... -->
        </Modal>
    {/if}
    </main>
