import React from "react"
import parse from "html-react-parser"

const truncateText = ( str, num ) => {
    if ( str.length <= num ) {
        return str
    }
    return parse( str.slice( 0, num ) )+ '...'
}

export default truncateText