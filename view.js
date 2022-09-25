let dataJson = JSON.parse(localStorage.getItem("json data"));
let value_x_chart = [];
let value_y_chart = [];
var chart;

function get_value_fn () {
    let value_x = $('#get_x').val();
    let value_y = $('#get_y').val();
    value_x_chart = [];
    value_y_chart = [];
    for (let i = 0; i < dataJson.length; i++) {
        if (dataJson[i][value_x] && dataJson[i][value_y]) {
            value_x_chart.push(dataJson[i][value_x]);
            value_y_chart.push(dataJson[i][value_y]);
        }
    }
    localStorage.setItem('value_x_chart', value_x_chart);
    localStorage.setItem('value_y_chart', value_y_chart);
    
    var dataCharts = [];
    var dataSeries = { type: "line" };
    var dataPoints = [];
    for (let i = 0; i < value_x_chart.length; i++) {
        dataPoints.push({x: dataJson[i][value_x], y: dataJson[i][value_y]});
    }    

    dataSeries.dataPoints = dataPoints;
    dataCharts.push(dataSeries); 


    chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    zoomEnabled: true,
    title:{
        text: "Result" 
    },
    data: dataCharts
    });
}

function cc() {
    chart.render();
}
