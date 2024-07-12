n.d(t, {
  V: function() {
return p;
  },
  c: function() {
return f;
  }
});
var r = n(735250),
  i = n(442837),
  a = n(481060),
  o = n(970321),
  s = n(621853),
  l = n(523034),
  u = n(475413),
  c = n(689938);
let d = e => {
var t;
let n = (0, i.e7)([s.Z], () => {
    var t;
    return null === (t = s.Z.getUserProfile(e)) || void 0 === t ? void 0 : t.application;
  }),
  r = (0, o.R)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '');
return null != n && r ? n : null;
  },
  _ = (e, t) => {
(0, a.openModalLazy)(async () => {
  let {
    default: i
  } = await Promise.all([
    n.e('29549'),
    n.e('31605'),
    n.e('77172'),
    n.e('89131'),
    n.e('34063')
  ]).then(n.bind(n, 7225));
  return n => (0, r.jsx)(i, {
    appId: e,
    guildId: t,
    ...n
  });
});
  };

function E(e) {
  let {
user: t,
guildId: n,
onClick: i,
...o
  } = e;
  return (0, l.Z)({
user: t,
guildId: n
  }), (0, r.jsx)(u.tG, {
action: 'PRESS_APP_STOREFRONT',
icon: a.ShopIcon,
text: c.Z.Messages.STOREFRONT,
onClick: i,
...o
  });
}

function f(e) {
  let {
user: t,
guildId: n,
...i
  } = e, a = d(t.id);
  return null == a ? null : (0, r.jsx)(E, {
user: t,
guildId: n,
onClick: () => _(a.id, n),
...i
  });
}

function h(e) {
  let {
user: t,
guildId: n,
onClick: i,
...o
  } = e;
  return (0, l.Z)({
user: t,
guildId: n
  }), (0, r.jsx)(u.ef, {
action: 'PRESS_APP_STOREFRONT',
icon: a.ShopIcon,
tooltipText: c.Z.Messages.STOREFRONT,
onClick: i,
...o
  });
}

function p(e) {
  let {
user: t,
guildId: n,
...i
  } = e, a = d(t.id);
  return null == a ? null : (0, r.jsx)(h, {
user: t,
guildId: n,
onClick: () => _(a.id, n),
...i
  });
}