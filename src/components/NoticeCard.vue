<template>
    <v-flex sm10 offset-sm1>
        <v-card color="cyan darken-1" class="white--text">
            <v-card-title primary-title>
                <div>
                    <div class="headline mb-0" v-if="title !== undefined">
                        {{ title }}
                    </div>
                    <div>{{ contents }}</div>
                </div>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: 'NoticeCard',
        props: {
            contents: {
                type: String,
                require: true
            },
            color: {
                type: String,
                default: 'cyan'
            },
            title: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style scoped>

</style>