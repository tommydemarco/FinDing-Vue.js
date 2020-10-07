export default {
    receivedRequests(state, _, _2, rootGetters) {
        const coachId = rootGetters.userId
        const requests = state.requests;
        return requests.filter(req => req.coachId === coachId)
    },
    hasRequests(state, getters) {
        return getters.receivedRequests.length > 0
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const now = new Date().getTime();
        if (((now - lastFetch) /1000) < 60) {
            return false
        } else {
            return true
        }
    }
}