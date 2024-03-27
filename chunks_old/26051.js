"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("689226"),
  u = n("467475"),
  o = n("24373"),
  s = n("48703"),
  r = n("599110"),
  c = n("128259"),
  d = n("773336"),
  f = n("50885"),
  E = n("146574"),
  h = n("49111"),
  v = n("782340");

function _(e, t, n, _) {
  let g = (0, u.default)(null == n ? void 0 : n.getChannelId());
  if (!d.isPlatformEmbedded || null == e || "" === e || g || (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 || null != e && null != (0, o.isStickerAssetUrl)(e) || null != e && (0, i.isRoleIconAssetUrl)(e)) return null;
  let p = (0, s.getHostname)(e),
    M = n => {
      r.default.track(h.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
        hostname: p,
        ...(0, E.getNativeContextMenuChannelAnalytics)()
      }), (0, c.handleClick)({
        href: e,
        trusted: (0, c.isLinkTrusted)(e, t),
        shouldConfirm: !0
      }, n)
    };
  return [(0, a.jsx)(l.MenuItem, {
    id: "copy-native-link",
    label: v.default.Messages.COPY_LINK,
    action: () => {
      r.default.track(h.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
        hostname: p,
        ...(0, E.getNativeContextMenuChannelAnalytics)()
      }), f.default.copy(e)
    }
  }, "copy-native-link"), (0, a.jsx)(l.MenuItem, {
    id: "open-native-link",
    label: v.default.Messages.OPEN_LINK,
    action: e => M(e)
  }, "open-native-link")]
}