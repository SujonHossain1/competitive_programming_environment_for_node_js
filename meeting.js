const meetingRooms = (meetings) => {
    const object = {};
    let rooms = 0, sum = 0;

    for (let i = 0; i < meetings.length; i++) {
        const meeting = meetings[i];

        object[meeting[0]] = (object[meeting[0]] || 0) + 1;
        object[meeting[1]] = (object[meeting[1]] || 0) - 1;
    };

    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const count = object[key];
            sum += count;
            rooms = Math.max(sum, rooms);
        }
    }

    return rooms;
}
const meetings = [[1, 9], [10, 12], [6, 10], [6, 11], [13, 20], [1, 10]];
console.log({ rooms: meetingRooms(meetings) });

/**
 * 
 */

