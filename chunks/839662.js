n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(44136), a = n(354459);
function l(e, t) {
    var n, l;
    let s = null, r = null, o = null, c = !1, u = !1;
    switch (e.type) {
    case a.fO.ACTIVITY:
        break;
    case a.fO.USER:
        s = e.streamId, o = e.voiceState, c = e.speaking, u = e.ringing;
        break;
    case a.fO.STREAM:
        s = e.streamId, r = e.stream;
    }
    return {
        streamId: s,
        stream: r,
        speaking: c,
        ringing: u,
        muted: null !== (n = null == o ? void 0 : o.isVoiceMuted()) && void 0 !== n && n,
        deafen: null !== (l = null == o ? void 0 : o.isVoiceDeafened()) && void 0 !== l && l,
        mirror: e.type === a.fO.USER && e.user.id === t,
        hasVideo: (0, i.ZP)(e)
    };
}
