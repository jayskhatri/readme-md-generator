const questions = require('./')

describe('questions', () => {
  it('should export questions in the correct order', () => {
    const questionsNameOrder = Object.keys(questions)

    expect(questionsNameOrder).toEqual([
      'asktotalContributor',
      'askProjectName',
      'askProjectVersion',
      'askProjectDescription',
      'askProjectHomepage',
      'askProjectDocumentationUrl',
      'askAuhtorName',
      'askAuthorGithub',
      'askAuthorTwitter',
      'askProjectPrerequisites',
      'askLicenseName',
      'askLicenseUrl',
      'askContributing',
      'askInstallCommand',
      'askUsage',
      'askTestCommand'
    ])
  })
})
