<template>
    <v-card>
        <v-card-text>
            <v-tabs-items v-model="active">
                <v-tab-item v-for="tab in tabs" :key="tab.index">
                    <component v-bind:is="tab.component" :data="data"></component>
                </v-tab-item>
            </v-tabs-items>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="active=1" round outline class="text-capitalize" color="primary" v-if="active===0">
                Next
            </v-btn>
            <v-btn @click="active=2" round outline class="text-capitalize" color="primary" v-if="active===1">
                Submit
            </v-btn>
            <v-btn @click="saveform()" round outline class="text-capitalize" color="primary">
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "formIndex",
        data() {
            return {
                active: null,
                loading: false,
                tabs: [
                    {
                        name: "Form 1",
                        index: 0,
                        component: firstForm
                    }, {
                        name: "Form 2",
                        index: 1,
                        component: secondForm
                    }, {
                        name: "Preview",
                        index: 1,
                        component: previewForm
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>