import Vue from 'vue';
import Initiation from "./Initiation.js"

export default Vue.component('initiation-listing', {
    data() {
        return {
            initiations: [
                { id: 1, 
                  desc: "Wrote blog post on Gheet",
                  done_by: "Siva Gollapalli", 
                  appreciated_by: "Dharma",
                  appreciations: [
                      { id: 1, amount: 500, done_by: "Dharma" },
                      { id: 2, amount: 200, done_by: "Nishant"},
                      { id: 3, amount: 100, done_by: "Mahesh"}
                  ]
                },

                { id: 2, 
                  desc: "Gave Presentations",
                  done_by: "Mahesh",
                  appreciated_by: "Siva G",
                  appreciations: [
                      { id: 4, amount: 1000, done_by: "Siva G"},
                      { id: 5, amount: 500, done_by: "Surendra" }
                  ]
                },
                { id: 3, 
                    desc: "Wrote blog post on Gheet",
                    done_by: "Siva Gollapalli", 
                    appreciated_by: "Dharma",
                    appreciations: [
                        { id: 6, amount: 500, done_by: "Dharma" },
                        { id: 7, amount: 200, done_by: "Nishant"},
                        { id: 8, amount: 100, done_by: "Mahesh"}
                    ]
                  },
  
                  { id: 4, 
                    desc: "Gave Presentations",
                    done_by: "Mahesh",
                    appreciated_by: "Siva G",
                    appreciations: [
                        { id: 9, amount: 1000, done_by: "Siva G"},
                        { id: 10, amount: 500, done_by: "Surendra" }
                    ]
                  },
                  { id: 5, 
                    desc: "Wrote blog post on Gheet",
                    done_by: "Siva Gollapalli", 
                    appreciated_by: "Dharma",
                    appreciations: [
                        { id: 11, amount: 500, done_by: "Dharma" },
                        { id: 12, amount: 200, done_by: "Nishant"},
                        { id: 13, amount: 100, done_by: "Mahesh"}
                    ]
                  },
  
                  { id: 6, 
                    desc: "Gave Presentations",
                    done_by: "Mahesh",
                    appreciated_by: "Siva G",
                    appreciations: [
                        { id: 14, amount: 1000, done_by: "Siva G"},
                        { id: 15, amount: 500, done_by: "Surendra" }
                    ]
                  }
            ]
        }
    },
    template: `
        <div>
            <initiation v-for="initiation in initiations" 
                v-bind:init="initiation"
                v-bind:key="initiation.id"
                v-bind:style="{'margin-bottom': '10px'}">
            </initiation>
        </div>
    `
})