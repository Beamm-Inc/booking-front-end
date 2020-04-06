<template>
    <v-stepper v-model="e1" alt-labels class="mt-12">
      <v-stepper-header>

        <v-stepper-step :complete="e1 > 1" step="1" :editable="e1 > 1">Select Flight</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" :editable="e1 > 2">
          Passengers
          <small>Optional</small>
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3" :editable="e1 > 3">Extras</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4" :editable="e1 > 4">Confirmation</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
          <v-stepper-content
            step="1"
          >
                <v-card
      class="mx-auto mb-5"
      tile
    >
      <v-list
        three-line
        shaped
        dense
        nav
      >
        <v-subheader>Select Your Departure Flight</v-subheader>
        <v-layout row>
            <v-col pl-3 xs6>Time</v-col>
            <v-col pl-3 xs6>
              <div class="float-right pr-10">Price</div></v-col>
        </v-layout>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in flights"
            :key="i"
            @click="selectFlight(item)"
          >
            <v-list-item-content>
              <v-list-item-title>
                                        <v-layout row>
            <v-col pl-3 xs6>
                <strong> 
                  {{ item.flight.flightNumber }} ({{ item.flight.origin.airportCode }} - {{ item.flight.destination.airportCode }})
                </strong>
                <div>
                   {{ item.flight.origin.airportName }} - {{ item.flight.destination.airportName }}
                </div>
                <div>{{ item.departureDate }} {{ item.flight.departureTime }} - {{ item.arrivalDate }} {{ item.flight.arrivalTime }}</div>
                          
              </v-col><v-col pr-10 xs6 align-self="center">

                <div class="float-right pr-10">$ {{ item.currentPrice }}</div>
              </v-col>
              </v-layout>
                </v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
<router-link :to="{ name: 'home' }">
                     <v-btn color="primary" text class="float-right">Cancel</v-btn>   
                    </router-link>
          </v-stepper-content>
          <v-stepper-content
            step="2"
          >
            <v-card
              class="mb-12"

            >
            <v-container>
                        <v-layout row>
              <v-flex xs4>   
                <v-text-field
                  :rules="requiredRules"
                  v-model="person.firstName"
                  label="First Name"
                  name="firstName"
                  autofocus
                  rounded
                  filled
                />             
                
              </v-flex>
              <v-flex
                pl-3
                xs4>
                <v-text-field
                  :rules="requiredRules"
                  v-model="person.middleName"
                  label="Middle Name"
                  name="middleName"
                  rounded
                  filled                  
                />
                
              </v-flex>
              <v-flex
                pl-3
                xs4>
                <v-text-field
                  :rules="requiredRules"
                  v-model="person.lastName"
                  label="Last Name"
                  name="lastName"
                  rounded
                  filled                  
                />
                
              </v-flex>
            </v-layout> 
            <v-layout row>
              <v-flex xs4>   
                <v-text-field
                  :rules="requiredRules"
                  v-model="person.email"
                  label="Email"
                  name="email"
                  rounded
                  filled                  
                />            
                
              </v-flex>
              <v-flex
                pl-3
                xs4>
                <v-text-field
                  :rules="requiredRules"
                  v-model="passenger.passport"
                  label="Passport"
                  name="passport"
                  rounded
                  filled   
                  required               
                />
                
              </v-flex>
              <v-flex
                pl-3
                xs4>
                  <v-select
                    :items="genders"
                    v-model="item.gender"
                    label="Gender"
                    name="gender"
                    item-value="value"
                    item-text="name"
                    rounded
                    filled
                  />
                
              </v-flex>
            </v-layout> 
             <v-layout row>
                             <v-flex
                xs4>
                <v-text-field
                  :rules="requiredRules"
                  v-model="person.phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  rounded
                  filled                  
                /></v-flex>
              <v-flex 
                pl-3 xs4>   
                <v-text-field
                  :rules="requiredRules"
                  v-model="address.street"
                  label="Street"
                  name="street"
                  rounded
                  filled
                />             
                
              </v-flex>
              <v-flex
                pl-3
                xs4>
                <v-text-field
                  :rules="requiredRules"
                  v-model="address.city"
                  label="City"
                  name="city"
                  rounded
                  filled                  
                />
                </v-flex>

            </v-layout> 
             <v-layout row>
                    
              <v-flex
                xs4>
                <v-text-field
                  :rules="requiredRules"
                  v-model="address.state"
                  label="State"
                  name="state"
                  rounded
                  filled                  
                />
                
              </v-flex>
              <v-flex 
                pl-3 xs4>   
                <v-text-field
                  :rules="requiredRules"
                  v-model="person.country"
                  label="Country"
                  name="country"
                  rounded
                  filled
                />             
                
              </v-flex>
              <v-flex
                pl-3
                xs4>
                <v-text-field
                  :rules="requiredRules"
                  v-model="person.zip"
                  label="Zip"
                  name="zip"
                  rounded
                  filled                  
                />
                
              </v-flex>
            </v-layout> 
            </v-container>
            </v-card>
                <v-btn
            color="primary"
            class="float-right"
            @click="addPassenger()"
          >
            Add Passenger
          </v-btn>
              <v-btn color="primary" text class="float-right">Cancel</v-btn>   
          </v-stepper-content>
          <v-stepper-content
            step="3"
          >
            <v-card
              class="mb-12"
            >
            <v-container>
                             <v-layout row>
          <v-row>
            <v-col cols="12">
              <v-subheader class="pl-0">Seat Row</v-subheader>
        <v-slider
          v-model="trip.seat"
          max="35"
          thumb-label="always"
        ></v-slider>
            </v-col>
          </v-row>
            </v-layout> 
              <v-layout row>
              <v-flex xs6>   
                <v-select
                    :items="meals"
                    v-model="trip.meal"
                    label="Meal Preference"
                    name="meal"
                    item-value="value"
                    item-text="name"
                    rounded
                    filled
                  />            
                
              </v-flex>
              <v-flex
                xs6>
                
              </v-flex>
            </v-layout> 

   
            </v-container>
            </v-card>
                <v-btn
            color="primary"
            class="float-right"
            @click="addExtras()"
          >
            Add Extras
          </v-btn>
              <v-btn color="primary" text class="float-right">Cancel</v-btn>   
          </v-stepper-content>
                    <v-stepper-content
            step="4"
          >
            <v-card
              class="mb-12"
            >
            <v-container>
                <v-simple-table v-if="!confirmed">
    <template v-slot:default>
      <!-- <thead>
        <tr>
          <th class="text-right">Full Name</th>
          <th class="text-left">{{ person.firstName }} {{ person.middleName }} {{ person.lastName }}</th>
        </tr>
      </thead> -->
      <tbody>
        <tr>
          <td class="text-right"><strong>Full Name</strong></td>
          <td><strong>{{ person.firstName }} {{ person.middleName }} {{ person.lastName }}</strong></td>
        </tr>
        <tr>
          <td class="text-right">From</td>
          <td>{{ selectedFlight.flight.origin.airportCity }}</td>
        </tr>
        <tr>
          <td class="text-right">To</td>
          <td>{{ selectedFlight.flight.destination.airportCity }}</td>
        </tr>
        <tr>
          <td class="text-right">Departure Date</td>
          <td>{{ query.dateOfDeparture }}</td>
        </tr>
        <tr>
          <td class="text-right">Return Date</td>
          <td>{{ query.dateOfDeparture ? query.dateOfDeparture : "-" }}</td>
        </tr>
        <tr>
          <td class="text-right">Price</td>
          <td>$ {{ selectedFlight.currentPrice }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div  v-if="confirmed">
    Congratulations !!!
    <p>Your flight booking is confirmed</p>
    Reference Number {{ confirmation.bookingReference }}
    <p>A confirmation has been sent to your email.</p>
    
  </div>
   
            </v-container>
            </v-card>
                <v-btn
                v-if="!confirmed"
            color="primary"
            class="float-right"
            @click="confirmBooking()"
          >
            Confirm
          </v-btn>
          <router-link :to="{ name: 'home' }">
                     <v-btn v-if="confirmed" color="primary" text class="float-right">Cancel</v-btn>   
                    </router-link>
          <router-link :to="{ name: 'home' }">
                     <v-btn color="primary" text class="float-right">Cancel</v-btn>   
                    </router-link>
              
          </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>
<script>
import {  ScheduledflightAPI , BookingAPI} from "@/api";

export default {
  name: "Booking",
  props: ["query"],
  data() {
    return {
      e1: 1,
      steps: 4,
      valid: true,
      item: {
      },
      departureDate: new Date().toISOString().substr(0, 10),
      returnDate: new Date().toISOString().substr(0, 10),
      departureModal: false,
      returnModal: false,
      requiredRules: [v => !!v || "This field is required"],
      airports: [],
      flightClasses: ["Economy", "Business", "First Class"],
      flights: [],
      selectedFlight: {},
      genders: [{name:"Male",value:"M"},{name:"Female",value:"F"}],
      passengers: [],
      address:{},
      meals: [
        {name: "Normal", value:"normal"},
        {name: "Vegie", value:"vegie"},
        {name: "Halal", value:"halal"},
        {name: "Diabetic", value:"diabetic"}],
      person: {
        firstName: "",
        middleName: "",
        lastName: "",
        birthDate: "",
        gender: "",
        phoneNumber: "",
        email: "",
        address: {
            street: "",
            city: "",
            state: "",
            country: "",
            zip: ""
        }
      },
      passenger: {},
      booking: {},
    trips:[],
    trip: {},
    flightClass: "",
    confirmed: false,
    confirmation: {}
  };
  },
  async created() {
    this.flightClass = this.query.flightClass;
    delete this.query.flightClass;
    
    ScheduledflightAPI.search(this.query).then(res => {
      this.flights = res.content;    
    })
  },
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    }
  },
  methods: {    
    async search() {
      ScheduledflightAPI.search(this.query).then(res => {
        this.flights = res.content;      
      })
    },
    onInput (val) {
      this.steps = parseInt(val)
    },
    selectFlight (val) {
      this.e1 = 2;
      this.selectedFlight = val;
      this.booking.flghtid = val.scheduledflightID;
    },
    addPassenger(){
      this.person.address = this.address;
      this.passenger.person = this.person;
      this.e1 = 3;
    },
    addExtras(){
      this.trip.flightClass = this.flightClass;
      this.e1 = 4;
    },
    confirmBooking(){
      this.trips.push(this.trip);
      this.passenger.trips = this.trips;
      this.passengers.push(this.passenger);
      this.booking.passengers = this.passengers;
      this.e1 = 4;
      BookingAPI.create(this.booking).then(res => {
        this.confirmed = true;
        this.confirmation = res;      
    })
    },
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    }
  }
};
</script>
