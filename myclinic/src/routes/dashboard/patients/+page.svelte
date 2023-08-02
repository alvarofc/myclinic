<script lang=ts>
	import NewUser from "$lib/components/NewUser.svelte";
    let userModal:boolean = false;
    let users = [
        {   
            id: 1,
            name: "Neil",
            surname: "Sims",
            status: "Online",
            email: "test@email.com",
            phone: "555555555",
            anotation: "test"
        },
        {   
            id: 2,
            name: "Bonnie",
            surname: "Green",
            status: "Online",
            email: " ",
            phone: " ",
            anotation: " "
        },
        {   
            id: 3,
            name: "Jese",
            surname: "Leos",
            status: "Online",
            email: " ",
            phone: " ",
            anotation: " "
        },
        {   
            id: 4,
            name: "Thomas",
            surname: "Lean",
            status: "Online",
            email: " ",
            phone: " ",
            anotation: " "
        },
        {   
            id: 5,
            name: "Leslie",
            surname: "Livingston",
            status: "Offline",
            email: " ",
            phone: " ",
            anotation: " "
        },
        
    ]
    

   
</script>

<NewUser bind:clickOutsideModal={userModal}/>
<main class="p-4 md:ml-64 h-auto pt-20">
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        <div>
            <button  on:click={()=>userModal = true} class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 sm:pr-4" type="button">
                
                New patient
                <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
            </button>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
        </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone #
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {#each users as user}
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    
                    <div class="pl-3">
                        <a href="/dashboard/patients/{user.id}" class="text-base font-semibold hover:underline">{user.name} {user.surname}</a>
            
                        
                    </div>
                </th>
                <td class="px-6 py-4">
                    {user.email}
                </td>
                <td class="px-6 py-4">
                    {user.phone}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class={`h-2.5 w-2.5 rounded-full bg-green-500 mr-2`}></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
           {/each}
        </tbody>
        
    </table>
    
</div>
<!-- Pagination -->
<section class="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
      <!-- Start coding here -->
      <div class="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
        <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
             aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
              class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
              class="font-semibold text-gray-900 dark:text-white">1000</span></span>
          <ul class="inline-flex items-stretch -space-x-px">
            <li>
              <a href="#"
                 class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page"
                 class="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</main>