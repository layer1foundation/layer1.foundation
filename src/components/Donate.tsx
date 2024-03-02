import React from 'react'
import Segment from './Segment'
import Chapter from './Chapter'
import copy from '@/constants/copy/donate'

export default function Donate() {
  return (
    <div>
    <Segment scroll={false}>
        <Chapter chapter={copy.donate.chapter0} half={true}></Chapter>
    </Segment>
    <Segment scroll={false}>
        <Chapter chapter={copy.donate.chapter1}half={true} ></Chapter>
    </Segment>
    </div>
  )
}
