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



level1_1 = new Level({
    currentRoom: room1_1_1
})