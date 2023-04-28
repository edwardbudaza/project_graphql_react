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

    const results = await request(graphqlAPI, query);

    return results.postConnection.edges;
}