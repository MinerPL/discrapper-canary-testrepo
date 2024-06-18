"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var s = n(13245),
  l = n(237997),
  a = n(454902),
  o = n(312839),
  r = n(987650),
  d = n(689938);
let c = () => ({
    icon: n(328756),
    title: d.Z.Messages.OVERLAY_LAUNCH_TITLE,
    body: null,
    hint: u,
    colorScheme: a.IC.PRIMARY,
    notifType: r.n0.WelcomeNudge
  }),
  u = e => (0, a.QR)(e, (0, o.P)(), d.Z.Messages.OVERLAY_LAUNCH_OPEN_TIP);

function h(e) {
  let {
    type: t
  } = e, {
    icon: n,
    title: u,
    body: h,
    hint: p,
    colorScheme: f,
    notifType: E
  } = function(e, t) {
    if (t.type === r.nc.NEWS) {
      var n, i, s, l, o, d, c, u;
      return {
        icon: null !== (o = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== o ? o : e.icon,
        title: null !== (d = null === (i = t.news) || void 0 === i ? void 0 : i.title) && void 0 !== d ? d : e.title,
        body: null !== (c = null === (s = t.news) || void 0 === s ? void 0 : s.body) && void 0 !== c ? c : e.body,
        hint: null !== (u = null === (l = t.news) || void 0 === l ? void 0 : l.hint) && void 0 !== u ? u : e.hint,
        colorScheme: null != t.news ? a.IC.BRAND : e.colorScheme,
        notifType: null != t.news ? r.n0.NewsNudge : e.notifType
      }
    }
    return e
  }(c(), e), {
    trackView: Z,
    trackClick: g
  } = (0, o.R)(E, {
    notif_type: E
  });
  return {
    colorScheme: f,
    icon: n,
    title: u,
    body: h,
    hint: p,
    renderFooter: () => (0, i.jsx)("div", {
      style: {
        textAlign: "center",
        padding: 2
      },
      children: d.Z.Messages.OVERLAY_CLICK_TO_UNLOCK
    }),
    onNotificationShow: () => {
      Z()
    },
    onNotificationClick: (e, n) => {
      g("unlock"), t === r.nc.NEWS && s.Z.updateNotificationStatus(n), l.Z.isInstanceUILocked() && s.Z.setInstanceLocked(!1)
    },
    onDismissClick: () => {
      g("dismiss")
    }
  }
}