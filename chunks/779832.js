t.ZP = {
    backgroundTaskIdentifierInvalid: -1,
    backgroundify: function (e, t) {
        return e;
    },
    startBackgroundTask: (e) => new Promise((e) => e(-1)),
    endBackgroundTask: (e) => {}
};
