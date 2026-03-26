console.log('Homepage schema loaded')

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'loginText',
      title: 'Login Button Text',
      type: 'string'
    },
    {
      name: 'loginLink',
      title: 'Login Link',
      type: 'string'
    }
  ]
}