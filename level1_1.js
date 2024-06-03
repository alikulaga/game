room1_1_1.RoomsListNESW = [
    null,
    room1_1_2,
    room1_1_3,
    null
]


room1_1_2.RoomsListNESW[3] = room1_1_1
room1_1_3.RoomsListNESW[0] = room1_1_1
room1_1_3.RoomsListNESW[1] = room1_1_4

room1_1_4.RoomsListNESW[3] = room1_1_3
room1_1_4.RoomsListNESW[1] = room1_1_5

room1_1_5.RoomsListNESW[3] = room1_1_4


rList = [room1_1_1, room1_1_2, room1_1_3, room1_1_4, room1_1_5]

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