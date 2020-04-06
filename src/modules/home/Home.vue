<template>
  <v-layout row>
    <v-col md="6" class="ml-auto">
      <v-card class="pa-6" shaped raised>
        <v-form @submit.prevent="search" ref="form" v-model="valid">
          <v-layout row>
            <v-flex pl-3 xs6>
              <v-autocomplete
                :rules="airportRules"
                :items="airports"
                v-model="item.from"
                label="From"
                name="From"
                item-value="airportID"
                item-text="airportName"
                no-data-text="No city with this name"
                rounded
                filled
                required
              />
            </v-flex>
            <v-flex pl-3 xs6>
              <v-autocomplete
                :rules="airportRules"
                :items="airports"
                v-model="item.to"
                label="To"
                name="To"
                item-value="airportID"
                item-text="airportName"
                no-data-text="No city with this name"
                rounded
                filled
                required
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex pl-3 xs6>
              <v-dialog
                ref="departureDialog"
                v-model="departureModal"
                :departure-value.sync="departureDate"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="departureDate"
                    label="Departure"
                    readonly
                    v-on="on"
                    rounded
                    filled
                  ></v-text-field>
                </template>
                <v-date-picker v-model="departureDate" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="departureModal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.departureDialog.save(departureDate)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-flex>
            <v-flex pl-3 xs6>
              <v-dialog
                ref="returnDialog"
                v-model="returnModal"
                :return-value.sync="returnDate"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="returnDate"
                    label="Return"
                    readonly
                    v-on="on"
                    rounded
                    filled
                  ></v-text-field>
                </template>
                <v-date-picker v-model="returnDate" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="returnModal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.returnDialog.save(returnDate)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex pl-3 xs6>
              <v-select
                :rules="airportRules"
                :items="flightClasses"
                v-model="item.flightClass"
                label="Cabin class"
                name="flightClass"
                item-value="value"
                item-text="name"
                rounded
                filled
              />
            </v-flex>
          </v-layout>
          <v-card-actions class="text-xs-center">
            <v-btn type="submit" color="primary" :disabled="!valid" rounded raised class="pa-2">Search Flights</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-layout>
</template>
<script>
import { AirportAPI } from "@/api";

export default {
  name: "Home",
  data() {
    return {
      valid: true,
      item: {
      },
      departureDate: null,
      returnDate: null,
      departureModal: false,
      returnModal: false,
      airportRules: [v => !!v || "This field is required"],
      airports: [],
      flightClasses: [ 
        {name: "Economy", value: "economy"},
        {name: "Business", value: "business"},
        {name: "First Class", value: "first"}
       ]
    };
  },
  async created() {
    AirportAPI.all().then(res => {
      this.airports = res.content;      
    })
  },
  methods: {    
    async search() {
      this.$refs.form.validate();
      this.item.dateOfDeparture = this.departureDate;
      this.item.dateOfReturn = this.departureDate;
      if(this.valid){
        this.$router.push({ name: "booking", params: { query: this.item } });
      }
    }
  }
};
</script>
