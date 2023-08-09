<script lang="ts">
    import { supabase } from '$lib/supabaseClient';
  
    export let time: string;
    export let isAvailable = true;
    export let professionalId: number;
    export let selectedDate: Date;
  
    async function bookSlot() {
      if (isAvailable) {
        const { data, error } = await supabase
          .from('Appointments')
          .insert([{
            time: time,
            professional_id: professionalId,
            date: selectedDate.toISOString().split('T')[0], // Convert date to YYYY-MM-DD format
            client_details: 'CLIENT_DETAILS' // This can be more detailed based on your application's requirements
          }]);
        
        if (!error) {
          isAvailable = false; // Mark the slot as booked
        } else {
          console.error("Error booking the slot:", error);
          alert("Failed to book the slot. Please try again.");
        }
      }
    }
  </script>
  
  
  <div 
    class={`time-slot p-4 m-2 border rounded-lg cursor-pointer 
           ${isAvailable ? 'bg-green-200 hover:bg-green-300' : 'bg-red-200 pointer-events-none'}`}
    on:click={bookSlot}>
    {time}
  </div>
  