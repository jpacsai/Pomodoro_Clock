export default function sessionLengthAction(event, action) {
    
    const direction = event.target.id === 'session-increment' ? 'INCREMENT_SESSION' : 'DECREMENT_SESSION';

    const actionType = action === 'count' || action === 'pause' ? 'FALSE' : 'TRUE';

    console.log(direction + '_' + actionType + '  ' + action);
    return {
        type: direction + '_' + actionType
    }
}