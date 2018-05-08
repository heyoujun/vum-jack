import { baseUrl,testUrl } from './env'
import  router  from '../router/index'
import WebStorageCache from 'web-storage-cache'
import { Loading } from 'element-ui';
import { Notification } from 'element-ui';
import Vue from 'vue';
import $ from 'jquery';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'





export default async(url = '', data = {}, type = 'GET', method = 'fetch', isFile = false) => {
    // console.log('url',url);
	type = type.toUpperCase();
	if(url.indexOf('.json')==-1){
        url = baseUrl + url;
        // console.log('请求接口地址',url);
    }
    if(url.indexOf('.json')!=-1){
        url = testUrl + url;
    }
    let wsCache = new WebStorageCache();
    // wsCache.clear();
    let access_token = wsCache.get('access_token');
	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})
        // console.log('dataStr>>',dataStr);
		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr+'&timestamp=' + new Date().getTime();
			// console.log('url>>',url);
		}else{
      url = url + '?timestamp=' + new Date().getTime();
    }
	}
    if (type == 'DELETE') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })
        // console.log('dataStr>>',dataStr);
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr+'&timestamp=' + new Date().getTime();
            // console.log('url>>',url);
        }else{
          url = url + '?timestamp=' + new Date().getTime();
        }
    }
	if (window.fetch && method == 'fetch') {
        let headers = {};
	    if (isFile) {
            headers = {
                'AUTHORIZATION': 'Bearer ' + access_token
            }
        } else {
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'AUTHORIZATION': 'Bearer ' + access_token
            }
        }

        let requestConfig = {
			credentials: 'include',
			method: type,
			headers: headers,
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: !isFile ? JSON.stringify(data) : data
			})
		}

		try {
            //判断是否调用的正常接口，如果不是则调用Mock模拟数据
	        if(url.indexOf('.json')==-1){


                // let lloadingInstance  = Loading.service({ fullscreen: true ,text:'加载数据中...'})
                NProgress.start();
                var response = await fetch(url, requestConfig);
                // console.log('response》》》》》',response.status);
                //console.log("222",response);

                if(response.status==200){
                  var responseJson = await response.json();
                  NProgress.done();
                  return responseJson;
                }else{

                  //如果接口请求返回403则跳转到登陆页面
                  if(response.status==401 || response.status==403 || response.status==427){
                      // router.push('/');
                      let loginstate = wsCache.get('loginstate');
                      // console.log('loginstate', wsCache.get('loginstate'));
                      if(loginstate=='admin'){
                        // console.log('跳转到米筑后台登陆页面');
                        //清空localStorage
                        wsCache.clear();
                        //跳转到登陆页面
                        router.push('/adminlogin');
                      }
                      if(loginstate=='salesman_new' || loginstate=='company_admin'){
                        // console.log('跳转到登陆页面');
                        //清空localStorage
                        wsCache.clear();
                        //跳转到登陆页面
                        router.push('/');
                      }
                      if(loginstate=='material_admin'){
                        // console.log('跳转到材料商后台登陆页面');
                        //清空localStorage
                        wsCache.clear();
                        //跳转到登陆页面
                        router.push('/stufflogin');
                      }

                      localStorage.removeItem('userItems')

                      if(document.getElementsByClassName('el-notification').length<1){
                        let msgText = '';
                        if(response.status==401){
                          msgText = '您登录的账号或密码不正确！';
                        }
                        if(response.status==403){
                          msgText = '您登录的账号，没有权限！';
                        }
                        if(response.status==427){
                          msgText = '您登录的账号所在公司已被冻结！';
                        }
                        Notification({
                          title: '错误',
                          type: 'error',
                          message: msgText
                        })

                        // response.text().then(function (text) {
                        //   // console.log('text>>>>>',$(text)[9].innerHTML);
                        //   var msg = $(text)[9].innerHTML;
                        //   Notification({
                        //     title: '错误',
                        //     type: 'error',
                        //     message: msg
                        //   })
                        // });
                        wsCache.clear();
                        // setTimeout(function(){
                        //   location.reload()
                        // },2000)
                      }

                      /*如果接口返回的是其它状态码，则弹出提示并且跳刀登陆页面*/
                  }else{
                    return;
                    let loginstate = wsCache.get('loginstate');
                    //console.log('loginstate', wsCache.get('loginstate'));
                    if(loginstate=='admin'){
                      // console.log('跳转到米筑后台登陆页面');
                      //清空localStorage
                      wsCache.clear();
                      //跳转到登陆页面
                      router.push('/adminlogin');
                    }
                    if(loginstate=='salesman' || loginstate=='company_admin'){
                      // console.log('跳转到登陆页面');
                      //清空localStorage
                      wsCache.clear();
                      //跳转到登陆页面
                      router.push('/');
                    }
                    if(loginstate=='material_admin'){
                      // console.log('跳转到材料商后台登陆页面');
                      //清空localStorage
                      wsCache.clear();
                      //跳转到登陆页面
                      router.push('/stufflogin');

                    }

                    localStorage.removeItem('userItems')

                    if(document.getElementsByClassName('el-notification').length<1){
                      response.text().then(function (text) {
                        // console.log('text>>>>>',$(text)[9].innerHTML);
                        var msg = $(text)[9].innerHTML;
                        Notification({
                          title: '错误',
                          type: 'error',
                          message: msg
                        })
                      });
                    }
                    location.reload();
                  }
                  NProgress.done();
                  return {resultCode:response.status};
                }

                // lloadingInstance.close();
            }else{
	            //Mock方式返回模拟数据
                var responseJson = {};
                var jsonUrl = url.substr(0, (url.indexOf('.json')+5));
                // var jsonUrl = 'http://localhost:7300/mock/59e44aafb4ac6924685c18cd/api'+url;
                //console.log('jsonUrl',jsonUrl);
                // console.log(type,url,url.substr(0, (url.indexOf('.json')+5)));

                $.ajax({
                    async:false,
                    type: type,
                    url: jsonUrl,
                    success: function(data){
                        // console.log('返回数据》》',data);
                        // responseJson.resultCode = '20000';
                        // responseJson.resultMsg = '获取成功';
                        // responseJson.data =  JSON.parse(data).data;
                        responseJson =  data;
                         // console.log('responseJson',responseJson);
                    }
                  });
            return responseJson;
            }



        } catch (error) {
	        // console.log('错误',error);

			throw new Error(error)
		}
        // console.log('返回结果>>',responseJson);

	} else {
		return new Promise((resolve, reject) => {
		    //console.log(resolve, reject);
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}
