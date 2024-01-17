describe('template spec', () => {
  it('inputs various keys to the navbar search box', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.get("#boardSelector")
      .click()
      .type("anim")
      .type('{del}{selectall}{backspace}')

      .type("anim")
      // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')

      // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')
      .type('{downarrow}{downarrow}{enter}')
  })
})