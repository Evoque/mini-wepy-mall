
import { wxRequest } from './wxRequest';


const apiMall = 'https://sujiefs.com';

/**
 *  WeChat **jscode**读取**sessionKey**
 */
const wxJsCode2Session = params => wxRequest(`${apiMall}/api/wechat/jscode2session`, params);

/**
 *  **广告列表**
 */
const getAdList = _ => wxRequest(`${apiMall}/api/adverts/list`);

/**
 *  首页点击header之后的商品列表
 */
const getGoodsList = params => wxRequest(`${apiMall}/api/home/hostGoodsList`, params);

const getHomeDisvocerList = (params) => wxRequest(`${apiMall}/api/mall/discoverList`, params);

export {
    wxJsCode2Session,
    getAdList,
    getGoodsList,
    getHomeDisvocerList
};