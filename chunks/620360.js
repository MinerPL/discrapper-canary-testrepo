var i = n(570140),
    a = n(211644);
t.Z = {
    init() {
        i.Z.subscribe('CONNECTION_OPEN', () => {
            (0, a.mc)();
        }),
            i.Z.subscribe('LOGOUT', () => {
                (0, a.mc)();
            });
    }
};
