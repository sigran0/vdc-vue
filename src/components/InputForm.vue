<!--suppress ALL -->
<template>
    <form>
        <v-text-field
                class="item-margin"
                v-model="q"
                :error-messages="questionErrors"
                label="Question"
                required
                @input="$v.q.$touch()"
                @blur="$v.q.$touch()"
        ></v-text-field>
        <v-text-field
                class="item-margin"
                v-model="a1"
                :error-messages="answer1Errors"
                label="Answer 1"
                required
                @input="$v.a1.$touch()"
                @blur="$v.a1.$touch()"
        ></v-text-field>
        <v-text-field
                class="item-margin"
                v-model="a2"
                :error-messages="answer2Errors"
                label="Answer 2"
                required
                @input="$v.a2.$touch()"
                @blur="$v.a2.$touch()"
        ></v-text-field>
        <v-text-field
                class="item-margin"
                v-model="a3"
                :error-messages="answer3Errors"
                label="Answer 3"
                required
                @input="$v.a3.$touch()"
                @blur="$v.a3.$touch()"
        ></v-text-field>
        <v-text-field
                class="item-margin"
                v-model="a4"
                :error-messages="answer4Errors"
                label="Answer 4"
                required
                @input="$v.a4.$touch()"
                @blur="$v.a4.$touch()"
        ></v-text-field>
        <v-text-field
                class="item-margin"
                v-model="a5"
                :error-messages="answer5Errors"
                label="Answer 5"
                required
                @input="$v.a5.$touch()"
                @blur="$v.a5.$touch()"
        ></v-text-field>
        <v-btn @click="clear">
            clear
        </v-btn>
        <v-btn :disabled="!valid" @click="submit" dark color="cyan">
            submit
        </v-btn>
    </form>
</template>

<script>
import Vue from 'vue'
import Vuelidate, { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

Vue.use(Vuelidate)

export default {
    name: 'InputForm',
    mixins: [validationMixin],
    props: {
        index: {
            type: Number,
            required: true
        }
    },
    validations: {
        q: { required },
        a1: { required },
        a2: { required },
        a3: { required },
        a4: { required },
        a5: { required }
    },
    data: () => ({
        q: '',
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        valid: true
    }),

    computed: {
        questionErrors () {
            const errors = []
            !this.$v.q.required && errors.push('Question is required')
            return errors
        },
        answer1Errors () {
            const errors = []
            !this.$v.a1.required && errors.push('Answer 1 is required')
            return errors
        },
        answer2Errors () {
            const errors = []
            !this.$v.a2.required && errors.push('Answer 2 is required')
            return errors
        },
        answer3Errors () {
            const errors = []
            !this.$v.a3.required && errors.push('Answer 3 is required')
            return errors
        },
        answer4Errors () {
            const errors = []
            !this.$v.a4.required && errors.push('Answer 4 is required')
            return errors
        },
        answer5Errors () {
            const errors = []
            !this.$v.a5.required && errors.push('Answer 5 is required')
            return errors
        }
    },

    methods: {
        submit () {
            if (this.answer1Errors.length === 0 &&
                this.answer2Errors.length === 0 &&
                this.answer3Errors.length === 0 &&
                this.answer4Errors.length === 0 &&
                this.answer5Errors.length === 0 &&
                this.questionErrors.length === 0) {
                console.log('ok')
            }
            this.$v.$touch()
        },
        clear () {
            this.$v.$reset()
            this.q = ''
            this.a1 = ''
            this.a2 = ''
            this.a3 = ''
            this.a4 = ''
            this.a5 = ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-margin {
    margin-top: 15px;
    margin-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
}

.end-margin {
    margin-bottom: 50px;
}
</style>
