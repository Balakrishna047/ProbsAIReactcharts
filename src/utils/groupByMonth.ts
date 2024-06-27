import { DataPoint } from '../types';

export const groupByMonth = (data: DataPoint[]): DataPoint[] => {
  const result: { [key: string]: DataPoint } = {};
  data.forEach(point => {
    const date = new Date(point.timestamp);
    const month = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    
    if (!result[month]) {
      result[month] = { timestamp: month, value: 0 };
    }
    result[month].value += point.value;
  });
  return Object.values(result);
};
