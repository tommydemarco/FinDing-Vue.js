export default {
    addRequests(state, payload) {
        state.requests.push(payload)
    },
    fetchRequests(state, payload) {
        state.requests = payload
    },
    setLastFetch(state) {
        state.lastFetch = new Date().getTime() 
    }
    
}