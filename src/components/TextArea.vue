<template>
    <div>
        <div class="card card_margin">
            <card class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link">
                        {{ index }}
                    </button>
                </h5>
            </card>
        </div>
        <div class="container">
            <form class="needs-validation" novalidate>
                <div class="form-group">
                    <input type="text" class="form-control" id="question" aria-describedby="emailHelp" placeholder="Enter Question" required>
                    <div class="invalid-feedback">
                        Please enter answer.
                    </div>
                </div>
                <div class="form-group">
                    <label for="answer1">Answers</label>
                    <input type="text" class="form-control" id="answer1" placeholder="Answer 1" required>
                    <div class="invalid-feedback">
                        Please enter question.
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="answer2" placeholder="Answer 2" required>
                    <div class="invalid-feedback">
                        Please enter question.
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="answer3" placeholder="Answer 3" required>
                    <div class="invalid-feedback">
                        Please enter question.
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="answer4" placeholder="Answer 4" required>
                    <div class="invalid-feedback">
                        Please enter question.
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="answer5" placeholder="Answer 5" required>
                    <div class="invalid-feedback">
                        Please enter question.
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
name: 'HelloWorld',
    props: {
        index: Number
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
