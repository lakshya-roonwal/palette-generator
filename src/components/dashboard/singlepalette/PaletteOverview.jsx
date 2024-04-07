import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

const PaletteOverview = () => {
  const [setsampleData, setSetsampleData] = useState({
    
  })
  return (
    <div className="flex flex-col w-1/2 gap-4 p-4">
    <div className="flex items-center">
      <h1 className="text-lg font-semibold">Manage Colors</h1>
      <Button className="ml-auto h-8" size="sm" variant="outline">
        Save
      </Button>
    </div>
    <div className="border rounded-lg shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Color</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold">1</TableCell>
            <TableCell>Primary</TableCell>
            <TableCell>
              <div className="w-8 h-8 rounded border border-gray-200 dark:border-gray-800" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">2</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>
              <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-800" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">3</TableCell>
            <TableCell>Accent</TableCell>
            <TableCell>
              <div className="w-8 h-8 rounded bg-gray-500" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
  )
}