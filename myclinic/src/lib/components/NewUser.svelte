<script lang="ts">
    import { Button, Modal,Input, Label, Helper,Textarea, Fileupload  } from 'flowbite-svelte'
    export let clickOutsideModal:boolean = false;
  </script>
  
  
  <Modal title="New patient" bind:open={clickOutsideModal} autoclose outsideclose>
    <form action="">
        <div class="grid grid-cols-2 sm:grid-cols-1 gap-4">
        <div>
        <Label for="name" class="pl-1">Name</Label>
        <Input id="name" placeholder="Enter your name" required/>
        <Helper>Enter your full name</Helper>
    </div>
    <div>
        <Label for="surname" class="pl-1">Surname</Label>
        <Input id="surname" placeholder="Enter surname" required/>
        <Helper>Enter your full name</Helper>
    </div>
    <div>
        <Label for="email" class="pl-1">Email</Label>
        <Input id="email" placeholder="example@email.com" required/>
        <Helper>Enter your email address</Helper>
    </div>
    <div>
        <Label for ="phone" class="pl-1">Phone</Label>
        <Input id="phone" placeholder="Enter your phone number" required/>
        <Helper>Enter your phone number</Helper>
    </div>
    
    <div>
        <Label for="anotation" class="pl-1">Anotation</Label>
        <Textarea id="anotation" placeholder="Enter your anotation" />
        <Helper>Enter your anotation</Helper>
    </div>
</div>
        
    </form>
    <svelte:fragment slot='footer'>
      <Button on:click={() => alert('Handle "success"')} color="blue">Add patient</Button>
      <Button color="alternative">Cancel</Button>
    </svelte:fragment>
  </Modal>