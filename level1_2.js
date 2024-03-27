room1_2_1.RoomsListNESW = [
    null,
    room1_2_2,
    null,
    null
]

room1_2_2.RoomsListNESW = [
    null,
    room1_2_3,
    null,
    room1_2_1
]

room1_2_3.RoomsListNESW = [
    null,
    null,
    null,
    room1_2_2
]



level1_2 = new Level ({
    currentRoom: room1_2_1,
    background: new Sprite({
        position: {
            x: 0,
            y: 0,
        },
        imageSrc: "./img/BlueBackground.png",
        scale: 2.5
    })
})