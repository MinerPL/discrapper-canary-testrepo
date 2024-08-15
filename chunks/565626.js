n.d(t, {
  Ag: function() {
return T;
  },
  I2: function() {
return I;
  }
}), n(47120);
var s = n(470079),
  a = n(399606),
  r = n(704215),
  i = n(211242),
  l = n(605236),
  o = n(706140),
  c = n(581883),
  d = n(494127),
  _ = n(687362),
  u = n(526761);
let E = [
[
  r.z.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE,
  d.F_,
  r.z.WHATS_NEW_AVATAR_DECOS_FLIP
],
[
  r.z.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE,
  d.YQ,
  r.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
]
  ],
  T = e => {
let t = E.some(e => {
    let [t, n, s] = e, {
      flipped: a
    } = n.getCurrentConfig({
      location: 'useShouldShowNewBadge'
    });
    return !!a && !(0, l.un)(t);
  }),
  n = (0, _.v)(e);
return t || !0 === n;
  },
  I = () => {
let e = (0, i.Q)(),
  t = E.map(e => {
    let [t, n] = e, {
      flipped: s
    } = n.getCurrentConfig({
      location: 'useClearNewBadge'
    });
    return s ? t : null;
  }).filter(e => null != e),
  [n] = (0, o.cv)(e ? [] : t);
null != n && t.includes(n) && !e && (0, l.EW)(n);
  };
t.ZP = 12633 == n.j ? () => {
  let e = (0, i.Q)(),
t = (0, a.e7)([c.Z], () => c.Z.hasLoaded(u.yP.PRELOADED_USER_SETTINGS)),
n = E.map(e => {
  let [t, n, s] = e, {
    flipped: a
  } = n.getCurrentConfig({
    location: 'useShouldShowNewBadge'
  }), r = null != s && (0, l.un)(s);
  return a && !r ? t : null;
}).filter(e => null != e);
  s.useEffect(() => {
t && E.forEach(e => {
  let [t, n, s] = e;
  if (null != s)
    (0, l.un)(s) && (0, l.EW)(t);
});
  }, [
n,
t
  ]);
  let [r] = (0, o.cv)(e ? [] : n);
  return null != r && n.includes(r) && !e;
} : null;