window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t.card('due').get('due').then(function(due) {
            return due && !/.+:59:59.000Z$/.test(due) ? [{
                    text: new Date(due).toLocaleTimeString(),
                    color: 'light-gray',
                }] : [];
        });
    }
});