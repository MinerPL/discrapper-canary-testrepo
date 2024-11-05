n.d(t, {
    Q: function () {
        return d;
    },
    t: function () {
        return c;
    }
});
var r = n(594190),
    i = n(388627),
    a = n(131951),
    s = n(449224),
    o = n(626135),
    l = n(367907),
    u = n(981631);
function c() {
    let e, t, n, i, s;
    let o = a.Z.getGoLiveSource();
    if (null != o && ((e = o.quality.resolution), (t = o.quality.frameRate), null != o.desktopSource)) {
        var l, u;
        n = o.desktopSource.soundshareSession;
        let e = null != o.desktopSource.sourcePid ? r.ZP.getGameForPID(o.desktopSource.sourcePid) : null;
        (i = null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : null), (s = null !== (u = null == e ? void 0 : e.id) && void 0 !== u ? u : null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: i,
        share_game_id: s
    };
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = __OVERLAY__ ? s.Z.getGame() : (0, i.pL)();
    switch (
        ((t = {
            ...t,
            overlay_game_name: null != r ? r.name : 'Unknown Game',
            overlay_app_id: null != r ? r.id : null
        }),
        e)
    ) {
        case u.rMx.VOICE_CHANNEL_SELECTED:
        case u.rMx.SETTINGS_PANE_VIEWED:
        case u.rMx.GUILD_VIEWED:
        case u.rMx.CHANNEL_OPENED:
            return (0, l.yw)(e, t, n);
        default:
            return o.default.track(e, t, { flush: n });
    }
}
