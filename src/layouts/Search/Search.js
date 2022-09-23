import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '~/services/searchService';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const deBouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!deBouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(deBouncedValue);

      setSearchResult(result);

      // Handle error api
      setSearchResult(response.data);

      setLoading(false);
    };

    fetchApi();
  }, [deBouncedValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
      <HeadlessTippy
        appendTo={() => document.body}
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={clsx(styles['search-result'])} tabIndex="-1" {...attrs}>
            <ProperWrapper>
              <h4 className={clsx(styles['search-title'])}>Accounts</h4>
              {searchResult.map((result) => {
                return <AccountItem key={result.id} data={result} onClick={handleClear} />;
              })}
            </ProperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={clsx(styles.search)}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search acounts and videos"
            spellCheck="false"
            onChange={handleSearch}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={clsx(styles.clear)} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && <FontAwesomeIcon className={clsx(styles['loading'])} icon={faSpinner} />}

          <button
            className={clsx(styles['search-btn'])}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

const response = {
  data: [
    {
      id: 2,
      first_name: '\u0110\u00e0o L\u00ea',
      last_name: 'Ph\u01b0\u01a1ng Hoa',
      full_name: '\u0110\u00e0o L\u00ea Ph\u01b0\u01a1ng Hoa',
      nickname: 'hoaahanassii',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
      bio: '\u2728 1998 \u2728\nVietnam \ud83c\uddfb\ud83c\uddf3\n\u0110\u1eeaNG L\u1ea4Y VIDEO C\u1ee6A T\u00d4I \u0110I SO S\u00c1NH N\u1eeeA. XIN H\u00c3Y T\u00d4N TR\u1eccNG !',
      tick: true,
      followings_count: 0,
      followers_count: 0,
      likes_count: 0,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      created_at: '2022-05-05 :05',
      updated_at: '2022-05-05 :39',
    },
    {
      id: 3,
      first_name: '\u0110\u00e0o L\u00ea',
      last_name: 'Ph\u01b0\u01a1ng Hoa',
      full_name: '\u0110\u00e0o L\u00ea Ph\u01b0\u01a1ng Hoa',
      nickname: 'hoaahanassii',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
      bio: '\u2728 1998 \u2728\nVietnam \ud83c\uddfb\ud83c\uddf3\n\u0110\u1eeaNG L\u1ea4Y VIDEO C\u1ee6A T\u00d4I \u0110I SO S\u00c1NH N\u1eeeA. XIN H\u00c3Y T\u00d4N TR\u1eccNG !',
      tick: true,
      followings_count: 0,
      followers_count: 0,
      likes_count: 0,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      created_at: '2022-05-05 :05',
      updated_at: '2022-05-05 :39',
    },
    {
      id: 4,
      first_name: '\u0110\u00e0o L\u00ea',
      last_name: 'Ph\u01b0\u01a1ng Hoa',
      full_name: '\u0110\u00e0o L\u00ea Ph\u01b0\u01a1ng Hoa',
      nickname: 'hoaahanassii',
      avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
      bio: '\u2728 1998 \u2728\nVietnam \ud83c\uddfb\ud83c\uddf3\n\u0110\u1eeaNG L\u1ea4Y VIDEO C\u1ee6A T\u00d4I \u0110I SO S\u00c1NH N\u1eeeA. XIN H\u00c3Y T\u00d4N TR\u1eccNG !',
      tick: true,
      followings_count: 0,
      followers_count: 0,
      likes_count: 0,
      website_url: 'https://fullstack.edu.vn/',
      facebook_url: '',
      youtube_url: '',
      twitter_url: '',
      instagram_url: '',
      created_at: '2022-05-05 :05',
      updated_at: '2022-05-05 :39',
    },
  ],
};
