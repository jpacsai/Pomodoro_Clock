export default function stopAction(sessionLength) {
    return {
        type: 'STOP',
        sessionLength
    }
}