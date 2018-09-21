export default function stopAction(sessionLength, breakLength) {
    return {
        type: 'STOP',
        sessionLength,
        breakLength
    }
}