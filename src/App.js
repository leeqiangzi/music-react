import React, {memo} from 'react';
// 第三方
import {renderRoutes} from "react-router-config";
import {BrowserRouter, HashRouter} from "react-router-dom";

// 工具
import routes from "./router";

// 组件
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'

export default memo(function (App) {
    return (
        <BrowserRouter>
            <HYAppHeader/>
            {renderRoutes(routes)}
            <HYAppFooter/>
        </BrowserRouter>
    );
});
