"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  r = s("181114"),
  o = s("771325"),
  d = s("570697"),
  u = s("75015"),
  c = s("782340"),
  S = s("837087");

function E(e) {
  let {
    showRemoveBannerButton: t,
    errors: s,
    onBannerChange: n,
    guildId: E,
    className: T,
    disabled: f = !1,
    showPremiumIcon: _ = !0,
    isTryItOutFlow: m = !1,
    forcedDivider: g,
    withHighlight: h = !1
  } = e, N = h ? r.default : i.Button;
  return (0, a.jsx)(d.default, {
    className: T,
    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: _,
    errors: s,
    disabled: f,
    forcedDivider: g,
    children: (0, a.jsxs)("div", {
      className: S.buttonsContainer,
      children: [(0, a.jsx)(N, {
        className: l({
          [S.buttonHighlighted]: h
        }),
        size: i.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(u.UploadTypes.BANNER, E, m, void 0),
        children: c.default.Messages.CHANGE_BANNER
      }), t && (0, a.jsx)(i.Button, {
        className: S.removeButton,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.SMALL,
        onClick: () => n(null),
        children: null != E ? c.default.Messages.USER_SETTINGS_RESET_BANNER : c.default.Messages.USER_SETTINGS_REMOVE_BANNER
      })]
    })
  })
}