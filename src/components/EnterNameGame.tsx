import { Typography, Form, Input, Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

export type FormGame = {
  game_name: string
}

interface EnterNameGameI {
  setName: (n: Readonly<FormGame>) => void
}

const EnterNameGame = ({ setName }: EnterNameGameI) => {
  const [form] = Form.useForm()

  const onFinish = (data: Readonly<FormGame>) => {
    setName(data)
    form.resetFields()
  }

  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        ลงชื่อเล่นเกม
      </Typography.Title>
      <Form form={form} onFinish={onFinish} size='large' layout='vertical'>
        <Form.Item
          label='ลงชื่อนะ'
          name='game_name'
          rules={[{ required: true, message: 'กรอกชื่อก่อน' }]}
        >
          <Input placeholder='พิมพ์..' />
        </Form.Item>
        <div style={{ textAlign: 'end' }}>
          <ButtonSubmit htmlType='submit' type='primary'>
            ไป
          </ButtonSubmit>
        </div>
      </Form>
    </>
  )
}

export default EnterNameGame

const ButtonSubmit = styled(Button)`
  ${(props) => props.theme.breakpoints.md.down} {
    width: 100%;
  }
`