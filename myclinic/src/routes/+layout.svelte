<script  lang="ts">
    import "../app.css";
    import "flowbite/dist/flowbite.css";
    import { onMount } from 'svelte';
    onMount(() => {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/pricing-table.js';
      script.async = true;
      document.body.appendChild(script);
      let tenant = window.location.host.split('.')[0]
        console.log(tenant)
    });
    
  </script>
  <html class="scroll-smooth bg-gray-100" lang="en">
  <main >
    
    <slot />
  </main>
  </html>