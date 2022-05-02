import './AddPost.css';
import React from 'react';
import { addNews } from './actions';
import axios from 'axios';
import uuid from 'react-uuid'

class AddPost extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          description: '',
          title: '',
          date_create: new Date().toLocaleString(),
          author: 'fm1ck3y',
          selectedImage: '',
          image: ''
        };
    
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }
    onTitleChange(e) { 
        this.setState({
            title: e.target.value
        });
    }
    
    onImageChange(e) { 
        this.setState({
            selectedImage: e.target.files[0]
        });
    }

    onDescriptionChange(e){
        this.setState({
            description: e.target.value
        });
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        let dispatch = this.props.dispatch;
        const formData = new FormData();
        formData.append(
            "my-image-file",
            this.state.selectedImage,
            this.state.selectedImage.name
        );

        fetch('/image', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
          .then(data => this.setState({ image : data.filename }));

        fetch('/news/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
                date_create: this.state.date_create,
                author: this.state.author
            })
        })
        .then(res => res.json())
        .then(data => {
            dispatch(addNews(data.description, data.title, data.author, data.date_create, data.image, data.id));
        });
    }

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
                <textarea 
                    name="text" 
                    placeholder="Описание поста"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}></textarea>
                <label htmlFor="password" required>Фотография:</label>
                <input 
                    type="file" 
                    multiple
                    accept="image/*"
                    className="custom-file-input" 
                    name="image" 
                    onChange={this.onImageChange}/>
            </fieldset>
            <button type="submit">Создать</button>
        </form>
    );
  }
}

export default AddPost;