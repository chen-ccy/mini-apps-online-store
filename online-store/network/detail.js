import {request} from "./request.js"

export function getSwiper(iid,fn){
	let url ='/detail'
	let method = 'get'
	let data = {iid}
	return request(url,method,data,fn)
}