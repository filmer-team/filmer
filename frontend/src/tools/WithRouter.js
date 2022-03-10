import {useNavigate, useLocation} from 'react-router-dom';

export function withRouter( Child ) {
  return ( props ) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Child { ...props } navigate={ navigate } location={ location } />;
  }
}