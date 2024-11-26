

const ctx = document.getElementById('myChart');
const reports = document.getElementById('reports');


  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Cleaning', 'Maintenance', 'Repair', 'Installation',],
      datasets: [{
        label: 'Service',
        data: [120, 140, 90, 100 ,],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true, 
    }
  });

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  // Line Chart Configuration
const lineCtx = document.getElementById('lineChart');

new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
    datasets: [
      {
        label: 'Cleaning',
        data: [120, 150, 180, 220, 200, 170, 210], // Sample data
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Smooth curves
      },
      {
        label: 'Repair',
        data: [80, 100, 90, 150, 140, 160, 180],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Service Requests',
        },
      },
    },
  },
});