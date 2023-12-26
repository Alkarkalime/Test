// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'admin',
      title: 'Admin',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [

        {
          id: 'peoples',
          title: 'Peoples',
          type: 'item',
          url: '/admin/peoples',
          breadcrumbs: false
        },

      ]
    }
  ]
};

export default utilities;
