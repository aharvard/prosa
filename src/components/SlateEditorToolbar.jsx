/* eslint-disable react/prop-types */
import React from 'react'
import { Editor, Element as SlateElement, Transforms } from 'slate'
import { useSlate } from 'slate-react'
import Button from './Button'

export default function SlateEditorToolbar() {
  return (
    <div className="border-t-2 pt-4 flex">
      <MarkButton format="bold" icon="bold" label="B" />
      <MarkButton format="italic" icon="italic" label="I" />
      <MarkButton format="underline" icon="underline" label="U" />
      <MarkButton format="code" icon="code" label="code" />
      <BlockButton format="heading-one" label="H1" />
      <BlockButton format="heading-two" label="H2" />
      <BlockButton format="block-quote" icon="quote" label="Quote" hideText />
      <BlockButton
        format="numbered-list"
        icon="numbered-list"
        label="number list"
        hideText
      />
      <BlockButton
        format="bulleted-list"
        icon="bulleted-list"
        label="bulleted list"
        hideText
      />
      <MarkButton format="prompt" icon="add" label="New prompt" />
    </div>
  )
}

const BlockButton = ({ format, icon, label, hideText = false }) => {
  const editor = useSlate()
  return (
    <Button
      label={label}
      rounded={false}
      hideText={hideText}
      icon={icon}
      primary={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    />
  )
}

const MarkButton = ({ format, icon, label }) => {
  const editor = useSlate()
  return (
    <Button
      label={label}
      hideText
      rounded={false}
      icon={icon}
      primary={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    />
  )
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      LIST_TYPES.includes(
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
      ),
    split: true,
  })
  const newProperties = {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  }
  Transforms.setNodes(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  })

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}
