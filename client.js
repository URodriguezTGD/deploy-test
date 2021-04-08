import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'l1738c4s', // you can find this in sanity.json
  dataset: 'braintax-dataset', // or the name you chose in step 1
  apiVersion: '2021-03-25',
  useCdn: true // `false` if you want to ensure fresh data
})