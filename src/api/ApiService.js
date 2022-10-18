import config from "../config";
import axios from "axios";

class ApiService {
  constructor() {
    this.baseUrl = config.api.baseUrl;
    this.authUrl = config.api.authUrl;
    this.clientId = config.api.clientId;
    this.clientSecret = config.api.clientSecret;
  }

  token = null;

  async getAuthorizationToken() {
    const encodedCredentials = btoa(`${this.clientId}:${this.clientSecret}`);

    try {
      const response = await axios.post(
        `${this.authUrl}`,
        "grant_type=client_credentials",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encodedCredentials}`,
          },
        }
      );

      const token = response.data.access_token;

      return token;
    } catch (e) {
      console.log(e);
    }
  }

  async fetchNewReleases() {
    try {
      const { data } = await axios.get(`${this.baseUrl}/browse/new-releases`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      return data.albums;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async fetchPlaylists() {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}/browse/featured-playlists`,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      return data.playlists;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async fetchCategories() {
    try {
      const { data } = await axios.get(`${this.baseUrl}/browse/categories`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      return data.categories;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  setToken(token) {
    this.token = token;
  }
}

export default new ApiService();
