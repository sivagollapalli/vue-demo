import Vue from 'vue';
import { throws } from 'assert';

export default Vue.component('initiation', {
    props: ['init'],
    data() {
        return {
            form: {
                amount: 0,
                id: 10, 
                done_by: "Random"
            },
            appreciations: []
        }
    },
    created() {
        this.appreciations = this._props.init.appreciations
        console.log(this.appreciations);
    },
    methods: {
        onSubmit(event) {
            console.log(event);
            event.preventDefault();
            console.log(this.form);
            this.appreciations.push({
                amount: this.form.amount,
                id: 10,
                done_by: "Random"
            })
        }
    },
    template: `
            <div class="card">
                <div class="card-body">
                    {{ init.desc }} by @{{ init.done_by }}
                    <div class="card w-75" v-for="appr in this.appreciations">
                        <div class="card-body">
                            Rs. {{ appr.amount }} given by {{ appr.done_by }}
                        </div>
                    </div>
                    <b-form inline @submit="onSubmit">
                        <label class="sr-only" for="inlineFormInputName2">Name</label>
                        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe" v-model="form.amount" />
                        <b-button variant="primary" type="submit">Save</b-button>
                    </b-form>

                </div>
            </div>
    `
})