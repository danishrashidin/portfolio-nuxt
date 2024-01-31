import type { Project } from "~/types/projects"

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    if (!id) throw Error('No project ID provided')
    try {
        const project = (await GqlGetProjectDetails({
            id
        })).project.data
        return {
            id: project.id,
            title: project.attributes.title,
            description: project.attributes.description,
            coverUri: project.attributes.cover.data.attributes.url,
            skills: project.attributes.skills.data.map(({ attributes }: any) => attributes.text),
            content: project.attributes.content,
            link: project.attributes.link,
            githubPage: project.attributes.githubPage
        } as Project
    } catch (error) {
        throw error
    }
})