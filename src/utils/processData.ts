import { DataPoint } from '../types';
import { groupByWeek } from './groupByWeek';
import { groupByMonth } from './groupByMonth';

export const processData = (data: DataPoint[], timeframe: string): DataPoint[] => {
  switch (timeframe) {
    case 'weekly':
      return groupByWeek(data);
    
    case 'monthly':
      return groupByMonth(data);
    default:
      return data;
  }
};

