<script lang="ts">
    import ApexCharts from 'svelte-apexcharts';
  
    export let series: any[] = [{
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB"
    }];
    export let categories: string[] = ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'];
  
    let newDate: string = '';
    let newValue: number | null = null;
    let selectedMetric: string = 'newUsers';
  
    let options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series,
      xaxis: {
        categories,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };
  
    function addDataPoint() {
      if (newDate && newValue !== null) {
        categories.push(newDate);
        series[0].data.push(newValue);
      }
    }
  
    function addNewChart() {
      // For simplicity, we're just duplicating the existing data for the new metric.
      // In a real-world scenario, you'd fetch or generate data specific to the selected metric.
      series.push({
        name: selectedMetric,
        data: [...series[0].data],
        color: "#1A56DB" // Adjust color as needed
      });
    }
  </script>
  
  <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
    <div class="flex justify-between">
      <div>
        <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
      </div>
      <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
        12%
        <svg class="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
      </div>
    </div>
  
    <ApexCharts {options} type="area" />
  
    <div class="mt-4">
      <input bind:value={newDate} type="text" placeholder="Date" class="border p-2 mr-2 rounded">
      <input bind:value={newValue} type="number" placeholder="Value" class="border p-2 mr-2 rounded">
      <button on:click={addDataPoint} class="bg-blue-500 text-white p-2 rounded">Add Data Point</button>
    </div>
  
    <div class="mt-4">
      <select bind:value={selectedMetric} class="border p-2 rounded">
        <option value="newUsers">New Users</option>
        <!-- Add other metrics here -->
      </select>
      <button on:click={addNewChart} class="bg-blue-500 text-white p-2 rounded ml-2">Add New Chart</button>
    </div>
  </div>
  