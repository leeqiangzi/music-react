import { getTopBanners } from '@/service/recommend';
import * as actionTypes from './constants';

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
})

export const getTopBannersAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res));
        })
    }
}