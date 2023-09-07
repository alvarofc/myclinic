<script>
	import NewRequests from '$lib/components/NewRequests.svelte';
	import { Card, Button, ButtonGroup, Badge, Avatar } from 'flowbite-svelte';
	import Agenda from '$lib/components/Agenda.svelte';
	import Reminders from '$lib/components/Reminders.svelte';
	let nextPatients = [
		{
			name: 'Neil Sims',
			id: '123456789',
			time: '08:00',
			procedure: 'cleaning',
			picture: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
		},
		{
			name: 'Neil Sims',
			id: '123456787',
			time: '08:00',
			procedure: 'cleaning',
			picture: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
		},
		{
			name: 'Neil Sims',
			id: '1234567',
			time: '08:00',
			procedure: 'cleaning',
			picture: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
		}
	]
	let requests = [
		{
			patient: 'Neil Sims',
			date: '2021-05-12',
			time: '08:00',
			request: 'cleaning'
		},
		{
			patient: 'Neil Sims',
			date: '2021-05-12',
			time: '08:00',
			request: 'cleaning'
		},
		{
			patient: 'Neil Sims',
			date: '2021-05-12',
			time: '08:00',
			request: 'cleaning'
		}
	];
	function acceptAppointment(index) {
		// logic to accept appointment
	}

	function declineAppointment(index) {
		// logic to decline appointment
	}

	function rescheduleAppointment(index) {
		// logic to reschedule appointment
	}
	let remindersModal = false;
</script>

<main class="p-4 md:ml-64 h-auto pt-20">
	<h1 class="text-lg font-semibold mb-4">Your day</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-4 h-[calc(70vh-70px)]">
		<div class="h-1/4">
			<Agenda marginLeft={''} marginTop={''} width={''} date={new Date()} height={'h-full'} />
		</div>
		<div class="grid grid-cols-2 grid-rows-2 gap-4 h-1/4">
			<Card>
				<h2 class="text-xl font-bold text-black">Notifications</h2>
				<ul class="mt-2 justify-between">
					<li class=" mb-2 border-b">
						<div class="mb-2 flex items-center justify-between">
							<div class="flex">
								<svg
									class="w-6 h-6 text-green-400 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 18"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
									/>
								</svg>
								<p class="text-md text-gray-500 ml-4">Messages</p>
							</div>
							<Badge class="bg-green-400 text-white" rounded href="/dashboard/messages">2</Badge>
						</div>
					</li>
					<li class="flex items-center justify-between mb-2 border-b">
						<svg
							class="w-6 h-6 text-gray-800 dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
							/>
						</svg>
						<p class="text-sm text-black">Appointment requests</p>
						<Badge class="bg-green-400 text-white" rounded>{requests.length}</Badge>
					</li>
				</ul>
			</Card>
			<Card>
				<div class="flex justify-between items-center">
					<h2 class="text-xl font-bold text-black">Reminders</h2>
					<Button class="" on:click={() => (remindersModal = true)}>
						<svg
							class="w-4 h-4 text-blue-800"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 18 18"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 1v16M1 9h16"
							/>
						</svg>
					</Button>
				</div>
				<Reminders {remindersModal} />
			</Card>
			<Card>
				<h2 class="text-xl font-bold text-black">Next appointments</h2>
				<ul class="overflow-y-auto no-scrollbar">
					{#if nextPatients.length === 0}
						<li class="text-gray-500 text-center">No patients</li>
					{/if}
					{#each nextPatients as nextPatient, index}
						<li class=" border-b ">
							<div class="my-2 flex">
							<Avatar src={nextPatient.picture} />
							<div class="ml-2">
								<p class="font-medium">{nextPatient.name}</p>
								<p class="text-sm text-gray-500">{nextPatient.procedure} - {nextPatient.time}</p>
							</div>
							</div>
						</li>
						
					{/each}
				</ul>
			</Card>
		</div>
	</div>
	<!--Appointment requests-->
	<NewRequests />
</main>
