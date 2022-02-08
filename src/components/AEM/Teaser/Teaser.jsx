import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { TeaserV1, TeaserV1IsEmptyFn } from '@adobe/aem-core-components-react-base';

const RESOURCE_TYPE = 'aem-demo/components/teaser';

const EditConfig = {
  emptyLabel: 'Teaser',
  isEmpty: TeaserV1IsEmptyFn,
  resourceType: RESOURCE_TYPE,
};

MapTo(RESOURCE_TYPE)(TeaserV1, EditConfig);

const Teaser = withMappable(TeaserV1, EditConfig);

export default Teaser;
