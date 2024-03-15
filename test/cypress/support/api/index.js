const get = (url) => {
  return cy.request({
    method: 'GET',
    url,
    headers: {
      'Accept': 'application/json'
    },
    failOnStatusCode: false
  });
}

const post = (url, body) => {
  return cy.request({
    method: 'POST',
    url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body,
    failOnStatusCode: false
  });
}

const doTransfer = (id, body) => {
  return post(`/clientes/${id}/transacoes`, body);
}

const getStatement = (id) => {
  return get(`/clientes/${id}/extrato`);
}

export default {
  doTransfer,
  getStatement
}