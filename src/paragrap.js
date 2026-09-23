import { themeContext } from './theme.js'
import { useContext } from 'react'

function Paragrap() {
       const themeee = useContext(themeContext)
      
       console.log(themeee);
       
    return (
       <p className= {themeee.theme}>
          Học lập trình tại f8 để nâng cao tư duy về lập trình web font-end
       </p>
    )
}

export default Paragrap

