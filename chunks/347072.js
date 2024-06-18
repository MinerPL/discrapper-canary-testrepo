"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(889161),
  l = n(729285),
  u = n(343747),
  _ = n(689938),
  d = n(630916);

function c(e) {
  let {
    guild: t,
    focused: n,
    ...r
  } = e, {
    canCreateExpressions: c
  } = (0, a.XJ)(t);
  return (0, i.jsx)(o.Tooltip, {
    text: _.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
    shouldShow: !c,
    children: e => (0, i.jsx)("li", {
      className: d.soundButtonWrapper,
      ...e,
      children: (0, i.jsxs)(o.ClickableContainer, {
        ...r,
        "aria-label": _.Z.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
          guildName: t.name
        }),
        className: s()(d.soundAddButton, {
          [d.focused]: n,
          [d.disabled]: !c
        }),
        onClick: () => (0, u.Z)(t.id),
        children: [(0, i.jsx)(l.Z, {
          className: d.soundAddIcon
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: c ? "header-primary" : "text-muted",
          children: _.Z.Messages.SOUNDBOARD_SOUND_ADD_SOUND
        })]
      })
    })
  })
}