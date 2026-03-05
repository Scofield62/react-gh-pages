import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';

export default function TableExample() {
  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'status',
      header: 'Status',
    },
  ];
  const rows = [
    {
      id: 'a',
      name: 'Load balancer 1',
      status: 'Disabled',
    },
    {
      id: 'b',
      name: 'Load balancer 2',
      status: 'Starting',
    },
    {
      id: 'c',
      name: 'Load balancer 3',
      status: 'Active',
    },
  ];
  return (
      <DataTable rows={rows} headers={headers}>
    {({
      rows,
      headers,
      getTableProps,
      getHeaderProps,
      getRowProps,
      getCellProps,
    }) => (
      <Table {...getTableProps()}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader {...getHeaderProps({ header, isSortable: true })}>
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow {...getRowProps({ row })}>
              {row.cells.map((cell) => (
                <TableCell {...getCellProps({ cell })}>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )}
  </DataTable>
  )
}