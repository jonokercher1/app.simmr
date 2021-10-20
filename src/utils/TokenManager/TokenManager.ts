import AsyncStorage from '@react-native-async-storage/async-storage';

export enum TOKEN {
  ACCESS_TOKEN = 'access_token',
}

export default class TokenManager {
  static async setAccessToken(token: string) {
    return TokenManager.setToken(TOKEN.ACCESS_TOKEN, token);
  }

  static async getAccessToken() {
    return TokenManager.getToken(TOKEN.ACCESS_TOKEN);
  }

  static async removeAccessToken() {
    return TokenManager.removeToken(TOKEN.ACCESS_TOKEN);
  }

  private static setToken(tokenType: TOKEN, token: string) {
    return AsyncStorage.setItem(tokenType, token);
  }

  private static removeToken(tokenType: TOKEN) {
    return AsyncStorage.removeItem(tokenType);
  }

  private static getToken(tokenType: TOKEN) {
    return AsyncStorage.getItem(tokenType);
  }
}
