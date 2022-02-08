/* eslint-disable max-len */
import { withMappable, MapTo, ResponsiveGrid } from '@adobe/aem-react-editable-components';

const RESOURCE_TYPE = 'wcm/foundation/components/responsivegrid';

const EditConfig = {
  emptyLabel: 'Layout Container',
  isEmpty(props) {
    return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
  },
  resourceType: RESOURCE_TYPE,
};

MapTo(RESOURCE_TYPE)(ResponsiveGrid, EditConfig);

const AEMResponsiveGrid = withMappable(ResponsiveGrid, EditConfig);

export default AEMResponsiveGrid;
