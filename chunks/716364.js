n.d(t, {
    c: function () {
        return o;
    }
});
var r = n(570140),
    i = n(626135),
    a = n(474873),
    s = n(981631);
function o(e, t) {
    i.default.track(s.rMx.SOUNDPACK_UPDATED, {
        soundpack: e,
        previous_soundpack: a.Z.getSoundpack()
    }),
        r.Z.dispatch({
            type: 'SET_SOUNDPACK',
            soundpack: e,
            forExperimentId: t
        });
}
