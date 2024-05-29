import { Button } from 'antd';
import PropTypes from 'prop-types';

function ButtonMASQ(props) {
  const {
    style = {},
    children = 'button',
    onClick = () => { }
  } = props

  return (
    <Button
      onClick={onClick}
      style={style}
    >
      {children}
    </Button>
  )
}

ButtonMASQ.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};


export default ButtonMASQ;