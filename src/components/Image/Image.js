import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import clsx from 'clsx';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      ref={ref}
      className={clsx(styles.wrapper, {
        [className]: className,
      })}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
