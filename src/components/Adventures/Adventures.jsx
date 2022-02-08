/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGraphQL from 'services/useGraphQL';
import Error from 'components/Error';
import Loading from 'components/Loading';
import './Adventures.scss';

function Adventures() {
  // Use React Hooks to set the initial GraphQL query to a variable named `query`
  // If query is not defined, persistent query will be requested
  // Initially use cached / persistent query.
  const [query, setQuery] = useState('');
  const persistentQuery = 'wknd/adventures-all';
  // Use a custom React Hook to execute the GraphQL query
  const { data, errorMessage } = useGraphQL(query, persistentQuery);

  // If there is an error with the GraphQL query
  if (errorMessage) return <Error errorMessage={errorMessage} />;

  // If data is null then return a loading state...
  if (!data) return <Loading />;

  return (
    <div className='adventures'>
      <button type='button' onClick={() => setQuery('')}>All</button>
      <button type='button' onClick={() => setQuery(filterQuery('Camping'))}>Camping</button>
      <button type='button' onClick={() => setQuery(filterQuery('Surfing'))}>Surfing</button>
      <button type='button' onClick={() => setQuery(filterQuery('Cycling'))}>Cycling</button>
      <button type='button' onClick={() => setQuery(filterQuery('Skiing'))}>Skiing</button>
      <ul className='adventure-items'>
        {
          // Iterate over the returned data items from the query
          // eslint-disable-next-line max-len
          data.adventureList.items.map((adventure, index) => <AdventureItem key={index} {...adventure} />)
        }
      </ul>
    </div>
  );
}

// Render individual Adventure item
function AdventureItem(props) {
  // Must have title, path, and image
  if (
    !props
    || !props._path
    || !props.adventureTitle
    || !props.adventurePrimaryImage
  ) {
    return null;
  }
  return (
    <li className='adventure-item'>
      <Link to={`/adventure:${props._path}`}>
        <img
          className='adventure-item-image'
          src={props.adventurePrimaryImage._path}
          alt={props.adventureTitle}
        />
      </Link>
      <div className='adventure-item-length-price'>
        <div className='adventure-item-length'>{props.adventureTripLength}</div>
        <div className='adventure-item-price'>{props.adventurePrice}</div>
      </div>
      <div className='adventure-item-title'>{props.adventureTitle}</div>
    </li>
  );
}

/**
 * Returns a query for Adventures filtered by activity
 */
function filterQuery(activity) {
  return `
    {
      adventureList (filter: {
        adventureActivity: {
          _expressions: [
            {
              value: "${activity}"
            }
          ]
        }
      }){
        items {
          _path
        adventureTitle
        adventurePrice
        adventureTripLength
        adventurePrimaryImage {
          ... on ImageRef {
            _path
            mimeType
            width
            height
          }
        }
      }
    }
  }
  `;
}

export default Adventures;
