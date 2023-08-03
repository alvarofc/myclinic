<script>
    import signupDoc from '$lib/images/signup_doc.png';
    import { Progressbar,Input, Label, Helper, Tooltip  } from 'flowbite-svelte'
    let step = 1;
    $: percentage = (step/3)*100;
    
    function nextStep() {
      step += 1;
    }
  
    function prevStep() {
      step -= 1;
    }
  </script>
  
  <main class="h-screen flex items-center justify-center bg-gray-100">
    <!-- Image on the left -->
    <div class="flex-shrink-0 h-screen w-1/2 hidden md:block">
        <img src={signupDoc} alt="Signup doctor" class="" />
    </div>

    <!-- Form on the right -->
    <div class="w-1/2 justify-around ">
        <div class="w-5/6">
        <div class="my-4 ">
            <div class="mb-1 text-base font-medium text-blue-700 "></div>
              <Progressbar progress={percentage.toString()} color="blue"/>
        </div>
        
        <div class="bg-white p-8  rounded-lg shadow-md flex pr-8">
      
      
      
      <div class="ml-8 flex-grow ">
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
  
            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg" on:click={nextStep}>Next</button>
         
        {:else if step === 2}
          <!-- Step 2: Account Setup -->
          <h2 class="text-xl font-semibold mb-4">Step 2: About the center</h2>
          
            <Label class="block mb-2">Clinic name</Label>
            <Input type="text" name="clinicName" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Choose a username" />
            <Label class="block mb-2">Clinic username</Label>
            <Input type="text" name="clinicUsername" class="border rounded-lg px-4 py-2 mb-4 w-full" placeholder="Choose a username" />
            
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