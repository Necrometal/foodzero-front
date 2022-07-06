import { reservation } from '@/services/path'
import { useHttp } from '@/config/axios'
import { ref, reactive, computed } from 'vue';

const axios = useHttp();

export function useReservationService(){

    const loading = ref(false);
    const formReservation = reactive({
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        date: null,
        hour: null,
        person: null,
    })

    const formValide = computed(() => {
        if(
            formReservation.firstname 
            && formReservation.lastname 
            && formReservation.email 
            && formReservation.phone 
            && formReservation.date 
            && formReservation.hour 
            && formReservation.person 
        ) return {
            firstname: formReservation.firstname,
            lastname: formReservation.lastname,
            email: formReservation.email,
            phone: formReservation.phone,
            date: formReservation.date,
            hour: formReservation.hour,
            person: formReservation.person,
        }

        return false
    })

    const reset = function(){
        formReservation = {
            firstname: null,
            lastname: null,
            email: null,
            phone: null,
            date: null,
            hour: null,
            person: null,
        }
    }

    const sendReservation = async function(e){
        e.preventDefault()
        if(formValide.value){
            loading.value = true;
            try {
                const newReservation = await axios.post(reservation, formValide.value)
                alert('Reservation sent')
                loading.value = false;
                reset();
            }catch(error){
                alert('An error occured')
                loading.value = false;
                console.log(error)
            }
        }
    }

    return {
        sendReservation,
        loading,
        formReservation
    }
}