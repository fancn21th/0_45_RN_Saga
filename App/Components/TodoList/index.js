import React from 'react'
import {
  Container,
  Content,
  Card,
  Text,
} from 'native-base'

const TodoList = ({todos}) => (
  <Container>
    <Content>
      {
        todos && todos.map(todo => (
          <Card key={todo.id}>
            <Text>{todo.title}</Text>
          </Card>
        ))
      }
    </Content>
  </Container>
)

export default TodoList
