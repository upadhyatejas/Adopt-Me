/* eslint-disable react/display-name */
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    return (
      <Child
        {...props}
        params={params}
        navigate={navigate}
        location={location}
      />
    );
  };
}

withRouter.displayName = "withRouter";
