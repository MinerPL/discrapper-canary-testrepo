"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(671290),
  o = n(906732),
  a = n(189432),
  l = n(189357),
  u = n(314897),
  _ = n(944486),
  d = n(785717),
  c = n(993409),
  E = n(176505),
  I = n(50493),
  T = n(689938);

function h(e) {
  let {
    user: t,
    guildId: n,
    channelId: h,
    onClose: S
  } = e, {
    trackUserProfileAction: f
  } = (0, d.KZ)(), {
    newestAnalyticsLocation: N
  } = (0, o.ZP)(), A = (0, r.e7)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)), m = (0, l.ms)(null != n ? n : null, !0), O = (0, r.e7)([_.Z], () => null != h ? h : _.Z.getChannelId(n, !0), [h, n]);
  return null == n || !m || A ? null : (0, i.jsx)(c.Z, {
    variant: "banner",
    icon: s.H,
    text: T.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
    onClick: () => {
      f({
        action: "PRESS_MOD_VIEW"
      }), (0, a.r)(n, t.id, null != O ? O : E.oC.MEMBER_SAFETY, {
        modViewPanel: I.k.INFO,
        sourceLocation: N
      }), null == S || S()
    }
  })
}