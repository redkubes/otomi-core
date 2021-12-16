import { applyChanges, Changes, filterChanges } from './migrate'

describe('Upgrading values', () => {
  const oldVersion = '0.4.5'
  const mockChanges: Changes = [
    {
      version: '0.2.3',
      mutations: [{ 'some.version': 'printf "v%s"' }],
    },
    {
      version: '0.5.6',
      deletions: ['some.json.path'],
      locations: [{ 'some.json': 'some.bla' }],
    },
    {
      version: '0.7.8',
      mutations: [{ 'some.version': 'printf "v%s"' }],
    },
  ]

  describe('Filter changes', () => {
    it('should only apply changes whose version >= current version', () => {
      expect(filterChanges(oldVersion, mockChanges)).toEqual([
        {
          version: '0.5.6',
          deletions: ['some.json.path'],
          locations: [{ 'some.json': 'some.bla' }],
        },
        {
          version: '0.7.8',
          mutations: [{ 'some.version': 'printf "v%s"' }],
        },
      ])
    })
  })
  describe('Apply changes to values', () => {
    const mockValues = { some: { json: { path: 'bla' }, version: '1.18' } }
    it('should apply changes to values', async () => {
      await applyChanges(mockValues, filterChanges(oldVersion, mockChanges))
      expect(mockValues).toEqual({ some: { bla: {}, version: 'v1.18' } })
    })
  })
})
