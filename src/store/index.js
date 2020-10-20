import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import webReducer from './websiteState';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
    reducer: {
        web: webReducer
    },
    middleware
});

export default store;