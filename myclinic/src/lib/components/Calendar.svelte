<script>

    import {
        format,
        parse,
        eachDayOfInterval,
        startOfToday,
        endOfMonth,
        add,
        isSameMonth,
        isToday,
        getDay,
		isBefore,
		isDate,
		isSameDay,
        } from "date-fns";
    
    const today = startOfToday();
    let selectedDate = today;
    let currMonth =  format(today, "MMM-yyyy");
    
   let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());
    
    $: daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(firstDayOfMonth),
    });
    
    function getPrevMonth()  {
    firstDayOfMonth = add(firstDayOfMonth, { months: -1 });
    currMonth = format(firstDayOfMonth, "MMM-yyyy");
    };
    
    function getNextMonth () {
      
      firstDayOfMonth = add(firstDayOfMonth, { months: 1 });
      currMonth = format(firstDayOfMonth, "MMM-yyyy");
      
    };


    const days = [
        {id:1, name: "S"},
        {id:2, name: "M"},
        {id:3, name: "T"},
        {id:4, name: "W"},
        {id:5, name: "T"},
        {id:6, name: "F"},
        {id:7, name: "S"},
        
    ];
    const colStartClasses = [
        "",
        "col-start-2",
        "col-start-3",
        "col-start-4",
        "col-start-5",
        "col-start-6",
        "col-start-7",
      ];
    </script>
    
    <div class="p-4  mt-16 ml-6 flex items-center justify-center shadow-md bg-white rounded-lg h-1/4">
        <div class=" h-[600px] ">
          <div class="flex items-center justify-between">
            <p class="font-semibold text-xl">
              {format(firstDayOfMonth, "MMMM yyyy")}
            </p>
            <div class="flex items-center justify-evenly gap-6 sm:gap-12">
                <button on:click={getPrevMonth} type="button">
                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                      </svg>
                    </button>
              <button on:click={getNextMonth} type="button">
                <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                  </svg>
                </button>
            </div>
          </div>
          <hr class="my-6" />
          <div class="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
            {#each days as {id, name} (id)}
                <div  class="font-semibold">
                  {name}
                </div>
             
            {/each}
            </div>
          <div class="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center ">
            {#each daysInMonth as day}
                <div class={`${colStartClasses[getDay(day)]}`}>
                    <button type="button" on:click={() => selectedDate = day}
                    class={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full  hover:text-white ${isBefore(day, today) ? "text-gray-400" : "text-gray-900" } ${!isSameDay(day, selectedDate) && "hover:bg-blue-500"} ${isSameDay(day, selectedDate) && "bg-red-500 text-white"}`}
                    >
                    {format(day, "d")}
                </button>
                </div>  
            {/each}
            
          </div>
          <div class="divider"></div>
        </div>
      </div>