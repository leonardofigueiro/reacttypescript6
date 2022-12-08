import { useRecoilValue } from "recoil"
import { ParticipantListState } from "../atom"

export const useListaDeParticipantes = () => {
    return useRecoilValue(ParticipantListState)
}