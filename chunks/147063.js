n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(570140), i = n(65154);
function a(e, t) {
    r.Z.wait(() => {
        r.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
            context: i.Yn.DEFAULT,
            userId: e,
            videoToggleState: t,
            persist: !1,
            isAutomatic: !0
        });
    });
}
