<template>
    <v-stepper v-model="cursor" dark vertical color="primary lighten-2">
        <div v-for="(item, index) in noticeList"
            :key="index"
        >
            <v-stepper-step color="deep-purple darken-2" :complete="cursor > index + 1" :step="index + 1">
                <v-btn flat large color="primary" @click="cursor = index + 1">
                    {{ item.title }}
                </v-btn>
            </v-stepper-step>
            <v-stepper-content :step="index + 1">
                <v-card v-for="(content, contentIndex) in item.contents" :key="contentIndex" color="deep-purple lighten-1" class="mb-5">
                    <v-card-text class="text-sm-left">
                        {{ content }}
                    </v-card-text>
                </v-card>
                <v-btn color="deep-purple lighten-1" @click="cursor = index + 2">Continue</v-btn>
            </v-stepper-content>
        </div>
    </v-stepper>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                cursor: 1,
                noticeList: [
                    {
                        title: 'Notice',
                        contents: ['Your question and answer should be a complete sentence with correct grammar. If either question or answer consists of a single word, you cannot submit.\n',
                            'The questions you write must be answered within a video clip’s story.']
                    },
                    {
                        title: 'Check list 1',
                        contents: ['Please avoid vague terms so that the questions cannot have different kinds of answers.',
                            'ex) Why was Monica surprised? -> Why was Monica surprised when Rachel came in?']
                    },
                    {
                        title: 'Check list 2',
                        contents: ['Please avoid completely unrelated questions.', 'ex) How old is the earth? (X)']
                    },
                    {
                        title: 'Check list 3',
                        contents: ['One or two words change/shuffle is clearly unacceptable.']
                    },
                    {
                        title: 'Check list 4',
                        contents: ['Please use character names as follows. Ross, Rachel, Monica, Chandler, Phoebe, Joey.']
                    }
                ]
            }
        },
        watch: {
            cursor: function (value) {
                console.log(value)
                const maxSize = this.noticeList.length
                if (maxSize < value) {
                    this.cursor = 1
                    this.$router.push('qna')
                } else {
                    this.cursor = value
                }
            }
        }
    }
</script>

<style scoped>

</style>