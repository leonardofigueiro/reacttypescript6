import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, ParticipantListState } from "../atom"

export const useAddPart = () => {
    const setList = useSetRecoilState(ParticipantListState)
    const list = useRecoilValue(ParticipantListState)
    const setError = useSetRecoilState(errorState)
    return (participantName: string) => {
        if(list.includes(participantName)) {
            setError('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setError('')
            }, 5000)
            return
        }
        return setList(atualList => [...atualList, participantName])
    }
}