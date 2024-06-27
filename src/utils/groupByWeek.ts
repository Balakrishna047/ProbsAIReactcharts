import { DataPoint } from '../types';

export const groupByWeek = (data: DataPoint[]): DataPoint[] => {
  const result: { [key: string]: DataPoint } = {};
  data.forEach(point => {
    const date = new Date(point.timestamp);
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000) + startOfYear.getDay() + 1) / 7);
    const week = `${date.getFullYear()}-W${weekNumber.toString().padStart(2, '0')}`;
    
    if (!result[week]) {
      result[week] = { timestamp: week, value: 0 };
    }
    result[week].value += point.value;
  });
  return Object.values(result);
};
