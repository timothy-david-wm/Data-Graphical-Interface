google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBarColors);

function drawBarColors() {
    //noinspection CommaExpressionJS,CommaExpressionJS
    var data;
    data = google.visualization.arrayToDataTable([
        ['City', '2010 Population', {role: 'style'}],
        ['New York City, NY', 8175000, 'color: blue'],
        ['Los Angeles, CA', 3792000, 'color: silver'],
        ['Chicago, IL', 2695000, 'color: brown'],
        ['Houston, TX', 2099000, 'color: gold'],
        ['Philadelphia, PA', 1526000, 'color: green'],
            ['Phoenix, AZ', 1445623, 'color: orange'],
            ['San antonio, TX', 1327407, 'color: gold'],
            ['San Diego, CA', 1307402, 'color: silver'],
            ['Dalas, TX', 1197816, 'color: gold'],
            ['San jose, CA', 945942, 'color: silver']
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        colors: ['#b0120a', '#ffab91'],
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'City'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}