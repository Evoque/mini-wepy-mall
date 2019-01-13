
import wepy from 'wepy';
import { getCurrentTime } from './util';
import md5 from './md5';
import tip from './tip';

const API_SECRET_KEY = 'www.mall.cycle.com';
const time = getCurrentTime();
const sign = md5.hex_md5((time + API_SECRET_KEY).toLowerCase());

const wxRequest = async (url, params = {}) => {
    tip.loading();
    const { method = 'GET' } = params;
    let data = { ...params.data, sign, time };
    const res = await wepy.request({
        url, method, data,
        header: { 'Content-Type': 'application/json' }
    });
    tip.loaded();
    return res;
};

export { wxRequest };