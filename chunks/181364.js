n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var s = n(13245),
  a = n(593481),
  o = n(237997),
  r = n(312839),
  l = n(987650),
  c = n(689938);
let d = () => ({
icon: n(328756),
title: c.Z.Messages.OVERLAY_LAUNCH_TITLE,
body: null,
hint: u,
colorScheme: a.IC.PRIMARY,
notifType: l.n0.WelcomeNudge
  }),
  u = e => (0, a.QR)(e, (0, r.P)(), c.Z.Messages.OVERLAY_LAUNCH_OPEN_TIP);

function h(e) {
  let {
type: t
  } = e, {
icon: n,
title: u,
body: h,
hint: p,
colorScheme: f,
notifType: _
  } = function(e, t) {
if (t.type === l.nc.NEWS) {
  var n, i, s, o, r, c, d, u;
  return {
    icon: null !== (r = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== r ? r : e.icon,
    title: null !== (c = null === (i = t.news) || void 0 === i ? void 0 : i.title) && void 0 !== c ? c : e.title,
    body: null !== (d = null === (s = t.news) || void 0 === s ? void 0 : s.body) && void 0 !== d ? d : e.body,
    hint: null !== (u = null === (o = t.news) || void 0 === o ? void 0 : o.hint) && void 0 !== u ? u : e.hint,
    colorScheme: null != t.news ? a.IC.BRAND : e.colorScheme,
    notifType: null != t.news ? l.n0.NewsNudge : e.notifType
  };
}
return e;
  }(d(), e), {
trackView: g,
trackClick: m
  } = (0, r.R)(_, {
notif_type: _
  });
  return {
colorScheme: f,
icon: n,
title: u,
body: h,
hint: p,
renderFooter: () => (0, i.jsx)('div', {
  style: {
    textAlign: 'center',
    padding: 2
  },
  children: c.Z.Messages.OVERLAY_CLICK_TO_UNLOCK
}),
onNotificationShow: () => {
  g();
},
onNotificationClick: (e, n) => {
  m('unlock'), t === l.nc.NEWS && s.Z.updateNotificationStatus(n), o.Z.isInstanceUILocked() && s.Z.setInstanceLocked(!1);
},
onDismissClick: () => {
  m('dismiss');
}
  };
}