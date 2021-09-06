import { IDashboardStats } from './../types';
import requests from 'services/httpService';

class DashboardService {
  getStats(): Promise<IDashboardStats> {
    return requests.get('/dashboard/stats');
  }
}

export default new DashboardService();
