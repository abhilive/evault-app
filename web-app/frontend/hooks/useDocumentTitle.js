import { useRef, useEffect } from 'react'

const useDocumentTitle = (title, prevailOnUnmount = false) => {
  if (typeof document === 'undefined') {
    return null;
  }
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [])
};

export default useDocumentTitle;