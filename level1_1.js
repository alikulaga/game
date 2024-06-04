room1_1_1.RoomsListNESW = [
    null,
    room1_1_2,
    room1_1_3,
    null
]

room1_1_2.RoomsListNESW = [
    null,
    null,
    null,
    room1_1_1
]

room1_1_3.RoomsListNESW = [
    room1_1_1,
    room1_1_4,
    null,
    null
]

room1_1_4.RoomsListNESW = [
    null,
    null,
    null,
    room1_1_3
]



rList = [room1_1_1, room1_1_2, room1_1_3, room1_1_4]

cons = [[]]


level1_1 = new Level({
    currentRoom: room1_1_1,
    roomsList: rList,
    background: new Sprite({
        position: {
            x: 0,
            y: 0,
        },
        imageSrc: "./img/Background.png",
        scale: 2.5
    })
})