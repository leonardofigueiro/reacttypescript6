import { atom } from "recoil";

export const ParticipantListState = atom<string[]>({
    key: 'ParticipantListState',
    default: []

})

export const errorState = atom<string>({
    key: 'errorState',
    default: ''
})