"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(490504),
  o = n(946273),
  a = n(441110),
  l = n(689938),
  u = n(37433);

function _(e) {
  let {
    guild: t,
    message: n
  } = e;
  return (0, o.vV)(t.id, n.author.id) ? (0, i.jsx)(r.Popout, {
    animation: r.Popout.Animation.TRANSLATE,
    align: "center",
    autoInvert: !0,
    nudgeAlignIntoViewport: !0,
    position: "right",
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, i.jsx)(a.Z, {
        guild: t,
        message: n,
        onClose: r
      })
    },
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(r.Clickable, {
        onClick: t,
        tag: "span",
        children: (0, i.jsx)(r.Tooltip, {
          text: l.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
          children: e => (0, i.jsx)("div", {
            className: u.newMemberBadge,
            ...e,
            children: (0, i.jsx)(s.Z, {
              width: 20,
              height: 20
            })
          })
        })
      })
    }
  }) : null
}