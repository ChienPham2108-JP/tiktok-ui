import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { Wrapper as ProperWrapper } from '~/components/Proper';

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prevHistory) => [...prevHistory, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive={true}
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={clsx(styles.content)} tabIndex="-1" {...attrs}>
          <ProperWrapper className={clsx(styles['menu-propper'])}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prevHistory) => prevHistory.slice(0, -1));
                }}
              />
            )}
            <div className={clsx(styles['menu-body'])}>{renderItems()}</div>
          </ProperWrapper>
        </div>
      )}
      onHidden={() => {
        setHistory((prevHistory) => [prevHistory[0]]);
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
