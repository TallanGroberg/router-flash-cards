import React from 'react';
import { Button, Table, Icon,} from 'semantic-ui-react';

const Card = ({ id, front, back, remove, }) => (
  <Table.Row>
    <Table.Cell>{front}</Table.Cell>
    <Table.Cell>{back}</Table.Cell>
      <Table.Cell>
        <Button color="red" icon onClick={() => remove(id)}>
          <icon name="lemon" />
        </Button>
    </Table.Cell>
  </Table.Row>
)

export default Card;
