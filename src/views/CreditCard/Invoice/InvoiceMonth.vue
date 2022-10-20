<template>

    <span class="card-title text-uppercase p-0 text-secondary">
        <strong>{{ yearGroup.year }}</strong> - {{ getMonthName(monthGroup.month) }}
    </span>
    
</template>

<script>
export default {
    props:['yearGroup', 'monthGroup'],
    methods: {
        getMonthName: (month) => {
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ]
            return monthNames[month]
        }
    }
}
</script>