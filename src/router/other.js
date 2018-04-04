export default [{
  path: '/',
  name: 'index',
  component: resolve => {
    require.ensure([], () => {
      resolve(require('@/components/Index'))
    })
  }
},
{
  path: '/test/index',
  name: 'test-index',
  component: resolve => {
    require.ensure([], () => {
      resolve(require('@/components/Test'))
    })
  }
}]
