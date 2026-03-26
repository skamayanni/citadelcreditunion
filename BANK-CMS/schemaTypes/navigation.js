export default {
  name: 'navigation',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    {
      name: 'links',
      title: 'Menu Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' }
          ]
        }
      ]
    }
  ]
}