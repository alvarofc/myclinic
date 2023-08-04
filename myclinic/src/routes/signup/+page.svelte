<script>
    import cross from '$lib/images/cross.png';
    import signupDoc from '$lib/images/signup_doc.png';
    import {countryList} from '$lib/index';
    import { Progressbar,Input, Label, Helper, Tooltip, Button ,Select } from 'flowbite-svelte'
    let clinicNameNav = '';
    let step = 1;
    $: percentage = (step/3)*100;
    
    function nextStep() {
      step += 1;
    }
  
    function prevStep() {
      step -= 1;
    }
  </script>

<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="/" class="flex items-center">
          <img src={cross} class="mr-3 h-6 sm:h-9" alt="Scruber Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> {clinicNameNav !=''? clinicNameNav: "Scruber"} </span>
      </a>
      <div class="flex items-center lg:order-2">
          <a href="/login" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
          <!-- <a href="/signup" >
              <Button color="blue" size="sm">
                  Get started
                  
              </Button>
          </a> -->
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li><a href="/#features" class="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Features</a></li>
              <li><a href="/#pricing" class="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Pricing</a></li>
              <!--<li><a href="/blog" class="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Blog</a></li>-->
              <!--<li><a href="/contact" class="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Contact</a></li> -->
          </ul>
      </div>
  </div>
</nav>
  
  <main class="h-[calc(100vh-58px)] flex items-center justify-center bg-gray-100 ">
    <!-- Image on the left -->
    <div class="flex-shrink-0 h-[calc(100vh-58px)] w-1/2 hidden md:block overflow-hidden">
        <img src={signupDoc} alt="Signup doctor" class="object-contain" />
    </div>

    <!-- Form on the right -->
    <div class="md:w-1/2 justify-around ">
        <div class="md:w-5/6">
        <div class="my-4 ">
            <div class="mb-1 text-base font-medium text-blue-700 "></div>
              <Progressbar progress={percentage.toString()} color="blue"/>
        </div>
        
        <div class="bg-white p-8  rounded-lg shadow-md flex pr-8">
      
      
      
      <div class="md:ml-8 flex-grow ">
        <form>
        {#if step === 1}
          <!-- Step 1: User details -->
          <h2 class="text-xl font-semibold mb-4">Step 1: About you</h2>
          
            <Label class="block mb-2">Name</Label>
            <Input type="text" name="name" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Enter your name" />
            <Label class="block mb-2">Surname</Label>
            <Input type="text" name="surname" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Enter your name" />
            <Label class="block mb-2">Email</Label>
            <Input type="email" name="email" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Enter your name" />
            <Label class="block mb-2">Phone</Label>
            <Input type="tel" name="phone" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Enter your name" />
            
            <!-- Other user details form Inputs -->
  
            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg float-right" on:click={nextStep} >Next</button>
         
        {:else if step === 2}
          <!-- Step 2: Account Setup -->
          <h2 class="text-xl font-semibold mb-4">Step 2: About the center</h2>
          
            <Label class="block mb-2">Clinic's name</Label>
            <Input type="text" name="clinicName" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Your clinic's name" bind:value={clinicNameNav}/>
            <Label class="block mb-2">Clinic's username</Label>
            <Input type="text" name="clinicUsername" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Username to identify your clinic" />
            <Label class="block mb-2">Address</Label>
            
            <Input type="text" name="street" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Address of your clinic" />
            <div class="flex-row">
              <Label class="block mb-2">City</Label>
              <Input type="text" name="city" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="City your clinic is in" />
            <Label class="block mb-2">Country</Label>
            <Select type="text" items={countryList} name="country" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Country your clinic is in" />
            </div>
            
            
            <!-- Other account setup form Inputs -->
  
            <div class="flex">
              <button class="px-4 py-2 bg-gray-400 text-white rounded-lg" on:click={prevStep}>Back</button>
              <button class="ml-auto px-4 py-2 bg-blue-500 text-white rounded-lg" on:click={nextStep}>Next</button>
            </div>
          
        {:else if step === 3}
          <!-- Step 3: Confirmation -->
          <h2 class="text-xl font-semibold mb-4">Step 3: Confirmation</h2>
          
            <!-- Display user details and account setup information -->
  
            <div class="flex">
              <button class="px-4 py-2 bg-gray-400 text-white rounded-lg" on:click={prevStep}>Back</button>
              <button class="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg">Submit</button>
            </div>
          
        {/if}
    </form>
    </div>
      </div>
    </div>
</div>
  </main>