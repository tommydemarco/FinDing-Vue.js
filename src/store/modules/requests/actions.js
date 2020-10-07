export default {
    async addRequests(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            userMessage: payload.message
        }
        console.log(payload);

        const response = await fetch(`https://vue-app-4ae5e.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
            throw error
        }

        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;

        //committing the mutation
        context.commit('addRequests', newRequest)
    },
    async fetchRequests(context) {

        if (!context.getters.shouldUpdate) {
            return
        }

        const coachId = context.rootGetters.userId

        const response = await fetch(`https://vue-app-4ae5e.firebaseio.com/requests/${coachId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch request');
            throw error
        }

        console.log(responseData);

        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key, 
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                userMessage: responseData[key].userMessage
            }
            requests.push(request)
        }

        context.commit('fetchRequests', requests);
        context.commit('setLastFetch', requests);
        //const requests = [];
    }
}