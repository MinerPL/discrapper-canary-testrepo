n.d(t, {
    v: function () {
        return a;
    },
    z: function () {
        return s;
    }
});
var i = n(570140);
function a(e) {
    i.Z.dispatch({
        type: 'STAGE_MUSIC_MUTE',
        muted: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'STAGE_MUSIC_PLAY',
        play: e
    });
}
