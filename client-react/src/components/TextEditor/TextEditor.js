import React from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg';

const TextEditor = () => {

  const [html, setHtml] = React.useState('my <b>HTML</b>');

  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <div>
      <DefaultEditor value={html} onChange={onChange} />

    </div>
  )
}

export default TextEditor