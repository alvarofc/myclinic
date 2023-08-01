<script>
    import Uploader from '$lib/components/Uploader.svelte';
    import Files from '$lib/components/Files.svelte';
</script>






<div
	class="grid grid-cols-1 px-4 pt-6 pt-20 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900 md:ml-64  "
>
	
	<div class="col-span-2 pt-20">
		<div
			class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
			<h3 class="mb-4 text-xl font-semibold dark:text-white">
				General information
			</h3>
			<form action="#">
				<div class="grid grid-cols-6 gap-6">
					<div class="col-span-6 sm:col-span-3">
						<label
							for="first-name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>First Name</label
						>
						<input
							type="text"
							name="first-name"
							id="first-name"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Bonnie"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="last-name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Last Name</label
						>
						<input
							type="text"
							name="last-name"
							id="last-name"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Green"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="country"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Country</label
						>
						<input
							type="text"
							name="country"
							id="country"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="United States"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="city"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>City</label
						>
						<input
							type="text"
							name="city"
							id="city"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="e.g. San Francisco"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="address"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Address</label
						>
						<input
							type="text"
							name="address"
							id="address"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="e.g. California"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Email</label
						>
						<input
							type="email"
							name="email"
							id="email"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="example@company.com"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="phone-number"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Phone Number</label
						>
						<input
							type="number"
							name="phone-number"
							id="phone-number"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="e.g. +(12)3456 789"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="birthday"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Birthday</label
						>
						<input
							type="number"
							name="birthday"
							id="birthday"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="15/08/1990"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="organization"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Organization</label
						>
						<input
							type="text"
							name="organization"
							id="organization"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Company Name"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="role"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Role</label
						>
						<input
							type="text"
							name="role"
							id="role"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="React Developer"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="department"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Department</label
						>
						<input
							type="text"
							name="department"
							id="department"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Development"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label
							for="zip-code"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Zip/postal code</label
						>
						<input
							type="number"
							name="zip-code"
							id="zip-code"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="123456"
							required
						/>
					</div>
					<div class="col-span-6 sm:col-full">
						<button
							class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							type="submit">Save all</button
						>
					</div>
				</div>
			</form>
		</div>
		<div
			class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 "
		>
			<h3 class="mb-4 text-xl font-semibold dark:text-white">
				Password information
			</h3>
			<Files />
		</div>
		<div
			class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
			<div class="flow-root">
				<h3 class="text-xl font-semibold dark:text-white">Sessions</h3>
				<ul class="divide-y divide-gray-200 dark:divide-gray-700">
					<li class="py-4">
						<div class="flex items-center space-x-4">
							<div class="flex-shrink-0">
								<svg
									class="w-6 h-6 dark:text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									></path></svg
								>
							</div>
							<div class="flex-1 min-w-0">
								<p
									class="text-base font-semibold text-gray-900 truncate dark:text-white"
								>
									California 123.123.123.123
								</p>
								<p
									class="text-sm font-normal text-gray-500 truncate dark:text-gray-400"
								>
									Chrome on macOS
								</p>
							</div>
							<div class="inline-flex items-center">
								<a
									href="#"
									class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									>Revoke</a
								>
							</div>
						</div>
					</li>
					<li class="pt-4 pb-6">
						<div class="flex items-center space-x-4">
							<div class="flex-shrink-0">
								<svg
									class="w-6 h-6 dark:text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
									></path></svg
								>
							</div>
							<div class="flex-1 min-w-0">
								<p
									class="text-base font-semibold text-gray-900 truncate dark:text-white"
								>
									Rome 24.456.355.98
								</p>
								<p
									class="text-sm font-normal text-gray-500 truncate dark:text-gray-400"
								>
									Safari on iPhone
								</p>
							</div>
							<div class="inline-flex items-center">
								<a
									href="#"
									class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									>Revoke</a
								>
							</div>
						</div>
					</li>
				</ul>
				<div>
					<button
						class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>See more</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="grid grid-cols-1 px-4 xl:grid-cols-2 xl:gap-4 md:ml-64">
	<div
		class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0"
	>
		<div class="flow-root">
			<h3 class="text-xl font-semibold dark:text-white">
				Alerts & Notifications
			</h3>
			<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
				You can set up Themesberg to get notifications
			</p>
			<div class="divide-y divide-gray-200 dark:divide-gray-700">
				<!-- Item 1 -->
				<div class="flex items-center justify-between py-4">
					<div class="flex flex-col flex-grow">
						<div class="text-lg font-semibold text-gray-900 dark:text-white">
							Company News
						</div>
						<div class="text-base font-normal text-gray-500 dark:text-gray-400">
							Get Themesberg news, announcements, and product updates
						</div>
					</div>
					
				</div>
				<!-- Item 2 -->
				<div class="flex items-center justify-between py-4">
					<div class="flex flex-col flex-grow">
						<div class="text-lg font-semibold text-gray-900 dark:text-white">
							Account Activity
						</div>
						<div class="text-base font-normal text-gray-500 dark:text-gray-400">
							Get important notifications about you or activity you've missed
						</div>
					</div>

					
				</div>
				<!-- Item 3 -->
				<div class="flex items-center justify-between py-4">
					<div class="flex flex-col flex-grow">
						<div class="text-lg font-semibold text-gray-900 dark:text-white">
							Meetups Near You
						</div>
						<div class="text-base font-normal text-gray-500 dark:text-gray-400">
							Get an email when a Dribbble Meetup is posted close to my location
						</div>
					</div>
					
				</div>
				<!-- Item 4 -->
				<div class="flex items-center justify-between pt-4">
					<div class="flex flex-col flex-grow">
						<div class="text-lg font-semibold text-gray-900 dark:text-white">
							New Messages
						</div>
						<div class="text-base font-normal text-gray-500 dark:text-gray-400">
							Get Themesberg news, announcements, and product updates
						</div>
					</div>
					
				</div>
			</div>
			<div class="mt-6">
				<button
					class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>Save all</button
				>
			</div>
		</div>
	</div>
	<div
		class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0"
	>
		<div class="flow-root">
			<h3 class="text-xl font-semibold dark:text-white">Email Notifications</h3>
			<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
				You can set up Themesberg to get email notifications
			</p>
			<div class="divide-y divide-gray-200 dark:divide-gray-700">
				<!-- Item 1 -->
				<div class="flex items-center justify-between py-4">
					<div class="flex flex-col flex-grow">
						<div class="text-lg font-semibold text-gray-900 dark:text-white">
							Rating reminders
						</div>
						<div class="text-base font-normal text-gray-500 dark:text-gray-400">
							Send an email reminding me to rate an item a week after purchase
						</div>
					</div>
					
				</div>
				<!-- Item 2 -->
				<div class="flex items-center justify-between py-4">
					<div class="flex flex-col flex-grow">
						<div class="text-lg font-semibold text-gray-900 dark:text-white">
							Item update notifications
						</div>
						<div class="text-base font-normal text-gray-500 dark:text-gray-400">
							Send user and product notifications for you
						</div>
					</div>
					
				</div>
				<!-- Item 3 -->
				<div class="flex items-center justify-between py-4">
					<div class="flex flex-col flex-grow">
						<div class="text-lg font-semibold text-gray-900 dark:text-white">
							Item comment notifications
						</div>
						<div class="text-base font-normal text-gray-500 dark:text-gray-400">
							Send me an email when someone comments on one of my items
						</div>
					</div>
					
				</div>
				<!-- Item 4 -->
				<div class="flex items-center justify-between pt-4">
					<div class="flex flex-col flex-grow">
						<div class="text-lg font-semibold text-gray-900 dark:text-white">
							Buyer review notifications
						</div>
						<div class="text-base font-normal text-gray-500 dark:text-gray-400">
							Send me an email when someone leaves a review with their rating
						</div>
					</div>

				</div>
			</div>
			<div class="mt-6">
				<button
					class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>Save all</button
				>
			</div>
		</div>
	</div>
</div>