import {request} from './request'


export function getCategory() {
  return request('/category')
}

export function getSubcategory(maitKey) {
  return request('/subcategory',"",{maitKey})
}

export function getCategoryDetail(miniWallkey, type) {
	return request('/subcategory/detail',"",{miniWallkey,type})	
}
