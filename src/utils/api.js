
import { wxRequest } from './wxRequest';


const apiMall = 'https://sujiefs.com';

/**
 *  WeChat **jscode**读取**sessionKey**
 */
const wxJsCode2Session = params => wxRequest(`${apiMall}/api/wechat/jscode2session`, params);

export {
    wxJsCode2Session
};