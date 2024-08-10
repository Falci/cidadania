/// <reference types="cypress" />

const DATA = {
  NIE: '60077953K',
  NAME: 'Fernando Falci Largura',
  YEAR: '1989',
  PHONE: '611231876',
  EMAIL: '-',
  PASSPORT: '-',
  SOLICITUD: '22/10/2021',
  COUNTRY: 'BRASIL',
};

describe('Cita', () => {
  before(() => {
    cy.visit('https://sede.administracionespublicas.gob.es/icpplustiej/citar?org=JUS-RC&locale=es');
  });

  it('should fill the forms', async () => {
    cy.get('#provincia').select('Barcelona');

    // cy.get('#sede').select('REGISTRO CIVIL Nº 2 DE BARCELONA, PLAÇA DEL DUC DE MEDINACELI, 3');
    cy.get('#sede').select('REGISTRO CIVIL Nº 3 DE BARCELONA, PLAÇA DEL DUC DE MEDINACELI, 3');
    cy.wait(200);
    // cy.get('.mf-input__l').select('JURA DE NACIONALIDAD ESPAÑOLA');
    cy.get('.mf-input__l')
      .eq(0)
      .select('INSCRIPCIÓN DE MATRIMONIO CELEBRADO EN EL EXTRANJERO EN EL REGISTRO CIVIL CENTRAL (BCN)');
    cy.get('#btnAceptar').click();

    // Lea atentamente
    cy.get('#btnEntrar').click();

    // cy.contains('N.I.E').click();
    cy.get('#txtIdCitado').type(DATA.NIE);
    cy.get('#txtDesCitado').type(DATA.NAME);
    cy.get('#txtAnnoCitado').type(DATA.YEAR);
    cy.get('#txtPaisNac').select(DATA.COUNTRY);
    cy.get('#btnEnviar').click();

    // Soliciar cita
    cy.get('#btnEnviar').click();

    cy.get('#txtTelefonoCitado').type(DATA.PHONE);
    cy.get('#emailUNO').invoke('val', DATA.EMAIL);
    cy.get('#emailDOS').invoke('val', DATA.EMAIL);
    cy.get('#txtObservaciones').type('Jura para nacionalidad espanola');
    cy.get('#txtIdExtranjero').type(DATA.PASSPORT);
    cy.get('#txtDesExtranjero').type(DATA.NAME);
    cy.get('.mf-input__m').type(DATA.NAME);
  });
});
