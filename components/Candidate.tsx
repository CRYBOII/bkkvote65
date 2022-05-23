import React from 'react'
import { candis, percentage, percentageM } from '../utils/tools'

function Candidate({ num, data, Leadcandidate, allVots, stillVote }: any) {
  return (
    <div className=" flex h-16 w-full items-end space-x-2 ">
      <div className=" relative h-16 w-16 cursor-pointer">
        <div className="relative h-16 w-16 cursor-pointer">
          <div
            className={`bg-candidate-${num} absolute bottom-0 left-0 right-0 h-3/4`}
          ></div>
          <img
            src={`/candidates/${num}.png`}
            alt={candis[num]}
            className="absolute top-0 left-0 right-0 bottom-0"
          />
        </div>
      </div>
      <div className=" flex-1">
        <div className="flex cursor-pointer items-end justify-between">
          <div className="h-[40px] leading-[18px]">
            <div>{candis[num].split(' ')[0]}</div>
            <div>{candis[num].split(' ')[1]}</div>
          </div>
          <div className="text-right">
            <div className="font-notosans text-2xl font-bold leading-[26px]">
              {data[num]}
            </div>
            <div className="font-notosans mb-1 text-sm font-bold leading-[12px]">
              {percentage(data[num], allVots).toString().split('.')[0]} %
            </div>
          </div>
        </div>
        <div
          className={`bg-candidate-${num} h-3`}
          style={{
            width: `calc(${percentageM(data[num], allVots)}% - 2px)`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Candidate
