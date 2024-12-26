player.onChat("checkers", function () {
    agent.setItem(QUARTZ_SLAB, 50, 1)
    agent.setItem(NETHER_BRICK_SLAB, 50, 2)
    agent.teleportToPlayer()
    agent.move(FORWARD, 1)
    for (let i = 0; i <= 9; i++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.setSlot(1)
            agent.place(BACK)
            agent.move(FORWARD, 1)
            agent.setSlot(2)
            agent.place(BACK)
        }
        if (i % 2 == 0) {
            agent.turn(LEFT_TURN)
        } else {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
        if (i % 2 == 0) {
            agent.turn(LEFT_TURN)
        } else {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
})
