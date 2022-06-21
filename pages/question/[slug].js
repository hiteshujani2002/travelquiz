import React from 'react'
import { useRouter } from 'next/router'

export const Slug = () => {
    const router = useRouter()
    const {slug} = router.query
  return (
    <div>Slug is {slug}</div>
  )
}

export default Slug
