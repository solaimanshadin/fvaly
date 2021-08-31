import requests from 'services/httpService';
import { IAuthData } from 'types';
class AuthService {
  login(body: { email: string; password: string }): Promise<IAuthData> {
    return requests.post(`/auth/login`, body);
  }

  logout(): Promise<any> {
    return requests.get(`/auth/logout`);
  }
}

export default new AuthService();
