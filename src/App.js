
import './App.css';
import Content from './content.js';

import { useState ,useEffect ,useLayoutEffect ,useRef, useMemo, useCallback, useContext } from 'react';
import { themeContext } from './theme.js';

function App() {
  const context = useContext(themeContext)
  return (
     <div style={{padding : '20px'}}>
        <button onClick={context.handlerClick}>Toggle theme</button>
        <Content />
      </div>
      

     

    
  );
}

export default App;
