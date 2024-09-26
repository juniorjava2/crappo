"use client"
// src/components/CandlestickChart.tsx
import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-chart-financial'; // Import the financial chart plugin
import 'chartjs-adapter-date-fns'; // Import and register the date adapter

// Register all components used by Chart.js
//Chart.register(...registerables);
//Register the candlestick controller and element from the financial plugin
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';

// Register all components used by Chart.js
Chart.register(...registerables, CandlestickController, CandlestickElement);

// Rest of your code...

interface CandlestickData {
  t: number; // timestamp
  o: number; // open
  h: number; // high
  l: number; // low
  c: number; // close
}

interface CandlestickChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: CandlestickData[];
    }[];
  };
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'candlestick',
        data: {
          labels: data.labels,
          datasets: data.datasets.map((dataset) => ({
            ...dataset,
            data: dataset.data as any, // Type assertion for dataset data
          })),
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const dataPoint = tooltipItem.raw as CandlestickData;
                  const { o, h, l, c } = dataPoint;
                  return `Open: ${o}, High: ${h}, Low: ${l}, Close: ${c}`;
                },
              },
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
            },
            y: {
              beginAtZero: false,
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default CandlestickChart;
