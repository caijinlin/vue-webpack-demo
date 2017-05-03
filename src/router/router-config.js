import Basic from '@/components/Baisc/Index.vue'

const routes = [
  {
    path: '/',
    component: Basic
  },
  {
    path: '/basic',
    component: Basic,
    children: [{
      path: 'index',
      component: Basic
    }]
  }
]

export default routes
