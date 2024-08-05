n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(970321),
  o = n(886491),
  l = n(621853),
  u = n(523034),
  c = n(520978),
  d = n(659101),
  _ = n(631865);

function E(e) {
  var t;
  let {
user: n,
guildId: a
  } = e, o = (0, i.e7)([l.Z], () => {
var e;
return null === (e = l.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
  }), u = (0, s.R)(null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : '');
  return null == o ? null : (0, r.jsx)(d.Z, {
children: (0, r.jsxs)('div', {
  className: _.buttonsContainer,
  children: [
    (0, r.jsx)(c.Z, {
      application: o,
      className: _.button
    }),
    u && null != a && (0, r.jsx)(f, {
      application: o,
      user: n,
      guildId: a
    })
  ]
})
  });
}

function f(e) {
  let {
application: t,
user: i,
guildId: s
  } = e;
  return (0, u.Z)({
user: i,
guildId: s
  }), (0, r.jsx)(o.Q, {
onClick: () => function(e, t) {
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
      transitionState: n.transitionState,
      onClose: n.onClose,
      appId: e.id,
      guildId: t
    });
  });
}(t, s),
className: _.button,
size: a.ButtonSizes.SMALL
  });
}