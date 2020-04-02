<template>
  <v-layout row>
    <v-col md="6" class="ml-auto">
      <v-card class="pa-4">
        <v-form @submit.prevent="login" ref="form" v-model="valid" lazy-validation>
          <v-layout row>
            <v-flex pl-3 xs6>
              <v-autocomplete
                :rules="airportRules"
                :items="airports"
                v-model="item.origin"
                label="From"
                name="From"
                item-value="airportID"
                item-text="airportName"
                no-data-text="No city with this name"
                rounded
                filled
              />
            </v-flex>
            <v-flex pl-3 xs6>
              <v-autocomplete
                :rules="airportRules"
                :items="airports"
                v-model="item.destination"
                label="To"
                name="To"
                item-value="airportID"
                item-text="airportName"
                no-data-text="No city with this name"
                rounded
                filled
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
                rounded
                filled
              />
            </v-flex>
          </v-layout>
          <v-card-actions class="text-xs-center">
            <v-btn type="submit" block color="primary" :disabled="!valid">Search Flights</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-layout>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      valid: true,
      item: {
        origin: "",
        destination: ""
      },
      departureDate: new Date().toISOString().substr(0, 10),
      returnDate: new Date().toISOString().substr(0, 10),
      departureModal: false,
      returnModal: false,
      airportRules: [v => !!v || "This field is required"],
      airports: [
        {
          airportName: "Add",
          airportId: "ER3289"
        }
      ],
      flightClasses: ["Economy", "Business", "First Class"]
    };
  },
  methods: {
    async login() {}
  }
};
</script>
