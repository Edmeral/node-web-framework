const should = require('should')
const rewire = require('rewire')

const Router = rewire(('../lib/router/'))

describe('Router', () => {
  const params = Router.__get__('params')
  const routeToRegExp = Router.__get__('routeToRegExp')

  it('should parse correct parameters for dynamic routes', () => {
    let paramsObj = params('/foo/bar', '/:param1/:param2')
    should(paramsObj).have.property('param1', 'foo')
    should(paramsObj).have.property('param2', 'bar')
  })

  it('should convert the route to a its correct corresponding regexp', () => {
    routeToRegExp('/foo/bar').test('/foo/bar').should.be.true()
  })

})