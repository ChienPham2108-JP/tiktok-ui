import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Proper.module.scss';

function Wrapper({ children, className }) {
  return <div className={clsx(styles.wrapper, { [className]: className })}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Wrapper;
