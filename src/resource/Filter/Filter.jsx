import React from 'react';
import filter from './Filter.module.scss';
import { filterElements } from './filterElements';


const { useState } = React;

function Filter() {

    const [visible, setVisible] = useState({
        author: false,
        year: false,
        genre: false,
        activeId: undefined,
        active: false,
        dropDown: 0
    })

    const toggleVisibility = (componentName, id) =>  {
        componentName === 'author' ? 
            setVisible({author: !visible.author,activeId: id, active: !visible.author, dropDown: id})
        :
        componentName === 'year' ? 
            setVisible({year: !visible.year,activeId: id, active: !visible.year, dropDown: id})
        :
            setVisible({genre: !visible.genre,activeId: id, active: !visible.genre, dropDown: id})
      }

    // className={filter["filter__wrap"]}
    return (
    <div className={filter.filter}>
        <div className={filter.filter__title}>Искать по:</div>
        {filterElements.map(i => (
            <div 
                className= {
                    `${filter.filter__button} ${visible.activeId === i.id && visible.active && filter.filter__button_active}`
                }  
                key = {i.id} 
                onClick={() => toggleVisibility(i.filter, i.id)}
            >
                {i.Text} 
            
                {visible.dropDown === i.id && visible.active && 
                    <div className={filter.filter__drop_down} onClick={stop=>stop.stopPropagation()}>
                      { i.listFilter ?
                        i.listFilter?.map(e => (
                            <a href="#" className = {filter.filter__link} key = {e.id}>
                                {e.author}
                            </a>                            
                        ))
                        : <form className={filter.filter__form}>
                            <div>
                                <input type="radio" name="form" id="new" />
                                <label className={filter.filter__label} htmlFor="new" >Более новые</label>
                            </div>
                            <div>
                                <input type="radio" name="form" id="old" />
                                 <label className={filter.filter__label} htmlFor="old">Более старые</label>
                            </div>
                        </form>
                        }
                    </div>
                }
            </div>
        ))}
    </div>
    );

  }
  export default Filter;