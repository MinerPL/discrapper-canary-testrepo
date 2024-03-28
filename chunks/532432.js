"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
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
  S = s("557304");
let E = [{
  name: "gif",
  extensions: ["gif"]
}];

function T(e) {
  let {
    showRemoveAvatarButton: t,
    errors: s,
    onAvatarChange: n,
    sectionTitle: T,
    changeAvatarButtonText: _,
    guildId: f,
    className: m,
    disabled: g = !1,
    isTryItOutFlow: h = !1,
    forcedDivider: N,
    withHighlight: I = !1
  } = e, p = I ? r.default : i.Button;
  return (0, a.jsx)(d.default, {
    className: m,
    title: T,
    errors: s,
    disabled: g,
    forcedDivider: N,
    children: (0, a.jsxs)("div", {
      className: S.buttonsContainer,
      children: [(0, a.jsx)(p, {
        className: l()({
          [S.buttonHighlighted]: I
        }),
        size: i.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(u.UploadTypes.AVATAR, f, h, h ? E : void 0),
        children: null != _ ? _ : c.default.Messages.USER_SETTINGS_CHANGE_AVATAR
      }), t && (0, a.jsx)(i.Button, {
        className: S.removeButton,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.SMALL,
        onClick: () => n(null),
        children: null != f ? c.default.Messages.USER_SETTINGS_RESET_AVATAR : c.default.Messages.USER_SETTINGS_REMOVE_AVATAR
      })]
    })
  })
}