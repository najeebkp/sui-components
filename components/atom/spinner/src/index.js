import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const TYPES = {
  FULL: 'full',
  SECTION: 'section'
}

const DELAY = 500 // ms

class AtomSpinner extends Component {
  state = {
    waiting: this.props.delayed
  }

  componentDidMount () {
    if (!this.state.waiting) return

    this.timer = setTimeout(() => {
      this.setState({waiting: false})
    }, DELAY)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  getLayerClassName () {
    const BASE_CLASS = 'sui-atom-spinner-layer'
    const {type, on} = this.props
    const {waiting} = this.state

    return cx(
      type === TYPES.SECTION ? BASE_CLASS : `${BASE_CLASS}-full`,
      (!waiting && on) || `${BASE_CLASS}-hide`
    )
  }

  render () {
    const {children, ...props} = this.props

    return (
      <div className='sui-atom-spinner'>
        <div className={this.getLayerClassName(props)}>
          <div className='sui-atom-spinner-loader' />
        </div>
        {children}
      </div>
    )
  }
}

AtomSpinner.displayName = 'AtomSpinner'

AtomSpinner.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  on: PropTypes.bool,
  delayed: PropTypes.bool,
  contentLoaded: PropTypes.bool
}

AtomSpinner.defaultProps = {
  on: true,
  delayed: false,
  type: TYPES.SECTION
}

export default AtomSpinner
export {
  TYPES as AtomSpinnerTypes
}
