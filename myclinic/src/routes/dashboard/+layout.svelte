<script>
    import "../../app.css";
    import "flowbite/dist/flowbite.css";
    import Drawer from "../../components/Drawer.svelte";
    import Nav from "../../components/Nav.svelte";
</script>
<div class="antialiased bg-gray-50 dark:bg-gray-900">
  <Nav />

  <!-- Sidebar -->

  <Drawer />

 
</div>
  
  <slot />