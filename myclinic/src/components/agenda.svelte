<script  lang="ts">
     import { onMount } from 'svelte';
     
   let events = [
        {
            date : "2021-10-01",
            time : "08:00",
            end : "08:30",
            title : "Opening remarks",
            patient : "John Doe",
        },
        {
            date : "2021-10-01",
            time : "10:15",
            end : "11:30",
            title : "Opening remarks",
            patient : "John Doe",
        },
        

        
    ]
    let hoursInDay  = ["01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00", "08:30", "09:00", "09:30", "10:00", "10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00", "14:30", "15:00", "15:30", "16:00", "16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00", "20:30", "21:00", "21:30", "22:00", "22:30","23:00","23:30","24:00"]
    let container: HTMLDivElement;
    function scrollToHour(hour: String) {
    const hourElement = container.querySelector(`[data-hour="${hour}"]`) as HTMLElement;
    if (hourElement) {
      container.scrollTop = hourElement.offsetTop - 400;
    }
    
  }
  let currentHour = new Date().getHours();
  function getEventStyle(event:object, hour:string) {
    const startHour = parseInt(event.time.split(":")[0]);
    const startMinute = parseInt(event.time.split(":")[1]);
    const endHour = parseInt(event.end.split(":")[0]);
    const endMinute = parseInt(event.end.split(":")[1]);
    const timeHour = parseInt(hour.split(":")[0]);
    const timeMinute = parseInt(hour.split(":")[1]);

    const top = (startHour - timeHour) * 50 + (startMinute / 60) * 50;
    const height = ((endHour - startHour) * 60 + (endMinute - startMinute)) / 60 * 50;

    return `top:${top}px;height:${height}px;`;
  }

  onMount(() => {
    
    scrollToHour(currentHour.toString() + ":00");
  });
</script>

<section class={`bg-white overflow-scroll  mt-20 scroll-smooth dark:bg-gray-900 h-screen md:ml-72 antialiased md:w-2/4 `} bind:this={container}>
   {#each hoursInDay as hour}
    <div>
        <div class="divider"></div> 
        <div class={`flex flex-row ${hour === currentHour.toString()+ ":00" && 'bg-red-200'} h-5/6`}>
            <div class={`w-1/6 ${hour === currentHour.toString()+ ":00" && 'bg-red-200'}`}  data-hour={hour}>
                <div class="text-center ">
                    {hour}
                </div>
            </div>
            <div class="w-5/6">
                <div class="flex flex-row">
                    {#each events as event}
                        {#if event.time.startsWith(hour.split(":")[0])}
                        <div class={`${getEventStyle(event, hour)} bg-sky-200 w-4/6 rounded-lg`}>
                        <ul >
                            <li class="w-1/6 p-4">
                                <div class="text-center">
                                    {event.title}
                                </div>
                            </li>
                            <li class="w-1/6">
                                <div class="text-center">
                                    {event.patient}
                                </div>
                            </li>
                        </ul>
                    </div>
                        {/if}
                    {/each}
                </div>
            </div>
    </div>
    </div>
    {/each}
</section>