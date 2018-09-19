export default function breakLengthAction(event) {

    const key = event.target.id;
    
    const type = 0 ? 'INCREMENT_BREAK' : 'DECREMENT_BREAK';

    return {
        type
    }
}