import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

function MenuItem({ data, onClick }) {
  return (
    <Button
      to={data.to}
      className={clsx(styles['menu-item'], {
        [styles.separate]: data.separate,
      })}
      lefticon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
