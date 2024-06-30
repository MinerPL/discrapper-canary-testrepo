n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(647162);
function i(e, t, n, i) {
    var a, o, s;
    let l = e.hasConnectedAccount(), u = (0, r.PY)(e), c = e.getTrack(), d = e.getSyncingWith(), _ = e.getActivity(), E = null !== (s = null !== (o = null == c ? void 0 : c.id) && void 0 !== o ? o : null == _ ? void 0 : _.sync_id) && void 0 !== s ? s : e.getLastPlayedTrackId(), f = n.id === t.getId(), h = l && !u, p = null != E && E === (null == i ? void 0 : i.sync_id), m = (null == _ ? void 0 : _.party) != null && (null == i ? void 0 : null === (a = i.party) || void 0 === a ? void 0 : a.id) === _.party.id, I = (null == d ? void 0 : d.userId) != null && (null == d ? void 0 : d.userId) === n.id;
    return {
        user: n,
        activity: i,
        hasSpotifyAccount: l,
        canPlaySpotify: u,
        notPlayable: h,
        syncingWithParty: m,
        syncingWithUser: I,
        isCurrentUser: f,
        currentUserTrackId: E,
        playingSameTrack: p,
        playDisabled: f || h || p,
        syncDisabled: f || I || m
    };
}
