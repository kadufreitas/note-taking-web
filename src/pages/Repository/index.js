import React from 'react';
import { Editor, EditorState } from 'draft-js';

export default function Repository() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const logState = () => console.log(editorState.toJS());

  return (
    <div>
      <h1>My Editor</h1>
      <Editor editorState={editorState} onChange={setEditorState} />
      <input onClick={logState} type="button" value="Log State" />
    </div>
  );
}
