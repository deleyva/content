// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CATEDU',
  siteDescription: 'El Centro Aragonés de Tecnologías para la Educación (CATEDU) depende del Departamento de Educación, Cultura y Deporte del Gobierno de Aragón: Es Centro de Profesorado específico de formación a distancia del profesorado y ofrece servicios destinados a incentivar y facilitar el uso de las TIC en la educación.',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [{
    // Create posts from markdown files
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Post',
      path: 'content/posts/*.md',
      refs: {
        // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
        tags: {
          typeName: 'Tag',
          create: true
        }
      }
    }
  }],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}