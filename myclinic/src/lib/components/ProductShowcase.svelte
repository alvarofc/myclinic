<script>
	let selectedImage = 1;
	import homeScreen from '$lib/images/homescreen.png';
	const products = [
		{
			title: 'Product 1',
			description: 'Description for product 1',
			image: homeScreen
		},
		{ title: 'Product 2', description: 'Description for product 2', image: '/path/to/image2.jpg' },
		{ title: 'Product 3', description: 'Description for product 3', image: '/path/to/image3.jpg' },
		{ title: 'Product 4', description: 'Description for product 4', image: '/path/to/image4.jpg' }
	];
</script>

<section
	class="flex flex-col justify-center items-center h-[130vh] bg-gradient-to-br from-[#0575E6] to-blue-600"
>
	<div class="mx-auto max-w-screen-md text-center mb-8 pt-8">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
			Everything you need in one place
		</h2>
		<p class="mb-5 font-light text-white sm:">
			Take a look at what you are going to be able to do with Scruber.
		</p>
	</div>
	<div class="flex flex-col  items-center justify-center w-full overflow-hidden mb-6">
		<!-- Image Selectors -->
		<div
			class="grid grid-cols-4 pb-8 md:mb-0 "
		>
			{#each products as product, index}
				<button
					class="text-left hover:backdrop-blur-md hover:bg-white/20 transition-opacity duration-300 p-4  rounded-lg {selectedImage ===
					index + 1
						? 'bg-white/30 border border-gray-50 backdrop-blur-lg'
						: ''}"
					on:click={() => (selectedImage = index + 1)}
				>
					<h3 class="font-bold text-white">{product.title}</h3>
					<p class="text-white hidden md:block">{product.description}</p>
				</button>
			{/each}
		</div>

		<!-- Displayed Image -->
		<div class="mockup-browser border bg-white  h-auto mx-8">
			<div class="mockup-browser-toolbar flex-shrink">
				<div class="input">https://yourclinic.scruber.us</div>
			</div>
			<img
				src={products[selectedImage - 1].image}
				alt="Selected Product"
				class="w-full object-cover flex-shrink"
			/>
		</div>
	</div>
</section>
