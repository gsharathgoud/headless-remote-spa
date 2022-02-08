import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { ImageV2, ImageV2IsEmptyFn } from '@adobe/aem-core-components-react-base';

import './Image.scss';

const RESOURCE_TYPE = 'aem-demo/components/image';

const EditConfig = {
  emptyLabel: 'Image',
  isEmpty: ImageV2IsEmptyFn,
  resourceType: RESOURCE_TYPE,
};

MapTo(RESOURCE_TYPE)(ImageV2, EditConfig);

const Image = withMappable(ImageV2, EditConfig);

export default Image;
