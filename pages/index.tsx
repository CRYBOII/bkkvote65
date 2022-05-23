import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ShowCandidates from '../components/ShowCandidates'
import Subheader from '../components/Subheader'
import { Candidates, ElectionVote } from '../typings'

const Home: NextPage = () => {
  const [elec, setData] = useState<any>()
  useEffect(() => {
    fetch('/votes.json')
      .then((x) => x.json())
      .then((x) => setData(x))
      .catch((e) => console.log(e))
  }, [])
  if (!elec) return <div>Loading...</div>

  const data = elec.candidates
  //   sort most votes first
  const keysSorted: String[] = Object.keys(data).sort(function (a, b) {
    return data[b] - data[a]
  })
  let stillVots = 0
  let allVots = 0
  // count all votes
  keysSorted.map((key) => {
    allVots += data[+key]
  })
  // count the rest of candidates
  keysSorted.slice(4, +keysSorted[keysSorted.length - 1]).map((x) => {
    stillVots += data[+x]
  })
  // get first 4 candidates who have most votes
  const Leadcandidate = [...new Array(4)].map((_, i) => keysSorted[i])

  return (
    <div className=" flex flex-col">
      <Subheader
        data={data}
        Leadcandidate={Leadcandidate}
        stillVots={stillVots}
        allVots={allVots}
      />
      <div className=" container  mx-auto flex max-w-5xl">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex-1">
          <div className="relative flex h-full w-full flex-col">
            <div className="pointer-events-none z-10 px-6 py-4 md:mt-2 md:px-0">
              <div className="text-xl">ผลนับคะแนนอย่างไม่เป็นทางการ</div>
              <div className="text-xl">แบบเรียลไทม์</div>
              <div className="font-notosans text-base">จากอาสาสมัคร</div>
            </div>
            <img src="/map.png" alt="" />
          </div>
        </div>
        <ShowCandidates elec={data} data={keysSorted} allVots={allVots} />
      </div>
    </div>
  )
}

export default Home
