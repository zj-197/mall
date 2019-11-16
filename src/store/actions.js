export default  {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let product = context.state.cart.find((item) => item.iid === payload.iid)
      if (product) {
        context.commit('addCount',product)
        resolve('该商品数量加1')
      }
      else {

        context.commit('addNew',payload)
        resolve('加入购物车成功')
      }
    })
  }
}