"use strict";
n.d(t, {
  Fe: function() {
    return m
  },
  Ih: function() {
    return A
  },
  Lz: function() {
    return O
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(846519),
  o = n(110924),
  a = n(314897),
  l = n(70956),
  u = n(51144),
  _ = n(768419),
  d = n(300020),
  c = n(456190),
  E = n(239470),
  I = n(894344),
  T = n(203777),
  h = n(616922);
let S = 30 * l.Z.Millis.SECOND;

function f(e) {
  let {
    currentUserTrackId: t,
    syncingWithUser: n,
    syncingWithParty: r
  } = e, [a, l] = i.useState(!1), [u] = i.useState(() => new s.V7), _ = (0, o.Z)(t);
  i.useEffect(() => {
    a && (t !== _ || n || r) && (l(!1), u.stop())
  }, [t, _, n, r, a, u]);
  let d = i.useCallback(() => {
      l(!0), u.start(S, () => l(!1))
    }, [u]),
    c = i.useCallback(() => {
      l(!1), u.stop()
    }, [u]);
  return i.useEffect(() => () => u.stop(), [u]), {
    loading: a,
    startLoading: d,
    clearLoading: c
  }
}

function N(e, t) {
  return (0, r.cj)([_.Z, a.default], () => (0, E.Z)(_.Z, a.default, t, e), [e, t])
}

function A(e, t, n) {
  let r = N(e, t),
    {
      notPlayable: s,
      isCurrentUser: o,
      playingSameTrack: a
    } = r,
    {
      loading: l,
      startLoading: u,
      clearLoading: _
    } = f(r),
    E = i.useCallback(() => {
      u(), (0, T.Z)(r, h.kG.USER_ACTIVITY_PLAY, n).catch(_)
    }, [r, n, u, _]);
  return {
    label: (0, d.Z)(r, h.kG.USER_ACTIVITY_PLAY),
    tooltip: (0, c.Z)(r, h.kG.USER_ACTIVITY_PLAY),
    disabled: !l && (o || s || a),
    loading: l,
    onClick: E,
    spotifyData: r
  }
}

function m(e, t, n, r) {
  let s = null != r ? r : u.ZP.getName(t),
    o = N(e, t),
    {
      syncingWithUser: a,
      syncingWithParty: l,
      isCurrentUser: _
    } = o,
    {
      loading: E,
      startLoading: T,
      clearLoading: S
    } = f(o),
    A = i.useCallback(() => {
      T(), (0, I.Z)(o, h.kG.USER_ACTIVITY_SYNC, n).catch(S)
    }, [o, n, T, S]);
  return {
    label: (0, d.Z)(o, h.kG.USER_ACTIVITY_SYNC),
    tooltip: (0, c.Z)(o, h.kG.USER_ACTIVITY_SYNC, s),
    disabled: !E && (_ || a || l),
    loading: E,
    onClick: A,
    spotifyData: o
  }
}

function O(e, t, n) {
  let r = N(e, t),
    {
      notPlayable: s,
      syncingWithUser: o,
      syncingWithParty: a,
      isCurrentUser: l
    } = r,
    {
      loading: u,
      startLoading: _,
      clearLoading: E
    } = f(r),
    T = i.useCallback(() => {
      _(), (0, I.Z)(r, h.kG.EMBED_SYNC, n).catch(E)
    }, [r, n, _, E]);
  return {
    label: (0, d.Z)(r, h.kG.EMBED_SYNC),
    tooltip: (0, c.Z)(r, h.kG.EMBED_SYNC),
    disabled: !u && (l || o || a || s),
    loading: u,
    onClick: T,
    spotifyData: r
  }
}