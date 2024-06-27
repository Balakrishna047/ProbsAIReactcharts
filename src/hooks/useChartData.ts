import { useState, useEffect } from 'react';
import { DataPoint } from '../types';
import { processData } from '../utils/processData';

export const useChartData = (timeframe: string) => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [processedData, setProcessedData] = useState<DataPoint[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    setProcessedData(processData(data, timeframe));
  }, [data, timeframe]);

  return processedData;
};