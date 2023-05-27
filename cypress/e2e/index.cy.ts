describe('Authentication App e2e tests', () => {
  beforeEach(() => {
    cy.fixture('context').then((context) => {
      Object.keys(context).forEach((contextVariable) => {
        const contextVariableValue = context[contextVariable];
        window.localStorage.setItem(contextVariable, contextVariableValue);
      });
    });

    cy.visit('');
  });

  it('should do something', () => {
    
  });
});