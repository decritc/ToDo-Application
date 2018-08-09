import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Filter = () => (
  <div className="container mt-4">
    <div className="d-flex justify-content-end">
      <h4>Filter: <span className="label label-default">
      <div className="btn-group btn-group-sm" role="group">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </div>
      </span></h4>
    </div>
  </div>
)

export default Filter
