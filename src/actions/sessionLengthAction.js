export default function sessionLengthAction(event) {

    const key = event.target.id;
    
    const type = 0 ? 'INCREMENT_SESSION' : 'DECREMENT_SESSION';

    return {
        type
    }
}