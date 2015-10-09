google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Deaths'],
        ['1998', 41501],
        ['2001', 42196],
        ['2004', 42836],
        ['2007', 41259],
        ['2010', 32999],
        ['2013', 32719]
    ]);

    var options = {
        title: 'Total Deaths in Car Crashes Every 3 Years ',
        chartArea: {width: '60%'},
        hAxis: {
            title: 'Total Deaths',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
function alertButton() {
    alert("You loved me!");
}
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Deaths', 'Miles Driven (billions)'],
        ['1998', 41501, 2632],
        ['2001', 42196, 2797],
        ['2004', 42836, 2965],
        ['2007', 41259, 3031],
        ['2010', 32999, 2967],
        ['2013', 32719, 2946]
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                fontSize: 12,
                auraColor: 'none',
                color: '#555'
            },
            boxStyle: {
                stroke: '#ccc',
                strokeWidth: 1,
                gradient: {
                    color1: '#f3e5f5',
                    color2: '#f3e5f5',
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%'
                }
            }
        },
        hAxis: {
            title: 'Total Population',
            minValue: 0,
        },
        vAxis: {
            title: 'City'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}