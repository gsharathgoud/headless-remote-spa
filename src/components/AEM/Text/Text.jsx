import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { TextV2, TextV2IsEmptyFn } from '@adobe/aem-core-components-react-base';

const RESOURCE_TYPE = 'aem-demo/components/text';

const EditConfig = {
  emptyLabel: 'Text',
  isEmpty: TextV2IsEmptyFn,
  resourceType: RESOURCE_TYPE,
};

MapTo(RESOURCE_TYPE)(TextV2, EditConfig);

const Text = withMappable(TextV2, EditConfig);

export default Text;
