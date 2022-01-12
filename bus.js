const tripsIsOver = (trips, limit) => {
    const object = {};
    let isOver = true;

    for (let i = 0; i < trips.length; i++) {
        const trip = trips[i];
        object[trip[1]] = (object[trip[1]] || 0) + trip[2];
    };


    for (const key in object) {
        const person = object[key];
        if (person > limit) {
            return isOver = false;
        }
    }
    return isOver;
}
const trips = [[1, 5, 3], [2, 3, 3]];
console.log({ tripPossible: tripsIsOver(trips, 5) });