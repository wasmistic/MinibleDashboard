<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col md="12" class="col-12">
                <ChartCard/>
            </v-col>
            <v-col lg="8" sm="12" class="12">
                <Chart/>
            </v-col>
            <v-col lg="4" sm="12" class="12">
                <CampaignCard/>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col md="4" class="col-12">
                <BottomCard/>
            </v-col>
             <v-col md="4" class="col-12">
                <RecentCard/>
            </v-col>
             <v-col md="4" class="col-12">
                <SocialCard/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ChartCard from '../components/ChartCard.vue'
import Chart from '../components/Chart.vue'
import CampaignCard from '../components/CampaignCard.vue'
import BottomCard from '../components/BottomCard.vue'
import RecentCard from '../components/RecentCard.vue'
import SocialCard from '../components/SocialCard.vue'
    export default {
        auth:false,
        components:{
            ChartCard,
            Chart,
            CampaignCard,
            BottomCard,
            RecentCard,
            SocialCard
        },
    }
</script>

<style lang="scss" scoped>

</style>