import { Add } from '@carbon/react/icons';
import { ComboButton, MenuItem, MenuItemDivider } from '@carbon/react'
import './App.css'
import TableExample from './components/TableExample';

function App() {

  return (
    <>
      <TableExample></TableExample>
      <Add/>
      <ComboButton
        label="Primary action"
        onClick={function rTe(){}}
      >
        <MenuItem
          label="Second action with a long label description"
          onClick={function rTe(){}}
        />
        <MenuItem
          label="Third action"
          onClick={function rTe(){}}
        />
        <MenuItem
          disabled
          label="Fourth action"
          onClick={function rTe(){}}
        />
        <MenuItemDivider />
        <MenuItem
          kind="danger"
          label="Danger action"
          onClick={function rTe(){}}
        />
      </ComboButton>
    </>
  )
}

export default App
