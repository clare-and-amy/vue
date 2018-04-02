export default [{
  path: '/',
  name: 'index',
  component: resolve => {
    require.ensure([], () => {
      resolve(require('@/components/Index'))
    })
  }
}]
