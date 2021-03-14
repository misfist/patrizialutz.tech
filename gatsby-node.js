const path = require(`path`)
const chunk = require(`lodash/chunk`)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
const { dd } = require(`dumper.js`);

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    node: { fs: 'empty' },
  })
}

exports.onCreateNode = ({ node }) => {
  console.log( `Node created of type "${node.internal.type}"` )
}

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {

  // Query our posts from the GraphQL server
  const posts = await getNodes( gatsbyUtilities )

  if( !posts.length ) {
    return
  }

  // If there are posts and pages, create Gatsby pages for them
  await createIndividualPages({ posts, gatsbyUtilities })

  // And a paginated archive
  await createProjectArchive({ posts, gatsbyUtilities })
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: post.uri,

        // use the blog post template as the page component
        component: path.resolve(
          `./src/templates/${post.__typename.replace( `Wp`, `` )}.js`
        ),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
)

/**
 * This function creates all the individual blog pages in this site
 */
/**
 * This function creates all the individual blog pages in this site
 */
async function createProjectArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // Since our homepage is our blog page
          // we want the first page to be "/" and any additional pages
          // to be numbered.
          // "/blog/2" for example
          return page === 1 ? `/projects/` : `/projects/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/ProjectArchive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getNodes({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      
      allWpPage(
        filter: {
          slug: {
            ne: "home"
          }
        }
        sort: {
            order: ASC, fields: menuOrder
        }) {
      edges {
        next {
          id
        }
        previous {
          id
        }
        post: node {
          __typename
          uri
          id
        }
      }
    }
    allWpPost(
        sort: {
            fields: date, order: DESC
        }) {
      edges {
        post: node {
          __typename
          id
          uri
        }
        next {
          id
        }
        previous {
          id
        }
      }
    }
    allWpProject(
        sort: {
            fields: menuOrder, order: ASC
        }) {
      edges {
        next {
          id
        }
        previous {
          id
        }
        post: node {
          __typename
          uri
          id
          projectTypes {
            nodes {
              slug
            }
          }
        }
      }
    }


    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your data`,
      graphqlResult.errors
    )
    return
  }

  return [
    ...graphqlResult.data.allWpPost.edges,
    ...graphqlResult.data.allWpProject.edges,
    ...graphqlResult.data.allWpPage.edges,
  ]
}
