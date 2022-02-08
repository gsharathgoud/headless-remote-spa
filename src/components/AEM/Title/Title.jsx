/* eslint-disable max-len */
import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { TitleV2, TitleV2IsEmptyFn } from '@adobe/aem-core-components-react-base';

const RESOURCE_TYPE = 'aem-demo/components/title';

const EditConfig = {
  emptyLabel: 'Title',
  isEmpty: TitleV2IsEmptyFn,
  resourceType: RESOURCE_TYPE,
};

MapTo(RESOURCE_TYPE)(TitleV2, EditConfig);

const Title = withMappable(TitleV2, EditConfig);

export default Title;
