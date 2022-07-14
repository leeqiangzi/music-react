import React, { memo, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getTopBannersAction } from './store/actionCreators';

function HYRecommend(props) {
    // 组件和redux关联：获取数据 + 进行操作
    const {topBanners} = useSelector(state => ({
        topBanners: state.recommend.topBanners
    }));
    const dispatch = useDispatch();

    // 发送网络请求
    useEffect(() => {
        dispatch(getTopBannersAction());
    }, [dispatch])

    return (
        <div>
            HYRecommend:{topBanners.length}
        </div>
    )
}

export default memo(HYRecommend);

// function HYRecommend(props) {
//     const {getBanners, topBanners} = props;
//     useEffect(()=> {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div>
//             HYRecommend：{topBanners.length}
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannersAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));