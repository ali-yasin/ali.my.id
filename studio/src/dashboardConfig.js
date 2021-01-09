export default {
  widgets: [
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
                  buildHookId: '5ff9c5fa349da72f531cfd59',
                  title: 'Sanity Studio',
                  name: 'ali-my-id-studio',
                  apiId: '6cfcff72-45de-4b2f-aafb-77ddc9d74f39'
                },
                {
                  buildHookId: '5ff9c5fafce2f33374e93826',
                  title: 'Blog Website',
                  name: 'ali-my-id',
                  apiId: '282b24b5-3962-45b6-8242-67adca0fbbf5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ali-yasin/ali.my.id',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ali-my-id.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
