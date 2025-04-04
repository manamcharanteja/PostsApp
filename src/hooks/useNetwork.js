import { useState, useEffect, useCallback } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetwork = () => {
  const [isConnected, setIsConnected] = useState(true);

  const checkNetworkStatus = useCallback(async () => {
    try {
      const state = await NetInfo.fetch();
      setIsConnected(state.isConnected);
    } catch (error) {
      console.error('Failed to fetch network status:', error);
    }
  }, []);

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return unsubscribe;
  }, []);

  return {
    isConnected,
    checkNetworkStatus,
  };
};

export default useNetwork;
