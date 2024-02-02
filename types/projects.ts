/**
 * Interface to represent a project
 */
export interface Project {
    /**
     * Project ID
     */
    id: string
    /**
     * Project Title
     */
    title: string
    /**
     * Project Description
     */
    description: string
    /**
     * Cover link
     */
    coverUri: string
    /**
     * Related Skills
     */
    skills: string[]
    /**
     * JSON-based Rich Text Content
     */
    content?: any
    /**
     * Project Link
     */
    link?: string
    /**
     * Project Github Page
     */
    githubPage?: string
}