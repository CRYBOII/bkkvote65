export interface ElectionVote {
  id: number
  totalVotes: number
  goodVotes: number
  badVotes: number
  noVotes: number
  eligible: number
  progress: number
  updatedAt: string
  candidates: Candidates
  candidateAreas: CandidateAreas
  parties: Parties
}

export interface Candidates {
  '1': number
  '2': number
  '3': number
  '4': number
  '5': number
  '6': number
  '7': number
  '8': number
  '9': number
  '10': number
  '11': number
  '12': number
  '13': number
  '14': number
  '15': number
  '16': number
  '17': number
  '18': number
  '19': number
  '20': number
  '21': number
  '22': number
  '23': number
  '24': number
  '25': number
  '26': number
  '27': number
  '28': number
  '29': number
  '30': number
  '31': number
}

export interface CandidateAreas {
  '1': N1
  '2': N210
  '3': N33
  '4': N44
  '5': N55
  '6': N66
  '7': N77
  '8': N88
  '9': N99
  '10': N1010
  '11': N1114
  '12': N1213
  '13': N1313
  '14': N1414
  '15': N1515
  '16': N1616
  '17': N1717
  '18': N1818
  '19': N1919
  '20': N2020
  '21': N2125
  '22': N2223
  '23': N2323
  '24': N2424
  '25': N2525
  '26': N2626
  '27': N2727
  '28': N2828
  '29': N2929
  '30': N3030
  '31': N3131
  '32': N3210
  '33': N3310
  '34': N343
  '35': N352
  '36': N362
  '37': N372
  '38': N382
  '39': N392
  '40': N40
  '41': N41
  '42': N4210
  '43': N4310
  '44': N445
  '45': N452
  '46': N462
  '47': N472
  '48': N482
  '49': N492
  '50': N50
}

export interface N1 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates2
}

export interface Candidates2 {
  '1': N12
  '2': N2
  '3': N3
  '4': N4
  '5': N5
  '6': N6
  '7': N7
  '8': N8
  '9': N9
  '10': N10
  '11': N11
  '12': N122
  '13': N13
  '14': N14
  '15': N15
  '16': N16
  '17': N17
  '18': N18
  '19': N19
  '20': N20
  '21': N21
  '22': N22
  '23': N23
  '24': N24
  '25': N25
  '26': N26
  '27': N27
  '28': N28
  '29': N29
  '30': N30
  '31': N31
}

export interface N12 {
  partyId: number
  votes: number
}

export interface N2 {
  partyId: number
  votes: number
}

export interface N3 {
  partyId: number
  votes: number
}

export interface N4 {
  partyId: number
  votes: number
}

export interface N5 {
  partyId: number
  votes: number
}

export interface N6 {
  partyId: number
  votes: number
}

export interface N7 {
  partyId: number
  votes: number
}

export interface N8 {
  partyId: number
  votes: number
}

export interface N9 {
  partyId: number
  votes: number
}

export interface N10 {
  partyId: number
  votes: number
}

export interface N11 {
  partyId: number
  votes: number
}

export interface N122 {
  partyId: number
  votes: number
}

export interface N13 {
  partyId: number
  votes: number
}

export interface N14 {
  partyId: number
  votes: number
}

export interface N15 {
  partyId: number
  votes: number
}

export interface N16 {
  partyId: number
  votes: number
}

export interface N17 {
  partyId: number
  votes: number
}

export interface N18 {
  partyId: number
  votes: number
}

export interface N19 {
  partyId: number
  votes: number
}

export interface N20 {
  partyId: number
  votes: number
}

export interface N21 {
  partyId: number
  votes: number
}

export interface N22 {
  partyId: number
  votes: number
}

export interface N23 {
  partyId: number
  votes: number
}

export interface N24 {
  partyId: number
  votes: number
}

export interface N25 {
  partyId: number
  votes: number
}

export interface N26 {
  partyId: number
  votes: number
}

export interface N27 {
  partyId: number
  votes: number
}

export interface N28 {
  partyId: number
  votes: number
}

export interface N29 {
  partyId: number
  votes: number
}

export interface N30 {
  partyId: number
  votes: number
}

export interface N31 {
  partyId: number
  votes: number
}

export interface N210 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates3
}

export interface Candidates3 {
  '1': N110
  '2': N211
  '3': N32
  '4': N42
  '5': N52
  '6': N62
  '7': N72
  '8': N82
  '9': N92
  '10': N102
  '11': N112
  '12': N123
  '13': N132
  '14': N142
  '15': N152
  '16': N162
  '17': N172
  '18': N182
  '19': N192
  '20': N202
  '21': N212
  '22': N222
  '23': N232
  '24': N242
  '25': N252
  '26': N262
  '27': N272
  '28': N282
  '29': N292
  '30': N302
  '31': N312
}

export interface N110 {
  partyId: number
  votes: number
}

export interface N211 {
  partyId: number
  votes: number
}

export interface N32 {
  partyId: number
  votes: number
}

export interface N42 {
  partyId: number
  votes: number
}

export interface N52 {
  partyId: number
  votes: number
}

export interface N62 {
  partyId: number
  votes: number
}

export interface N72 {
  partyId: number
  votes: number
}

export interface N82 {
  partyId: number
  votes: number
}

export interface N92 {
  partyId: number
  votes: number
}

export interface N102 {
  partyId: number
  votes: number
}

export interface N112 {
  partyId: number
  votes: number
}

export interface N123 {
  partyId: number
  votes: number
}

export interface N132 {
  partyId: number
  votes: number
}

export interface N142 {
  partyId: number
  votes: number
}

export interface N152 {
  partyId: number
  votes: number
}

export interface N162 {
  partyId: number
  votes: number
}

export interface N172 {
  partyId: number
  votes: number
}

export interface N182 {
  partyId: number
  votes: number
}

export interface N192 {
  partyId: number
  votes: number
}

export interface N202 {
  partyId: number
  votes: number
}

export interface N212 {
  partyId: number
  votes: number
}

export interface N222 {
  partyId: number
  votes: number
}

export interface N232 {
  partyId: number
  votes: number
}

export interface N242 {
  partyId: number
  votes: number
}

export interface N252 {
  partyId: number
  votes: number
}

export interface N262 {
  partyId: number
  votes: number
}

export interface N272 {
  partyId: number
  votes: number
}

export interface N282 {
  partyId: number
  votes: number
}

export interface N292 {
  partyId: number
  votes: number
}

export interface N302 {
  partyId: number
  votes: number
}

export interface N312 {
  partyId: number
  votes: number
}

export interface N33 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates4
}

export interface Candidates4 {
  '1': N111
  '2': N213
  '3': N34
  '4': N43
  '5': N53
  '6': N63
  '7': N73
  '8': N83
  '9': N93
  '10': N103
  '11': N113
  '12': N124
  '13': N133
  '14': N143
  '15': N153
  '16': N163
  '17': N173
  '18': N183
  '19': N193
  '20': N203
  '21': N214
  '22': N223
  '23': N233
  '24': N243
  '25': N253
  '26': N263
  '27': N273
  '28': N283
  '29': N293
  '30': N303
  '31': N313
}

export interface N111 {
  partyId: number
  votes: number
}

export interface N213 {
  partyId: number
  votes: number
}

export interface N34 {
  partyId: number
  votes: number
}

export interface N43 {
  partyId: number
  votes: number
}

export interface N53 {
  partyId: number
  votes: number
}

export interface N63 {
  partyId: number
  votes: number
}

export interface N73 {
  partyId: number
  votes: number
}

export interface N83 {
  partyId: number
  votes: number
}

export interface N93 {
  partyId: number
  votes: number
}

export interface N103 {
  partyId: number
  votes: number
}

export interface N113 {
  partyId: number
  votes: number
}

export interface N124 {
  partyId: number
  votes: number
}

export interface N133 {
  partyId: number
  votes: number
}

export interface N143 {
  partyId: number
  votes: number
}

export interface N153 {
  partyId: number
  votes: number
}

export interface N163 {
  partyId: number
  votes: number
}

export interface N173 {
  partyId: number
  votes: number
}

export interface N183 {
  partyId: number
  votes: number
}

export interface N193 {
  partyId: number
  votes: number
}

export interface N203 {
  partyId: number
  votes: number
}

export interface N214 {
  partyId: number
  votes: number
}

export interface N223 {
  partyId: number
  votes: number
}

export interface N233 {
  partyId: number
  votes: number
}

export interface N243 {
  partyId: number
  votes: number
}

export interface N253 {
  partyId: number
  votes: number
}

export interface N263 {
  partyId: number
  votes: number
}

export interface N273 {
  partyId: number
  votes: number
}

export interface N283 {
  partyId: number
  votes: number
}

export interface N293 {
  partyId: number
  votes: number
}

export interface N303 {
  partyId: number
  votes: number
}

export interface N313 {
  partyId: number
  votes: number
}

export interface N44 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates5
}

export interface Candidates5 {
  '1': N114
  '2': N215
  '3': N35
  '4': N45
  '5': N54
  '6': N64
  '7': N74
  '8': N84
  '9': N94
  '10': N104
  '11': N115
  '12': N125
  '13': N134
  '14': N144
  '15': N154
  '16': N164
  '17': N174
  '18': N184
  '19': N194
  '20': N204
  '21': N216
  '22': N224
  '23': N234
  '24': N244
  '25': N254
  '26': N264
  '27': N274
  '28': N284
  '29': N294
  '30': N304
  '31': N314
}

export interface N114 {
  partyId: number
  votes: number
}

export interface N215 {
  partyId: number
  votes: number
}

export interface N35 {
  partyId: number
  votes: number
}

export interface N45 {
  partyId: number
  votes: number
}

export interface N54 {
  partyId: number
  votes: number
}

export interface N64 {
  partyId: number
  votes: number
}

export interface N74 {
  partyId: number
  votes: number
}

export interface N84 {
  partyId: number
  votes: number
}

export interface N94 {
  partyId: number
  votes: number
}

export interface N104 {
  partyId: number
  votes: number
}

export interface N115 {
  partyId: number
  votes: number
}

export interface N125 {
  partyId: number
  votes: number
}

export interface N134 {
  partyId: number
  votes: number
}

export interface N144 {
  partyId: number
  votes: number
}

export interface N154 {
  partyId: number
  votes: number
}

export interface N164 {
  partyId: number
  votes: number
}

export interface N174 {
  partyId: number
  votes: number
}

export interface N184 {
  partyId: number
  votes: number
}

export interface N194 {
  partyId: number
  votes: number
}

export interface N204 {
  partyId: number
  votes: number
}

export interface N216 {
  partyId: number
  votes: number
}

export interface N224 {
  partyId: number
  votes: number
}

export interface N234 {
  partyId: number
  votes: number
}

export interface N244 {
  partyId: number
  votes: number
}

export interface N254 {
  partyId: number
  votes: number
}

export interface N264 {
  partyId: number
  votes: number
}

export interface N274 {
  partyId: number
  votes: number
}

export interface N284 {
  partyId: number
  votes: number
}

export interface N294 {
  partyId: number
  votes: number
}

export interface N304 {
  partyId: number
  votes: number
}

export interface N314 {
  partyId: number
  votes: number
}

export interface N55 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates6
}

export interface Candidates6 {
  '1': N116
  '2': N217
  '3': N36
  '4': N46
  '5': N56
  '6': N65
  '7': N75
  '8': N85
  '9': N95
  '10': N105
  '11': N117
  '12': N126
  '13': N135
  '14': N145
  '15': N155
  '16': N165
  '17': N175
  '18': N185
  '19': N195
  '20': N205
  '21': N218
  '22': N225
  '23': N235
  '24': N245
  '25': N255
  '26': N265
  '27': N275
  '28': N285
  '29': N295
  '30': N305
  '31': N315
}

export interface N116 {
  partyId: number
  votes: number
}

export interface N217 {
  partyId: number
  votes: number
}

export interface N36 {
  partyId: number
  votes: number
}

export interface N46 {
  partyId: number
  votes: number
}

export interface N56 {
  partyId: number
  votes: number
}

export interface N65 {
  partyId: number
  votes: number
}

export interface N75 {
  partyId: number
  votes: number
}

export interface N85 {
  partyId: number
  votes: number
}

export interface N95 {
  partyId: number
  votes: number
}

export interface N105 {
  partyId: number
  votes: number
}

export interface N117 {
  partyId: number
  votes: number
}

export interface N126 {
  partyId: number
  votes: number
}

export interface N135 {
  partyId: number
  votes: number
}

export interface N145 {
  partyId: number
  votes: number
}

export interface N155 {
  partyId: number
  votes: number
}

export interface N165 {
  partyId: number
  votes: number
}

export interface N175 {
  partyId: number
  votes: number
}

export interface N185 {
  partyId: number
  votes: number
}

export interface N195 {
  partyId: number
  votes: number
}

export interface N205 {
  partyId: number
  votes: number
}

export interface N218 {
  partyId: number
  votes: number
}

export interface N225 {
  partyId: number
  votes: number
}

export interface N235 {
  partyId: number
  votes: number
}

export interface N245 {
  partyId: number
  votes: number
}

export interface N255 {
  partyId: number
  votes: number
}

export interface N265 {
  partyId: number
  votes: number
}

export interface N275 {
  partyId: number
  votes: number
}

export interface N285 {
  partyId: number
  votes: number
}

export interface N295 {
  partyId: number
  votes: number
}

export interface N305 {
  partyId: number
  votes: number
}

export interface N315 {
  partyId: number
  votes: number
}

export interface N66 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates7
}

export interface Candidates7 {
  '1': N118
  '2': N219
  '3': N37
  '4': N47
  '5': N57
  '6': N67
  '7': N76
  '8': N86
  '9': N96
  '10': N106
  '11': N119
  '12': N127
  '13': N136
  '14': N146
  '15': N156
  '16': N166
  '17': N176
  '18': N186
  '19': N196
  '20': N206
  '21': N2110
  '22': N226
  '23': N236
  '24': N246
  '25': N256
  '26': N266
  '27': N276
  '28': N286
  '29': N296
  '30': N306
  '31': N316
}

export interface N118 {
  partyId: number
  votes: number
}

export interface N219 {
  partyId: number
  votes: number
}

export interface N37 {
  partyId: number
  votes: number
}

export interface N47 {
  partyId: number
  votes: number
}

export interface N57 {
  partyId: number
  votes: number
}

export interface N67 {
  partyId: number
  votes: number
}

export interface N76 {
  partyId: number
  votes: number
}

export interface N86 {
  partyId: number
  votes: number
}

export interface N96 {
  partyId: number
  votes: number
}

export interface N106 {
  partyId: number
  votes: number
}

export interface N119 {
  partyId: number
  votes: number
}

export interface N127 {
  partyId: number
  votes: number
}

export interface N136 {
  partyId: number
  votes: number
}

export interface N146 {
  partyId: number
  votes: number
}

export interface N156 {
  partyId: number
  votes: number
}

export interface N166 {
  partyId: number
  votes: number
}

export interface N176 {
  partyId: number
  votes: number
}

export interface N186 {
  partyId: number
  votes: number
}

export interface N196 {
  partyId: number
  votes: number
}

export interface N206 {
  partyId: number
  votes: number
}

export interface N2110 {
  partyId: number
  votes: number
}

export interface N226 {
  partyId: number
  votes: number
}

export interface N236 {
  partyId: number
  votes: number
}

export interface N246 {
  partyId: number
  votes: number
}

export interface N256 {
  partyId: number
  votes: number
}

export interface N266 {
  partyId: number
  votes: number
}

export interface N276 {
  partyId: number
  votes: number
}

export interface N286 {
  partyId: number
  votes: number
}

export interface N296 {
  partyId: number
  votes: number
}

export interface N306 {
  partyId: number
  votes: number
}

export interface N316 {
  partyId: number
  votes: number
}

export interface N77 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates8
}

export interface Candidates8 {
  '1': N120
  '2': N220
  '3': N38
  '4': N48
  '5': N58
  '6': N68
  '7': N78
  '8': N87
  '9': N97
  '10': N107
  '11': N1110
  '12': N128
  '13': N137
  '14': N147
  '15': N157
  '16': N167
  '17': N177
  '18': N187
  '19': N197
  '20': N207
  '21': N2111
  '22': N227
  '23': N237
  '24': N247
  '25': N257
  '26': N267
  '27': N277
  '28': N287
  '29': N297
  '30': N307
  '31': N317
}

export interface N120 {
  partyId: number
  votes: number
}

export interface N220 {
  partyId: number
  votes: number
}

export interface N38 {
  partyId: number
  votes: number
}

export interface N48 {
  partyId: number
  votes: number
}

export interface N58 {
  partyId: number
  votes: number
}

export interface N68 {
  partyId: number
  votes: number
}

export interface N78 {
  partyId: number
  votes: number
}

export interface N87 {
  partyId: number
  votes: number
}

export interface N97 {
  partyId: number
  votes: number
}

export interface N107 {
  partyId: number
  votes: number
}

export interface N1110 {
  partyId: number
  votes: number
}

export interface N128 {
  partyId: number
  votes: number
}

export interface N137 {
  partyId: number
  votes: number
}

export interface N147 {
  partyId: number
  votes: number
}

export interface N157 {
  partyId: number
  votes: number
}

export interface N167 {
  partyId: number
  votes: number
}

export interface N177 {
  partyId: number
  votes: number
}

export interface N187 {
  partyId: number
  votes: number
}

export interface N197 {
  partyId: number
  votes: number
}

export interface N207 {
  partyId: number
  votes: number
}

export interface N2111 {
  partyId: number
  votes: number
}

export interface N227 {
  partyId: number
  votes: number
}

export interface N237 {
  partyId: number
  votes: number
}

export interface N247 {
  partyId: number
  votes: number
}

export interface N257 {
  partyId: number
  votes: number
}

export interface N267 {
  partyId: number
  votes: number
}

export interface N277 {
  partyId: number
  votes: number
}

export interface N287 {
  partyId: number
  votes: number
}

export interface N297 {
  partyId: number
  votes: number
}

export interface N307 {
  partyId: number
  votes: number
}

export interface N317 {
  partyId: number
  votes: number
}

export interface N88 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates9
}

export interface Candidates9 {
  '1': N121
  '2': N221
  '3': N39
  '4': N49
  '5': N59
  '6': N69
  '7': N79
  '8': N89
  '9': N98
  '10': N108
  '11': N1111
  '12': N129
  '13': N138
  '14': N148
  '15': N158
  '16': N168
  '17': N178
  '18': N188
  '19': N198
  '20': N208
  '21': N2112
  '22': N228
  '23': N238
  '24': N248
  '25': N258
  '26': N268
  '27': N278
  '28': N288
  '29': N298
  '30': N308
  '31': N318
}

export interface N121 {
  partyId: number
  votes: number
}

export interface N221 {
  partyId: number
  votes: number
}

export interface N39 {
  partyId: number
  votes: number
}

export interface N49 {
  partyId: number
  votes: number
}

export interface N59 {
  partyId: number
  votes: number
}

export interface N69 {
  partyId: number
  votes: number
}

export interface N79 {
  partyId: number
  votes: number
}

export interface N89 {
  partyId: number
  votes: number
}

export interface N98 {
  partyId: number
  votes: number
}

export interface N108 {
  partyId: number
  votes: number
}

export interface N1111 {
  partyId: number
  votes: number
}

export interface N129 {
  partyId: number
  votes: number
}

export interface N138 {
  partyId: number
  votes: number
}

export interface N148 {
  partyId: number
  votes: number
}

export interface N158 {
  partyId: number
  votes: number
}

export interface N168 {
  partyId: number
  votes: number
}

export interface N178 {
  partyId: number
  votes: number
}

export interface N188 {
  partyId: number
  votes: number
}

export interface N198 {
  partyId: number
  votes: number
}

export interface N208 {
  partyId: number
  votes: number
}

export interface N2112 {
  partyId: number
  votes: number
}

export interface N228 {
  partyId: number
  votes: number
}

export interface N238 {
  partyId: number
  votes: number
}

export interface N248 {
  partyId: number
  votes: number
}

export interface N258 {
  partyId: number
  votes: number
}

export interface N268 {
  partyId: number
  votes: number
}

export interface N278 {
  partyId: number
  votes: number
}

export interface N288 {
  partyId: number
  votes: number
}

export interface N298 {
  partyId: number
  votes: number
}

export interface N308 {
  partyId: number
  votes: number
}

export interface N318 {
  partyId: number
  votes: number
}

export interface N99 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates10
}

export interface Candidates10 {
  '1': N130
  '2': N229
  '3': N310
  '4': N410
  '5': N510
  '6': N610
  '7': N710
  '8': N810
  '9': N910
  '10': N109
  '11': N1112
  '12': N1210
  '13': N139
  '14': N149
  '15': N159
  '16': N169
  '17': N179
  '18': N189
  '19': N199
  '20': N209
  '21': N2113
  '22': N2210
  '23': N239
  '24': N249
  '25': N259
  '26': N269
  '27': N279
  '28': N289
  '29': N299
  '30': N309
  '31': N319
}

export interface N130 {
  partyId: number
  votes: number
}

export interface N229 {
  partyId: number
  votes: number
}

export interface N310 {
  partyId: number
  votes: number
}

export interface N410 {
  partyId: number
  votes: number
}

export interface N510 {
  partyId: number
  votes: number
}

export interface N610 {
  partyId: number
  votes: number
}

export interface N710 {
  partyId: number
  votes: number
}

export interface N810 {
  partyId: number
  votes: number
}

export interface N910 {
  partyId: number
  votes: number
}

export interface N109 {
  partyId: number
  votes: number
}

export interface N1112 {
  partyId: number
  votes: number
}

export interface N1210 {
  partyId: number
  votes: number
}

export interface N139 {
  partyId: number
  votes: number
}

export interface N149 {
  partyId: number
  votes: number
}

export interface N159 {
  partyId: number
  votes: number
}

export interface N169 {
  partyId: number
  votes: number
}

export interface N179 {
  partyId: number
  votes: number
}

export interface N189 {
  partyId: number
  votes: number
}

export interface N199 {
  partyId: number
  votes: number
}

export interface N209 {
  partyId: number
  votes: number
}

export interface N2113 {
  partyId: number
  votes: number
}

export interface N2210 {
  partyId: number
  votes: number
}

export interface N239 {
  partyId: number
  votes: number
}

export interface N249 {
  partyId: number
  votes: number
}

export interface N259 {
  partyId: number
  votes: number
}

export interface N269 {
  partyId: number
  votes: number
}

export interface N279 {
  partyId: number
  votes: number
}

export interface N289 {
  partyId: number
  votes: number
}

export interface N299 {
  partyId: number
  votes: number
}

export interface N309 {
  partyId: number
  votes: number
}

export interface N319 {
  partyId: number
  votes: number
}

export interface N1010 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates11
}

export interface Candidates11 {
  '1': N131
  '2': N230
  '3': N311
  '4': N411
  '5': N511
  '6': N611
  '7': N711
  '8': N811
  '9': N911
  '10': N1011
  '11': N1113
  '12': N1211
  '13': N1310
  '14': N1410
  '15': N1510
  '16': N1610
  '17': N1710
  '18': N1810
  '19': N1910
  '20': N2010
  '21': N2114
  '22': N2211
  '23': N2310
  '24': N2410
  '25': N2510
  '26': N2610
  '27': N2710
  '28': N2810
  '29': N2910
  '30': N3010
  '31': N3110
}

export interface N131 {
  partyId: number
  votes: number
}

export interface N230 {
  partyId: number
  votes: number
}

export interface N311 {
  partyId: number
  votes: number
}

export interface N411 {
  partyId: number
  votes: number
}

export interface N511 {
  partyId: number
  votes: number
}

export interface N611 {
  partyId: number
  votes: number
}

export interface N711 {
  partyId: number
  votes: number
}

export interface N811 {
  partyId: number
  votes: number
}

export interface N911 {
  partyId: number
  votes: number
}

export interface N1011 {
  partyId: number
  votes: number
}

export interface N1113 {
  partyId: number
  votes: number
}

export interface N1211 {
  partyId: number
  votes: number
}

export interface N1310 {
  partyId: number
  votes: number
}

export interface N1410 {
  partyId: number
  votes: number
}

export interface N1510 {
  partyId: number
  votes: number
}

export interface N1610 {
  partyId: number
  votes: number
}

export interface N1710 {
  partyId: number
  votes: number
}

export interface N1810 {
  partyId: number
  votes: number
}

export interface N1910 {
  partyId: number
  votes: number
}

export interface N2010 {
  partyId: number
  votes: number
}

export interface N2114 {
  partyId: number
  votes: number
}

export interface N2211 {
  partyId: number
  votes: number
}

export interface N2310 {
  partyId: number
  votes: number
}

export interface N2410 {
  partyId: number
  votes: number
}

export interface N2510 {
  partyId: number
  votes: number
}

export interface N2610 {
  partyId: number
  votes: number
}

export interface N2710 {
  partyId: number
  votes: number
}

export interface N2810 {
  partyId: number
  votes: number
}

export interface N2910 {
  partyId: number
  votes: number
}

export interface N3010 {
  partyId: number
  votes: number
}

export interface N3110 {
  partyId: number
  votes: number
}

export interface N1114 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates12
}

export interface Candidates12 {
  '1': N140
  '2': N231
  '3': N320
  '4': N412
  '5': N512
  '6': N612
  '7': N712
  '8': N812
  '9': N912
  '10': N1012
  '11': N1115
  '12': N1212
  '13': N1311
  '14': N1411
  '15': N1511
  '16': N1611
  '17': N1711
  '18': N1811
  '19': N1911
  '20': N2011
  '21': N2115
  '22': N2212
  '23': N2311
  '24': N2411
  '25': N2511
  '26': N2611
  '27': N2711
  '28': N2811
  '29': N2911
  '30': N3011
  '31': N3111
}

export interface N140 {
  partyId: number
  votes: number
}

export interface N231 {
  partyId: number
  votes: number
}

export interface N320 {
  partyId: number
  votes: number
}

export interface N412 {
  partyId: number
  votes: number
}

export interface N512 {
  partyId: number
  votes: number
}

export interface N612 {
  partyId: number
  votes: number
}

export interface N712 {
  partyId: number
  votes: number
}

export interface N812 {
  partyId: number
  votes: number
}

export interface N912 {
  partyId: number
  votes: number
}

export interface N1012 {
  partyId: number
  votes: number
}

export interface N1115 {
  partyId: number
  votes: number
}

export interface N1212 {
  partyId: number
  votes: number
}

export interface N1311 {
  partyId: number
  votes: number
}

export interface N1411 {
  partyId: number
  votes: number
}

export interface N1511 {
  partyId: number
  votes: number
}

export interface N1611 {
  partyId: number
  votes: number
}

export interface N1711 {
  partyId: number
  votes: number
}

export interface N1811 {
  partyId: number
  votes: number
}

export interface N1911 {
  partyId: number
  votes: number
}

export interface N2011 {
  partyId: number
  votes: number
}

export interface N2115 {
  partyId: number
  votes: number
}

export interface N2212 {
  partyId: number
  votes: number
}

export interface N2311 {
  partyId: number
  votes: number
}

export interface N2411 {
  partyId: number
  votes: number
}

export interface N2511 {
  partyId: number
  votes: number
}

export interface N2611 {
  partyId: number
  votes: number
}

export interface N2711 {
  partyId: number
  votes: number
}

export interface N2811 {
  partyId: number
  votes: number
}

export interface N2911 {
  partyId: number
  votes: number
}

export interface N3011 {
  partyId: number
  votes: number
}

export interface N3111 {
  partyId: number
  votes: number
}

export interface N1213 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates13
}

export interface Candidates13 {
  '1': N141
  '2': N240
  '3': N321
  '4': N413
  '5': N513
  '6': N613
  '7': N713
  '8': N813
  '9': N913
  '10': N1013
  '11': N1116
  '12': N1214
  '13': N1312
  '14': N1412
  '15': N1512
  '16': N1612
  '17': N1712
  '18': N1812
  '19': N1912
  '20': N2012
  '21': N2116
  '22': N2213
  '23': N2312
  '24': N2412
  '25': N2512
  '26': N2612
  '27': N2712
  '28': N2812
  '29': N2912
  '30': N3012
  '31': N3112
}

export interface N141 {
  partyId: number
  votes: number
}

export interface N240 {
  partyId: number
  votes: number
}

export interface N321 {
  partyId: number
  votes: number
}

export interface N413 {
  partyId: number
  votes: number
}

export interface N513 {
  partyId: number
  votes: number
}

export interface N613 {
  partyId: number
  votes: number
}

export interface N713 {
  partyId: number
  votes: number
}

export interface N813 {
  partyId: number
  votes: number
}

export interface N913 {
  partyId: number
  votes: number
}

export interface N1013 {
  partyId: number
  votes: number
}

export interface N1116 {
  partyId: number
  votes: number
}

export interface N1214 {
  partyId: number
  votes: number
}

export interface N1312 {
  partyId: number
  votes: number
}

export interface N1412 {
  partyId: number
  votes: number
}

export interface N1512 {
  partyId: number
  votes: number
}

export interface N1612 {
  partyId: number
  votes: number
}

export interface N1712 {
  partyId: number
  votes: number
}

export interface N1812 {
  partyId: number
  votes: number
}

export interface N1912 {
  partyId: number
  votes: number
}

export interface N2012 {
  partyId: number
  votes: number
}

export interface N2116 {
  partyId: number
  votes: number
}

export interface N2213 {
  partyId: number
  votes: number
}

export interface N2312 {
  partyId: number
  votes: number
}

export interface N2412 {
  partyId: number
  votes: number
}

export interface N2512 {
  partyId: number
  votes: number
}

export interface N2612 {
  partyId: number
  votes: number
}

export interface N2712 {
  partyId: number
  votes: number
}

export interface N2812 {
  partyId: number
  votes: number
}

export interface N2912 {
  partyId: number
  votes: number
}

export interface N3012 {
  partyId: number
  votes: number
}

export interface N3112 {
  partyId: number
  votes: number
}

export interface N1313 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates14
}

export interface Candidates14 {
  '1': N150
  '2': N241
  '3': N322
  '4': N414
  '5': N514
  '6': N614
  '7': N714
  '8': N814
  '9': N914
  '10': N1014
  '11': N1117
  '12': N1215
  '13': N1314
  '14': N1413
  '15': N1513
  '16': N1613
  '17': N1713
  '18': N1813
  '19': N1913
  '20': N2013
  '21': N2117
  '22': N2214
  '23': N2313
  '24': N2413
  '25': N2513
  '26': N2613
  '27': N2713
  '28': N2813
  '29': N2913
  '30': N3013
  '31': N3113
}

export interface N150 {
  partyId: number
  votes: number
}

export interface N241 {
  partyId: number
  votes: number
}

export interface N322 {
  partyId: number
  votes: number
}

export interface N414 {
  partyId: number
  votes: number
}

export interface N514 {
  partyId: number
  votes: number
}

export interface N614 {
  partyId: number
  votes: number
}

export interface N714 {
  partyId: number
  votes: number
}

export interface N814 {
  partyId: number
  votes: number
}

export interface N914 {
  partyId: number
  votes: number
}

export interface N1014 {
  partyId: number
  votes: number
}

export interface N1117 {
  partyId: number
  votes: number
}

export interface N1215 {
  partyId: number
  votes: number
}

export interface N1314 {
  partyId: number
  votes: number
}

export interface N1413 {
  partyId: number
  votes: number
}

export interface N1513 {
  partyId: number
  votes: number
}

export interface N1613 {
  partyId: number
  votes: number
}

export interface N1713 {
  partyId: number
  votes: number
}

export interface N1813 {
  partyId: number
  votes: number
}

export interface N1913 {
  partyId: number
  votes: number
}

export interface N2013 {
  partyId: number
  votes: number
}

export interface N2117 {
  partyId: number
  votes: number
}

export interface N2214 {
  partyId: number
  votes: number
}

export interface N2313 {
  partyId: number
  votes: number
}

export interface N2413 {
  partyId: number
  votes: number
}

export interface N2513 {
  partyId: number
  votes: number
}

export interface N2613 {
  partyId: number
  votes: number
}

export interface N2713 {
  partyId: number
  votes: number
}

export interface N2813 {
  partyId: number
  votes: number
}

export interface N2913 {
  partyId: number
  votes: number
}

export interface N3013 {
  partyId: number
  votes: number
}

export interface N3113 {
  partyId: number
  votes: number
}

export interface N1414 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates15
}

export interface Candidates15 {
  '1': N151
  '2': N250
  '3': N323
  '4': N415
  '5': N515
  '6': N615
  '7': N715
  '8': N815
  '9': N915
  '10': N1015
  '11': N1118
  '12': N1216
  '13': N1315
  '14': N1415
  '15': N1514
  '16': N1614
  '17': N1714
  '18': N1814
  '19': N1914
  '20': N2014
  '21': N2118
  '22': N2215
  '23': N2314
  '24': N2414
  '25': N2514
  '26': N2614
  '27': N2714
  '28': N2814
  '29': N2914
  '30': N3014
  '31': N3114
}

export interface N151 {
  partyId: number
  votes: number
}

export interface N250 {
  partyId: number
  votes: number
}

export interface N323 {
  partyId: number
  votes: number
}

export interface N415 {
  partyId: number
  votes: number
}

export interface N515 {
  partyId: number
  votes: number
}

export interface N615 {
  partyId: number
  votes: number
}

export interface N715 {
  partyId: number
  votes: number
}

export interface N815 {
  partyId: number
  votes: number
}

export interface N915 {
  partyId: number
  votes: number
}

export interface N1015 {
  partyId: number
  votes: number
}

export interface N1118 {
  partyId: number
  votes: number
}

export interface N1216 {
  partyId: number
  votes: number
}

export interface N1315 {
  partyId: number
  votes: number
}

export interface N1415 {
  partyId: number
  votes: number
}

export interface N1514 {
  partyId: number
  votes: number
}

export interface N1614 {
  partyId: number
  votes: number
}

export interface N1714 {
  partyId: number
  votes: number
}

export interface N1814 {
  partyId: number
  votes: number
}

export interface N1914 {
  partyId: number
  votes: number
}

export interface N2014 {
  partyId: number
  votes: number
}

export interface N2118 {
  partyId: number
  votes: number
}

export interface N2215 {
  partyId: number
  votes: number
}

export interface N2314 {
  partyId: number
  votes: number
}

export interface N2414 {
  partyId: number
  votes: number
}

export interface N2514 {
  partyId: number
  votes: number
}

export interface N2614 {
  partyId: number
  votes: number
}

export interface N2714 {
  partyId: number
  votes: number
}

export interface N2814 {
  partyId: number
  votes: number
}

export interface N2914 {
  partyId: number
  votes: number
}

export interface N3014 {
  partyId: number
  votes: number
}

export interface N3114 {
  partyId: number
  votes: number
}

export interface N1515 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates16
}

export interface Candidates16 {
  '1': N160
  '2': N251
  '3': N324
  '4': N416
  '5': N516
  '6': N616
  '7': N716
  '8': N816
  '9': N916
  '10': N1016
  '11': N1119
  '12': N1217
  '13': N1316
  '14': N1416
  '15': N1516
  '16': N1615
  '17': N1715
  '18': N1815
  '19': N1915
  '20': N2015
  '21': N2119
  '22': N2216
  '23': N2315
  '24': N2415
  '25': N2515
  '26': N2615
  '27': N2715
  '28': N2815
  '29': N2915
  '30': N3015
  '31': N3115
}

export interface N160 {
  partyId: number
  votes: number
}

export interface N251 {
  partyId: number
  votes: number
}

export interface N324 {
  partyId: number
  votes: number
}

export interface N416 {
  partyId: number
  votes: number
}

export interface N516 {
  partyId: number
  votes: number
}

export interface N616 {
  partyId: number
  votes: number
}

export interface N716 {
  partyId: number
  votes: number
}

export interface N816 {
  partyId: number
  votes: number
}

export interface N916 {
  partyId: number
  votes: number
}

export interface N1016 {
  partyId: number
  votes: number
}

export interface N1119 {
  partyId: number
  votes: number
}

export interface N1217 {
  partyId: number
  votes: number
}

export interface N1316 {
  partyId: number
  votes: number
}

export interface N1416 {
  partyId: number
  votes: number
}

export interface N1516 {
  partyId: number
  votes: number
}

export interface N1615 {
  partyId: number
  votes: number
}

export interface N1715 {
  partyId: number
  votes: number
}

export interface N1815 {
  partyId: number
  votes: number
}

export interface N1915 {
  partyId: number
  votes: number
}

export interface N2015 {
  partyId: number
  votes: number
}

export interface N2119 {
  partyId: number
  votes: number
}

export interface N2216 {
  partyId: number
  votes: number
}

export interface N2315 {
  partyId: number
  votes: number
}

export interface N2415 {
  partyId: number
  votes: number
}

export interface N2515 {
  partyId: number
  votes: number
}

export interface N2615 {
  partyId: number
  votes: number
}

export interface N2715 {
  partyId: number
  votes: number
}

export interface N2815 {
  partyId: number
  votes: number
}

export interface N2915 {
  partyId: number
  votes: number
}

export interface N3015 {
  partyId: number
  votes: number
}

export interface N3115 {
  partyId: number
  votes: number
}

export interface N1616 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates17
}

export interface Candidates17 {
  '1': N161
  '2': N260
  '3': N325
  '4': N417
  '5': N517
  '6': N617
  '7': N717
  '8': N817
  '9': N917
  '10': N1017
  '11': N1120
  '12': N1218
  '13': N1317
  '14': N1417
  '15': N1517
  '16': N1617
  '17': N1716
  '18': N1816
  '19': N1916
  '20': N2016
  '21': N2120
  '22': N2217
  '23': N2316
  '24': N2416
  '25': N2516
  '26': N2616
  '27': N2716
  '28': N2816
  '29': N2916
  '30': N3016
  '31': N3116
}

export interface N161 {
  partyId: number
  votes: number
}

export interface N260 {
  partyId: number
  votes: number
}

export interface N325 {
  partyId: number
  votes: number
}

export interface N417 {
  partyId: number
  votes: number
}

export interface N517 {
  partyId: number
  votes: number
}

export interface N617 {
  partyId: number
  votes: number
}

export interface N717 {
  partyId: number
  votes: number
}

export interface N817 {
  partyId: number
  votes: number
}

export interface N917 {
  partyId: number
  votes: number
}

export interface N1017 {
  partyId: number
  votes: number
}

export interface N1120 {
  partyId: number
  votes: number
}

export interface N1218 {
  partyId: number
  votes: number
}

export interface N1317 {
  partyId: number
  votes: number
}

export interface N1417 {
  partyId: number
  votes: number
}

export interface N1517 {
  partyId: number
  votes: number
}

export interface N1617 {
  partyId: number
  votes: number
}

export interface N1716 {
  partyId: number
  votes: number
}

export interface N1816 {
  partyId: number
  votes: number
}

export interface N1916 {
  partyId: number
  votes: number
}

export interface N2016 {
  partyId: number
  votes: number
}

export interface N2120 {
  partyId: number
  votes: number
}

export interface N2217 {
  partyId: number
  votes: number
}

export interface N2316 {
  partyId: number
  votes: number
}

export interface N2416 {
  partyId: number
  votes: number
}

export interface N2516 {
  partyId: number
  votes: number
}

export interface N2616 {
  partyId: number
  votes: number
}

export interface N2716 {
  partyId: number
  votes: number
}

export interface N2816 {
  partyId: number
  votes: number
}

export interface N2916 {
  partyId: number
  votes: number
}

export interface N3016 {
  partyId: number
  votes: number
}

export interface N3116 {
  partyId: number
  votes: number
}

export interface N1717 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates18
}

export interface Candidates18 {
  '1': N170
  '2': N261
  '3': N326
  '4': N418
  '5': N518
  '6': N618
  '7': N718
  '8': N818
  '9': N918
  '10': N1018
  '11': N1121
  '12': N1219
  '13': N1318
  '14': N1418
  '15': N1518
  '16': N1618
  '17': N1718
  '18': N1817
  '19': N1917
  '20': N2017
  '21': N2121
  '22': N2218
  '23': N2317
  '24': N2417
  '25': N2517
  '26': N2617
  '27': N2717
  '28': N2817
  '29': N2917
  '30': N3017
  '31': N3117
}

export interface N170 {
  partyId: number
  votes: number
}

export interface N261 {
  partyId: number
  votes: number
}

export interface N326 {
  partyId: number
  votes: number
}

export interface N418 {
  partyId: number
  votes: number
}

export interface N518 {
  partyId: number
  votes: number
}

export interface N618 {
  partyId: number
  votes: number
}

export interface N718 {
  partyId: number
  votes: number
}

export interface N818 {
  partyId: number
  votes: number
}

export interface N918 {
  partyId: number
  votes: number
}

export interface N1018 {
  partyId: number
  votes: number
}

export interface N1121 {
  partyId: number
  votes: number
}

export interface N1219 {
  partyId: number
  votes: number
}

export interface N1318 {
  partyId: number
  votes: number
}

export interface N1418 {
  partyId: number
  votes: number
}

export interface N1518 {
  partyId: number
  votes: number
}

export interface N1618 {
  partyId: number
  votes: number
}

export interface N1718 {
  partyId: number
  votes: number
}

export interface N1817 {
  partyId: number
  votes: number
}

export interface N1917 {
  partyId: number
  votes: number
}

export interface N2017 {
  partyId: number
  votes: number
}

export interface N2121 {
  partyId: number
  votes: number
}

export interface N2218 {
  partyId: number
  votes: number
}

export interface N2317 {
  partyId: number
  votes: number
}

export interface N2417 {
  partyId: number
  votes: number
}

export interface N2517 {
  partyId: number
  votes: number
}

export interface N2617 {
  partyId: number
  votes: number
}

export interface N2717 {
  partyId: number
  votes: number
}

export interface N2817 {
  partyId: number
  votes: number
}

export interface N2917 {
  partyId: number
  votes: number
}

export interface N3017 {
  partyId: number
  votes: number
}

export interface N3117 {
  partyId: number
  votes: number
}

export interface N1818 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates19
}

export interface Candidates19 {
  '1': N171
  '2': N270
  '3': N327
  '4': N419
  '5': N519
  '6': N619
  '7': N719
  '8': N819
  '9': N919
  '10': N1019
  '11': N1122
  '12': N1220
  '13': N1319
  '14': N1419
  '15': N1519
  '16': N1619
  '17': N1719
  '18': N1819
  '19': N1918
  '20': N2018
  '21': N2122
  '22': N2219
  '23': N2318
  '24': N2418
  '25': N2518
  '26': N2618
  '27': N2718
  '28': N2818
  '29': N2918
  '30': N3018
  '31': N3118
}

export interface N171 {
  partyId: number
  votes: number
}

export interface N270 {
  partyId: number
  votes: number
}

export interface N327 {
  partyId: number
  votes: number
}

export interface N419 {
  partyId: number
  votes: number
}

export interface N519 {
  partyId: number
  votes: number
}

export interface N619 {
  partyId: number
  votes: number
}

export interface N719 {
  partyId: number
  votes: number
}

export interface N819 {
  partyId: number
  votes: number
}

export interface N919 {
  partyId: number
  votes: number
}

export interface N1019 {
  partyId: number
  votes: number
}

export interface N1122 {
  partyId: number
  votes: number
}

export interface N1220 {
  partyId: number
  votes: number
}

export interface N1319 {
  partyId: number
  votes: number
}

export interface N1419 {
  partyId: number
  votes: number
}

export interface N1519 {
  partyId: number
  votes: number
}

export interface N1619 {
  partyId: number
  votes: number
}

export interface N1719 {
  partyId: number
  votes: number
}

export interface N1819 {
  partyId: number
  votes: number
}

export interface N1918 {
  partyId: number
  votes: number
}

export interface N2018 {
  partyId: number
  votes: number
}

export interface N2122 {
  partyId: number
  votes: number
}

export interface N2219 {
  partyId: number
  votes: number
}

export interface N2318 {
  partyId: number
  votes: number
}

export interface N2418 {
  partyId: number
  votes: number
}

export interface N2518 {
  partyId: number
  votes: number
}

export interface N2618 {
  partyId: number
  votes: number
}

export interface N2718 {
  partyId: number
  votes: number
}

export interface N2818 {
  partyId: number
  votes: number
}

export interface N2918 {
  partyId: number
  votes: number
}

export interface N3018 {
  partyId: number
  votes: number
}

export interface N3118 {
  partyId: number
  votes: number
}

export interface N1919 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates20
}

export interface Candidates20 {
  '1': N180
  '2': N271
  '3': N328
  '4': N420
  '5': N520
  '6': N620
  '7': N720
  '8': N820
  '9': N920
  '10': N1020
  '11': N1123
  '12': N1221
  '13': N1320
  '14': N1420
  '15': N1520
  '16': N1620
  '17': N1720
  '18': N1820
  '19': N1920
  '20': N2019
  '21': N2123
  '22': N2220
  '23': N2319
  '24': N2419
  '25': N2519
  '26': N2619
  '27': N2719
  '28': N2819
  '29': N2919
  '30': N3019
  '31': N3119
}

export interface N180 {
  partyId: number
  votes: number
}

export interface N271 {
  partyId: number
  votes: number
}

export interface N328 {
  partyId: number
  votes: number
}

export interface N420 {
  partyId: number
  votes: number
}

export interface N520 {
  partyId: number
  votes: number
}

export interface N620 {
  partyId: number
  votes: number
}

export interface N720 {
  partyId: number
  votes: number
}

export interface N820 {
  partyId: number
  votes: number
}

export interface N920 {
  partyId: number
  votes: number
}

export interface N1020 {
  partyId: number
  votes: number
}

export interface N1123 {
  partyId: number
  votes: number
}

export interface N1221 {
  partyId: number
  votes: number
}

export interface N1320 {
  partyId: number
  votes: number
}

export interface N1420 {
  partyId: number
  votes: number
}

export interface N1520 {
  partyId: number
  votes: number
}

export interface N1620 {
  partyId: number
  votes: number
}

export interface N1720 {
  partyId: number
  votes: number
}

export interface N1820 {
  partyId: number
  votes: number
}

export interface N1920 {
  partyId: number
  votes: number
}

export interface N2019 {
  partyId: number
  votes: number
}

export interface N2123 {
  partyId: number
  votes: number
}

export interface N2220 {
  partyId: number
  votes: number
}

export interface N2319 {
  partyId: number
  votes: number
}

export interface N2419 {
  partyId: number
  votes: number
}

export interface N2519 {
  partyId: number
  votes: number
}

export interface N2619 {
  partyId: number
  votes: number
}

export interface N2719 {
  partyId: number
  votes: number
}

export interface N2819 {
  partyId: number
  votes: number
}

export interface N2919 {
  partyId: number
  votes: number
}

export interface N3019 {
  partyId: number
  votes: number
}

export interface N3119 {
  partyId: number
  votes: number
}

export interface N2020 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates21
}

export interface Candidates21 {
  '1': N181
  '2': N280
  '3': N329
  '4': N421
  '5': N521
  '6': N621
  '7': N721
  '8': N821
  '9': N921
  '10': N1021
  '11': N1124
  '12': N1222
  '13': N1321
  '14': N1421
  '15': N1521
  '16': N1621
  '17': N1721
  '18': N1821
  '19': N1921
  '20': N2021
  '21': N2124
  '22': N2221
  '23': N2320
  '24': N2420
  '25': N2520
  '26': N2620
  '27': N2720
  '28': N2820
  '29': N2920
  '30': N3020
  '31': N3120
}

export interface N181 {
  partyId: number
  votes: number
}

export interface N280 {
  partyId: number
  votes: number
}

export interface N329 {
  partyId: number
  votes: number
}

export interface N421 {
  partyId: number
  votes: number
}

export interface N521 {
  partyId: number
  votes: number
}

export interface N621 {
  partyId: number
  votes: number
}

export interface N721 {
  partyId: number
  votes: number
}

export interface N821 {
  partyId: number
  votes: number
}

export interface N921 {
  partyId: number
  votes: number
}

export interface N1021 {
  partyId: number
  votes: number
}

export interface N1124 {
  partyId: number
  votes: number
}

export interface N1222 {
  partyId: number
  votes: number
}

export interface N1321 {
  partyId: number
  votes: number
}

export interface N1421 {
  partyId: number
  votes: number
}

export interface N1521 {
  partyId: number
  votes: number
}

export interface N1621 {
  partyId: number
  votes: number
}

export interface N1721 {
  partyId: number
  votes: number
}

export interface N1821 {
  partyId: number
  votes: number
}

export interface N1921 {
  partyId: number
  votes: number
}

export interface N2021 {
  partyId: number
  votes: number
}

export interface N2124 {
  partyId: number
  votes: number
}

export interface N2221 {
  partyId: number
  votes: number
}

export interface N2320 {
  partyId: number
  votes: number
}

export interface N2420 {
  partyId: number
  votes: number
}

export interface N2520 {
  partyId: number
  votes: number
}

export interface N2620 {
  partyId: number
  votes: number
}

export interface N2720 {
  partyId: number
  votes: number
}

export interface N2820 {
  partyId: number
  votes: number
}

export interface N2920 {
  partyId: number
  votes: number
}

export interface N3020 {
  partyId: number
  votes: number
}

export interface N3120 {
  partyId: number
  votes: number
}

export interface N2125 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates22
}

export interface Candidates22 {
  '1': N190
  '2': N281
  '3': N330
  '4': N422
  '5': N522
  '6': N622
  '7': N722
  '8': N822
  '9': N922
  '10': N1022
  '11': N1125
  '12': N1223
  '13': N1322
  '14': N1422
  '15': N1522
  '16': N1622
  '17': N1722
  '18': N1822
  '19': N1922
  '20': N2022
  '21': N2126
  '22': N2222
  '23': N2321
  '24': N2421
  '25': N2521
  '26': N2621
  '27': N2721
  '28': N2821
  '29': N2921
  '30': N3021
  '31': N3121
}

export interface N190 {
  partyId: number
  votes: number
}

export interface N281 {
  partyId: number
  votes: number
}

export interface N330 {
  partyId: number
  votes: number
}

export interface N422 {
  partyId: number
  votes: number
}

export interface N522 {
  partyId: number
  votes: number
}

export interface N622 {
  partyId: number
  votes: number
}

export interface N722 {
  partyId: number
  votes: number
}

export interface N822 {
  partyId: number
  votes: number
}

export interface N922 {
  partyId: number
  votes: number
}

export interface N1022 {
  partyId: number
  votes: number
}

export interface N1125 {
  partyId: number
  votes: number
}

export interface N1223 {
  partyId: number
  votes: number
}

export interface N1322 {
  partyId: number
  votes: number
}

export interface N1422 {
  partyId: number
  votes: number
}

export interface N1522 {
  partyId: number
  votes: number
}

export interface N1622 {
  partyId: number
  votes: number
}

export interface N1722 {
  partyId: number
  votes: number
}

export interface N1822 {
  partyId: number
  votes: number
}

export interface N1922 {
  partyId: number
  votes: number
}

export interface N2022 {
  partyId: number
  votes: number
}

export interface N2126 {
  partyId: number
  votes: number
}

export interface N2222 {
  partyId: number
  votes: number
}

export interface N2321 {
  partyId: number
  votes: number
}

export interface N2421 {
  partyId: number
  votes: number
}

export interface N2521 {
  partyId: number
  votes: number
}

export interface N2621 {
  partyId: number
  votes: number
}

export interface N2721 {
  partyId: number
  votes: number
}

export interface N2821 {
  partyId: number
  votes: number
}

export interface N2921 {
  partyId: number
  votes: number
}

export interface N3021 {
  partyId: number
  votes: number
}

export interface N3121 {
  partyId: number
  votes: number
}

export interface N2223 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates23
}

export interface Candidates23 {
  '1': N191
  '2': N290
  '3': N331
  '4': N423
  '5': N523
  '6': N623
  '7': N723
  '8': N823
  '9': N923
  '10': N1023
  '11': N1126
  '12': N1224
  '13': N1323
  '14': N1423
  '15': N1523
  '16': N1623
  '17': N1723
  '18': N1823
  '19': N1923
  '20': N2023
  '21': N2127
  '22': N2224
  '23': N2322
  '24': N2422
  '25': N2522
  '26': N2622
  '27': N2722
  '28': N2822
  '29': N2922
  '30': N3022
  '31': N3122
}

export interface N191 {
  partyId: number
  votes: number
}

export interface N290 {
  partyId: number
  votes: number
}

export interface N331 {
  partyId: number
  votes: number
}

export interface N423 {
  partyId: number
  votes: number
}

export interface N523 {
  partyId: number
  votes: number
}

export interface N623 {
  partyId: number
  votes: number
}

export interface N723 {
  partyId: number
  votes: number
}

export interface N823 {
  partyId: number
  votes: number
}

export interface N923 {
  partyId: number
  votes: number
}

export interface N1023 {
  partyId: number
  votes: number
}

export interface N1126 {
  partyId: number
  votes: number
}

export interface N1224 {
  partyId: number
  votes: number
}

export interface N1323 {
  partyId: number
  votes: number
}

export interface N1423 {
  partyId: number
  votes: number
}

export interface N1523 {
  partyId: number
  votes: number
}

export interface N1623 {
  partyId: number
  votes: number
}

export interface N1723 {
  partyId: number
  votes: number
}

export interface N1823 {
  partyId: number
  votes: number
}

export interface N1923 {
  partyId: number
  votes: number
}

export interface N2023 {
  partyId: number
  votes: number
}

export interface N2127 {
  partyId: number
  votes: number
}

export interface N2224 {
  partyId: number
  votes: number
}

export interface N2322 {
  partyId: number
  votes: number
}

export interface N2422 {
  partyId: number
  votes: number
}

export interface N2522 {
  partyId: number
  votes: number
}

export interface N2622 {
  partyId: number
  votes: number
}

export interface N2722 {
  partyId: number
  votes: number
}

export interface N2822 {
  partyId: number
  votes: number
}

export interface N2922 {
  partyId: number
  votes: number
}

export interface N3022 {
  partyId: number
  votes: number
}

export interface N3122 {
  partyId: number
  votes: number
}

export interface N2323 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates24
}

export interface Candidates24 {
  '1': N1100
  '2': N291
  '3': N332
  '4': N424
  '5': N524
  '6': N624
  '7': N724
  '8': N824
  '9': N924
  '10': N1024
  '11': N1127
  '12': N1225
  '13': N1324
  '14': N1424
  '15': N1524
  '16': N1624
  '17': N1724
  '18': N1824
  '19': N1924
  '20': N2024
  '21': N2128
  '22': N2225
  '23': N2324
  '24': N2423
  '25': N2523
  '26': N2623
  '27': N2723
  '28': N2823
  '29': N2923
  '30': N3023
  '31': N3123
}

export interface N1100 {
  partyId: number
  votes: number
}

export interface N291 {
  partyId: number
  votes: number
}

export interface N332 {
  partyId: number
  votes: number
}

export interface N424 {
  partyId: number
  votes: number
}

export interface N524 {
  partyId: number
  votes: number
}

export interface N624 {
  partyId: number
  votes: number
}

export interface N724 {
  partyId: number
  votes: number
}

export interface N824 {
  partyId: number
  votes: number
}

export interface N924 {
  partyId: number
  votes: number
}

export interface N1024 {
  partyId: number
  votes: number
}

export interface N1127 {
  partyId: number
  votes: number
}

export interface N1225 {
  partyId: number
  votes: number
}

export interface N1324 {
  partyId: number
  votes: number
}

export interface N1424 {
  partyId: number
  votes: number
}

export interface N1524 {
  partyId: number
  votes: number
}

export interface N1624 {
  partyId: number
  votes: number
}

export interface N1724 {
  partyId: number
  votes: number
}

export interface N1824 {
  partyId: number
  votes: number
}

export interface N1924 {
  partyId: number
  votes: number
}

export interface N2024 {
  partyId: number
  votes: number
}

export interface N2128 {
  partyId: number
  votes: number
}

export interface N2225 {
  partyId: number
  votes: number
}

export interface N2324 {
  partyId: number
  votes: number
}

export interface N2423 {
  partyId: number
  votes: number
}

export interface N2523 {
  partyId: number
  votes: number
}

export interface N2623 {
  partyId: number
  votes: number
}

export interface N2723 {
  partyId: number
  votes: number
}

export interface N2823 {
  partyId: number
  votes: number
}

export interface N2923 {
  partyId: number
  votes: number
}

export interface N3023 {
  partyId: number
  votes: number
}

export interface N3123 {
  partyId: number
  votes: number
}

export interface N2424 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates25
}

export interface Candidates25 {
  '1': N1101
  '2': N2100
  '3': N333
  '4': N425
  '5': N525
  '6': N625
  '7': N725
  '8': N825
  '9': N925
  '10': N1025
  '11': N1128
  '12': N1226
  '13': N1325
  '14': N1425
  '15': N1525
  '16': N1625
  '17': N1725
  '18': N1825
  '19': N1925
  '20': N2025
  '21': N2129
  '22': N2226
  '23': N2325
  '24': N2425
  '25': N2524
  '26': N2624
  '27': N2724
  '28': N2824
  '29': N2924
  '30': N3024
  '31': N3124
}

export interface N1101 {
  partyId: number
  votes: number
}

export interface N2100 {
  partyId: number
  votes: number
}

export interface N333 {
  partyId: number
  votes: number
}

export interface N425 {
  partyId: number
  votes: number
}

export interface N525 {
  partyId: number
  votes: number
}

export interface N625 {
  partyId: number
  votes: number
}

export interface N725 {
  partyId: number
  votes: number
}

export interface N825 {
  partyId: number
  votes: number
}

export interface N925 {
  partyId: number
  votes: number
}

export interface N1025 {
  partyId: number
  votes: number
}

export interface N1128 {
  partyId: number
  votes: number
}

export interface N1226 {
  partyId: number
  votes: number
}

export interface N1325 {
  partyId: number
  votes: number
}

export interface N1425 {
  partyId: number
  votes: number
}

export interface N1525 {
  partyId: number
  votes: number
}

export interface N1625 {
  partyId: number
  votes: number
}

export interface N1725 {
  partyId: number
  votes: number
}

export interface N1825 {
  partyId: number
  votes: number
}

export interface N1925 {
  partyId: number
  votes: number
}

export interface N2025 {
  partyId: number
  votes: number
}

export interface N2129 {
  partyId: number
  votes: number
}

export interface N2226 {
  partyId: number
  votes: number
}

export interface N2325 {
  partyId: number
  votes: number
}

export interface N2425 {
  partyId: number
  votes: number
}

export interface N2524 {
  partyId: number
  votes: number
}

export interface N2624 {
  partyId: number
  votes: number
}

export interface N2724 {
  partyId: number
  votes: number
}

export interface N2824 {
  partyId: number
  votes: number
}

export interface N2924 {
  partyId: number
  votes: number
}

export interface N3024 {
  partyId: number
  votes: number
}

export interface N3124 {
  partyId: number
  votes: number
}

export interface N2525 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates26
}

export interface Candidates26 {
  '1': N1102
  '2': N2101
  '3': N334
  '4': N426
  '5': N526
  '6': N626
  '7': N726
  '8': N826
  '9': N926
  '10': N1026
  '11': N1129
  '12': N1227
  '13': N1326
  '14': N1426
  '15': N1526
  '16': N1626
  '17': N1726
  '18': N1826
  '19': N1926
  '20': N2026
  '21': N2130
  '22': N2227
  '23': N2326
  '24': N2426
  '25': N2526
  '26': N2625
  '27': N2725
  '28': N2825
  '29': N2925
  '30': N3025
  '31': N3125
}

export interface N1102 {
  partyId: number
  votes: number
}

export interface N2101 {
  partyId: number
  votes: number
}

export interface N334 {
  partyId: number
  votes: number
}

export interface N426 {
  partyId: number
  votes: number
}

export interface N526 {
  partyId: number
  votes: number
}

export interface N626 {
  partyId: number
  votes: number
}

export interface N726 {
  partyId: number
  votes: number
}

export interface N826 {
  partyId: number
  votes: number
}

export interface N926 {
  partyId: number
  votes: number
}

export interface N1026 {
  partyId: number
  votes: number
}

export interface N1129 {
  partyId: number
  votes: number
}

export interface N1227 {
  partyId: number
  votes: number
}

export interface N1326 {
  partyId: number
  votes: number
}

export interface N1426 {
  partyId: number
  votes: number
}

export interface N1526 {
  partyId: number
  votes: number
}

export interface N1626 {
  partyId: number
  votes: number
}

export interface N1726 {
  partyId: number
  votes: number
}

export interface N1826 {
  partyId: number
  votes: number
}

export interface N1926 {
  partyId: number
  votes: number
}

export interface N2026 {
  partyId: number
  votes: number
}

export interface N2130 {
  partyId: number
  votes: number
}

export interface N2227 {
  partyId: number
  votes: number
}

export interface N2326 {
  partyId: number
  votes: number
}

export interface N2426 {
  partyId: number
  votes: number
}

export interface N2526 {
  partyId: number
  votes: number
}

export interface N2625 {
  partyId: number
  votes: number
}

export interface N2725 {
  partyId: number
  votes: number
}

export interface N2825 {
  partyId: number
  votes: number
}

export interface N2925 {
  partyId: number
  votes: number
}

export interface N3025 {
  partyId: number
  votes: number
}

export interface N3125 {
  partyId: number
  votes: number
}

export interface N2626 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates27
}

export interface Candidates27 {
  '1': N1103
  '2': N2102
  '3': N335
  '4': N427
  '5': N527
  '6': N627
  '7': N727
  '8': N827
  '9': N927
  '10': N1027
  '11': N1130
  '12': N1228
  '13': N1327
  '14': N1427
  '15': N1527
  '16': N1627
  '17': N1727
  '18': N1827
  '19': N1927
  '20': N2027
  '21': N2131
  '22': N2228
  '23': N2327
  '24': N2427
  '25': N2527
  '26': N2627
  '27': N2726
  '28': N2826
  '29': N2926
  '30': N3026
  '31': N3126
}

export interface N1103 {
  partyId: number
  votes: number
}

export interface N2102 {
  partyId: number
  votes: number
}

export interface N335 {
  partyId: number
  votes: number
}

export interface N427 {
  partyId: number
  votes: number
}

export interface N527 {
  partyId: number
  votes: number
}

export interface N627 {
  partyId: number
  votes: number
}

export interface N727 {
  partyId: number
  votes: number
}

export interface N827 {
  partyId: number
  votes: number
}

export interface N927 {
  partyId: number
  votes: number
}

export interface N1027 {
  partyId: number
  votes: number
}

export interface N1130 {
  partyId: number
  votes: number
}

export interface N1228 {
  partyId: number
  votes: number
}

export interface N1327 {
  partyId: number
  votes: number
}

export interface N1427 {
  partyId: number
  votes: number
}

export interface N1527 {
  partyId: number
  votes: number
}

export interface N1627 {
  partyId: number
  votes: number
}

export interface N1727 {
  partyId: number
  votes: number
}

export interface N1827 {
  partyId: number
  votes: number
}

export interface N1927 {
  partyId: number
  votes: number
}

export interface N2027 {
  partyId: number
  votes: number
}

export interface N2131 {
  partyId: number
  votes: number
}

export interface N2228 {
  partyId: number
  votes: number
}

export interface N2327 {
  partyId: number
  votes: number
}

export interface N2427 {
  partyId: number
  votes: number
}

export interface N2527 {
  partyId: number
  votes: number
}

export interface N2627 {
  partyId: number
  votes: number
}

export interface N2726 {
  partyId: number
  votes: number
}

export interface N2826 {
  partyId: number
  votes: number
}

export interface N2926 {
  partyId: number
  votes: number
}

export interface N3026 {
  partyId: number
  votes: number
}

export interface N3126 {
  partyId: number
  votes: number
}

export interface N2727 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates28
}

export interface Candidates28 {
  '1': N1104
  '2': N2103
  '3': N336
  '4': N428
  '5': N528
  '6': N628
  '7': N728
  '8': N828
  '9': N928
  '10': N1028
  '11': N1131
  '12': N1229
  '13': N1328
  '14': N1428
  '15': N1528
  '16': N1628
  '17': N1728
  '18': N1828
  '19': N1928
  '20': N2028
  '21': N2132
  '22': N2229
  '23': N2328
  '24': N2428
  '25': N2528
  '26': N2628
  '27': N2728
  '28': N2827
  '29': N2927
  '30': N3027
  '31': N3127
}

export interface N1104 {
  partyId: number
  votes: number
}

export interface N2103 {
  partyId: number
  votes: number
}

export interface N336 {
  partyId: number
  votes: number
}

export interface N428 {
  partyId: number
  votes: number
}

export interface N528 {
  partyId: number
  votes: number
}

export interface N628 {
  partyId: number
  votes: number
}

export interface N728 {
  partyId: number
  votes: number
}

export interface N828 {
  partyId: number
  votes: number
}

export interface N928 {
  partyId: number
  votes: number
}

export interface N1028 {
  partyId: number
  votes: number
}

export interface N1131 {
  partyId: number
  votes: number
}

export interface N1229 {
  partyId: number
  votes: number
}

export interface N1328 {
  partyId: number
  votes: number
}

export interface N1428 {
  partyId: number
  votes: number
}

export interface N1528 {
  partyId: number
  votes: number
}

export interface N1628 {
  partyId: number
  votes: number
}

export interface N1728 {
  partyId: number
  votes: number
}

export interface N1828 {
  partyId: number
  votes: number
}

export interface N1928 {
  partyId: number
  votes: number
}

export interface N2028 {
  partyId: number
  votes: number
}

export interface N2132 {
  partyId: number
  votes: number
}

export interface N2229 {
  partyId: number
  votes: number
}

export interface N2328 {
  partyId: number
  votes: number
}

export interface N2428 {
  partyId: number
  votes: number
}

export interface N2528 {
  partyId: number
  votes: number
}

export interface N2628 {
  partyId: number
  votes: number
}

export interface N2728 {
  partyId: number
  votes: number
}

export interface N2827 {
  partyId: number
  votes: number
}

export interface N2927 {
  partyId: number
  votes: number
}

export interface N3027 {
  partyId: number
  votes: number
}

export interface N3127 {
  partyId: number
  votes: number
}

export interface N2828 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates29
}

export interface Candidates29 {
  '1': N1105
  '2': N2104
  '3': N337
  '4': N429
  '5': N529
  '6': N629
  '7': N729
  '8': N829
  '9': N929
  '10': N1029
  '11': N1132
  '12': N1230
  '13': N1329
  '14': N1429
  '15': N1529
  '16': N1629
  '17': N1729
  '18': N1829
  '19': N1929
  '20': N2029
  '21': N2133
  '22': N2230
  '23': N2329
  '24': N2429
  '25': N2529
  '26': N2629
  '27': N2729
  '28': N2829
  '29': N2928
  '30': N3028
  '31': N3128
}

export interface N1105 {
  partyId: number
  votes: number
}

export interface N2104 {
  partyId: number
  votes: number
}

export interface N337 {
  partyId: number
  votes: number
}

export interface N429 {
  partyId: number
  votes: number
}

export interface N529 {
  partyId: number
  votes: number
}

export interface N629 {
  partyId: number
  votes: number
}

export interface N729 {
  partyId: number
  votes: number
}

export interface N829 {
  partyId: number
  votes: number
}

export interface N929 {
  partyId: number
  votes: number
}

export interface N1029 {
  partyId: number
  votes: number
}

export interface N1132 {
  partyId: number
  votes: number
}

export interface N1230 {
  partyId: number
  votes: number
}

export interface N1329 {
  partyId: number
  votes: number
}

export interface N1429 {
  partyId: number
  votes: number
}

export interface N1529 {
  partyId: number
  votes: number
}

export interface N1629 {
  partyId: number
  votes: number
}

export interface N1729 {
  partyId: number
  votes: number
}

export interface N1829 {
  partyId: number
  votes: number
}

export interface N1929 {
  partyId: number
  votes: number
}

export interface N2029 {
  partyId: number
  votes: number
}

export interface N2133 {
  partyId: number
  votes: number
}

export interface N2230 {
  partyId: number
  votes: number
}

export interface N2329 {
  partyId: number
  votes: number
}

export interface N2429 {
  partyId: number
  votes: number
}

export interface N2529 {
  partyId: number
  votes: number
}

export interface N2629 {
  partyId: number
  votes: number
}

export interface N2729 {
  partyId: number
  votes: number
}

export interface N2829 {
  partyId: number
  votes: number
}

export interface N2928 {
  partyId: number
  votes: number
}

export interface N3028 {
  partyId: number
  votes: number
}

export interface N3128 {
  partyId: number
  votes: number
}

export interface N2929 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates30
}

export interface Candidates30 {
  '1': N1106
  '2': N2105
  '3': N338
  '4': N430
  '5': N530
  '6': N630
  '7': N730
  '8': N830
  '9': N930
  '10': N1030
  '11': N1133
  '12': N1231
  '13': N1330
  '14': N1430
  '15': N1530
  '16': N1630
  '17': N1730
  '18': N1830
  '19': N1930
  '20': N2030
  '21': N2134
  '22': N2231
  '23': N2330
  '24': N2430
  '25': N2530
  '26': N2630
  '27': N2730
  '28': N2830
  '29': N2930
  '30': N3029
  '31': N3129
}

export interface N1106 {
  partyId: number
  votes: number
}

export interface N2105 {
  partyId: number
  votes: number
}

export interface N338 {
  partyId: number
  votes: number
}

export interface N430 {
  partyId: number
  votes: number
}

export interface N530 {
  partyId: number
  votes: number
}

export interface N630 {
  partyId: number
  votes: number
}

export interface N730 {
  partyId: number
  votes: number
}

export interface N830 {
  partyId: number
  votes: number
}

export interface N930 {
  partyId: number
  votes: number
}

export interface N1030 {
  partyId: number
  votes: number
}

export interface N1133 {
  partyId: number
  votes: number
}

export interface N1231 {
  partyId: number
  votes: number
}

export interface N1330 {
  partyId: number
  votes: number
}

export interface N1430 {
  partyId: number
  votes: number
}

export interface N1530 {
  partyId: number
  votes: number
}

export interface N1630 {
  partyId: number
  votes: number
}

export interface N1730 {
  partyId: number
  votes: number
}

export interface N1830 {
  partyId: number
  votes: number
}

export interface N1930 {
  partyId: number
  votes: number
}

export interface N2030 {
  partyId: number
  votes: number
}

export interface N2134 {
  partyId: number
  votes: number
}

export interface N2231 {
  partyId: number
  votes: number
}

export interface N2330 {
  partyId: number
  votes: number
}

export interface N2430 {
  partyId: number
  votes: number
}

export interface N2530 {
  partyId: number
  votes: number
}

export interface N2630 {
  partyId: number
  votes: number
}

export interface N2730 {
  partyId: number
  votes: number
}

export interface N2830 {
  partyId: number
  votes: number
}

export interface N2930 {
  partyId: number
  votes: number
}

export interface N3029 {
  partyId: number
  votes: number
}

export interface N3129 {
  partyId: number
  votes: number
}

export interface N3030 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates31
}

export interface Candidates31 {
  '1': N1107
  '2': N2106
  '3': N339
  '4': N431
  '5': N531
  '6': N631
  '7': N731
  '8': N831
  '9': N931
  '10': N1031
  '11': N1134
  '12': N1232
  '13': N1331
  '14': N1431
  '15': N1531
  '16': N1631
  '17': N1731
  '18': N1831
  '19': N1931
  '20': N2031
  '21': N2135
  '22': N2232
  '23': N2331
  '24': N2431
  '25': N2531
  '26': N2631
  '27': N2731
  '28': N2831
  '29': N2931
  '30': N3031
  '31': N3130
}

export interface N1107 {
  partyId: number
  votes: number
}

export interface N2106 {
  partyId: number
  votes: number
}

export interface N339 {
  partyId: number
  votes: number
}

export interface N431 {
  partyId: number
  votes: number
}

export interface N531 {
  partyId: number
  votes: number
}

export interface N631 {
  partyId: number
  votes: number
}

export interface N731 {
  partyId: number
  votes: number
}

export interface N831 {
  partyId: number
  votes: number
}

export interface N931 {
  partyId: number
  votes: number
}

export interface N1031 {
  partyId: number
  votes: number
}

export interface N1134 {
  partyId: number
  votes: number
}

export interface N1232 {
  partyId: number
  votes: number
}

export interface N1331 {
  partyId: number
  votes: number
}

export interface N1431 {
  partyId: number
  votes: number
}

export interface N1531 {
  partyId: number
  votes: number
}

export interface N1631 {
  partyId: number
  votes: number
}

export interface N1731 {
  partyId: number
  votes: number
}

export interface N1831 {
  partyId: number
  votes: number
}

export interface N1931 {
  partyId: number
  votes: number
}

export interface N2031 {
  partyId: number
  votes: number
}

export interface N2135 {
  partyId: number
  votes: number
}

export interface N2232 {
  partyId: number
  votes: number
}

export interface N2331 {
  partyId: number
  votes: number
}

export interface N2431 {
  partyId: number
  votes: number
}

export interface N2531 {
  partyId: number
  votes: number
}

export interface N2631 {
  partyId: number
  votes: number
}

export interface N2731 {
  partyId: number
  votes: number
}

export interface N2831 {
  partyId: number
  votes: number
}

export interface N2931 {
  partyId: number
  votes: number
}

export interface N3031 {
  partyId: number
  votes: number
}

export interface N3130 {
  partyId: number
  votes: number
}

export interface N3131 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates32
}

export interface Candidates32 {
  '1': N1108
  '2': N2107
  '3': N340
  '4': N432
  '5': N532
  '6': N632
  '7': N732
  '8': N832
  '9': N932
  '10': N1032
  '11': N1135
  '12': N1233
  '13': N1332
  '14': N1432
  '15': N1532
  '16': N1632
  '17': N1732
  '18': N1832
  '19': N1932
  '20': N2032
  '21': N2136
  '22': N2233
  '23': N2332
  '24': N2432
  '25': N2532
  '26': N2632
  '27': N2732
  '28': N2832
  '29': N2932
  '30': N3032
  '31': N3132
}

export interface N1108 {
  partyId: number
  votes: number
}

export interface N2107 {
  partyId: number
  votes: number
}

export interface N340 {
  partyId: number
  votes: number
}

export interface N432 {
  partyId: number
  votes: number
}

export interface N532 {
  partyId: number
  votes: number
}

export interface N632 {
  partyId: number
  votes: number
}

export interface N732 {
  partyId: number
  votes: number
}

export interface N832 {
  partyId: number
  votes: number
}

export interface N932 {
  partyId: number
  votes: number
}

export interface N1032 {
  partyId: number
  votes: number
}

export interface N1135 {
  partyId: number
  votes: number
}

export interface N1233 {
  partyId: number
  votes: number
}

export interface N1332 {
  partyId: number
  votes: number
}

export interface N1432 {
  partyId: number
  votes: number
}

export interface N1532 {
  partyId: number
  votes: number
}

export interface N1632 {
  partyId: number
  votes: number
}

export interface N1732 {
  partyId: number
  votes: number
}

export interface N1832 {
  partyId: number
  votes: number
}

export interface N1932 {
  partyId: number
  votes: number
}

export interface N2032 {
  partyId: number
  votes: number
}

export interface N2136 {
  partyId: number
  votes: number
}

export interface N2233 {
  partyId: number
  votes: number
}

export interface N2332 {
  partyId: number
  votes: number
}

export interface N2432 {
  partyId: number
  votes: number
}

export interface N2532 {
  partyId: number
  votes: number
}

export interface N2632 {
  partyId: number
  votes: number
}

export interface N2732 {
  partyId: number
  votes: number
}

export interface N2832 {
  partyId: number
  votes: number
}

export interface N2932 {
  partyId: number
  votes: number
}

export interface N3032 {
  partyId: number
  votes: number
}

export interface N3132 {
  partyId: number
  votes: number
}

export interface N3210 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates33
}

export interface Candidates33 {
  '1': N1109
  '2': N2108
  '3': N341
  '4': N433
  '5': N533
  '6': N633
  '7': N733
  '8': N833
  '9': N933
  '10': N1033
  '11': N1136
  '12': N1234
  '13': N1333
  '14': N1433
  '15': N1533
  '16': N1633
  '17': N1733
  '18': N1833
  '19': N1933
  '20': N2033
  '21': N2137
  '22': N2234
  '23': N2333
  '24': N2433
  '25': N2533
  '26': N2633
  '27': N2733
  '28': N2833
  '29': N2933
  '30': N3033
  '31': N3133
}

export interface N1109 {
  partyId: number
  votes: number
}

export interface N2108 {
  partyId: number
  votes: number
}

export interface N341 {
  partyId: number
  votes: number
}

export interface N433 {
  partyId: number
  votes: number
}

export interface N533 {
  partyId: number
  votes: number
}

export interface N633 {
  partyId: number
  votes: number
}

export interface N733 {
  partyId: number
  votes: number
}

export interface N833 {
  partyId: number
  votes: number
}

export interface N933 {
  partyId: number
  votes: number
}

export interface N1033 {
  partyId: number
  votes: number
}

export interface N1136 {
  partyId: number
  votes: number
}

export interface N1234 {
  partyId: number
  votes: number
}

export interface N1333 {
  partyId: number
  votes: number
}

export interface N1433 {
  partyId: number
  votes: number
}

export interface N1533 {
  partyId: number
  votes: number
}

export interface N1633 {
  partyId: number
  votes: number
}

export interface N1733 {
  partyId: number
  votes: number
}

export interface N1833 {
  partyId: number
  votes: number
}

export interface N1933 {
  partyId: number
  votes: number
}

export interface N2033 {
  partyId: number
  votes: number
}

export interface N2137 {
  partyId: number
  votes: number
}

export interface N2234 {
  partyId: number
  votes: number
}

export interface N2333 {
  partyId: number
  votes: number
}

export interface N2433 {
  partyId: number
  votes: number
}

export interface N2533 {
  partyId: number
  votes: number
}

export interface N2633 {
  partyId: number
  votes: number
}

export interface N2733 {
  partyId: number
  votes: number
}

export interface N2833 {
  partyId: number
  votes: number
}

export interface N2933 {
  partyId: number
  votes: number
}

export interface N3033 {
  partyId: number
  votes: number
}

export interface N3133 {
  partyId: number
  votes: number
}

export interface N3310 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates34
}

export interface Candidates34 {
  '1': N1137
  '2': N2109
  '3': N342
  '4': N434
  '5': N534
  '6': N634
  '7': N734
  '8': N834
  '9': N934
  '10': N1034
  '11': N1138
  '12': N1235
  '13': N1334
  '14': N1434
  '15': N1534
  '16': N1634
  '17': N1734
  '18': N1834
  '19': N1934
  '20': N2034
  '21': N2138
  '22': N2235
  '23': N2334
  '24': N2434
  '25': N2534
  '26': N2634
  '27': N2734
  '28': N2834
  '29': N2934
  '30': N3034
  '31': N3134
}

export interface N1137 {
  partyId: number
  votes: number
}

export interface N2109 {
  partyId: number
  votes: number
}

export interface N342 {
  partyId: number
  votes: number
}

export interface N434 {
  partyId: number
  votes: number
}

export interface N534 {
  partyId: number
  votes: number
}

export interface N634 {
  partyId: number
  votes: number
}

export interface N734 {
  partyId: number
  votes: number
}

export interface N834 {
  partyId: number
  votes: number
}

export interface N934 {
  partyId: number
  votes: number
}

export interface N1034 {
  partyId: number
  votes: number
}

export interface N1138 {
  partyId: number
  votes: number
}

export interface N1235 {
  partyId: number
  votes: number
}

export interface N1334 {
  partyId: number
  votes: number
}

export interface N1434 {
  partyId: number
  votes: number
}

export interface N1534 {
  partyId: number
  votes: number
}

export interface N1634 {
  partyId: number
  votes: number
}

export interface N1734 {
  partyId: number
  votes: number
}

export interface N1834 {
  partyId: number
  votes: number
}

export interface N1934 {
  partyId: number
  votes: number
}

export interface N2034 {
  partyId: number
  votes: number
}

export interface N2138 {
  partyId: number
  votes: number
}

export interface N2235 {
  partyId: number
  votes: number
}

export interface N2334 {
  partyId: number
  votes: number
}

export interface N2434 {
  partyId: number
  votes: number
}

export interface N2534 {
  partyId: number
  votes: number
}

export interface N2634 {
  partyId: number
  votes: number
}

export interface N2734 {
  partyId: number
  votes: number
}

export interface N2834 {
  partyId: number
  votes: number
}

export interface N2934 {
  partyId: number
  votes: number
}

export interface N3034 {
  partyId: number
  votes: number
}

export interface N3134 {
  partyId: number
  votes: number
}

export interface N343 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates35
}

export interface Candidates35 {
  '1': N1139
  '2': N2139
  '3': N344
  '4': N435
  '5': N535
  '6': N635
  '7': N735
  '8': N835
  '9': N935
  '10': N1035
  '11': N1140
  '12': N1236
  '13': N1335
  '14': N1435
  '15': N1535
  '16': N1635
  '17': N1735
  '18': N1835
  '19': N1935
  '20': N2035
  '21': N2140
  '22': N2236
  '23': N2335
  '24': N2435
  '25': N2535
  '26': N2635
  '27': N2735
  '28': N2835
  '29': N2935
  '30': N3035
  '31': N3135
}

export interface N1139 {
  partyId: number
  votes: number
}

export interface N2139 {
  partyId: number
  votes: number
}

export interface N344 {
  partyId: number
  votes: number
}

export interface N435 {
  partyId: number
  votes: number
}

export interface N535 {
  partyId: number
  votes: number
}

export interface N635 {
  partyId: number
  votes: number
}

export interface N735 {
  partyId: number
  votes: number
}

export interface N835 {
  partyId: number
  votes: number
}

export interface N935 {
  partyId: number
  votes: number
}

export interface N1035 {
  partyId: number
  votes: number
}

export interface N1140 {
  partyId: number
  votes: number
}

export interface N1236 {
  partyId: number
  votes: number
}

export interface N1335 {
  partyId: number
  votes: number
}

export interface N1435 {
  partyId: number
  votes: number
}

export interface N1535 {
  partyId: number
  votes: number
}

export interface N1635 {
  partyId: number
  votes: number
}

export interface N1735 {
  partyId: number
  votes: number
}

export interface N1835 {
  partyId: number
  votes: number
}

export interface N1935 {
  partyId: number
  votes: number
}

export interface N2035 {
  partyId: number
  votes: number
}

export interface N2140 {
  partyId: number
  votes: number
}

export interface N2236 {
  partyId: number
  votes: number
}

export interface N2335 {
  partyId: number
  votes: number
}

export interface N2435 {
  partyId: number
  votes: number
}

export interface N2535 {
  partyId: number
  votes: number
}

export interface N2635 {
  partyId: number
  votes: number
}

export interface N2735 {
  partyId: number
  votes: number
}

export interface N2835 {
  partyId: number
  votes: number
}

export interface N2935 {
  partyId: number
  votes: number
}

export interface N3035 {
  partyId: number
  votes: number
}

export interface N3135 {
  partyId: number
  votes: number
}

export interface N352 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates36
}

export interface Candidates36 {
  '1': N1141
  '2': N2141
  '3': N345
  '4': N436
  '5': N536
  '6': N636
  '7': N736
  '8': N836
  '9': N936
  '10': N1036
  '11': N1142
  '12': N1237
  '13': N1336
  '14': N1436
  '15': N1536
  '16': N1636
  '17': N1736
  '18': N1836
  '19': N1936
  '20': N2036
  '21': N2142
  '22': N2237
  '23': N2336
  '24': N2436
  '25': N2536
  '26': N2636
  '27': N2736
  '28': N2836
  '29': N2936
  '30': N3036
  '31': N3136
}

export interface N1141 {
  partyId: number
  votes: number
}

export interface N2141 {
  partyId: number
  votes: number
}

export interface N345 {
  partyId: number
  votes: number
}

export interface N436 {
  partyId: number
  votes: number
}

export interface N536 {
  partyId: number
  votes: number
}

export interface N636 {
  partyId: number
  votes: number
}

export interface N736 {
  partyId: number
  votes: number
}

export interface N836 {
  partyId: number
  votes: number
}

export interface N936 {
  partyId: number
  votes: number
}

export interface N1036 {
  partyId: number
  votes: number
}

export interface N1142 {
  partyId: number
  votes: number
}

export interface N1237 {
  partyId: number
  votes: number
}

export interface N1336 {
  partyId: number
  votes: number
}

export interface N1436 {
  partyId: number
  votes: number
}

export interface N1536 {
  partyId: number
  votes: number
}

export interface N1636 {
  partyId: number
  votes: number
}

export interface N1736 {
  partyId: number
  votes: number
}

export interface N1836 {
  partyId: number
  votes: number
}

export interface N1936 {
  partyId: number
  votes: number
}

export interface N2036 {
  partyId: number
  votes: number
}

export interface N2142 {
  partyId: number
  votes: number
}

export interface N2237 {
  partyId: number
  votes: number
}

export interface N2336 {
  partyId: number
  votes: number
}

export interface N2436 {
  partyId: number
  votes: number
}

export interface N2536 {
  partyId: number
  votes: number
}

export interface N2636 {
  partyId: number
  votes: number
}

export interface N2736 {
  partyId: number
  votes: number
}

export interface N2836 {
  partyId: number
  votes: number
}

export interface N2936 {
  partyId: number
  votes: number
}

export interface N3036 {
  partyId: number
  votes: number
}

export interface N3136 {
  partyId: number
  votes: number
}

export interface N362 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates37
}

export interface Candidates37 {
  '1': N1143
  '2': N2143
  '3': N346
  '4': N437
  '5': N537
  '6': N637
  '7': N737
  '8': N837
  '9': N937
  '10': N1037
  '11': N1144
  '12': N1238
  '13': N1337
  '14': N1437
  '15': N1537
  '16': N1637
  '17': N1737
  '18': N1837
  '19': N1937
  '20': N2037
  '21': N2144
  '22': N2238
  '23': N2337
  '24': N2437
  '25': N2537
  '26': N2637
  '27': N2737
  '28': N2837
  '29': N2937
  '30': N3037
  '31': N3137
}

export interface N1143 {
  partyId: number
  votes: number
}

export interface N2143 {
  partyId: number
  votes: number
}

export interface N346 {
  partyId: number
  votes: number
}

export interface N437 {
  partyId: number
  votes: number
}

export interface N537 {
  partyId: number
  votes: number
}

export interface N637 {
  partyId: number
  votes: number
}

export interface N737 {
  partyId: number
  votes: number
}

export interface N837 {
  partyId: number
  votes: number
}

export interface N937 {
  partyId: number
  votes: number
}

export interface N1037 {
  partyId: number
  votes: number
}

export interface N1144 {
  partyId: number
  votes: number
}

export interface N1238 {
  partyId: number
  votes: number
}

export interface N1337 {
  partyId: number
  votes: number
}

export interface N1437 {
  partyId: number
  votes: number
}

export interface N1537 {
  partyId: number
  votes: number
}

export interface N1637 {
  partyId: number
  votes: number
}

export interface N1737 {
  partyId: number
  votes: number
}

export interface N1837 {
  partyId: number
  votes: number
}

export interface N1937 {
  partyId: number
  votes: number
}

export interface N2037 {
  partyId: number
  votes: number
}

export interface N2144 {
  partyId: number
  votes: number
}

export interface N2238 {
  partyId: number
  votes: number
}

export interface N2337 {
  partyId: number
  votes: number
}

export interface N2437 {
  partyId: number
  votes: number
}

export interface N2537 {
  partyId: number
  votes: number
}

export interface N2637 {
  partyId: number
  votes: number
}

export interface N2737 {
  partyId: number
  votes: number
}

export interface N2837 {
  partyId: number
  votes: number
}

export interface N2937 {
  partyId: number
  votes: number
}

export interface N3037 {
  partyId: number
  votes: number
}

export interface N3137 {
  partyId: number
  votes: number
}

export interface N372 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates38
}

export interface Candidates38 {
  '1': N1145
  '2': N2145
  '3': N347
  '4': N438
  '5': N538
  '6': N638
  '7': N738
  '8': N838
  '9': N938
  '10': N1038
  '11': N1146
  '12': N1239
  '13': N1338
  '14': N1438
  '15': N1538
  '16': N1638
  '17': N1738
  '18': N1838
  '19': N1938
  '20': N2038
  '21': N2146
  '22': N2239
  '23': N2338
  '24': N2438
  '25': N2538
  '26': N2638
  '27': N2738
  '28': N2838
  '29': N2938
  '30': N3038
  '31': N3138
}

export interface N1145 {
  partyId: number
  votes: number
}

export interface N2145 {
  partyId: number
  votes: number
}

export interface N347 {
  partyId: number
  votes: number
}

export interface N438 {
  partyId: number
  votes: number
}

export interface N538 {
  partyId: number
  votes: number
}

export interface N638 {
  partyId: number
  votes: number
}

export interface N738 {
  partyId: number
  votes: number
}

export interface N838 {
  partyId: number
  votes: number
}

export interface N938 {
  partyId: number
  votes: number
}

export interface N1038 {
  partyId: number
  votes: number
}

export interface N1146 {
  partyId: number
  votes: number
}

export interface N1239 {
  partyId: number
  votes: number
}

export interface N1338 {
  partyId: number
  votes: number
}

export interface N1438 {
  partyId: number
  votes: number
}

export interface N1538 {
  partyId: number
  votes: number
}

export interface N1638 {
  partyId: number
  votes: number
}

export interface N1738 {
  partyId: number
  votes: number
}

export interface N1838 {
  partyId: number
  votes: number
}

export interface N1938 {
  partyId: number
  votes: number
}

export interface N2038 {
  partyId: number
  votes: number
}

export interface N2146 {
  partyId: number
  votes: number
}

export interface N2239 {
  partyId: number
  votes: number
}

export interface N2338 {
  partyId: number
  votes: number
}

export interface N2438 {
  partyId: number
  votes: number
}

export interface N2538 {
  partyId: number
  votes: number
}

export interface N2638 {
  partyId: number
  votes: number
}

export interface N2738 {
  partyId: number
  votes: number
}

export interface N2838 {
  partyId: number
  votes: number
}

export interface N2938 {
  partyId: number
  votes: number
}

export interface N3038 {
  partyId: number
  votes: number
}

export interface N3138 {
  partyId: number
  votes: number
}

export interface N382 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates39
}

export interface Candidates39 {
  '1': N1147
  '2': N2147
  '3': N348
  '4': N439
  '5': N539
  '6': N639
  '7': N739
  '8': N839
  '9': N939
  '10': N1039
  '11': N1148
  '12': N1240
  '13': N1339
  '14': N1439
  '15': N1539
  '16': N1639
  '17': N1739
  '18': N1839
  '19': N1939
  '20': N2039
  '21': N2148
  '22': N2240
  '23': N2339
  '24': N2439
  '25': N2539
  '26': N2639
  '27': N2739
  '28': N2839
  '29': N2939
  '30': N3039
  '31': N3139
}

export interface N1147 {
  partyId: number
  votes: number
}

export interface N2147 {
  partyId: number
  votes: number
}

export interface N348 {
  partyId: number
  votes: number
}

export interface N439 {
  partyId: number
  votes: number
}

export interface N539 {
  partyId: number
  votes: number
}

export interface N639 {
  partyId: number
  votes: number
}

export interface N739 {
  partyId: number
  votes: number
}

export interface N839 {
  partyId: number
  votes: number
}

export interface N939 {
  partyId: number
  votes: number
}

export interface N1039 {
  partyId: number
  votes: number
}

export interface N1148 {
  partyId: number
  votes: number
}

export interface N1240 {
  partyId: number
  votes: number
}

export interface N1339 {
  partyId: number
  votes: number
}

export interface N1439 {
  partyId: number
  votes: number
}

export interface N1539 {
  partyId: number
  votes: number
}

export interface N1639 {
  partyId: number
  votes: number
}

export interface N1739 {
  partyId: number
  votes: number
}

export interface N1839 {
  partyId: number
  votes: number
}

export interface N1939 {
  partyId: number
  votes: number
}

export interface N2039 {
  partyId: number
  votes: number
}

export interface N2148 {
  partyId: number
  votes: number
}

export interface N2240 {
  partyId: number
  votes: number
}

export interface N2339 {
  partyId: number
  votes: number
}

export interface N2439 {
  partyId: number
  votes: number
}

export interface N2539 {
  partyId: number
  votes: number
}

export interface N2639 {
  partyId: number
  votes: number
}

export interface N2739 {
  partyId: number
  votes: number
}

export interface N2839 {
  partyId: number
  votes: number
}

export interface N2939 {
  partyId: number
  votes: number
}

export interface N3039 {
  partyId: number
  votes: number
}

export interface N3139 {
  partyId: number
  votes: number
}

export interface N392 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates40
}

export interface Candidates40 {
  '1': N1149
  '2': N2149
  '3': N349
  '4': N440
  '5': N540
  '6': N640
  '7': N740
  '8': N840
  '9': N940
  '10': N1040
  '11': N1150
  '12': N1241
  '13': N1340
  '14': N1440
  '15': N1540
  '16': N1640
  '17': N1740
  '18': N1840
  '19': N1940
  '20': N2040
  '21': N2150
  '22': N2241
  '23': N2340
  '24': N2440
  '25': N2540
  '26': N2640
  '27': N2740
  '28': N2840
  '29': N2940
  '30': N3040
  '31': N3140
}

export interface N1149 {
  partyId: number
  votes: number
}

export interface N2149 {
  partyId: number
  votes: number
}

export interface N349 {
  partyId: number
  votes: number
}

export interface N440 {
  partyId: number
  votes: number
}

export interface N540 {
  partyId: number
  votes: number
}

export interface N640 {
  partyId: number
  votes: number
}

export interface N740 {
  partyId: number
  votes: number
}

export interface N840 {
  partyId: number
  votes: number
}

export interface N940 {
  partyId: number
  votes: number
}

export interface N1040 {
  partyId: number
  votes: number
}

export interface N1150 {
  partyId: number
  votes: number
}

export interface N1241 {
  partyId: number
  votes: number
}

export interface N1340 {
  partyId: number
  votes: number
}

export interface N1440 {
  partyId: number
  votes: number
}

export interface N1540 {
  partyId: number
  votes: number
}

export interface N1640 {
  partyId: number
  votes: number
}

export interface N1740 {
  partyId: number
  votes: number
}

export interface N1840 {
  partyId: number
  votes: number
}

export interface N1940 {
  partyId: number
  votes: number
}

export interface N2040 {
  partyId: number
  votes: number
}

export interface N2150 {
  partyId: number
  votes: number
}

export interface N2241 {
  partyId: number
  votes: number
}

export interface N2340 {
  partyId: number
  votes: number
}

export interface N2440 {
  partyId: number
  votes: number
}

export interface N2540 {
  partyId: number
  votes: number
}

export interface N2640 {
  partyId: number
  votes: number
}

export interface N2740 {
  partyId: number
  votes: number
}

export interface N2840 {
  partyId: number
  votes: number
}

export interface N2940 {
  partyId: number
  votes: number
}

export interface N3040 {
  partyId: number
  votes: number
}

export interface N3140 {
  partyId: number
  votes: number
}

export interface N40 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates41
}

export interface Candidates41 {
  '1': N1151
  '2': N2151
  '3': N350
  '4': N441
  '5': N541
  '6': N641
  '7': N741
  '8': N841
  '9': N941
  '10': N1041
  '11': N1152
  '12': N1242
  '13': N1341
  '14': N1441
  '15': N1541
  '16': N1641
  '17': N1741
  '18': N1841
  '19': N1941
  '20': N2041
  '21': N2152
  '22': N2242
  '23': N2341
  '24': N2441
  '25': N2541
  '26': N2641
  '27': N2741
  '28': N2841
  '29': N2941
  '30': N3041
  '31': N3141
}

export interface N1151 {
  partyId: number
  votes: number
}

export interface N2151 {
  partyId: number
  votes: number
}

export interface N350 {
  partyId: number
  votes: number
}

export interface N441 {
  partyId: number
  votes: number
}

export interface N541 {
  partyId: number
  votes: number
}

export interface N641 {
  partyId: number
  votes: number
}

export interface N741 {
  partyId: number
  votes: number
}

export interface N841 {
  partyId: number
  votes: number
}

export interface N941 {
  partyId: number
  votes: number
}

export interface N1041 {
  partyId: number
  votes: number
}

export interface N1152 {
  partyId: number
  votes: number
}

export interface N1242 {
  partyId: number
  votes: number
}

export interface N1341 {
  partyId: number
  votes: number
}

export interface N1441 {
  partyId: number
  votes: number
}

export interface N1541 {
  partyId: number
  votes: number
}

export interface N1641 {
  partyId: number
  votes: number
}

export interface N1741 {
  partyId: number
  votes: number
}

export interface N1841 {
  partyId: number
  votes: number
}

export interface N1941 {
  partyId: number
  votes: number
}

export interface N2041 {
  partyId: number
  votes: number
}

export interface N2152 {
  partyId: number
  votes: number
}

export interface N2242 {
  partyId: number
  votes: number
}

export interface N2341 {
  partyId: number
  votes: number
}

export interface N2441 {
  partyId: number
  votes: number
}

export interface N2541 {
  partyId: number
  votes: number
}

export interface N2641 {
  partyId: number
  votes: number
}

export interface N2741 {
  partyId: number
  votes: number
}

export interface N2841 {
  partyId: number
  votes: number
}

export interface N2941 {
  partyId: number
  votes: number
}

export interface N3041 {
  partyId: number
  votes: number
}

export interface N3141 {
  partyId: number
  votes: number
}

export interface N41 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates42
}

export interface Candidates42 {
  '1': N1153
  '2': N2153
  '3': N351
  '4': N442
  '5': N542
  '6': N642
  '7': N742
  '8': N842
  '9': N942
  '10': N1042
  '11': N1154
  '12': N1243
  '13': N1342
  '14': N1442
  '15': N1542
  '16': N1642
  '17': N1742
  '18': N1842
  '19': N1942
  '20': N2042
  '21': N2154
  '22': N2243
  '23': N2342
  '24': N2442
  '25': N2542
  '26': N2642
  '27': N2742
  '28': N2842
  '29': N2942
  '30': N3042
  '31': N3142
}

export interface N1153 {
  partyId: number
  votes: number
}

export interface N2153 {
  partyId: number
  votes: number
}

export interface N351 {
  partyId: number
  votes: number
}

export interface N442 {
  partyId: number
  votes: number
}

export interface N542 {
  partyId: number
  votes: number
}

export interface N642 {
  partyId: number
  votes: number
}

export interface N742 {
  partyId: number
  votes: number
}

export interface N842 {
  partyId: number
  votes: number
}

export interface N942 {
  partyId: number
  votes: number
}

export interface N1042 {
  partyId: number
  votes: number
}

export interface N1154 {
  partyId: number
  votes: number
}

export interface N1243 {
  partyId: number
  votes: number
}

export interface N1342 {
  partyId: number
  votes: number
}

export interface N1442 {
  partyId: number
  votes: number
}

export interface N1542 {
  partyId: number
  votes: number
}

export interface N1642 {
  partyId: number
  votes: number
}

export interface N1742 {
  partyId: number
  votes: number
}

export interface N1842 {
  partyId: number
  votes: number
}

export interface N1942 {
  partyId: number
  votes: number
}

export interface N2042 {
  partyId: number
  votes: number
}

export interface N2154 {
  partyId: number
  votes: number
}

export interface N2243 {
  partyId: number
  votes: number
}

export interface N2342 {
  partyId: number
  votes: number
}

export interface N2442 {
  partyId: number
  votes: number
}

export interface N2542 {
  partyId: number
  votes: number
}

export interface N2642 {
  partyId: number
  votes: number
}

export interface N2742 {
  partyId: number
  votes: number
}

export interface N2842 {
  partyId: number
  votes: number
}

export interface N2942 {
  partyId: number
  votes: number
}

export interface N3042 {
  partyId: number
  votes: number
}

export interface N3142 {
  partyId: number
  votes: number
}

export interface N4210 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates43
}

export interface Candidates43 {
  '1': N1155
  '2': N2155
  '3': N353
  '4': N443
  '5': N543
  '6': N643
  '7': N743
  '8': N843
  '9': N943
  '10': N1043
  '11': N1156
  '12': N1244
  '13': N1343
  '14': N1443
  '15': N1543
  '16': N1643
  '17': N1743
  '18': N1843
  '19': N1943
  '20': N2043
  '21': N2156
  '22': N2244
  '23': N2343
  '24': N2443
  '25': N2543
  '26': N2643
  '27': N2743
  '28': N2843
  '29': N2943
  '30': N3043
  '31': N3143
}

export interface N1155 {
  partyId: number
  votes: number
}

export interface N2155 {
  partyId: number
  votes: number
}

export interface N353 {
  partyId: number
  votes: number
}

export interface N443 {
  partyId: number
  votes: number
}

export interface N543 {
  partyId: number
  votes: number
}

export interface N643 {
  partyId: number
  votes: number
}

export interface N743 {
  partyId: number
  votes: number
}

export interface N843 {
  partyId: number
  votes: number
}

export interface N943 {
  partyId: number
  votes: number
}

export interface N1043 {
  partyId: number
  votes: number
}

export interface N1156 {
  partyId: number
  votes: number
}

export interface N1244 {
  partyId: number
  votes: number
}

export interface N1343 {
  partyId: number
  votes: number
}

export interface N1443 {
  partyId: number
  votes: number
}

export interface N1543 {
  partyId: number
  votes: number
}

export interface N1643 {
  partyId: number
  votes: number
}

export interface N1743 {
  partyId: number
  votes: number
}

export interface N1843 {
  partyId: number
  votes: number
}

export interface N1943 {
  partyId: number
  votes: number
}

export interface N2043 {
  partyId: number
  votes: number
}

export interface N2156 {
  partyId: number
  votes: number
}

export interface N2244 {
  partyId: number
  votes: number
}

export interface N2343 {
  partyId: number
  votes: number
}

export interface N2443 {
  partyId: number
  votes: number
}

export interface N2543 {
  partyId: number
  votes: number
}

export interface N2643 {
  partyId: number
  votes: number
}

export interface N2743 {
  partyId: number
  votes: number
}

export interface N2843 {
  partyId: number
  votes: number
}

export interface N2943 {
  partyId: number
  votes: number
}

export interface N3043 {
  partyId: number
  votes: number
}

export interface N3143 {
  partyId: number
  votes: number
}

export interface N4310 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates44
}

export interface Candidates44 {
  '1': N1157
  '2': N2157
  '3': N354
  '4': N444
  '5': N544
  '6': N644
  '7': N744
  '8': N844
  '9': N944
  '10': N1044
  '11': N1158
  '12': N1245
  '13': N1344
  '14': N1444
  '15': N1544
  '16': N1644
  '17': N1744
  '18': N1844
  '19': N1944
  '20': N2044
  '21': N2158
  '22': N2245
  '23': N2344
  '24': N2444
  '25': N2544
  '26': N2644
  '27': N2744
  '28': N2844
  '29': N2944
  '30': N3044
  '31': N3144
}

export interface N1157 {
  partyId: number
  votes: number
}

export interface N2157 {
  partyId: number
  votes: number
}

export interface N354 {
  partyId: number
  votes: number
}

export interface N444 {
  partyId: number
  votes: number
}

export interface N544 {
  partyId: number
  votes: number
}

export interface N644 {
  partyId: number
  votes: number
}

export interface N744 {
  partyId: number
  votes: number
}

export interface N844 {
  partyId: number
  votes: number
}

export interface N944 {
  partyId: number
  votes: number
}

export interface N1044 {
  partyId: number
  votes: number
}

export interface N1158 {
  partyId: number
  votes: number
}

export interface N1245 {
  partyId: number
  votes: number
}

export interface N1344 {
  partyId: number
  votes: number
}

export interface N1444 {
  partyId: number
  votes: number
}

export interface N1544 {
  partyId: number
  votes: number
}

export interface N1644 {
  partyId: number
  votes: number
}

export interface N1744 {
  partyId: number
  votes: number
}

export interface N1844 {
  partyId: number
  votes: number
}

export interface N1944 {
  partyId: number
  votes: number
}

export interface N2044 {
  partyId: number
  votes: number
}

export interface N2158 {
  partyId: number
  votes: number
}

export interface N2245 {
  partyId: number
  votes: number
}

export interface N2344 {
  partyId: number
  votes: number
}

export interface N2444 {
  partyId: number
  votes: number
}

export interface N2544 {
  partyId: number
  votes: number
}

export interface N2644 {
  partyId: number
  votes: number
}

export interface N2744 {
  partyId: number
  votes: number
}

export interface N2844 {
  partyId: number
  votes: number
}

export interface N2944 {
  partyId: number
  votes: number
}

export interface N3044 {
  partyId: number
  votes: number
}

export interface N3144 {
  partyId: number
  votes: number
}

export interface N445 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates45
}

export interface Candidates45 {
  '1': N1159
  '2': N2159
  '3': N355
  '4': N446
  '5': N545
  '6': N645
  '7': N745
  '8': N845
  '9': N945
  '10': N1045
  '11': N1160
  '12': N1246
  '13': N1345
  '14': N1445
  '15': N1545
  '16': N1645
  '17': N1745
  '18': N1845
  '19': N1945
  '20': N2045
  '21': N2160
  '22': N2246
  '23': N2345
  '24': N2445
  '25': N2545
  '26': N2645
  '27': N2745
  '28': N2845
  '29': N2945
  '30': N3045
  '31': N3145
}

export interface N1159 {
  partyId: number
  votes: number
}

export interface N2159 {
  partyId: number
  votes: number
}

export interface N355 {
  partyId: number
  votes: number
}

export interface N446 {
  partyId: number
  votes: number
}

export interface N545 {
  partyId: number
  votes: number
}

export interface N645 {
  partyId: number
  votes: number
}

export interface N745 {
  partyId: number
  votes: number
}

export interface N845 {
  partyId: number
  votes: number
}

export interface N945 {
  partyId: number
  votes: number
}

export interface N1045 {
  partyId: number
  votes: number
}

export interface N1160 {
  partyId: number
  votes: number
}

export interface N1246 {
  partyId: number
  votes: number
}

export interface N1345 {
  partyId: number
  votes: number
}

export interface N1445 {
  partyId: number
  votes: number
}

export interface N1545 {
  partyId: number
  votes: number
}

export interface N1645 {
  partyId: number
  votes: number
}

export interface N1745 {
  partyId: number
  votes: number
}

export interface N1845 {
  partyId: number
  votes: number
}

export interface N1945 {
  partyId: number
  votes: number
}

export interface N2045 {
  partyId: number
  votes: number
}

export interface N2160 {
  partyId: number
  votes: number
}

export interface N2246 {
  partyId: number
  votes: number
}

export interface N2345 {
  partyId: number
  votes: number
}

export interface N2445 {
  partyId: number
  votes: number
}

export interface N2545 {
  partyId: number
  votes: number
}

export interface N2645 {
  partyId: number
  votes: number
}

export interface N2745 {
  partyId: number
  votes: number
}

export interface N2845 {
  partyId: number
  votes: number
}

export interface N2945 {
  partyId: number
  votes: number
}

export interface N3045 {
  partyId: number
  votes: number
}

export interface N3145 {
  partyId: number
  votes: number
}

export interface N452 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates46
}

export interface Candidates46 {
  '1': N1161
  '2': N2161
  '3': N356
  '4': N447
  '5': N546
  '6': N646
  '7': N746
  '8': N846
  '9': N946
  '10': N1046
  '11': N1162
  '12': N1247
  '13': N1346
  '14': N1446
  '15': N1546
  '16': N1646
  '17': N1746
  '18': N1846
  '19': N1946
  '20': N2046
  '21': N2162
  '22': N2247
  '23': N2346
  '24': N2446
  '25': N2546
  '26': N2646
  '27': N2746
  '28': N2846
  '29': N2946
  '30': N3046
  '31': N3146
}

export interface N1161 {
  partyId: number
  votes: number
}

export interface N2161 {
  partyId: number
  votes: number
}

export interface N356 {
  partyId: number
  votes: number
}

export interface N447 {
  partyId: number
  votes: number
}

export interface N546 {
  partyId: number
  votes: number
}

export interface N646 {
  partyId: number
  votes: number
}

export interface N746 {
  partyId: number
  votes: number
}

export interface N846 {
  partyId: number
  votes: number
}

export interface N946 {
  partyId: number
  votes: number
}

export interface N1046 {
  partyId: number
  votes: number
}

export interface N1162 {
  partyId: number
  votes: number
}

export interface N1247 {
  partyId: number
  votes: number
}

export interface N1346 {
  partyId: number
  votes: number
}

export interface N1446 {
  partyId: number
  votes: number
}

export interface N1546 {
  partyId: number
  votes: number
}

export interface N1646 {
  partyId: number
  votes: number
}

export interface N1746 {
  partyId: number
  votes: number
}

export interface N1846 {
  partyId: number
  votes: number
}

export interface N1946 {
  partyId: number
  votes: number
}

export interface N2046 {
  partyId: number
  votes: number
}

export interface N2162 {
  partyId: number
  votes: number
}

export interface N2247 {
  partyId: number
  votes: number
}

export interface N2346 {
  partyId: number
  votes: number
}

export interface N2446 {
  partyId: number
  votes: number
}

export interface N2546 {
  partyId: number
  votes: number
}

export interface N2646 {
  partyId: number
  votes: number
}

export interface N2746 {
  partyId: number
  votes: number
}

export interface N2846 {
  partyId: number
  votes: number
}

export interface N2946 {
  partyId: number
  votes: number
}

export interface N3046 {
  partyId: number
  votes: number
}

export interface N3146 {
  partyId: number
  votes: number
}

export interface N462 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates47
}

export interface Candidates47 {
  '1': N1163
  '2': N2163
  '3': N357
  '4': N448
  '5': N547
  '6': N647
  '7': N747
  '8': N847
  '9': N947
  '10': N1047
  '11': N1164
  '12': N1248
  '13': N1347
  '14': N1447
  '15': N1547
  '16': N1647
  '17': N1747
  '18': N1847
  '19': N1947
  '20': N2047
  '21': N2164
  '22': N2248
  '23': N2347
  '24': N2447
  '25': N2547
  '26': N2647
  '27': N2747
  '28': N2847
  '29': N2947
  '30': N3047
  '31': N3147
}

export interface N1163 {
  partyId: number
  votes: number
}

export interface N2163 {
  partyId: number
  votes: number
}

export interface N357 {
  partyId: number
  votes: number
}

export interface N448 {
  partyId: number
  votes: number
}

export interface N547 {
  partyId: number
  votes: number
}

export interface N647 {
  partyId: number
  votes: number
}

export interface N747 {
  partyId: number
  votes: number
}

export interface N847 {
  partyId: number
  votes: number
}

export interface N947 {
  partyId: number
  votes: number
}

export interface N1047 {
  partyId: number
  votes: number
}

export interface N1164 {
  partyId: number
  votes: number
}

export interface N1248 {
  partyId: number
  votes: number
}

export interface N1347 {
  partyId: number
  votes: number
}

export interface N1447 {
  partyId: number
  votes: number
}

export interface N1547 {
  partyId: number
  votes: number
}

export interface N1647 {
  partyId: number
  votes: number
}

export interface N1747 {
  partyId: number
  votes: number
}

export interface N1847 {
  partyId: number
  votes: number
}

export interface N1947 {
  partyId: number
  votes: number
}

export interface N2047 {
  partyId: number
  votes: number
}

export interface N2164 {
  partyId: number
  votes: number
}

export interface N2248 {
  partyId: number
  votes: number
}

export interface N2347 {
  partyId: number
  votes: number
}

export interface N2447 {
  partyId: number
  votes: number
}

export interface N2547 {
  partyId: number
  votes: number
}

export interface N2647 {
  partyId: number
  votes: number
}

export interface N2747 {
  partyId: number
  votes: number
}

export interface N2847 {
  partyId: number
  votes: number
}

export interface N2947 {
  partyId: number
  votes: number
}

export interface N3047 {
  partyId: number
  votes: number
}

export interface N3147 {
  partyId: number
  votes: number
}

export interface N472 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates48
}

export interface Candidates48 {
  '1': N1165
  '2': N2165
  '3': N358
  '4': N449
  '5': N548
  '6': N648
  '7': N748
  '8': N848
  '9': N948
  '10': N1048
  '11': N1166
  '12': N1249
  '13': N1348
  '14': N1448
  '15': N1548
  '16': N1648
  '17': N1748
  '18': N1848
  '19': N1948
  '20': N2048
  '21': N2166
  '22': N2249
  '23': N2348
  '24': N2448
  '25': N2548
  '26': N2648
  '27': N2748
  '28': N2848
  '29': N2948
  '30': N3048
  '31': N3148
}

export interface N1165 {
  partyId: number
  votes: number
}

export interface N2165 {
  partyId: number
  votes: number
}

export interface N358 {
  partyId: number
  votes: number
}

export interface N449 {
  partyId: number
  votes: number
}

export interface N548 {
  partyId: number
  votes: number
}

export interface N648 {
  partyId: number
  votes: number
}

export interface N748 {
  partyId: number
  votes: number
}

export interface N848 {
  partyId: number
  votes: number
}

export interface N948 {
  partyId: number
  votes: number
}

export interface N1048 {
  partyId: number
  votes: number
}

export interface N1166 {
  partyId: number
  votes: number
}

export interface N1249 {
  partyId: number
  votes: number
}

export interface N1348 {
  partyId: number
  votes: number
}

export interface N1448 {
  partyId: number
  votes: number
}

export interface N1548 {
  partyId: number
  votes: number
}

export interface N1648 {
  partyId: number
  votes: number
}

export interface N1748 {
  partyId: number
  votes: number
}

export interface N1848 {
  partyId: number
  votes: number
}

export interface N1948 {
  partyId: number
  votes: number
}

export interface N2048 {
  partyId: number
  votes: number
}

export interface N2166 {
  partyId: number
  votes: number
}

export interface N2249 {
  partyId: number
  votes: number
}

export interface N2348 {
  partyId: number
  votes: number
}

export interface N2448 {
  partyId: number
  votes: number
}

export interface N2548 {
  partyId: number
  votes: number
}

export interface N2648 {
  partyId: number
  votes: number
}

export interface N2748 {
  partyId: number
  votes: number
}

export interface N2848 {
  partyId: number
  votes: number
}

export interface N2948 {
  partyId: number
  votes: number
}

export interface N3048 {
  partyId: number
  votes: number
}

export interface N3148 {
  partyId: number
  votes: number
}

export interface N482 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates49
}

export interface Candidates49 {
  '1': N1167
  '2': N2167
  '3': N359
  '4': N450
  '5': N549
  '6': N649
  '7': N749
  '8': N849
  '9': N949
  '10': N1049
  '11': N1168
  '12': N1250
  '13': N1349
  '14': N1449
  '15': N1549
  '16': N1649
  '17': N1749
  '18': N1849
  '19': N1949
  '20': N2049
  '21': N2168
  '22': N2250
  '23': N2349
  '24': N2449
  '25': N2549
  '26': N2649
  '27': N2749
  '28': N2849
  '29': N2949
  '30': N3049
  '31': N3149
}

export interface N1167 {
  partyId: number
  votes: number
}

export interface N2167 {
  partyId: number
  votes: number
}

export interface N359 {
  partyId: number
  votes: number
}

export interface N450 {
  partyId: number
  votes: number
}

export interface N549 {
  partyId: number
  votes: number
}

export interface N649 {
  partyId: number
  votes: number
}

export interface N749 {
  partyId: number
  votes: number
}

export interface N849 {
  partyId: number
  votes: number
}

export interface N949 {
  partyId: number
  votes: number
}

export interface N1049 {
  partyId: number
  votes: number
}

export interface N1168 {
  partyId: number
  votes: number
}

export interface N1250 {
  partyId: number
  votes: number
}

export interface N1349 {
  partyId: number
  votes: number
}

export interface N1449 {
  partyId: number
  votes: number
}

export interface N1549 {
  partyId: number
  votes: number
}

export interface N1649 {
  partyId: number
  votes: number
}

export interface N1749 {
  partyId: number
  votes: number
}

export interface N1849 {
  partyId: number
  votes: number
}

export interface N1949 {
  partyId: number
  votes: number
}

export interface N2049 {
  partyId: number
  votes: number
}

export interface N2168 {
  partyId: number
  votes: number
}

export interface N2250 {
  partyId: number
  votes: number
}

export interface N2349 {
  partyId: number
  votes: number
}

export interface N2449 {
  partyId: number
  votes: number
}

export interface N2549 {
  partyId: number
  votes: number
}

export interface N2649 {
  partyId: number
  votes: number
}

export interface N2749 {
  partyId: number
  votes: number
}

export interface N2849 {
  partyId: number
  votes: number
}

export interface N2949 {
  partyId: number
  votes: number
}

export interface N3049 {
  partyId: number
  votes: number
}

export interface N3149 {
  partyId: number
  votes: number
}

export interface N492 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates50
}

export interface Candidates50 {
  '1': N1169
  '2': N2169
  '3': N360
  '4': N451
  '5': N550
  '6': N650
  '7': N750
  '8': N850
  '9': N950
  '10': N1050
  '11': N1170
  '12': N1251
  '13': N1350
  '14': N1450
  '15': N1550
  '16': N1650
  '17': N1750
  '18': N1850
  '19': N1950
  '20': N2050
  '21': N2170
  '22': N2251
  '23': N2350
  '24': N2450
  '25': N2550
  '26': N2650
  '27': N2750
  '28': N2850
  '29': N2950
  '30': N3050
  '31': N3150
}

export interface N1169 {
  partyId: number
  votes: number
}

export interface N2169 {
  partyId: number
  votes: number
}

export interface N360 {
  partyId: number
  votes: number
}

export interface N451 {
  partyId: number
  votes: number
}

export interface N550 {
  partyId: number
  votes: number
}

export interface N650 {
  partyId: number
  votes: number
}

export interface N750 {
  partyId: number
  votes: number
}

export interface N850 {
  partyId: number
  votes: number
}

export interface N950 {
  partyId: number
  votes: number
}

export interface N1050 {
  partyId: number
  votes: number
}

export interface N1170 {
  partyId: number
  votes: number
}

export interface N1251 {
  partyId: number
  votes: number
}

export interface N1350 {
  partyId: number
  votes: number
}

export interface N1450 {
  partyId: number
  votes: number
}

export interface N1550 {
  partyId: number
  votes: number
}

export interface N1650 {
  partyId: number
  votes: number
}

export interface N1750 {
  partyId: number
  votes: number
}

export interface N1850 {
  partyId: number
  votes: number
}

export interface N1950 {
  partyId: number
  votes: number
}

export interface N2050 {
  partyId: number
  votes: number
}

export interface N2170 {
  partyId: number
  votes: number
}

export interface N2251 {
  partyId: number
  votes: number
}

export interface N2350 {
  partyId: number
  votes: number
}

export interface N2450 {
  partyId: number
  votes: number
}

export interface N2550 {
  partyId: number
  votes: number
}

export interface N2650 {
  partyId: number
  votes: number
}

export interface N2750 {
  partyId: number
  votes: number
}

export interface N2850 {
  partyId: number
  votes: number
}

export interface N2950 {
  partyId: number
  votes: number
}

export interface N3050 {
  partyId: number
  votes: number
}

export interface N3150 {
  partyId: number
  votes: number
}

export interface N50 {
  totalVotes: number
  badVotes: number
  noVotes: number
  goodVotes: number
  eligible: number
  progress: number
  candidates: Candidates51
}

export interface Candidates51 {
  '1': N1171
  '2': N2171
  '3': N361
  '4': N453
  '5': N551
  '6': N651
  '7': N751
  '8': N851
  '9': N951
  '10': N1051
  '11': N1172
  '12': N1252
  '13': N1351
  '14': N1451
  '15': N1551
  '16': N1651
  '17': N1751
  '18': N1851
  '19': N1951
  '20': N2051
  '21': N2172
  '22': N2252
  '23': N2351
  '24': N2451
  '25': N2551
  '26': N2651
  '27': N2751
  '28': N2851
  '29': N2951
  '30': N3051
  '31': N3151
}

export interface N1171 {
  partyId: number
  votes: number
}

export interface N2171 {
  partyId: number
  votes: number
}

export interface N361 {
  partyId: number
  votes: number
}

export interface N453 {
  partyId: number
  votes: number
}

export interface N551 {
  partyId: number
  votes: number
}

export interface N651 {
  partyId: number
  votes: number
}

export interface N751 {
  partyId: number
  votes: number
}

export interface N851 {
  partyId: number
  votes: number
}

export interface N951 {
  partyId: number
  votes: number
}

export interface N1051 {
  partyId: number
  votes: number
}

export interface N1172 {
  partyId: number
  votes: number
}

export interface N1252 {
  partyId: number
  votes: number
}

export interface N1351 {
  partyId: number
  votes: number
}

export interface N1451 {
  partyId: number
  votes: number
}

export interface N1551 {
  partyId: number
  votes: number
}

export interface N1651 {
  partyId: number
  votes: number
}

export interface N1751 {
  partyId: number
  votes: number
}

export interface N1851 {
  partyId: number
  votes: number
}

export interface N1951 {
  partyId: number
  votes: number
}

export interface N2051 {
  partyId: number
  votes: number
}

export interface N2172 {
  partyId: number
  votes: number
}

export interface N2252 {
  partyId: number
  votes: number
}

export interface N2351 {
  partyId: number
  votes: number
}

export interface N2451 {
  partyId: number
  votes: number
}

export interface N2551 {
  partyId: number
  votes: number
}

export interface N2651 {
  partyId: number
  votes: number
}

export interface N2751 {
  partyId: number
  votes: number
}

export interface N2851 {
  partyId: number
  votes: number
}

export interface N2951 {
  partyId: number
  votes: number
}

export interface N3051 {
  partyId: number
  votes: number
}

export interface N3151 {
  partyId: number
  votes: number
}

export interface Parties {
  '1': N1173
  '2': N2173
  '3': N363
  '4': N454
  '5': N552
  '6': N652
  '7': N752
  '8': N852
  '9': N952
  '10': N1052
  '11': N1174
  '12': N1253
  '13': N1352
  '14': N1452
  '15': N1552
}

export interface N1173 {
  votes: number
  seats: number
}

export interface N2173 {
  votes: number
  seats: number
}

export interface N363 {
  votes: number
  seats: number
}

export interface N454 {
  votes: number
  seats: number
}

export interface N552 {
  votes: number
  seats: number
}

export interface N652 {
  votes: number
  seats: number
}

export interface N752 {
  votes: number
  seats: number
}

export interface N852 {
  votes: number
  seats: number
}

export interface N952 {
  votes: number
  seats: number
}

export interface N1052 {
  votes: number
  seats: number
}

export interface N1174 {
  votes: number
  seats: number
}

export interface N1253 {
  votes: number
  seats: number
}

export interface N1352 {
  votes: number
  seats: number
}

export interface N1452 {
  votes: number
  seats: number
}

export interface N1552 {
  votes: number
  seats: number
}
