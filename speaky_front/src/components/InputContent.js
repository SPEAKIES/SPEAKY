
import React, { useState } from 'react';
import { Editor } from 'primereact/editor';

export default function InputContent()  {
    const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    return (
        <div>
            <Editor style={{ height: '250px',fontSize:"25px"}} value={text1} onTextChange={(e) => setText1(e.htmlValue)} />
        </div>
    );
}
                 