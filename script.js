google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Year', '2010 Population',],
        ['1998', 41501],
        ['2001', 42196],
        ['2004', 42836],
        ['2007', 41259],
        ['2010', 32999],
        ['2013', 32719]
    ]);

    var options = {
        title: 'Total Deaths in Car Crashes Every 3 Years ',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}