import { type } from 'os'
import React from 'react'
import { Candidates, ElectionVote } from '../typings'
import Candidate from './Candidate'

type Props = {
  data: any

  allVots: number

  elec: any
}

function ShowCandidates({
  data,
  elec,

  allVots,
}: Props) {
  return (
    <div
      className="sticky top-6 mt-6 mb-4 w-96 "
      style={{ maxHeight: 'calc(100vh - 170px)' }}
    >
      <div className="h-full overflow-y-scroll border border-black bg-white">
        <div className="mx-6 mt-2 border border-gray-300 bg-white px-2 py-2 shadow-md">
          <div className="h-full w-full">
            <button className="flex h-full w-full items-center space-x-2 pl-3 text-left text-[28px]">
              <span>รวมทุกเขต</span>
            </button>
          </div>
        </div>

        <div className=" pt-2">
          <div>
            <div className="flex items-end justify-between px-6">
              <div className="text-lg">จำนวนคะแนน</div>
              <div className="font-notosans text-xs leading-7">
                อัปเดตล่าสุด 13:14 น.
              </div>
            </div>
            <div className=" px-6 py-6">
              <div
                className=" space-y-4 px-4 py-4 "
                style={{ backgroundImage: " url('pattern.png')" }}
              >
                {data.map((a: any) => (
                  <Candidate num={a} data={elec} allVots={allVots} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowCandidates
