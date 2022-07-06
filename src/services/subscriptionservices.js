import { subscription } from '@/services/path'
import { useHttp } from '@/config/axios'
import { ref, reactive } from 'vue';

const axios = useHttp();

export function useSubscriptionService(){

    const loading = ref(false);
    const formSubscription = reactive({
        email: null
    })

    const reset = function(){
        formSubscription = {
            email: null,
        }
    }

    const sendSubscription = async function(e){
        e.preventDefault()
        if(formSubscription.email){
            loading.value = true;
            try {
                const newSubscription = await axios.post(subscription, { email: formSubscription.email })
                alert('Subscription sent')
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
        sendSubscription,
        loading,
        formSubscription
    }
}