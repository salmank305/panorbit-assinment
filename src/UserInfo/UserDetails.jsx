import React from 'react'
import { Gallery } from '../Pages/Gallery'
import { MyToDo } from '../Pages/ToDo'
import { Post } from '../Pages/Post'
import { Profile } from '../Pages/Profile'

export const UserDetails = () => {
  return (
    <div>
      <Profile/>
      <Post/>
      <Gallery/>
      <MyToDo/>
    </div>
  )
}

