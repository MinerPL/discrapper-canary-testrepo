"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("689226"),
  u = n("467475"),
  o = n("24373"),
  s = n("48703"),
  c = n("599110"),
  r = n("128259"),
  d = n("773336"),
  f = n("50885"),
  E = n("146574"),
  _ = n("49111"),
  g = n("782340");

function p(e, t, n, p) {
  let v = (0, u.default)(null == n ? void 0 : n.getChannelId());
  if (!d.isPlatformEmbedded || null == e || "" === e || v || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || null != e && null != (0, o.isStickerAssetUrl)(e) || null != e && (0, i.isRoleIconAssetUrl)(e)) return null;
  let h = (0, s.getHostname)(e),
    M = n => {
      c.default.track(_.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
        hostname: h,
        ...(0, E.getNativeContextMenuChannelAnalytics)()
      }), (0, r.handleClick)({
        href: e,
        trusted: (0, r.isLinkTrusted)(e, t),
        shouldConfirm: !0
      }, n)
    };
  return [(0, a.jsx)(l.MenuItem, {
    id: "copy-native-link",
    label: g.default.Messages.COPY_LINK,
    action: () => {
      c.default.track(_.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
        hostname: h,
        ...(0, E.getNativeContextMenuChannelAnalytics)()
      }), f.default.copy(e)
    }
  }, "copy-native-link"), (0, a.jsx)(l.MenuItem, {
    id: "open-native-link",
    label: g.default.Messages.OPEN_LINK,
    action: e => M(e)
  }, "open-native-link")]
}