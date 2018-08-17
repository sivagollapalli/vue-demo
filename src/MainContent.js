import Vue from 'vue'
import InitiationListing from "./InitiationListing.js"
import RightPanel from "./RightPanel.js"

export default Vue.component('main-content', {
    template: `
        <div class="container" v-bind:style="{'margin-top': '10px'}">
            <div class="row">
                <div class="col-sm-8">
                    <initiation-listing></initiation-listing>
                </div>
                <div class="col-sm-4">
                    <right-panel></right-panel>
                </div>
            </div>
        </div>
    `
})