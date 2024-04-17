room1_3_1.RoomsListNESW = [
    null,
    room1_3_2,
    null,
    null
]

room1_3_2.RoomsListNESW = [
    null,
    room1_3_3,
    null,
    room1_3_1
]

room1_3_3.RoomsListNESW = [
    null,
    null,
    null,
    room1_3_2
]



level1_3 = new Level ({
    currentRoom: room1_3_1,
    background: new Sprite({
        position: {
            x: 0,
            y: 0,
        },
        imageSrc: "./img/Background.png",
        scale: 2.5
    })
})