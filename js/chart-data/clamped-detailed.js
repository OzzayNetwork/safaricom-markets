var colors = Highcharts.getOptions().colors;
Highcharts.chart('stram_clamped_chart', {

    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
    },

    // Make sure connected countries have similar colors
    colors: [
        colors[0],
        colors[1],
        colors[2],
        colors[3],
        colors[4],
        // East Germany, West Germany and Germany
        Highcharts.color(colors[5]).brighten(0.2).get(),
        Highcharts.color(colors[5]).brighten(0.1).get(),

        colors[5],
        colors[6],
        colors[7],
        colors[8],
        colors[9],
        colors[0],
        colors[1],
        colors[3],
        // Soviet Union, Russia
        Highcharts.color(colors[2]).brighten(-0.1).get(),
        Highcharts.color(colors[2]).brighten(-0.2).get(),
        Highcharts.color(colors[2]).brighten(-0.3).get()
    ],

    title: {
        floating: true,
        align: 'left',
        text: null
    },
    subtitle: {
        floating: true,
        align: 'left',
        y: 30,
        text: null
    },

    xAxis: {
        type: 'category',
        crosshair: false,
        categories: [
            
            '12 AM - 1 AM ',
            '1 AM - 2 AM',
            '2 AM - 3 AM',
            '3 AM - 4 AM',
            '4 AM - 5 AM',
            '5 AM - 6 AM',
            '6 AM - 7 AM',
            '7 AM - 8 AM',
            '8 AM - 9 AM',
            '9 AM - 10 AM',
            '10 AM - 11 AM',
            '11 AM - 12 PM',
            '12 PM - 1 PM',
            '1 PM - 2 PM',
            '2 PM - 3 PM',
            '3 PM - 4 PM',
            '4 PM - 5 PM',
            '5 PM - 6 PM',
            '6 PM - 7 PM',
            '7 PM - 8 PM',
            '8 PM - 9 PM',
            '9 PM - 10 PM',
            '10 PM - 11 PM',
            '11 PM - 12 AM',
            ''
        ],
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 10,
        margin: 40,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: true,
        endOnTick: true,
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        title: {
        color: '#FFC200 ',
        text: 'Vehicle Parking Status'
        },
        lang: {
            numericSymbols: ['k', 'm']
        }
    },

    legend: {
        enabled: false,
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: '#696969',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: '#000000',
            font: '600 10px "Muli", sans-serif'
        },
    },


    annotations: [{
        labels: [{
            point: {
                x: 5.5,
                xAxis: 0,
                y: 30,
                yAxis: 0
            },
            text: 'Peak Hour<br>'
        }, {
            point: {
                x: 18,
                xAxis: 0,
                y: 90,
                yAxis: 0
            },
            text: 'End of Day'
        }],
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'silver'
        }
    }],

    plotOptions: {
        series: {
            animation: {
                duration: 2000
            },
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            },
    
            dataLabels:{
                enabled:false
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: [{
        name: "Compliant",
        data: [
            2409, 7134, 9379, 8406, 5475, 3878, 7733, 5895, 615, 2680, 9422, 2765, 2223, 2335, 1864, 3234, 6643,
             8082, 6364, 1354, 1578, 5427, 5605
        ]
    }, {
        name: "Non-Compliant",
        color:'red',
        data: [
            5831, 5558, 4212, 3377, 4390, 5352, 8475, 1561, 4904, 4945, 1618, 9992, 8565, 259, 7635, 8521, 4845, 
            5045, 7581, 1375, 1867, 145, 6658
        ]
    }, 
    
   ],

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});
