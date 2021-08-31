import requests from 'services/httpService';
// import { IStore } from 'types'
class CategoryService {
  getCategories(): Promise<any> {
    return requests.get('/category');
  }
}

export default new CategoryService();
