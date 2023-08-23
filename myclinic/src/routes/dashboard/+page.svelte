<script>
	import { Card, Button, ButtonGroup } from 'flowbite-svelte';
	import Agenda from '$lib/components/Agenda.svelte';
	import Reminders from '$lib/components/Reminders.svelte';
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
</script>

<main class="p-4 md:ml-64 h-auto pt-20">
	<h1 class="text-lg font-semibold mb-4">Your day</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-4 h-[calc(70vh-70px)]">
		<div class="h-1/4">
			<Agenda marginLeft={''} marginTop={''} width={''} date={new Date()} height={'h-full'} />
		</div>
		<div class="grid grid-cols-2 grid-rows-2 gap-4 h-1/4">
			<Card>
				<p>Notifications</p>
				<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">5</h2>
			</Card>
			<Card>
			<Reminders />
			</Card>
			<Card>
				<div class="justify-left space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
					<p>Next appointments</p>
				</div>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">2</h5>
			</Card>
		</div>
	</div>
	<!--Appointment requests-->
	<div class="  mb-4">
		<h1 class="text-lg font-semibold mb-4">Requested Appointments</h1>

		{#if requests.length === 0}
			<p>No appointments found.</p>
		{:else}
			<div class="flex flex-wrap">
				{#each requests as appointment, index}
					<div class="card bg-white p-5 flex flex-col mx-auto my-2 shadow-md">
						<div class="mb-4">
							<h2 class="text-lg font-semibold">{appointment.patient}</h2>
							<p>{appointment.request}</p>
							<p class="text-gray-500">Dr. whoever</p>
							<p class="text-gray-500">{appointment.date} at {appointment.time}</p>
						</div>
						<div class="card-actions join">
							<button
								class="btn btn-success btn-sm join-item"
								on:click={() => acceptAppointment(index)}
							>
								Accept
							</button>
							<button
								class="btn btn-error btn-sm join-item"
								on:click={() => declineAppointment(index)}
							>
								Decline
							</button>
							<button class="btn btn-warning btn-sm join-item" on:click={null}> Schedule </button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>
