import React from 'react'

import Icon01 from '../../../assets/01.svg'
import Icon02 from '../../../assets/02.svg'
import Icon03 from '../../../assets/03.svg'
import Icon04 from '../../../assets/04.svg'
import Icon09 from '../../../assets/09.svg'
import Icon10 from '../../../assets/10.svg'
import Icon11 from '../../../assets/11.svg'
import Icon13 from '../../../assets/13.svg'
import Icon50 from '../../../assets/50.svg'

interface Props {
  id: string
}

const WeatherIcon = ({ id }: Props) => {
  switch(id.replace('n', '').replace('d', '')) {
    case '01':
      return <Icon01 width={200} height={200}/>
      break
    case '02':
      return <Icon02 width={200} height={200}/>
      break
    case '03':
      return <Icon03 width={200} height={200}/>
      break
    case '04':
      return <Icon04 width={200} height={200}/>
      break
    case '09':
      return <Icon09 width={200} height={200}/>
      break
    case '10':
      return <Icon10 width={200} height={200}/>
      break
    case '11':
      return <Icon11 width={200} height={200}/>
      break
    case '13':
      return <Icon13 width={200} height={200}/>
      break
    case '50':
      return <Icon50 width={200} height={200}/>
      break
    default:
      return <></>
  }
}

export default WeatherIcon