const form = document.getElementById('vote-form');

//Form Submit event
form.addEventListener('submit', (e) => {
    const choice = document.querySelector('input[name=god]:checked').value;
    const data = { god: choice };
    console.log(data);

    fetch('http://localhost:3000/poll', {
        'method': "POST",
        'body': JSON.stringify(data),
        'headers': new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .catch(err => console.log(err));
    e.preventDefault();
});

let dataPoints = [
    { label: "Sachin Tendulkar", y: 0 },
    { label: "Rajinikanth", y: 0 },
    { label: "Kamalhaasan", y: 0 },
    { label: "Others", y: 0 },
];

const chartContainer = document.querySelector('#chartContainer');
if (chartContainer) {
    const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        theme: 'theme1',
        title: {
            text: 'Results'
        },
        data: [
            {
                type: "column",
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();

    Pusher.logToConsole = true;

    var pusher = new Pusher('0acd06b8b5910e4bd48d', {
        cluster: 'ap1'
    });

    var channel = pusher.subscribe('god-channel');
    channel.bind('god-vote', function (data) {
        dataPoints = dataPoints.map(x => {
            if (x.label == data.god) {
                x.y += data.points;
                return x;
            } else {
                return x;
            }
        });
        chart.render();
    });
}