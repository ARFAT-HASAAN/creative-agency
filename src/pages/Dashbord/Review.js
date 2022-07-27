import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import placeholderImg from '../../assets/placeholder (2).jpg'
import swal from 'sweetalert'

const Review = () => {
  const [query, setQuery] = useState({
    name: '',
    Message: '',
    picture: placeholderImg,
  })

  const TextChanger = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuery({ ...query, [name]: value })
  }

  const SubmitForm = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/review', query)

      .then((res) => {
        if (res.data.acknowledged) {
          swal({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
            button: 'Aww yiss!',
          })

          setQuery({ name: '', Message: '', picture: '' })
        }
      })
  }

  return (
    <div>
      <div className="p-6 max-w-[500px]">
        <form onSubmit={SubmitForm}>
          <input
            className="my-2 p-2 block border-2 w-full  rounded"
            type="text"
            name="name"
            value={query.name}
            onChange={TextChanger}
            placeholder="Your Name"
          />

          <textarea
            className="my-2 w-full p-2 block border-2  rounded"
            name="Message"
            onChange={TextChanger}
            id=""
            cols="50"
            rows="10"
            value={query.Message}
            placeholder="Message"
          ></textarea>
          <input
            className="bg-slate-900 cursor-pointer text-white px-5 py-2 rounded-md"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  )
}

export default Review
