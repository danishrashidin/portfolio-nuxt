<script setup lang="ts">
import Heatmap from 'cal-heatmap'
import moment from 'moment'

const cal = new Heatmap()

onMounted(async () => {
    const contributions = await $fetch('/api/github/contributions')
    cal.paint({
        range: 8,
        date: {
            start: moment().subtract(6, 'month').startOf('month').toDate()
        },
        data: {
            source: contributions.days.map(day => ({
                date: day.date,
                count: day.count,
                level: day.level
            })),
            x: 'date',
            y: 'level',
            defaultValue: 0
        },
        scale: {
            color: {
                type: 'threshold',
                range: ['#14432a', '#166b34', '#37a446', '#4dd05a'],
                domain: [0, 1, 2, 3],
            },
        },
        domain: {
            type: 'month',
            gutter: 4,
            label: { text: 'MMM', textAlign: 'start', position: 'top' },
        },
        subDomain: { type: 'ghDay', radius: 2, width: 11, height: 11, gutter: 4 },
    })
})
</script>

<template>
    <div class="relative flex flex-col gap-1.5 overflow-x-auto">
        <div id="cal-heatmap"></div>
        <p class="sticky left-0 text-left text-sm font-normal text-gray-500">Past 6-month contributions, powered by
            Github GraphQL API ⚡️</p>
    </div>
</template>