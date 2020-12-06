import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getList, filter, sortList } from './../../redux/actions/list'
import './List.scss'

const List = () => {
  const token = localStorage.getItem('token')
  if (token === null) {
    window.location.href = '/'
  }

  const dispatch = useDispatch()
  const list = useSelector((store) => store.list)

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [selectedOption, setSelectedOption] = useState('asc')

  const handleFilter = (option, value) => {
    if (option === 'name') {
      setName(value)
      dispatch(filter(value, type))
    }
    if (option === 'type') {
      setType(value)
      dispatch(filter(name, value))
    }
  }

  const handleOptionChange = changeEvent => {
    dispatch(sortList())
    setSelectedOption(changeEvent.target.value)
  }

  useEffect(() => {
    dispatch(getList())
  }, [])

  return (
    <div id="list" data-testid="email">
      <div className="contentList">
        <h1>Lista de tecnologías</h1>

        <div className="contentFilters">
          <div className="filter">
            <div className="content-input">
              <label>Filtrar por nombre de tecnología</label>
              <input onChange={(e) => handleFilter('name', e.target.value)} />
            </div>
          </div>
          <div className="filter">
            <div className="content-input">
              <label>Filtrar por tipo de tecnología</label>
              <select onChange={(e) => handleFilter('type', e.target.value)}>
                <option value="All">All</option>
                <option value="Back-End">Back-End</option>
                <option value="Front-End">Front-End</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>
          </div>
          <div className="filter">
          <div className="content-input">
            <label>Ordenar</label>
            <input type="radio" id="asc" name="asc" value="asc"
                  checked={selectedOption === 'asc'}
                  onClick={handleOptionChange}/>
            Asc

            <input type="radio" id="desc" name="desc" value="desc"
                  checked={selectedOption === 'desc'}
                  onClick={handleOptionChange}/>
            Desc
          </div>
          </div>
        </div>
        <div className="contentTable">
          <table>
            <thead>
              <tr className="extra-bold">
                <th>Logo</th>
                <th>Tecnología</th>
                <th>Año</th>
                <th>Autor</th>
                <th>Licencia</th>
                <th>Lenguaje</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {list.filterList.map((item, index) => (
                <tr key={`${item.author}-${item.tech}`}>
                  <td>
                    <img src={item.logo} className="logo zoom" />
                  </td>
                  <td>{item.tech}</td>
                  <td>{item.year}</td>
                  <td>{item.author}</td>
                  <td>{item.license}</td>
                  <td>{item.language}</td>
                  <td>{item.type}</td>
                </tr>
              ))}

              {list.filterList.length === 0 && (
                <tr>
                  <td colSpan="7">
                    No se encontraron tecnologías
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="content-total">
            Total de tecnologías: {list.filterList.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
