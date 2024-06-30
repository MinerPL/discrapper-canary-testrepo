n(47120);
var i = n(570140);
t.Z = {
    setEnabled(e) {
        this.update({ enabled: e });
    },
    update(e) {
        for (let t of Object.keys(e))
            i.Z.dispatch({
                type: 'STREAMER_MODE_UPDATE',
                key: t,
                value: e[t]
            });
    }
};
