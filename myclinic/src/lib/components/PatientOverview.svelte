<script>
    export let patient = {};
  </script>
  
  <section class="bg-white p-6 rounded-lg shadow-md md:ml-64 md:m-8  mt-14">
    <div class="flex items-center space-x-4">
      <img src={patient.profilePicture || '/default-profile.png'} alt="Patient Profile" class="w-24 h-24 rounded-full" />
      <div>
        <h2 class="text-2xl font-semibold">{patient.fullName}</h2>
        <p class="text-gray-600">{new Date(patient.dateOfBirth).toLocaleDateString()} ({patient.age} years)</p>
        <p class="text-gray-600">{patient.gender}</p>
      </div>
    </div>
  
    <div class="mt-4 space-y-2">
      <p><span class="font-medium">Contact:</span> {patient.phone}, {patient.email}</p>
      <p><span class="font-medium">Patient ID:</span> {patient.id}</p>
    </div>
  </section>
  