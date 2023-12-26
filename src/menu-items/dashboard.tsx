// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'documents',
  title: 'Documents',
  type: 'group',
  children: [
    {
      id: 'form1',
      title: 'Form #1',
      type: 'collapse',
      icon: icons.IconDashboard,
      children: [

        {
          id: 'form1_full',
          title: 'Full Form',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'form1_title',
          title: 'Title',
          type: 'item',
          url: '/admin/peoples',
          breadcrumbs: false
        },
        {
          id: 'form1_input',
          title: 'Input',
          type: 'item',
          url: '/admin/peoples',
          breadcrumbs: false
        },{
          id: 'form1_output',
          title: 'Output',
          type: 'item',
          url: '/admin/peoples',
          breadcrumbs: false
        },{
          id: 'form1_footer',
          title: 'Footer',
          type: 'item',
          url: '/admin/peoples',
          breadcrumbs: false
        },
      ]
    }
  ]
};

export default dashboard;
