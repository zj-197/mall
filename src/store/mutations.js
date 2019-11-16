export default {
  addCount(state,product) {
    product.count+=1
  },
  addNew(state,payload){
    payload.count = 1
    payload.checked = true
    state.cart.push(payload)
  }
}