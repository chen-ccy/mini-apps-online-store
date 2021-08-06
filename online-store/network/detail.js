import {request} from "./request.js"

export function getDetail(iid,fn){
	let url ='/detail'
	let method = 'get'
	let data = {iid}
	return request(url,method,data,fn)
}

export function getRecommend(fn) {
	let url = '/recommend'
	let method = 'get'
  return request(url,method,"",fn)
}

export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }

}

export class ShopInfo {
  constructor(shopInfo) {
    this.fan = shopInfo.cFans
    this.goodsCount = shopInfo.cGoods
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name

  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}