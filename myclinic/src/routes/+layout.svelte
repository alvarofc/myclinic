<script  lang="ts">

    import "../app.css";
    import "flowbite/dist/flowbite.css";
    import { onMount } from 'svelte';
	import { invalidateAll } from "$app/navigation";
    onMount(() => {
     
    })
  </script>
  <html class="scroll-smooth bg-gray-100" lang="en">
  <main >
    
    <slot />
  </main>
  </html>