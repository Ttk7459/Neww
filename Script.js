document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["0", "30", "60", "74", "90", "120"], // X-Axis Days
            datasets: [
                {
                    label: "Fingerprint",
                    data: [0, -0.3, -0.5, -0.7, -0.6, -0.5], // Y-Axis values
                    borderColor: "red",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: "Competitors",
                    data: [0, -20, -40, -49.1, -47, -45],
                    borderColor: "blue",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: true,
                    mode: "nearest",
                    intersect: false,
                    backgroundColor: "white",
                    titleColor: "black",
                    bodyColor: "black",
                    borderColor: "rgba(0, 0, 0, 0.2)",
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Days After Initial Identification"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Accuracy Dropoff (%)"
                    },
                    beginAtZero: false
                }
            }
        }
    });
});
