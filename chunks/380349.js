n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var s = n(442837), a = n(481060), r = n(314897), l = n(768419), o = n(456190), c = n(239470), d = n(894344), u = n(203777), _ = n(616922), E = n(689938);
function h(e, t, n) {
    let h = (0, s.e7)([
        l.Z,
        r.default
    ], () => null != t ? (0, c.Z)(l.Z, r.default, t, e) : void 0, [
        e,
        t
    ]);
    if (null == h || null == e || null == t)
        return null;
    let I = h.isCurrentUser || h.notPlayable || h.playingSameTrack, m = h.isCurrentUser || h.syncingWithUser || h.syncingWithParty;
    return [
        (0, i.jsx)(a.MenuItem, {
            id: 'spotify-play-'.concat(e.session_id),
            action: () => (0, u.Z)(h, _.kG.USER_ACTIVITY_PLAY, n),
            label: E.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
            subtext: I ? (0, o.Z)(h, _.kG.USER_ACTIVITY_PLAY) : void 0,
            disabled: I
        }, 'spotify-play-'.concat(e.session_id)),
        h.canPlaySpotify ? (0, i.jsx)(a.MenuItem, {
            id: 'spotify-sync-'.concat(e.session_id),
            action: () => (0, d.Z)(h, _.kG.USER_ACTIVITY_SYNC, n),
            label: E.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
            subtext: m ? (0, o.Z)(h, _.kG.USER_ACTIVITY_SYNC) : void 0,
            disabled: m
        }, 'spotify-sync-'.concat(e.session_id)) : null
    ];
}
