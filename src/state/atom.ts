import { atom } from "recoil";

export const ParticipantListState = atom<string[]>({
    key: 'ParticipantListState',
    default: []

})
