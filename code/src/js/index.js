import ApexCharts from 'apexcharts';
import { themes } from './themes';

const theme = themes[document.documentElement.getAttribute('data-theme') || 'light'];

const revenueChart = new ApexCharts(document.querySelector('#revenue-chart'), {
  colors: [theme.colors.primary],
  theme: {
    mode: theme.mode,
  },
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
    background: 'transparent',
    fontFamily: 'iran-yekan, Arial, Helvetica, sans-serif',
  },
  grid: {
    show: true,
    position: 'back',
    borderColor: 'oklch(var(--b3))',
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: function (val) {
        return Number(val).toLocaleString('fa-IR');
      },
    },
  },
  stroke: {
    curve: 'smooth',
  },
  series: [
    {
      name: 'درآمد سالانه',
      data: [5_000_000, 4_500_000, 7_890_632, 10_432_146, 8_367_985],
    },
  ],

  xaxis: {
    categories: ['1398', '1399', '1400', '1401', '1402'],
  },
  yaxis: {
    show: false,
  },
});

const saleChart = new ApexCharts(document.querySelector('#sale-chart'), {
  colors: ['oklch(var(--p))', 'oklch(var(--s))', 'oklch(var(--in))', 'oklch(var(--wa))', 'oklch(var(--su))', 'oklch(var(--er))'],
  theme: {
    mode: theme.mode,
  },
  chart: {
    type: 'donut',
    background: 'transparent',
    fontFamily: 'iran-yekan, Arial, Helvetica, sans-serif',
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    y: {
      show: true,
      formatter: function (val) {
        return Number(val).toLocaleString();
      },
    },
  },
  series: [1056, 587, 4654, 1312],
  labels: ['کالای دیجیتال', 'مد و پوشاک', 'ابزار آلات', 'خانه و آشپزخانه'],
  plotOptions: {
    pie: {
      donut: {
        size: '80%',
        labels: {
          show: true,
          name: {
            color: 'oklch(var(--bc))',
          },
          value: {
            color: 'oklch(var(--bc))',
            formatter: function (val) {
              return Number(val).toLocaleString();
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: 'کل فروش',

            formatter: function (val) {
              return val.globals.seriesTotals
                .reduce((a, b) => {
                  return a + b;
                }, 0)
                .toLocaleString();
            },
          },
        },
      },
    },
  },
});

revenueChart.render();

saleChart.render();
