'use client';

import { App_ } from "./Asset/AppBody"

const about_page = () => {
  return (
    <div>
      about page
    </div>
  )
}

export default function HomePage(params: any) {
  return (
    App_(about_page)
  )
}
