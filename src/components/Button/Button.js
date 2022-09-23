import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

function Button(props) {
  let Comp = 'button';

  if (props.to) {
    Comp = Link;
  } else if (props.href) {
    Comp = 'a';
  }

  return (
    <Comp
      {...props}
      className={clsx(styles.wrapper, {
        [styles.primary]: props.primary,
        [styles.outline]: props.outline,
        [styles.small]: props.small,
        [styles.large]: props.large,
        [styles.text]: props.text,
        [styles.disabled]: props.disabled,
        [styles.rounded]: props.rounded,
        [props.className]: props.className,
      })}
    >
      {props.lefticon && <span className={styles.icon}>{props.lefticon}</span>}
      <span className={styles.title}>{props.children}</span>
      {props.righticon && <span className={styles.icon}>{props.righticon}</span>}
    </Comp>
  );
}

export default Button;
