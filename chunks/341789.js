n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(212093),
  l = n(683301),
  o = n(823379),
  c = n(900849),
  d = n(766219),
  u = n(756101),
  _ = n(871348),
  E = n(705063),
  h = n(49898);
let m = [];

function I(e) {
  let {
onScroll: t,
onGuildCardSeen: n,
onGuildCardClick: o
  } = e, c = (0, s.Wu)([l.ZP], () => {
var e, t;
return null !== (t = null === (e = l.ZP.getDiscoverableGuilds().featured) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : m;
  });
  return a.useEffect(() => {
(0, r.$z)(0, 30);
  }, []), (0, i.jsx)(u.Z, {
tab: h.vf.FEATURED,
guilds: c,
onScroll: t,
onGuildCardSeen: n,
onGuildCardClick: o
  });
}

function g(e) {
  let {
tab: t,
onScroll: n,
onGuildCardSeen: o,
onGuildCardClick: c
  } = e, _ = (0, d.lg)(t), E = (0, s.Wu)([l.ZP], () => {
var e, t;
return null !== (t = null === (e = l.ZP.getDiscoverableGuilds()[_]) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : m;
  });
  return a.useEffect(() => {
(0, r.K5)(_);
  }, [_]), (0, i.jsx)(u.Z, {
tab: t,
guilds: E,
onScroll: n,
onGuildCardSeen: o,
onGuildCardClick: c
  });
}

function p(e) {
  let {
loadId: t,
selectedTab: n,
onScroll: r,
onGuildCardSeen: u,
onGuildCardClick: m
  } = e, p = (0, d.lg)(n), T = (0, s.e7)([l.ZP], () => l.ZP.isFetching()), S = (0, s.Wu)([l.ZP], () => l.ZP.getDiscoverableGuilds().featured.guilds), f = (0, s.Wu)([l.ZP], () => l.ZP.getDiscoverableGuilds().gamesYouPlay.guilds);
  switch (a.useEffect(() => {
  S.length > 0 && !T && c.Zt({
    allGuilds: S,
    loadId: t,
    gamesYouPlayGuilds: f,
    categoryId: p
  });
}, [
  S,
  p,
  f,
  T,
  t
]), n) {
case h.vf.FEATURED:
  return (0, i.jsx)(I, {
    tab: n,
    onScroll: r,
    onGuildCardClick: m,
    onGuildCardSeen: u
  });
case h.vf.GAMING:
case h.vf.MUSIC:
case h.vf.ENTERTAINMENT:
case h.vf.TECH:
case h.vf.EDUCATION:
  return (0, i.jsx)(g, {
    tab: n,
    onScroll: r,
    onGuildCardClick: m,
    onGuildCardSeen: u
  }, n);
case h.vf.HUBS:
  return (0, i.jsx)(E.X, {
    onScroll: r,
    loadId: t
  });
case h.vf.GUILDS:
  return (0, i.jsx)(_.U, {
    onScroll: r
  });
default:
  (0, o.vE)(n);
  }
}