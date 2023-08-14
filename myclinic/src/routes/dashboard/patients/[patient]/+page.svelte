<script>
	import PatientOverview from '$lib/components/PatientOverview.svelte';
	import MedicalHistory from '$lib/components/MedicalHistory.svelte';
	import PatientAppointments from '$lib/components/PatientAppointments.svelte';
	import BillingAndInsurance from '$lib/components/BillingAndInsurance.svelte';
	import LabResults from '$lib/components/LabResults.svelte';
	import NotesAndDocuments from '$lib/components/NotesAndDocuments.svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	// ... Import other components like Appointments, Billing, etc. ...
  
	let patient = {

	  
	};
  
	let medicalHistory = {
	  pastDiagnoses: ['Asthma', 'Bronchitis'],
	  surgeries: ['Appendectomy'],
	  allergies: ['Peanuts', 'Shellfish'],
	  medications: ['Albuterol', 'Ibuprofen'],
	  familyHistory: 'Diabetes, Heart Disease',

	  
	};
	let appointments = 
		{
			past : [{
			date: '2021-10-10',
			time: '10:00',
			doctor: 'Dr. John Doe',
			department: 'Cardiology',
			notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultricies. Nulla facilis'
		}],
		upcoming : [{
			date: '2021-10-10',
			time: '10:00',
			doctor: 'Dr. John Doe',
			department: 'Cardiology',
			notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam ultricies. Nulla facilis'
		}]	
	}
	
  
	
  </script>
  
  <!-- Always Displayed: Patient Overview -->
  <PatientOverview {patient} />
  
  <!-- Tabbed Interface -->
  <div class="mt-6 md:ml-64">
	<Tabs style="underline">
	<TabItem value="medicalHistory" open>
		<div slot="title" class="flex items-center gap-2">
			<Icon name="adress-book-solid" size="sm" />
			Medical History
		  </div>
		  <MedicalHistory {medicalHistory} />
	</TabItem>
	<TabItem value="appointments">
		<div slot="title" class="flex items-center gap-2">
			
			<Icon name="calendar-week-solid" size="sm" />
			Appointments
		  </div>
		  <PatientAppointments {appointments} />
	</TabItem>
	<TabItem value="billing">
		<div slot="title" class="flex items-center gap-2">
			<Icon name="user-circle-solid" size="sm" />
			Billing & Insurance
		  </div>
		<BillingAndInsurance />
	</TabItem>
	<TabItem value="labs">
		<div slot="title" class="flex items-center gap-2">
			<Icon name="chart-pie-solid" size="sm" />
			Metrics & Results
		  </div>
		<LabResults />
	</TabItem>
	<TabItem value="notes">
		<div slot="title" class="flex items-center gap-2">
			<Icon name="file-solid" size="sm" />
			Notes & Documents
		  </div>
		<NotesAndDocuments />
	</TabItem>
	</Tabs>
  </div>
  