document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("weatherChart").getContext("2d");
  
    const dataToday = {
      labels: [
        "6 am",
        "9 am",
        "12 pm",
        "03 pm",
        "06 pm",
        "09 pm",
        "12 am",
        "03 am",
      ],
      datasets: [
        {
          label: "Temperature (°C)",
          data: [10, 14, 18, 22, 19, 14, 12, 10],
          fill: true,
          backgroundColor: "rgb(235,232,249)",
          borderColor: "rgb(157,145,227)",
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: "white",
          pointBorderColor: "rgb(157,145,227)",
          pointBorderWidth: 2,
        },
      ],
    };
  
    const dataWeek = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Temperature (°C)",
          data: [14, 15, 13, 16, 17, 18, 19],
          fill: true,
          backgroundColor: "rgb(235,232,249)",
          borderColor: "rgb(157,145,227)",
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: "white",
          pointBorderColor: "rgb(157,145,227)",
          pointBorderWidth: 2,
        },
      ],
    };
  
    let chart = new Chart(ctx, {
      type: "line",
      data: dataToday,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            display: false,
            min: 0,
            max: 30,
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            align: "end",
            anchor: "end",
            color: "black",
            font: {
              weight: "bold",
            },
          },
        },
        elements: {
          line: {
            borderWidth: 2,
          },
          point: {
            radius: 3,
            backgroundColor: "white",
            borderColor: "rgb(157,145,227)",
            borderWidth: 2,
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  
    document.getElementById("todayBtn").addEventListener("click", function () {
      chart.data = dataToday;
      chart.update();
      this.classList.add("active");
      document.getElementById("weekBtn").classList.remove("active");
    });
  
    document.getElementById("weekBtn").addEventListener("click", function () {
      chart.data = dataWeek;
      chart.update();
      this.classList.add("active");
      document.getElementById("todayBtn").classList.remove("active");
    });
  });
  
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "6:00 AM",
        "9:00 AM",
        "12:00 PM",
        "3:00 PM",
        "6:00 PM",
        "9:00 PM",
      ],
      datasets: [
        {
        //   label: "Chance of Rain (%)",
          data: [20, 30, 50, 70, 60, 40],
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
    legend: {
        display: false
    },
        datalabels: {
          display: true,
          color: "black",
          font: {
            weight: "bold",
          },
          formatter: (value, context) => {
            return value + "%";
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "Percentage (%)",
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
      const bars = document.querySelectorAll('.bar');
    
      bars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    
        if (percentage < 33) {
          bar.style.backgroundColor = '#a0e8ff'; // Sunny
        } else if (percentage < 66) {
          bar.style.backgroundColor = '#7d7cff'; // Rainy
        } else {
          bar.style.backgroundColor = '#3f3fff'; // Heavy Rain
        }
      });
    });
    
  