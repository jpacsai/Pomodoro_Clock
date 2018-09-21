export default function sessionLengthAction(event, action) {
    
    const direction = event.target.id === 'session-increment' ? 'INCREMENT_SESSION' : 'DECREMENT_SESSION';

    const actionType = action === 'count' || action === 'pause' ? 'FALSE' : 'TRUE';

    return {
        type: direction + '_' + actionType
    }
}