import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import { ContainerV1, ContainerV1IsEmptyFn } from '@adobe/aem-core-components-react-spa';

const RESOURCE_TYPE = 'aem-demo/components/container';

const EditConfig = {
  emptyLabel: 'Container',
  isEmpty: ContainerV1IsEmptyFn,
  resourceType: RESOURCE_TYPE,
};

MapTo(RESOURCE_TYPE)(ContainerV1, EditConfig);

const Container = withMappable(ContainerV1, EditConfig);

export default Container;
