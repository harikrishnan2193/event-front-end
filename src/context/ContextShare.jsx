import React, { createContext, useState } from 'react'


export const isTokenContext = createContext()

function ContextShare({children}) {
    const [isToken , setIsToken] = useState(true)
  return (
    <>
    <isTokenContext.Provider value={{isToken,setIsToken}}>{children}</isTokenContext.Provider>
    </>
  )
}

export default ContextShare