"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var l = n("399606"),
  s = n("125268"),
  i = n("673125"),
  r = n("292793"),
  o = n("390322"),
  u = n("871499"),
  d = n("12168"),
  c = n("152658"),
  f = n("304388"),
  h = n("689938");

function m(e) {
  let {
    channel: t
  } = e, n = (0, l.useStateFromStores)([i.default], () => i.default.getDrawMode()), m = (null == n ? void 0 : n.type) === r.DrawableType.EMOJI_HOSE, p = (e, t) => {
    null != e ? (0, s.setDrawMode)({
      type: r.DrawableType.EMOJI_HOSE,
      emojiName: e.name,
      emojiId: e.id
    }) : m && (0, s.setDrawMode)(null), null == t || t()
  };
  return (0, a.jsx)(f.default, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: l
      } = e;
      return (0, a.jsx)(o.default, {
        children: (0, a.jsx)(d.default, {
          title: h.default.Messages.SHARED_CANVAS_DRAW_MODE_EMOJI_HOSE,
          channel: t,
          closePopout: n,
          onFocus: l,
          onSelectEmoji: e => p(e, n)
        })
      })
    },
    children: e => (0, a.jsx)(u.default, {
      ...e,
      iconComponent: c.default,
      isActive: m || e.isActive,
      onClick: t => {
        p(null), e.onClick(t)
      }
    })
  })
}