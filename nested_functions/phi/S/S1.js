// Function
const S1 = (piofy, piofcbrtx) => {
    const diff = piofy - piofcbrtx;
    return (diff * (diff - 1)) / 2;
}
// Module export
module.exports = S1;