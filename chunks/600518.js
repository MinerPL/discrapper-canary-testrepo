n.d(t, {
    v: function () {
        return a;
    },
    z: function () {
        return l;
    }
});
var i = n(570140);
function a(e) {
    i.Z.dispatch({
        type: 'STAGE_MUSIC_MUTE',
        muted: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'STAGE_MUSIC_PLAY',
        play: e
    });
}
