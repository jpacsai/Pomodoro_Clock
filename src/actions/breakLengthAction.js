export default function breakLengthAction(event) {
    
    const type = event.target.id === 'break-increment' ? 'INCREMENT_BREAK' : 'DECREMENT_BREAK';

    return {
        type
    }
}