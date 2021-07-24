export function request(url,method,data){
		return uni.request({
			url: getApp().globalData.baseUrl + url,
			method: method || "get",
			data: data || {}
		})
	}

