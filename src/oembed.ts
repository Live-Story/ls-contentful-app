import Superagent from 'superagent'
import { DEFAULT_API_URL } from './config'

export async function getExperienceEmbedCode(experienceId: string, experienceType: string): Promise<any | null> {

    try {
        const content = await Superagent.get(`${DEFAULT_API_URL}/content/${experienceType}/${experienceId}`)
        return content
    } catch (err) {
        console.trace(err)
        return null
    }
}
