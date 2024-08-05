n.d(t, {
  Z: function() {
return E;
  }
}), n(627341);
var r = n(735250);
n(470079);
var i = n(278074),
  a = n(876215),
  s = n(180335),
  o = n(297781),
  l = n(16779),
  u = n(981631);

function c(e) {
  let {
entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
children: [
  o.U9,
  o.gj,
  o.f,
  o.n8,
  o.v1,
  o.pQ
].map((e, n) => (0, r.jsx)(e, {
  entry: t
}, 'entry-'.concat(n)))
  });
}

function d(e) {
  let {
entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
children: [o.E6].map((e, n) => (0, r.jsx)(e, {
  entry: t
}, 'entry-'.concat(n)))
  });
}

function _(e) {
  let {
entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
children: [o.An].map((e, n) => (0, r.jsx)(e, {
  entry: t
}, 'entry-'.concat(n)))
  });
}

function E(e) {
  let {
user: t,
activity: n,
className: E
  } = e, f = (0, s.Bq)({
activity: n,
user: t
  }), h = (0, i.EQ)(n).with({
type: u.IIU.PLAYING
  }, () => [
l.ho,
l.Xh
  ]).with({
type: u.IIU.WATCHING
  }, () => [
l.ho,
l.Rg
  ]).otherwise(() => []);
  return 0 === h.length ? null : (0, r.jsxs)(o.Gk, {
location: o.Gt.USER_PROFILE,
className: E,
children: [
  h.map((e, t) => (0, r.jsx)(e, {
    activity: n
  }, 'activity-'.concat(t))),
  (0, i.EQ)(f).with({
    content_type: a.s.PLAYED_GAME
  }, e => (0, r.jsx)(c, {
    entry: e
  })).with({
    content_type: a.s.TOP_GAME
  }, e => (0, r.jsx)(d, {
    entry: e
  })).with({
    content_type: a.s.TOP_ARTIST
  }, e => (0, r.jsx)(_, {
    entry: e
  })).otherwise(() => null)
]
  });
}