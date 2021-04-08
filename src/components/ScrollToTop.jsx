import { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history.location]);
  return <>{children}</>;
};

export default withRouter(ScrollToTop);
