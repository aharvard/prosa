import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import { Container } from './Container'
import Heading from './Heading'

export default function MyTemplates({ templates }) {
  return (
    <Container>
      <div className="mb-6 mt-10 flex items-center justify-between">
        <Heading className="">My Templates</Heading>
        <Button primary label="New Template" />
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Updated
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created Date
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {templates.map((template) => (
                    <tr key={template.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {template.title}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {template.updatedDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {template.createdDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium ">
                        <Button className="ml-4" primary={false} label="Edit" />
                        <Button
                          className="ml-4"
                          primary={false}
                          label="Preview"
                        />
                        <Button
                          className="ml-4"
                          primary={false}
                          label="Share"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

MyTemplates.propTypes = {
  templates: PropTypes.array,
}

MyTemplates.defaultProps = {
  templates: [
    {
      name: 'Template A',
      id: 1,
      createdDate: new Date(),
      updatedDate: new Date(),
    },
    {
      name: 'Template B',
      id: 2,
      createdDate: new Date(),
      updatedDate: new Date(),
    },
  ],
}
