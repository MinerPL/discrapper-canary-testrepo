"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(647162);

function r(e, t, n, r) {
  var s, o, a;
  let l = e.hasConnectedAccount(),
    u = (0, i.PY)(e),
    _ = e.getTrack(),
    d = e.getSyncingWith(),
    c = e.getActivity(),
    E = null !== (a = null !== (o = null == _ ? void 0 : _.id) && void 0 !== o ? o : null == c ? void 0 : c.sync_id) && void 0 !== a ? a : e.getLastPlayedTrackId(),
    I = n.id === t.getId(),
    T = l && !u,
    h = null != E && E === (null == r ? void 0 : r.sync_id),
    S = (null == c ? void 0 : c.party) != null && (null == r ? void 0 : null === (s = r.party) || void 0 === s ? void 0 : s.id) === c.party.id,
    f = (null == d ? void 0 : d.userId) != null && (null == d ? void 0 : d.userId) === n.id;
  return {
    user: n,
    activity: r,
    hasSpotifyAccount: l,
    canPlaySpotify: u,
    notPlayable: T,
    syncingWithParty: S,
    syncingWithUser: f,
    isCurrentUser: I,
    currentUserTrackId: E,
    playingSameTrack: h,
    playDisabled: I || T || h,
    syncDisabled: I || f || S
  }
}