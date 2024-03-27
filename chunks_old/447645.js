"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
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
  S = s("761289");
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
    changeAvatarButtonText: f,
    guildId: _,
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
        className: l({
          [S.buttonHighlighted]: I
        }),
        size: i.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(u.UploadTypes.AVATAR, _, h, h ? E : void 0),
        children: null != f ? f : c.default.Messages.USER_SETTINGS_CHANGE_AVATAR
      }), t && (0, a.jsx)(i.Button, {
        className: S.removeButton,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.SMALL,
        onClick: () => n(null),
        children: null != _ ? c.default.Messages.USER_SETTINGS_RESET_AVATAR : c.default.Messages.USER_SETTINGS_REMOVE_AVATAR
      })]
    })
  })
}