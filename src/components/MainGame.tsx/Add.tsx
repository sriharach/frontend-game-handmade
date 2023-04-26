import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { postData } from '@/service/api-game'
import { GameModeT } from '../GameMode'

interface AddI {
  setMode: (mode: GameModeT) => void
}

const Add = ({ setMode }: AddI) => {
  const [form] = Form.useForm()
  const [load, setLoad] = useState(false)
  const onFinish = (data: { word: string[] }) => {
    setLoad(true)
    const model = data.word.map((e) => ({
      word: e,
    }))

    postData(model).then(() => {
      form.resetFields()
      message.success('เพิ่มแล้ว!')
      setLoad(false)
    })
  }
  return (
    <>
      <Form form={form} name='dynamic_form_item' onFinish={onFinish}>
        <Form.List
          name='word'
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(new Error('ใส่มา 1 ชื่อ'))
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              <div
                style={{
                  height: fields.length > 1 ? 180 : 'auto',
                  overflowY: 'auto',
                }}
              >
                {fields.map((field) => (
                  <Form.Item label='ศัพท์' required={false} key={field.key}>
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: 'ใส่คำมา',
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder=''
                        style={{
                          width: 'calc(100% - 30px)',
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        style={{
                          width: '30px',
                        }}
                        className='dynamic-delete-button'
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Item>
                  <Button
                    type='primary'
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    เพิ่มช่อง
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
                {fields.length > 0 && (
                  <Form.Item>
                    <Button loading={load} type='primary' htmlType='submit'>
                      ตกลง
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                )}
              </div>
            </>
          )}
        </Form.List>
      </Form>
      <Button onClick={() => setMode('board')}>กลับ</Button>
    </>
  )
}

export default Add
