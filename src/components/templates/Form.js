import React from 'react'
import { Button, Layout, HeroSection, TextField } from './'
import { Container } from '@material-ui/core'

export default ({
  list,
  onChangeField,
  onSubmit,
  sectionTitle,
  sectionSubtitle,
  buttonTitle,
}) => {
  const renderField = item => {
    return (
      <TextField
        autoFocus={item.autoFocus}
        key={item.name}
        id={item.name}
        required={item.required}
        name={item.name}
        type={item.type}
        value={item.field}
        label={item.label}
        multiline={item.multiline}
        onChange={onChangeField}
        rows={item.rows}
      />
    )
  }

  return (
    <Layout
      content={
        <>
          <HeroSection title={sectionTitle} subtitle={sectionSubtitle} />
          <Container align="left" component="main" maxWidth="xs">
            {list.map(item => renderField(item))}
            <Button onClick={() => onSubmit()}>{buttonTitle}</Button>
          </Container>
        </>
      }
    />
  )
}
