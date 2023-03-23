describe('entry list spec', () => {
  before(() => {
    cy.visit('/');
  });
  it('should display a list of entries', () => {
    cy.get('[data-cy="entry-list]"').should('exist');
  });
  it('should add an entry', () => {
    // get how many entries
    cy.get('[data-cy="entry-list"]').then(($list) => {
      // capture what is length right now
      const entriesLength = $list.length;
      // add an entry
      cy.get('[data-cy="entry-add-btn"]').should('exist');
      cy.get('[data-cy="entry-add-btn"]').click();
      cy.get('[data-cy="entry-title"]').type('testEntry');
      cy.get('[data-cy="entry-content"]').type('testEntryContent');
      cy.get('[data-cy="entry-submit-btn"]')
        .click()
        .then(() => {
          const updatedLength = $list.length;
          expect(updatedLength).to.eq(entriesLength + 1);
        });
      // verify content of added entry
    });
  });
  it('should delete an entry', () => {
    // get how many entries
    cy.get('[data-cy="entry-list"]').then(($list) => {
      const entriesLength = $list.length;
      cy.get('[data-cy="entry-dlt-btn"]').should('exist');
      cy.get('[data-cy="entry-dlt-btn"]')
        .click()
        .then(() => {
          const updatedLength = $list.length;
          expect(updatedLength).to.eq(entriesLength - 1);
        });
    });
    // click on delete
    // check how many entries
  });
  it('should update an entry', () => {
    // get an entry
    // edit title and content
    // check it is edited
  });
});
