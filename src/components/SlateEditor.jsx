/* eslint-disable no-console */
import React, { useCallback, useMemo, useState } from 'react'
import { Editor, createEditor, Transforms, Text } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import Button from './Button'
import CodeElement from './SlateEditor/CodeElement'
import DefaultElement from './SlateEditor/DefaultElement'
import Leaf from './SlateEditor/Leaf'

const CustomEditor = {
  isBoldMarkActive(e) {
    const [match] = Editor.nodes(e, {
      match: (n) => n.bold === true,
      universal: true,
    })

    return !!match
  },

  toggleBoldMark(e) {
    const isActive = CustomEditor.isBoldMarkActive(e)
    Transforms.setNodes(
      e,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    )
  },

  isCodeBlockActive(e) {
    const [match] = Editor.nodes(e, {
      match: (n) => n.type === 'code',
    })

    return !!match
  },

  toggleCodeBlock(e) {
    const isActive = CustomEditor.isCodeBlockActive(e)
    Transforms.setNodes(
      e,
      { type: isActive ? null : 'code' },
      { match: (n) => Editor.isBlock(e, n) }
    )
  },
}

export default function SlateEditor() {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const renderElement = useCallback(({ element, ...props }) => {
    switch (element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])

  return (
    <Slate editor={editor} value={value} onChange={(v) => setValue(v)}>
      <div className="bg-white p-4 m-4">
        <div className="prose">
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={(event) => {
              if (!event.ctrlKey) {
                return
              }
              switch (event.key) {
                case '`': {
                  event.preventDefault()
                  CustomEditor.toggleCodeBlock(editor)
                  break
                }

                case 'b': {
                  event.preventDefault()
                  CustomEditor.toggleBoldMark(editor)
                  break
                }
                default:
              }
            }}
          />
        </div>
        <div className="border-t-2 pt-4 mt-4">
          <Button
            label="Bold"
            onMouseDown={(event) => {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
            }}
          />
          <Button
            label="Code"
            onMouseDown={(event) => {
              event.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
            }}
          />
          <Button label="Prompt" />
        </div>
      </div>
    </Slate>
  )
}
