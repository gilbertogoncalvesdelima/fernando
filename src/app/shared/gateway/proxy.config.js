const proxy = [
  {
    //LOCAL
    context: ['/gestaoapolice/comissao/api'],
    target: 'http://localhost:8080'
  },
  {
    //AMBIENTES DEV e ACT
    context: ['/gestaoapolice/corpti/gateway/comissao'],
    target: 'http://sistemas-aceiteinty.tokiomarine.com.br'
  },
  {
    //PORTA-PROPERTIES COOKIE
    context: '/gestaoapolice/corpti/gateway/request/portal-properties',
    target: 'http://sistemas-aceiteinty.tokiomarine.com.br'
  }
]
module.exports = proxy;
