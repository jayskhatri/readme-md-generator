const askAuthorName = require('./author-name')

describe('askAuthorName', () => {
  it('should return correct question format', () => {
    const author = 'Jay Khatri'
    const projectInfos = { author }

    const result = askAuthorName(projectInfos)

    expect(result).toEqual({
      type: 'input',
      message: '👤  Author name',
      name: 'authorName',
      default: author
    })
  })
})
