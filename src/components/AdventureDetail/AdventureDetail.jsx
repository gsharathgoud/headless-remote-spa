/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import useGraphQL from 'services/useGraphQL';
import Error from 'components/Error';
import Loading from 'components/Loading';
import ResponsiveGrid from 'components/AEM/ResponsiveGrid';
import { UseWindowWidth } from 'hooks';
import backIcon from '../../images/icon-close.svg';

import './AdventureDetail.scss';

const { REACT_APP_PUBLIC_URI } = process.env;

function AdventureDetail(props) {
  const contentFragmentPath = props.location.pathname.substring(
    props.match.url.length,
  );

  const contentFragmentVariation = UseWindowWidth() < 768 ? 'mobile' : 'master';
  const { data, errorMessage } = useGraphQL(
    adventureDetailQuery(contentFragmentPath, contentFragmentVariation),
  );

  if (errorMessage) return <Error errorMessage={errorMessage} />;
  if (!data) return <Loading />;
  const adventureData = data.adventureByPath.item;

  // eslint-disable-next-line max-len
  const adventureName = adventureData._path.split('/').pop();

  if (
    !adventureData
    || !adventureData._path
    || !adventureData.adventureTitle
    || !adventureData.adventurePrimaryImage
  ) {
    return (
      <div className='adventure-detail'>
        <Link className='adventure-detail-close-button' to="/">
          <img
            className='Backbutton-icon'
            src={`${REACT_APP_PUBLIC_URI}/${backIcon}`}
            alt='Return'
          />
        </Link>
        <Error errorMessage='Missing data, adventure could not be rendered.' />
      </div>
    );
  }

  return (
    <div className='adventure-detail'>
      <Link className='adventure-detail-close-button' to="/">
        <img
          className='Backbutton-icon'
          src={`${REACT_APP_PUBLIC_URI}/${backIcon}`}
          alt='Return'
        />
      </Link>
      <h1 className='adventure-detail-title'>{adventureData.adventureTitle}</h1>
      <div className='adventure-detail-info'>
        <div className='adventure-detail-info-label'>Activity</div>
        <div className='adventure-detail-info-description'>
          {adventureData.adventureActivity}
        </div>
        <div className='adventure-detail-info-label'>Type</div>
        <div className='adventure-detail-info-description'>
          {adventureData.adventureType}
        </div>
        <div className='adventure-detail-info-label'>Trip Length</div>
        <div className='adventure-detail-info-description'>
          {adventureData.adventureTripLength}
        </div>
        <div className='adventure-detail-info-label'>Group Size</div>
        <div className='adventure-detail-info-description'>
          {adventureData.adventureGroupSize}
        </div>
        <div className='adventure-detail-info-label'>Difficulty</div>
        <div className='adventure-detail-info-description'>
          {adventureData.adventureDifficulty}
        </div>
        <div className='adventure-detail-info-label'>Price</div>
        <div className='adventure-detail-info-description'>
          {adventureData.adventurePrice}
        </div>
      </div>
      <div className='adventure-detail-content'>
        <img
          className='adventure-detail-primaryimage'
          src={adventureData.adventurePrimaryImage._path}
          alt={adventureData.adventureTitle}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: adventureData.adventureDescription.html,
          }}
        />

        <ResponsiveGrid
          pagePath={`/content/aem-demo/us/en/home/adventure/${adventureName}`}
          itemPath='root/responsivegrid'
        />

        <h2>Itinerary</h2>
        <hr />
        <div
          className='adventure-detail-itinerary'
          dangerouslySetInnerHTML={{
            __html: adventureData.adventureItinerary.html,
          }}
        />
        <Contributer {...adventureData.adventureContributor} />
      </div>
    </div>
  );
}

function adventureDetailQuery(_path, variation) {
  return `{
    adventureByPath (_path: "${_path}", variation: "${variation}") {
      item {
        _path
          adventureTitle
          adventureActivity
          adventureType
          adventurePrice
          adventureTripLength
          adventureGroupSize
          adventureDifficulty
          adventurePrice
          adventurePrimaryImage {
            ... on ImageRef {
              _path
              mimeType
              width
              height
            }
          }
          adventureDescription {
            html
          }
          adventureItinerary {
            html
          }
      }
    }
  }
  `;
}

function Contributer(props) {
  if (!props) {
    return null;
  }
  let pictureReference = null;
  if (props.pictureReference) {
    pictureReference = (
      <img
        className='contributor-image'
        src={props.pictureReference._path}
        alt={props.fullName}
      />
    );
  }

  return (
    <div className='contributor'>
      <hr className='contributor-separator' />
      {pictureReference}
      <h3 className='contributor-name'>{props.fullName}</h3>
      <h4 className='contributor-occupation'>{props.occupation}</h4>
    </div>
  );
}

export default withRouter(AdventureDetail);
