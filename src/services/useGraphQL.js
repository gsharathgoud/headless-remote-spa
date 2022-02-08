import { useState, useEffect } from 'react';

const { AEMHeadless } = require('@adobe/aem-headless-client-js');

// environment variable REACT_APP_GRAPHQL_ENDPOINT is used to point to endpoint in AEM
const { REACT_APP_GRAPHQL_ENDPOINT } = process.env;

/**
 * Custom React Hook to perform a GraphQL query
 * @param query - GraphQL query
 * @param path - Persistent query path
 */
function useGraphQL(query, path) {
  const [data, setData] = useState(null);
  const [errorMessage, setErrors] = useState(null);

  useEffect(() => {
    const sdk = new AEMHeadless(REACT_APP_GRAPHQL_ENDPOINT);
    const request = query ? sdk.postQuery.bind(sdk) : sdk.getQuery.bind(sdk);

    request(query || path)
      // eslint-disable-next-line no-shadow
      .then(({ data, errors }) => {
        // If there are errors in the response set the error message
        if (errors) {
          setErrors(mapErrors(errors));
        }
        // If data in the response set the data as the results
        if (data) {
          setData(data);
        }
      })
      .catch((error) => {
        setErrors(error);
      });
  }, [query, path]);

  return { data, errorMessage };
}

/**
 * concatenate error messages into a single string.
 * @param {*} errors
 */
function mapErrors(errors) {
  return errors.map((error) => error.message).join(',');
}

export default useGraphQL;
