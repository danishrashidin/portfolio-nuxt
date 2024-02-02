import type { Skill } from "~/types/skills"
import { sortByOrder } from "~/utils/sort"

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery<{
            limit: number
            offset: number
        }>(event)
        const tags = (await GqlGetSkills({
            limit: Number(query.limit) || null,
            offset: Number(query.offset) || null
        })).tags.data as unknown[]
        return sortByOrder(tags.map((tag: any) => {
            const { slug, text, iconUrl, proficiency } = tag.attributes
            return {
                slug,
                name: text,
                iconUrl,
                proficiency
            } as Skill
        }) as Skill[], "proficiency", ["expert", "proficient", "familiar", "beginner"])
    } catch (error) {
        throw error
    }
})