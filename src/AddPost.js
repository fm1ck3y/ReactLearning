import './AddPost.css';
import React from 'react';
import { connect } from 'react-redux';
import { addNews } from './actions';

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
          showResults: false,
          successfulAddPost: false
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
          .then(data => {
            fetch('/news/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: this.state.title,
                    description: this.state.description,
                    image: data.filename,
                    date_create: this.state.date_create,
                    author: this.state.author
                })
            })
            .then(res => res.json())
            .then(data => {
                this.setState({ showResults: true });
                dispatch(addNews(data.description, data.title, data.author, data.date_create, data.image, data.id));
                if (data.status === 200) {
                    this.setState({ successfulAddPost: true, title: '', description: '', selectedImage: "" })
                } else {
                    this.setState({ successfulAddPost: false })
                }
            });
          });
    }
    Results = () => (
        this.state.successfulAddPost ?
        <div className="w3-panel w3-green">
            Новый пост успешно добавлен!
        </div>
        :
        <div className="w3-panel w3-red">
            Ошибка добавления поста, попробуйте еще раз.
        </div>
    )

  render()
  {
    return (
    
        <form onSubmit={this.onFormSubmit}>
            <h3>Добавление нового поста</h3>
            { this.state.showResults ? <this.Results /> : null }            
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



function mapStateToProps(state) {
  return {
    news: [...state.news]
  }
}

export default connect(
  mapStateToProps
)(AddPost);
