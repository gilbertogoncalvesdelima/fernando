export const environment = {
  production: true,
  token: 'ZDNmMDdiOTUtOTUwZi00MDgzLWFhNDAtOWE4NmFiNjhiMTk0OmQ0OTdiM2VmLTQzNWMtNGMzNC04N2I2LWQ4NDZjZjNmMTE2ZQ==',
  instanceName: 'ACXP',  
  config_aplication: {
    novo_cookie: true,
    context_gateway: '/gestaoapolice/corpti/gateway',
    context_gateway_portal_properties: '/gestaoapolice/corpti/gateway/request/portal-properties',
    context_gateway_upload: '/gestaoapolice/corpti/gateway/arquivos/upload',
    version: '1.0.0'
  },
  config_local: {
    ambiente_local: true,
    mock_cookie: true,
    mock_login_cookie: 't808218',
    mock_tipo_cookie: 'corretor', /*assessoria, corretor, imobiliaria, representante*/
    context_gateway_upload_dev: 'http://sistemas-aceitew.tokiomarine.com.br/auxiliar/arquivo/upload'
  },
  config_comissao_vip: {
    vip_dev: '/gestaoapolice/comissao/api',
    vip_gateway: '/gestaoapolice/corpti/gateway/comissao'
  }
};