// src/utils/localStorageUtil.js

import localForage from 'localforage';

// Initialize localForage with a name and storeName to identify the database
localForage.config({
    name: 'CADGuardianApp',
    storeName: 'settings',
});

const localStorageUtil = {
    setItem: async (key, value) => {
        try {
            await localForage.setItem(key, value);
        } catch (error) {
            console.error('Failed to save to local storage:', error);
        }
    },

    getItem: async (key) => {
        try {
            const value = await localForage.getItem(key);
            return value;
        } catch (error) {
            console.error('Failed to retrieve from local storage:', error);
            return null;
        }
    },

    removeItem: async (key) => {
        try {
            await localForage.removeItem(key);
        } catch (error) {
            console.error('Failed to remove from local storage:', error);
        }
    },
};

export default localStorageUtil;
