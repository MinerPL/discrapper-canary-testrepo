"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("481060"),
  r = s("976644"),
  o = s("654904"),
  d = s("993413"),
  u = s("486324"),
  c = s("689938"),
  S = s("635231");

function E(e) {
  let {
    showRemoveBannerButton: t,
    errors: s,
    onBannerChange: n,
    guildId: E,
    className: T,
    disabled: _ = !1,
    showPremiumIcon: f = !0,
    isTryItOutFlow: m = !1,
    forcedDivider: g,
    withHighlight: h = !1
  } = e, N = h ? r.default : i.Button;
  return (0, a.jsx)(d.default, {
    className: T,
    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: f,
    errors: s,
    disabled: _,
    forcedDivider: g,
    children: (0, a.jsxs)("div", {
      className: S.buttonsContainer,
      children: [(0, a.jsx)(N, {
        className: l()({
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