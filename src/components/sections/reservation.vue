<template>
    <form class="container-section section-tranparent-green section-reservation" id="reservation">
        <Headline :data="{ title: 'Make a Reservation', description: 'Get in touch with restaurant' }"/>

        <div class="form-reservation row gx-5">
            <div class="col-md-6 margin-input">
                <input v-model="formReservation.firstname" type="text" class="input-reservation form-text" placeholder="Firstname" required>
            </div>

            <div class="col-md-6 margin-input">
                <input v-model="formReservation.lastname"  type="text" class="input-reservation form-text" placeholder="Lastname" required>
            </div>

            <div class="col-md-12 margin-input">
                <input v-model="formReservation.email"  type="email" class="input-reservation form-text" placeholder="Email" required>
            </div>

            <div class="col-md-12 margin-input">
                <input v-model="formReservation.phone"  type="text" class="input-reservation form-text" placeholder="Phone" required>
            </div>

            <div class="col-md-6 margin-input">
                <input v-model="formReservation.date"  type="date" class="input-reservation form-text" placeholder="Date" required>
            </div>

            <div class="col-md-6 margin-input position-relative">
                <select v-model="formReservation.hour"  class="input-reservation-select form-text" required>
                    <option value="11 am">11 am</option>
                    <option value="01 pm">11 pm</option>
                    <option value="02 pm">02 pm</option>
                    <option value="03 pm">03 pm</option>
                    <option value="04 pm">04 pm</option>
                    <option value="06 pm">06 pm</option>
                    <option value="07 pm">07 pm</option>
                </select>

                <i class="bi bi-chevron-down color-black arrow-select"></i>
            </div>

            <div class="col-md-12 margin-input position-relative">
                <select v-model="formReservation.person"  class="input-reservation-select form-text" required>
                    <option :value="n" v-for="n in 7" :key="'person-'+n">{{ n }} person</option>
                </select>

                <i class="bi bi-chevron-down color-black arrow-select"></i>
            </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
            <button class="btn-reservation" v-if="!loading" @click="sendReservation">Book Now</button>

            <div class="btn-reservation" v-if="loading">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import Headline from '@/components/headline.vue'
    import { useReservationService } from '@/services/reservationservices'
    export default {
        name: 'reseravtion',
        components: {
            Headline
        },
        
        setup(){
            const { loading, sendReservation, formReservation } = useReservationService()

            return {
                loading,
                sendReservation,
                formReservation
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/reservation.scss'
</style>