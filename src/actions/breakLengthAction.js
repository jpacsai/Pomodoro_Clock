export default function breakLengthAction(event) {
    console.log(event.target.id)
    
    const type = event.target.id === 'break-increment' ? 'INCREMENT_BREAK' : 'DECREMENT_BREAK';

    return {
        type
    }
}