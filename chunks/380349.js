n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    r = n(314897),
    l = n(768419),
    o = n(456190),
    c = n(239470),
    d = n(894344),
    u = n(203777),
    _ = n(616922),
    h = n(689938);
function E(e, t, n) {
    let E = (0, a.e7)([l.Z, r.default], () => (null != t ? (0, c.Z)(l.Z, r.default, t, e) : void 0), [e, t]);
    if (null == E || null == e || null == t) return null;
    let m = E.isCurrentUser || E.notPlayable || E.playingSameTrack,
        I = E.isCurrentUser || E.syncingWithUser || E.syncingWithParty;
    return [
        (0, i.jsx)(
            s.MenuItem,
            {
                id: 'spotify-play-'.concat(e.session_id),
                action: () => (0, u.Z)(E, _.kG.USER_ACTIVITY_PLAY, n),
                label: h.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                subtext: m ? (0, o.Z)(E, _.kG.USER_ACTIVITY_PLAY) : void 0,
                disabled: m
            },
            'spotify-play-'.concat(e.session_id)
        ),
        E.canPlaySpotify
            ? (0, i.jsx)(
                  s.MenuItem,
                  {
                      id: 'spotify-sync-'.concat(e.session_id),
                      action: () => (0, d.Z)(E, _.kG.USER_ACTIVITY_SYNC, n),
                      label: h.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
                      subtext: I ? (0, o.Z)(E, _.kG.USER_ACTIVITY_SYNC) : void 0,
                      disabled: I
                  },
                  'spotify-sync-'.concat(e.session_id)
              )
            : null
    ];
}
