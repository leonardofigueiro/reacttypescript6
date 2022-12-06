import { useSetRecoilState } from "recoil"
import { ParticipantListState } from "../atom"

export const useAddPart = () => {
    const setList = useSetRecoilState(ParticipantListState)
    return (participantName: string) => {
        return setList(atualList => [...atualList, participantName])
    }
}