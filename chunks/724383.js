n.d(t, {
  A: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var s = n(252618),
  a = n(121711),
  r = n(823379),
  l = n(976076),
  o = n(626426),
  c = n(91630),
  d = n(754420),
  u = n(49898),
  _ = n(689938),
  h = n(143731);

function E() {
  let e = (0, l.Z)(),
t = function(e) {
  switch (e) {
    case u.SM.SERVERS:
      return (0, i.jsx)(c.U, {});
    case u.SM.APPS:
      return (0, i.jsx)(o.z, {});
    case u.SM.QUESTS:
      return (0, i.jsx)(a.Z, {});
    case u.SM.SHOP:
      return (0, i.jsx)(d.t, {});
    default:
      (0, r.vE)(e);
  }
}(e);
  return (0, i.jsxs)('section', {
className: h.container,
children: [
  (0, i.jsx)(s.yY, {
    location: function(e) {
      switch (e) {
        case u.SM.SERVERS:
          return _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
        case u.SM.APPS:
          return _.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE;
        case u.SM.QUESTS:
          return _.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
        case u.SM.SHOP:
          return _.Z.Messages.GLOBAL_DISCOVERY_SHOP_TITLE;
        default:
          (0, r.vE)(e);
      }
    }(e)
  }),
  (0, i.jsx)('div', {
    className: h.dragRegion
  }),
  t
]
  });
}