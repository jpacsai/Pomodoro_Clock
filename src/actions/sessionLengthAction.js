export default function sessionLengthAction(event) {
    
    const type = event.target.id === 'session-increment' ? 'INCREMENT_SESSION' : 'DECREMENT_SESSION';

    return {
        type
    }
}