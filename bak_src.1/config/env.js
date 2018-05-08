/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
import WebStorageCache from 'web-storage-cache'
let baseUrl;
let testUrl;
let routerMode;
let access_token;
let userIP = returnCitySN["cip"];
//console.log(console.log(returnCitySN["cip"]+','+returnCitySN["cname"]);
let wsCache = new WebStorageCache();
   access_token = wsCache.get('access_token');
// console.log('process.env.NODE_ENV>>>',process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://localhost:8003/api';
	/*模拟接口地址*/
	testUrl = 'http://192.168.1.209:7600/mock/59e9c19c9b1e40516cd51e67/api';
	routerMode = 'hash'
}else{
	baseUrl = location.origin + '/api';
	routerMode = 'hash'
}


export {
	baseUrl,
    testUrl,
	routerMode,
    access_token,
    userIP
}
