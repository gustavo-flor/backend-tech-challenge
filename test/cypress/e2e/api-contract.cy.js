import api from '../support/api';
import faker from '../support/faker';
import { statusCode } from '../support/http';

describe('Test transfer endpoint contract constraints', () => {
  const id = faker.randomInteger(1, 5);
  const defaultBody = {
    valor: 100,
    tipo: 'c',
    descricao: 'descricao'
  }

  it('try do transfer with a negative value', () => {
    api.doTransfer(id, { ...defaultBody, valor: -1 })
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with a zero value', () => {
    api.doTransfer(id, { ...defaultBody, valor: 0 })
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with a null value', () => {
    api.doTransfer(id, { ...defaultBody, valor: null })
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with a null type', () => {
    api.doTransfer(id, { ...defaultBody, tipo: null })
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with an invalid type', () => {
    api.doTransfer(id, { ...defaultBody, tipo: 'a' })
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with a null description', () => {
    api.doTransfer(id, { ...defaultBody, descricao: null })
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with an empty description', () => {
    api.doTransfer(id, { ...defaultBody, descricao: '' })
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with a description greater than 10 chars', () => {
    api.doTransfer(id, { ...defaultBody, descricao: 'descricao 1' })
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with a zero identifier', () => {
    api.doTransfer(0, defaultBody)
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with a negative identifier', () => {
    api.doTransfer(-1, defaultBody)
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try do transfer with an undefined identifier', () => {
    api.doTransfer(6, defaultBody)
      .then(res => expect(res.status).equals(statusCode.notFound));
  });
});

describe('Test statement endpoint contract constraints', () => {
  it('try get statement with a zero identifier', () => {
    api.getStatement(0)
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try get statement with a negative identifier', () => {
    api.getStatement(-1)
      .then(res => expect(res.status).equals(statusCode.badRequest));
  });

  it('try get statement with an undefined identifier', () => {
    api.getStatement(6)
      .then(res => expect(res.status).equals(statusCode.notFound));
  });  
});
