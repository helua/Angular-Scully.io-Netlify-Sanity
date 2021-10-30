export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'helua/Angular-Scully.io-Netlify-Sanity'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617d3bbc21a499b8f9a057e0',
                  title: 'Sanity Studio',
                  name: 'angular-scully-io-netlify-sanity-studio',
                  apiId: 'fbf4f9cf-48e9-482f-8cdf-6bb0df051cda'
                },
                {
                  buildHookId: '617d3bbcafb9cc5cb752261c',
                  title: 'Website',
                  name: 'angular-scully-io-netlify-sanity',
                  apiId: '348d16bf-8e98-40a8-9399-ed6967fce77b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helua/Angular-Scully.io-Netlify-Sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://angular-scully-io-netlify-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
