import {request} from "./request.js"

export function getMultiData(url,methods,data,fn){
		return request(url,methods,data,fn)
	}
	
export function getHomeList(data='',fn){
	let url='/home/data'
	let method='get'
	return request(url,method,data,fn)
}
