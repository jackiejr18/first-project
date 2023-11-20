import './CSS/TodoItems.css'
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
      <div className='todoitems-container'>
        <img src={not_tick}/>
        <img src={tick}/>
        <div className='todoitems-text'>{text}</div>
      </div>
      <img src={cross}/>
    </div>
  )
}

export default TodoItems
