import React from 'react'
import { Candidates } from '../typings'
import { percentage } from '../utils/tools'
type Props = {
  data: any
  Leadcandidate: any
  allVots: number
  stillVots: number
}
function Subheader({ data, Leadcandidate, allVots, stillVots }: Props) {
  console.log(Leadcandidate)
  console.log(data)
  return (
    <div className="hidden shrink-0 md:block">
      <div className="bg-gray-200 shadow-md">
        <div className="container mx-auto max-w-3xl px-4 py-2">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="text-sm md:text-base">ผลรวมคะแนนทุกเขต</div>
              <div className="font-notosans text-xs">
                อัปเดตล่าสุด 23 พ.ค. 65 | 11:53 น.
              </div>
            </div>
            <div className="mt-1 flex w-full space-x-[2px]">
              <div
                style={{
                  width: `calc(${percentage(
                    data[Leadcandidate[0]],
                    allVots
                  )}% - 2px)`,
                }}
              >
                <div className="bg-candidate-8 h-3"></div>
                <div className="flex items-center space-x-1">
                  <img
                    src={`candidates/${Leadcandidate[0]}.png`}
                    alt="ชัชชาติ"
                    className="h-6 w-6"
                  />
                  <div className="font-notosans">
                    <div className="h-[12px] text-xs font-bold">
                      {data[Leadcandidate[0]]}
                    </div>
                    <div className="h-[12px] text-xs">ชัชชาติ</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: `calc(${percentage(
                    data[Leadcandidate[1]],
                    allVots
                  )}% - 2px)`,
                }}
              >
                <div className="bg-candidate-4 h-3"></div>
                <div className="flex items-center space-x-1">
                  <div className="font-notosans">
                    <div className="h-[12px] text-xs font-bold">
                      {data[Leadcandidate[1]]}
                    </div>
                    <div className="h-[12px] text-xs">สุชัชวีร์</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: `calc(${percentage(
                    data[Leadcandidate[2]],
                    allVots
                  )}% - 2px)`,
                }}
              >
                <div className="bg-candidate-1 h-3"></div>
                <div className="flex items-center space-x-1">
                  <div className="font-notosans">
                    <div className="h-[12px] text-xs font-bold">
                      {data[Leadcandidate[2]]}
                    </div>
                    <div className="h-[12px] text-xs">วิโรจน์</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: `calc(${percentage(
                    data[Leadcandidate[3]],
                    allVots
                  )}% - 2px)`,
                }}
              >
                <div className="bg-candidate-3 h-3"></div>
                <div className="flex items-center space-x-1">
                  <div className="font-notosans">
                    <div className="h-[12px] text-xs font-bold">
                      {data[Leadcandidate[3]]}
                    </div>
                    <div className="h-[12px] text-xs">สกลธี</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: `calc(${percentage(stillVots, allVots)}% - 2px)`,
                }}
              >
                <div className="bg-candidate-9999 h-3"></div>
                <div className="flex items-center space-x-1">
                  <div className="font-notosans">
                    <div className="h-[12px] text-xs font-bold">
                      {stillVots}
                    </div>
                    <div className="h-[12px] text-xs">อื่นๆ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subheader
