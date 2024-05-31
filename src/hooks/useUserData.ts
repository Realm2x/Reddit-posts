import { useEffect} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import { useDispatch } from "react-redux";
import { IUserData, meRequestAsync } from "../store/me/action";

export function useUserData() {
  const data = useSelector<RootState, IUserData>((state) => state.me.data)
  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token.length > 0 && token !== "undefined" ) {
      dispatch(meRequestAsync())
    }
  }, [token]);

  return [data];
}