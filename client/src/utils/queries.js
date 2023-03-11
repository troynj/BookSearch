import { gql } from '@apollo/client';

// Query to get logged in user's info (needs the token)
export const GET_ME = gql`
  query {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const SEARCH_BOOKS = gql`
  query SearchBooks($searchInput: String!) {
    searchBooks(searchInput: $searchInput) {
      bookId
      authors
      title
      description
      image
      link
    }
  }
`;