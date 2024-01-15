export interface ContributionDay {
    /**
     * Contribution Date. Can be date object, or string
     */
    date: Date | string
    /**
     * Contributon made
     */
    count: number
    /**
     * Contribution level in quartile. 0-4
     */
    level: number
}