export default function breakLengthAction(event, action) {
    
    const direction = event.target.id === 'break-increment' ? 'INCREMENT_BREAK' : 'DECREMENT_BREAK';

    return {
        type: direction
    }
}