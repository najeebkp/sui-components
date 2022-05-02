import {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  BASE_CLASS_ITEM_HEADER,
  BASE_CLASS_ITEM_HEADER_ICON
} from './settings.js'

const AccordionItemHeaderDefaultChildren = ({
  children,
  icon,
  ...props
}) => {
  console.log(props)
  return (
    <Fragment>
      <div className={`${BASE_CLASS_ITEM_HEADER}ButtonContent`}>{children}</div>
      <div className={`${BASE_CLASS_ITEM_HEADER_ICON}Wrapper`}>{icon}</div>
    </Fragment>
  )
}

AccordionItemHeaderDefaultChildren.displayName =
  'AccordionItemHeaderDefaultChildren'

AccordionItemHeaderDefaultChildren.propTypes = {}

export default AccordionItemHeaderDefaultChildren
