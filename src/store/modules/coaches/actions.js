export default {
    async registerCoach(context, data) {
        const userId = 'c3'//context.rootGetters.userId;
        const coachData = {
            id: 'c3',//context.rootGetters.userId,
            firstName: data.first, 
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }

        //sending the data to the backend 
        const response = await fetch(`https://vue-app-4ae5e.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)           
        })

        //const responseData = await response.json();

        if (!response.ok) {
            //error handling
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        })
    },
    async loadCoaches (context, payload) {

        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return
        }

            const response = await fetch(`https://vue-app-4ae5e.firebaseio.com/coaches/.json`);
            const responseData = await response.json();

            if (!response.ok || response.status === 400 || response.status === 400 ) {
                const error = new Error(responseData.message || 'Failed to load the coaches')
                console.log('an error occurred')
                throw error
            }

            const coaches = [];

            for (const key in responseData) {
                const coach = {
                    id: key,
                    firstName: responseData[key].firstName, 
                    lastName: responseData[key].lastName,
                    description: responseData[key].description,
                    hourlyRate: responseData[key].hourlyRate,
                    areas: responseData[key].areas
                }
                coaches.push(coach);
            }
            context.commit('setCoaches', coaches);
            context.commit('setFetchTimestamp');     
    }
}