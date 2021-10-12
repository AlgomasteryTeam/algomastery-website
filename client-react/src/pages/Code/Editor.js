import React, { useState } from 'react'
import AceEditor from "react-ace";
import { simplePostCall } from '../../api/ApiServices'
import axios from 'axios'
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const Editor = () => {
  const [code, setCode] = useState('')

  const onChange = (codeValue) => {
    setCode(codeValue)
  }

  const onCodeSubmit = async () => {
    console.log('Submited code: ', code)

    const url = 'https://codexweb.netlify.app/.netlify/functions/enforceCode'
    const body = {
      "code": code,
      "language": "py",
      "input": ""
    }

    await simplePostCall(url, JSON.stringify(body))
      .then(response => console.log('Result: ' + response))
      .catch(error => console.log('Error: ' + error))
  }

  return (
    <div>
      <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />

      <button onClick={onCodeSubmit}>Run</button>
    </div>
  )
}

export default Editor