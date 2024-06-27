import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { useChartData } from '../hooks/useChartData';
import TimeframeButtons from './TimeframeButtons';
import Modal from './Modal';
import { DataPoint } from '../types';

const ChartComponent: React.FC = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [selectedDataPoint, setSelectedDataPoint] = useState<DataPoint | null>(null);
  const chartData = useChartData(timeframe);

  const series = [{
    name: 'Value',
    data: chartData.map(point => ({
      x: new Date(point.timestamp),
      y: point.value
    }))
  }];

  const options = {
    chart: {
      type: 'line' as const, // Ensure type is one of the specific allowed values
      zoom: {
        enabled: true
      },
      events: {
        click: (event: any, chartContext: any, config: any) => {
          const dataPointIndex = config.dataPointIndex;
          const dataPoint = chartData[dataPointIndex];
          if (dataPoint) {
            setSelectedDataPoint(dataPoint);
          }
        }
      },
      toolbar: {
        show: true,
        tools: {
          download: true,
        }
      }
    },
    xaxis: {
      type: 'datetime' as const // Ensure type is 'datetime'
    },
    tooltip: {
      enabled: true
    }
  };

  return (
    <div>
      <TimeframeButtons setTimeframe={setTimeframe} />
      <ApexCharts options={options} series={series} type="line" height={350} />
      {selectedDataPoint && <Modal dataPoint={selectedDataPoint} onClose={() => setSelectedDataPoint(null)} />}
    </div>
  );
};

export default ChartComponent;
