document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChart").getContext("2d");

    const data = [
        { day: 0, fingerprint: 0, competitors: 0 },
        { day: 30, fingerprint: -0.3, competitors: -20 },
        { day: 60, fingerprint: -0.5, competitors: -40 },
        { day: 74, fingerprint: -0.7, competitors: -49.1 },
        { day: 90, fingerprint: -0.6, competitors: -47 },
        { day: 120, fingerprint: -0.5, competitors: -45 },
    ];

    new Chart(ctx, {
        type: "line",
        data: {
            labels: data.map((d) => `Day ${d.day}`),
            datasets: [
                {
                    label: "Fingerprint",
                    data: data.map((d) => d.fingerprint),
                    borderColor: "red",
                    fill: false,
                },
                {
                    label: "Competitors",
                    data: data.map((d) => d.competitors),
                    borderColor: "blue",
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
});
