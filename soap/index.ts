import soapRequest from 'https://deno.land/x/easy_soap_request@v5.6.1/index.d.js'

const wsdlLocation =
  'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

const xmlEnvelop = `
  <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
      <consultaCEP xmlns="http://cliente.bean.master.sigep.bsb.correios.com.br/">
        <cep xmlns="">37540000</cep>
      </consultaCEP>
    </Body>
  </Envelope>
`

const headersValues = {
  'Content-Type': 'text/xml;charset=UTF-8',
  SOAPAction: '',
  'Content-Length': xmlEnvelop.length,
}

type SoapRequestResponse = {
  response: {
    status: number
    statusText: string
    headers: Record<string, string>
    body: string
  }
}

const { response }: SoapRequestResponse = await soapRequest({
  method: 'POST',
  url: wsdlLocation,
  headers: headersValues,
  xml: xmlEnvelop,
  extraOpts: {},
})

const { body } = response
console.log(body)
