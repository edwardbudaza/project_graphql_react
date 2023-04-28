import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLICK_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
      query MyQuery {
          postsConnection {
            edges {
              node {
                author {
                  bio
                  name
                  id
                  photo {
                    url
                  }
                }
                createdAt
                slug
                title
                excerpt
                featuredImager {
                  url
                }
                categories {
                  name
                  slug
                }
              }
            }
          }
        }      
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql `
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImager {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query);

  return result.posts;
}