import { Axios } from 'axios';
import Config from 'react-native-config';
import TokenManager from '../TokenManager/TokenManager';

export class RequestManager extends Axios {
  constructor() {
    super({
      baseURL: Config.API_URL,
    });

    this.setAuthHeader();
  }

  private setAuthHeader() {
    this.interceptors.request.use((config) => {
      const token = TokenManager.getAccessToken();
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };

      return config;
    });
  }
}

export default new RequestManager();
