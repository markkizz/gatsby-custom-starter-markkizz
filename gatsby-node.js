const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer')

const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]]
  }, [])
}

const templatesDirectory = path.resolve(__dirname, './src/templates')


exports.createPages = async ({ graphql, actions }) => {
  // const { createPage } = actions

  /**
   * TEMPLATES
   */

  // const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return true
}



/**
 * @example
 */
  // // Get all blogs
  // const gqlFetch = await graphql(`
  //   query NodeGqlFetchQuery {
  //     blogs: allContentfulBlogPost(sort: { fields: date, order: DESC }) {
  //       edges {
  //         node {
  //           slug
  //           title
  //           subtitle
  //           date(formatString: "DD MMMM YYYY")
  //           featured
  //           content {
  //             childMarkdownRemark {
  //               html
  //             }
  //           }
  //           author {
  //             user
  //             name
  //           }
  //           banner {
  //             localFile {
  //               childImageSharp {
  //                 fluid(maxWidth: 1000, quality: ${IMAGE_QUALITY}) {
  //                   base64
  //                   tracedSVG
  //                   aspectRatio
  //                   src
  //                   srcSet
  //                   srcWebp
  //                   srcSetWebp
  //                   sizes
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }

  //     authors: allContentfulAuthor {
  //       edges {
  //         node {
  //           user
  //           twitter
  //           facebook
  //           name
  //         }
  //       }
  //     }

  //     categories: allContentfulCategory {
  //       edges {
  //         node {
  //           key
  //           name
  //           desc
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { blogs, authors, categories } = gqlFetch.data

  //  // Create blog/viewing
  //  blogs.edges.map(async (blog, i) => {
  //   const previosBlog =
  //     i === blogs.edges.length - 1 ? null : blogs.edges[i + 1].node
  //   const nextBlog = i === 0 ? null : blogs.edges[i - 1].node

  //   createPage({
  //     path: blog.node.slug,
  //     component: path.resolve(
  //       templatesDirectory,
  //       'blog/viewing/components/index.tsx'
  //     ),
  //     context: {
  //       node: blog.node,
  //       blog: {
  //         previous: previosBlog,
  //         next: nextBlog,
  //       },
  //     },
  //   })
  // })


//   const categoryBanner = gqlCategoryViewing.data.blogs.edges[0].node.banner

//   const categoryBlogsChunks = chunk(
//     gqlCategoryViewing.data.blogs.edges,
//     POST_PER_PAGE
//   )

//   const categoryBlogPromises = categoryBlogsChunks.map((chunk, i) => {
//     return createPage({
//       path:
//         i === 0
//           ? `/category/${category.node.key}`
//           : `/category/${category.node.key}/pages/${i + 1}`,
//       component: path.resolve(
//         templatesDirectory,
//         'category/viewing/components/index.tsx'
//       ),
//       context: {
//         pathPrefix: `/category/${category.node.key}`,
//         blogs: chunk,
//         banner: categoryBanner,
//         category: category.node,
//         page: {
//           current: i + 1,
//           max: categoryBlogsChunks.length,
//         },
//       },
//     })
//   })

//   await Promise.all(categoryBlogPromises)
// })
