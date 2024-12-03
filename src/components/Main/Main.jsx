import Card from '../post/Card/card'
import { posts } from '../../posts.jsx'
import Tags from '../Tags/Tags'
import { useState } from 'react'

function Main() {

    const [newPosts, setNewPosts] = useState(posts)
    const [newTitle, setTitle] = useState('')

    function addPost(e) {
        e.preventDefault()

        const newPost = {
            id: Date.now(),
            title: newTitle,
            image: undefined /* compila questo campo */,
            content: '',
            tags: [],
            published: true,
        }

        if (newTitle === '') return

        setNewPosts([...newPosts, newPost])
        setTitle('')

        console.log({ newPost })
    }

    function delPost(id) {
        setNewPosts(newPosts.filter(post => post.id !== id))
    }


    const tags = []

    posts.forEach(post => {
        const postTags = post.tags
        postTags.forEach((tag) => {
            !tags.includes(tag) && tags.push(tag)

        });
    });

    const [formData, setFormData] = useState(posts)

    function handleFormData(e) {
        console.log(e.target.title)
    }


    return (
        <>
            <main>
                <div className='container'>
                    <Tags tags={tags} />
                    <form onSubmit={addPost} className='form' action="submit">
                        <label htmlFor="title">Titolo</label>
                        <input className='input_field' name='title' type="text" onChange={handleFormData} placeholder='Titolo del Post' value={formData.title} />
                        <label htmlFor="image">Immagine</label>
                        <input className='input_field' name='image' type="text" onChange={handleFormData} placeholder='Inserisci un immagine' value={formData.image} />
                        <label htmlFor="content">Contenuto del Post</label>
                        <input className='input_field' name='content' type="text" onChange={handleFormData} placeholder='Aggiungi un contenuto al tuo post' value={formData.content} />
                        <label htmlFor="Categoria"></label>
                        <select className='input_field' name="Categoria">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <div className='check'>
                            <label htmlFor="Tags">HTML</label>
                            <input type="checkbox" name="Tags" id="" text='html' />
                            <label htmlFor="Tags">CSS</label>
                            <input type="checkbox" name="Tags" id="" text='html' />
                            <label htmlFor="Tags">JS</label>
                            <input type="checkbox" name="Tags" id="" text='html' />
                            <label htmlFor="Tags">PHP</label>
                            <input type="checkbox" name="Tags" id="" text='html' />
                        </div>

                        <input className='input_btn' type="submit" value='Crea nuovo post' />
                    </form>
                    <div className="row">
                        {newPosts.map((post) => (
                            <div key={post.id} className="col-6">
                                {post.published === true && <Card callback={() => delPost(post.id)} title={post.title} tags={post.tags} content={post.content} image={post.image} />}
                            </div>
                        ))}
                    </div>


                </div>


            </main >
        </>
    )
}

export default Main