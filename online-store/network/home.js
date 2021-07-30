import {request} from "./request.js"

export function getMultiData(url,methods,data,fn){
		return request(url,methods,data,fn)
	}
	
export function getHomeList(url,method='get',data='',fn){
	return request(url,method,data,fn)
}
