const askTotalAuthors = require('./total-author')

describe('totalContributor', () => {
  it('should return correct question format', () => {
    const totalAuthors = '1'
    const projectInfos = { totalAuthors }

    const result = askTotalAuthors(projectInfos)

    expect(result).toEqual({
      type: 'input',
      message: '👤  Total Authors',
      name: ' totalAuthors',
      default: totalAuthors
    })
  })
})
