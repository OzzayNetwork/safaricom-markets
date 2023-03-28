Highcharts.chart('item_clamped_chart', {

    chart: {
        type: 'item',
        backgroundColor: 'transparent'
    },

    title: {
        text: null
    },

    subtitle: {
        text: null
    },

    accessibility: {
        announceNewData: {
          enabled: true
        }
    },

    yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Number of Boats'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: '#a5a8ad'
            }
        }
    },
    xAxis: {
        type: 'category'
    },

    		legend: {
        layout: 'vertical',
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
    legend: {
        labelFormat: '<span style="font-size:10px;">{name} <span style="font-weight:bold; font-size:10px;  color:{x.point.color}">{y}</span><span>'
    },
    plotOptions:{
        series: {
          animation: {
            duration: 2000
        },
            dataLabels:{
                enabled:true
            }
        }
    },

    series: [{
        name: 'Boats',
        data: [{
            name: 'Compliant',
            y: 3201,
            colors: '#64A12D',
            drilldown: "Compliant"
        },{
            name: 'Non-Compliant',
            y: 2500,
            colors: '#EB001F',
            drilldown: "Non-Compliant"

        }],
        
        // dataLabels: {
        //     enabled: true,
        //     format: '{point.label}'
        // },

        // Circular options
        center: ['50%', '88%'],
        size: '120%',
        startAngle: -100,
        endAngle: 100
    }],  
    
    drilldown: {
        series: [
          {
            type: 'column',
            name: "Compliant",
            id: "Compliant",
            data: [
              [
                "Ndhiwa",
                100 
              ],
              [
                "Homa-Bay-Town",
                181 
              ],
              [
                "Rachuonyo-North",
                325 
              ],
              [
                "Rachuonyo-South",
                41 
              ],
              [
                "Rachuonyo-East",
                88
              ],
              [
                "Rangwe",
                56
              ],
              [
                "Suba-North",
                45
              ],
              [
                "Kalanya",
                49
              ],
              [
                "Kanyabala",
                32
              ],
              [
                "Katuma",
                29
              ]
             
            ]
          },
          {
            type: 'column',
            name: "Non-Compliant",
            id: "Non-Compliant",
            data: [
                [
                  "Ndhiwa",
                  100 
                ],
                [
                  "Homa-Bay-Town",
                  181 
                ],
                [
                  "Rachuonyo-North",
                  325 
                ],
                [
                  "Rachuonyo-South",
                  41 
                ],
                [
                  "Rachuonyo-East",
                  88
                ],
                [
                  "Rangwe",
                  56
                ],
                [
                  "Suba-North",
                  45
                ],
                [
                  "Kalanya",
                  49
                ],
                [
                  "Kanyabala",
                  32
                ],
                [
                  "Katuma",
                  29
                ]
               
              ]
          },
          {
            type: 'column',
            name: "Clamped",
            id: "Clamped",
            data: [
                [
                  "Ndhiwa",
                  100 
                ],
                [
                  "Homa-Bay-Town",
                  181 
                ],
                [
                  "Rachuonyo-North",
                  325 
                ],
                [
                  "Rachuonyo-South",
                  41 
                ],
                [
                  "Rachuonyo-East",
                  88
                ],
                [
                  "Rangwe",
                  56
                ],
                [
                  "Suba-North",
                  45
                ],
                [
                  "Kalanya",
                  49
                ],
                [
                  "Kanyabala",
                  32
                ],
                [
                  "Katuma",
                  29
                ],
                [
                  "Kenyatta Market",
                  79
                ],
                [
                  "Kijabe",
                  18
                ],
               
              ]
          },
          {
            type: 'column',
            name: "To Be Unclamped",
            id: "To Be Unclamped",
            data: [
                [
                  "Ndhiwa",
                  100 
                ],
                [
                  "Homa-Bay-Town",
                  181 
                ],
                [
                  "Rachuonyo-North",
                  325 
                ],
                [
                  "Rachuonyo-South",
                  41 
                ],
                [
                  "Rachuonyo-East",
                  88
                ],
                [
                  "Rangwe",
                  56
                ],
                [
                  "Suba-North",
                  45
                ],
                [
                  "Kalanya",
                  49
                ],
                [
                  "Kanyabala",
                  32
                ],
                [
                  "Katuma",
                  29
                ],
                [
                  "Kenyatta Market",
                  79
                ],
                [
                  "Kijabe",
                  18
                ],
                [
                  "Kilimani",
                  13
                ],
                [
                  "Kombo",
                  500
                ],
                [
                  "Langata Rd",
                  401 
                ],
                [
                  "Lavington",
                  223 
                ],
                [
                  "Muthaiga",
                  196 
                ],
                [
                  "Nairobi West",
                  469 
                ]
              ]
          }
        ]
    }
});
