
import { wxRequest } from './wxRequest';


const apiMall = 'https://sujiefs.com';

/**
 *  WeChat **jscode**读取**sessionKey**
 */
const wxJsCode2Session = params => wxRequest(params, `${apiMall}/api/wechat/jscode2session`);

export {
    wxJsCode2Session
};