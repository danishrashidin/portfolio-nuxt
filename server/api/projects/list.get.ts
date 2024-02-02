import type { Project } from "~/types/projects"

/**
 * Fetches the list of projects to display
 */
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const strapiUrl = config.strapiHost
    try {
        const projects = (await GqlGetProjectDisplays()).projects.data

        return projects.map((project: any) => {
            const { title, description, cover, skills, link, githubPage } = project.attributes
            return {
                id: project.id,
                title,
                description,
                coverUri: `${strapiUrl}${cover.data.attributes.url}`,
                skills: skills.data.map(({ attributes }: any) => attributes.text),
                ...(link && { link }),
                ...(githubPage && { githubPage })
            } as Project
        }) as Project[]
    } catch (error) {
        throw error
    }
})