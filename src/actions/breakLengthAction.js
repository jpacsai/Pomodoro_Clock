export default function breakLengthAction(event, action) {
    
    const direction = event.target.id === 'break-increment' ? 'INCREMENT_BREAK' : 'DECREMENT_BREAK';

    const actionType = action === 'count' || action === 'pause' ? 'FALSE' : 'TRUE';

    return {
        type: direction + '_' + actionType
    }
}