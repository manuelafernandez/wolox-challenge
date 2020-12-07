import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getList, filter, sortList, setFavorites } from './../../redux/actions/list'
import './List.scss'

const List = () => {
  const dispatch = useDispatch()
  const list = useSelector((store) => store.list)

  const [searchName, setSearchName] = useState('')
  const [searchType, setSearchType] = useState('')
  const [selectedOption, setSelectedOption] = useState('asc')

  const handleFilter = (option, value) => {
    if (option === 'name') {
      setSearchName(value)
      dispatch(filter(value, searchType))
    }
    if (option === 'type') {
      setSearchType(value)
      dispatch(filter(searchName, value))
    }
  }

  const handleOptionChange = changeEvent => {
    dispatch(sortList())
    setSelectedOption(changeEvent.target.value)
  }

  const handleFavorite = (id) => {
    const favorites = list.favorites
    const positionFav = favorites.indexOf(id)

    if (positionFav > -1) {
      favorites.splice(positionFav, 1)
    } else {
      favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
    dispatch(setFavorites(favorites))
  }

  useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites === null) {
      localStorage.setItem('favorites', JSON.stringify([]))
    } else {
      dispatch(setFavorites(JSON.parse(favorites)))
    }

    dispatch(getList())
  }, [])

  return (
    <div id="list" data-testid="email">
      <div className="content-list">
        <h1>Listado</h1>

        <div className="content-filters">
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
                onClick={handleOptionChange} />
            Asc

            <input type="radio" id="desc" name="desc" value="desc"
                checked={selectedOption === 'desc'}
                onClick={handleOptionChange} />
            Desc
          </div>
          </div>
        </div>
        <div className="content-table">
          <table>
            <thead>
              <tr>
                {list.favorites.length !== 0 && (
                  <th className="thead" colSpan="8">
                    Total de tecnologías favoritas: {list.favorites.length}
                  </th>
                )}
              </tr>
              <tr className="extra-bold">
                <th>Logo</th>
                <th>Tecnología</th>
                <th>Año</th>
                <th>Autor</th>
                <th>Licencia</th>
                <th>Lenguaje</th>
                <th>Tipo</th>
                <th>Favorito</th>
              </tr>
            </thead>
            <tbody>
              {list.filterList.map((item, index) => (
                <tr key={`${item.tech}`}>
                  <td>
                    <img src={item.logo} />
                  </td>
                  <td>{item.tech}</td>
                  <td>{item.year}</td>
                  <td>{item.author}</td>
                  <td>{item.license}</td>
                  <td>{item.language}</td>
                  <td>{item.type}</td>
                  <td>
                    {
                      (list.favorites.indexOf(`${item.tech}`) > -1)
                        ? <input
                          type="checkbox"
                          className="favorite"
                          onClick={(e) => handleFavorite(`${item.tech}`)}
                          checked
                        />
                        : <input
                          type="checkbox"
                          className="favorite"
                          onClick={(e) => handleFavorite(`${item.tech}`)}
                        />
                    }

                  </td>
                </tr>
              ))}

              {list.filterList.length === 0 && (
                <tr>
                  <td colSpan="8">
                    No se encontraron tecnologías
                  </td>
                </tr>
              )}
              <tr>
                <th className="thead" colSpan="8">
                  Total de tecnologías: {list.filterList.length}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default List
