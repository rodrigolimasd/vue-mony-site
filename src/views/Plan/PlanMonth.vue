<template>

    <div class="col-12">
        <div class="card-title text-uppercase text-center mt-2">
            <h5 class="mb-0 mx-2 d-inline">{{getMonthName(monthGroup.month)}} - {{yearGroup.year}}</h5>
            <div class="dropdown d-inline" v-if="isFirstOrLast({year: yearGroup.year, month: monthGroup.month})">
                <button class="btn btn-xs dropdown-toggle mb-0 ms-2 px-2 py-1 bg-gradient-success" 
                        style="padding: 0.275rem 1rem"
                        type="button" 
                        :id="yearGroup.year+getMonthName(monthGroup.month)+'_drpOpt'" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul class="dropdown-menu" :aria-labelledby="yearGroup.year+getMonthName(monthGroup.month)+'_drpOpt'">
                <li>
                    <button class="dropdown-item" type="button" 
                            @click="$emit('add-after-month', {year: yearGroup.year, month: monthGroup.month})">
                    <i class="fa fa-arrow-down"></i> <span> Copy To Next Month (Beta) </span>
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" type="button" 
                            @click="$emit('delete-month', {year: yearGroup.year, month: monthGroup.month})">
                    <i class="fa fa-trash"></i> 
                        <span> 
                            Remove This Month ({{getMonthName(monthGroup.month) }} - {{yearGroup.year}}) 
                        </span> 
                    </button>
                </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        props:['yearGroup', 'monthGroup'],
        emits: ['add-after-month', 'delete-month'],
        methods: {
            getMonthName: (month) => {
                const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
                ]
                return monthNames[month]
            },
            isFirstOrLast(item) {
                const {year, month} = item
                const size = this.$store.state.plan.schedules.length
                if(size > 0 ) {
                    let first = this.$store.state.plan.schedules[0]
                    let last = this.$store.state.plan.schedules[size-1]
                    return first.date.getFullYear() === Number(year) && first.date.getMonth() === Number(month) ||
                        last.date.getFullYear() === Number(year) && last.date.getMonth() === Number(month)
                } else {
                    return false
                }
            },
        }
    }
</script>

<style>
.wrapper-class-calendar {
  font-size: 16pt;
} 

.wrapper-class-calendar #calendar-div{
  display: none;
}

.icon-calendar {
    color: #11cdef !important;
}

.icon-calendar:hover {
    color: #0a7bb4 !important;
}
</style>