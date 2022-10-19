import React, { useEffect, useState } from 'react';

import ApiService from '../api/ApiService';

import Discover from './Discover';

export default function Routes() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!isAuthorized) {
      const login = async () => {
        const token = await ApiService.getAuthorizationToken();

        if (token) {
          ApiService.setToken(token);
          setIsAuthorized(true);
        }
      };

      login();
    }
  }, [isAuthorized]);

  // Here you'd return an array of routes
  if (!isAuthorized) return null;

  return <Discover />;
}
