'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});

function floatchart() {
  (function () {
    var options = {
      chart: {
        height: 450,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1890ff', '#13c2c2'],
      series: [{
        name: 'Page Views',
        data: [0, 0, 0, 0, 0, 0, 0]
      }, {
        name: 'Sales',
        data: [0, 0, 0, 0, 0, 0, 0]
      }],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }
    };
    var chart = new ApexCharts(document.querySelector('#visitor-chart'), options);
    chart.render();
    var options1 = {
      chart: {
        height: 450,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1890ff', '#13c2c2'],
      series: [{
        name: 'Page Views',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        name: 'Sales',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      }
    };
    var chart = new ApexCharts(document.querySelector('#visitor-chart-1'), options1);
    chart.render();
  })();

  (function () {
    var options = {
      chart: {
        type: 'bar',
        height: 365,
        toolbar: {
          show: false
        }
      },
      colors: ['#13c2c2'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        data: [40, 80, 100, 50, 70,40, 60]
      }],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#income-overview-chart'), options);
    chart.render();
  })();

  (function () {
    var options = {
      chart: { type: 'bar', height: 100, sparkline: { enabled: true } },
      colors: ['#1890ff'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [
            10, 70, 80, 40, 50, 70, 40, 50, 40
          ]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
   
    var chart = new ApexCharts(document.querySelector('#total-value-graph-1'), options);
    chart.render();
  })();
 

  (function () {
    var options = {
      chart: { type: 'area', height: 100, sparkline: { enabled: true } },
      colors: ['#ff4d4f'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [70, 20, 40, 80, 60, 90, 100, 10]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-2'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'bar', height: 100, sparkline: { enabled: true } },
      colors: ['#faad14'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [
            40, 20, 100, 70, 80, 50, 40
          ]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-3'), options);
    chart.render();
  })();
  (function () {
    var options = {
      chart: { type: 'area', height: 100, sparkline: { enabled: true } },
      colors: ['#1890ff'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [50, 40, 80,100, 50, 75, 80, 60, 45, 70]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      stroke: {
        curve: 'straight',
        width: 1.5
      },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-value-graph-4'), options);
    chart.render();
  })();

  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 355,
        toolbar: {
          show: false
        }
      },
      colors: ['#1890ff'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [{
        data: [100, 40, 60, 40, 40, 40, 80, 40, 40, 50, 40, 40]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
    };
    var chart = new ApexCharts(document.querySelector('#income-overview-tab-chart'), options);
    chart.render();
    var options1 = {
      chart: {
        type: 'area',
        height: 355,
        toolbar: {
          show: false
        }
      },
      colors: ['#1890ff'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [{
        data: [100, 20, 60, 20, 20, 80, 20]
      }],
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
    };
    var chart = new ApexCharts(document.querySelector('#income-overview-tab-chart-1'), options1);
    chart.render();
  })();

}
