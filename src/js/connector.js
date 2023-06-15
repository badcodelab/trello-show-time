console.log('showtime')

window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        console.log(t, opts);
        return [];
    }
});