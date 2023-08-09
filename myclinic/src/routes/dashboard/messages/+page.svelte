<script>
	import { Textarea, Alert, ToolbarButton } from 'flowbite-svelte'
</script>

<main class="p-4 h-screen md:ml-64  pt-20">

    <div class="flex flex-row h-5/6 mb-4">
        <!-- Component Start -->
	<div class="flex flex-col flex-grow w-2/3 max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
		<div class="flex flex-col flex-grow h-0 p-4 overflow-auto ">
			<div class="flex w-full mt-2 space-x-3 max-w-xs justify-end">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
		</div>
		
		<form>
			<label for="chat" class="sr-only">Your message</label>
			<Alert color="dark" class="px-3 py-2">
			  <svelte:fragment slot="icon">
			  
			  <Textarea id="chat" class="mx-4" rows="1" placeholder="Your message..."/>
			  <ToolbarButton type="submit" color="blue" class="rounded-full text-primary-600 dark:text-primary-500">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
				  <span class="sr-only">Send message</span>
			  </ToolbarButton>
			  </svelte:fragment>
			</Alert>
		  </form>
	</div>

    </div>
</main>

