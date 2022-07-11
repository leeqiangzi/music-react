import React, { memo } from 'react';
// 第三方
import { renderRoutes } from "react-router-config";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';

// 工具
import routes from "./router";
import store from './store';

// 组件
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'

export default memo(function (App) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <HYAppHeader />
                {renderRoutes(routes)}
                <HYAppFooter />
            </BrowserRouter>
        </Provider>
    );
});
