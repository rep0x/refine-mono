import { TMenuItem } from 'ui'

import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded'

export const MENU: TMenuItem[] = [
  {
    label: 'Services',
    icon: <DesignServicesRoundedIcon />,
    link: '/services',
  },
  {
    label: 'Projects',
    icon: <RocketLaunchRoundedIcon />,
    link: '/projects',
  },
  {
    label: 'Blog',
    icon: <CampaignRoundedIcon />,
    link: '/blog',
  },
]
