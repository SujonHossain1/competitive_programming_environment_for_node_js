const calculateRooms = (meetingArray) => {
    const sortedMeetingArray = meetingArray.sort((a, b) => a[0] - b[0]);
    let rooms = 0;
    const newArray = [];



    for (let i = 0; i < sortedMeetingArray.length; i++) {
        const meetingEndingTime = sortedMeetingArray[i][1];
        removeItemFromTimesArray(i + 1, meetingEndingTime);
        rooms++;
    }


    function removeItemFromTimesArray(iterator, endingTime) {
        for (let i = iterator; i < sortedMeetingArray.length; i++) {
            const startTime = sortedMeetingArray[i][0];
            if (startTime >= endingTime) {
                newArray.push(sortedMeetingArray[i]);
            }
        }
    }

    console.log({ newArray });

    rooms = sortedMeetingArray.length - newArray.length
    return rooms;
};

const meetings = [[1, 9], [10, 12], [6, 10], [6, 11][13, 20], [1, 10]]

console.log({ rooms: calculateRooms(meetings) });