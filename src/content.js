import {  useState , useEffect , useLayoutEffect , useRef, memo, useMemo, useCallback, useReducer, use} from "react";
import Paragrap from "./paragrap.js";



function Content( ){
   
     return (
        <div>
           <Paragrap  />
        </div>
    )
}


export default memo(Content);
    