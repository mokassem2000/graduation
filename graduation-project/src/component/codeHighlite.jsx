import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lioshi} from 'react-syntax-highlighter/dist/esm/styles/hljs';
function CodeHighlite({codeString}) {
    return (
     <div className=' overflow-auto min-h-30 max-h-80'>
        <SyntaxHighlighter language="cpp" style={lioshi}>
           {codeString}
        </SyntaxHighlighter>
     </div>
      
    
       )
}

export default CodeHighlite