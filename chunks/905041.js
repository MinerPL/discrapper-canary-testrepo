"use strict";
t.r(n), t.d(n, {
  default: function() {
    return _
  }
});
var l = t("735250");
t("470079");
var u = t("481060"),
  a = t("829883"),
  i = t("976853"),
  r = t("378233"),
  s = t("902676"),
  d = t("626135"),
  o = t("49012"),
  c = t("358085"),
  f = t("998502"),
  v = t("36998"),
  C = t("981631"),
  h = t("689938");

function _(e, n, t, _) {
  let E = (0, i.default)(null == t ? void 0 : t.getChannelId());
  if (!c.isPlatformEmbedded || null == e || "" === e || E || (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 || null != e && null != (0, r.isStickerAssetUrl)(e) || null != e && (0, a.isRoleIconAssetUrl)(e)) return null;
  let M = (0, s.getHostname)(e),
    N = t => {
      d.default.track(C.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
        hostname: M,
        ...(0, v.getNativeContextMenuChannelAnalytics)()
      }), (0, o.handleClick)({
        href: e,
        trusted: (0, o.isLinkTrusted)(e, n),
        shouldConfirm: !0
      }, t)
    };
  return [(0, l.jsx)(u.MenuItem, {
    id: "copy-native-link",
    label: h.default.Messages.COPY_LINK,
    action: () => {
      d.default.track(C.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
        hostname: M,
        ...(0, v.getNativeContextMenuChannelAnalytics)()
      }), f.default.copy(e)
    }
  }, "copy-native-link"), (0, l.jsx)(u.MenuItem, {
    id: "open-native-link",
    label: h.default.Messages.OPEN_LINK,
    action: e => N(e)
  }, "open-native-link")]
}