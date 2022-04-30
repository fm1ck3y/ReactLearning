import './AddPost.css';
import { Link } from "react-router-dom";
import React from 'react';
import { addNews } from './actions';

class AddPost extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
          text: '',
          title: '',
          date: '',
          author: '',
          image: '',
        };
    
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }
    onTitleChange(e) { }
    
    onImageChange(e) { }
    
    onFormSubmit(e) { }

  render()
  {
    console.log(this.props.news);

    return (
    
        <form onSubmit={this.onFormSubmit}>
            <h3>Добавление нового поста</h3>
            <div className="w3-panel w3-red">
                Failed
            </div>
            <div className="w3-panel w3-green">
                Good
            </div>
            <fieldset>
                <legend><span className="section">1</span>Основная информация поста</legend>
                <label htmlFor="name">Заголовок:</label>
                <input 
                    type="text" 
                    name="title" 
                    maxLength="100" 
                    title="Имя" 
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    required />
                <label htmlFor="name">Описание:</label>
                <textarea name="text" placeholder="Описание поста"></textarea>
                <label htmlFor="password" required>Фотография:</label>
                <input 
                    type="file" 
                    multiple
                    accept="image/*"
                    className="custom-file-input" 
                    name="image" 
                    value={this.state.image}
                    onChange={this.onImageChange}/>
            </fieldset>
            <button type="submit">Создать</button>
        </form>
    );
  }
}

export default AddPost;