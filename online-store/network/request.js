export function request(url,method,data,fn){
		return uni.request({
			url: getApp().globalData.baseUrl + url,
			method: method || "get",
			data: data || {},
			success: fn
		})
	}

