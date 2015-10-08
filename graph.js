/**
 * Created by session2 on 10/7/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Accedent', 'Amount'],
        ['NHF', 6],
        ['HF', 4]
    ]);

    var options = {
        title: 'Railroad Accidents',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Accidents',
            minValue: 0
        },
        vAxis: {
            title: 'Types'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}