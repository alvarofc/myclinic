<script>
	
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

