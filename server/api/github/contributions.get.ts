import type { ContributionDay } from "~/types/contributions"

/**
 * Returns danish's Github Calendar Data
 */
export default defineEventHandler(async (event) => {
    try {
        const result = (await GqlGetContributionsCalendar()).viewer.contributionsCollection.contributionCalendar
        const days: ContributionDay[] = (result.weeks as any[]).reduce((prev, curr) => {
            const weeklyDays = curr.contributionDays.map((day: any) => {
                let level = 0
                switch (day.contributionLevel) {
                    case "FIRST_QUARTILE":
                        level = 1
                        break
                    case "SECOND_QUARTILE":
                        level = 2
                        break
                    case "THIRD_QUARTILE":
                        level = 3
                        break
                    default:
                        break
                }
                return {
                    date: day.date,
                    count: day.contributionCount,
                    level
                } as ContributionDay
            })
            return [...prev, ...weeklyDays]
        }, [])

        return {
            total: result.totalContributions,
            days
        }
    } catch (error) {
        throw error
    }
})