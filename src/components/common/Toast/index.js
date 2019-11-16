import Toast from './Toast'

const obj = {}
obj.install = function (vue) {
  // 1创建组件构造器
  console.log(vue);
  const toastConstructor = vue.extend(Toast)
  // 2 new的方式，根据组件构造器可以创造出来一个组件对象
  const toast = new toastConstructor()
//  3 将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  // 4 toast.$el 就是对应的div
  document.body.appendChild(toast.$el)
  vue.prototype.$toast = Toast
}

export  default  obj