import {request} from "./request";
export function detail(iid) {
    return request({
      url:'/detail',
      params :{
        iid
      }
    })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}
export  class goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc =itemInfo.desc
    this.price = itemInfo.price
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice =itemInfo.lowNowPrice
  }
}
  export class  shopInfo {
  constructor(shopInfo){
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.score= shopInfo.score
    this.shopUrl=shopInfo.shopUrl

  }
  }
  export class userRate {
    constructor(list){
     this.uname = list.user.uname;
     this.content =list.content
      this.style = list.style
      this.avatar = list.user.avatar
    }
  }
// export function desc() {
//      return request({
//
//      })
// }