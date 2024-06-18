"use strict";
var i = n(735250),
  r = n(470079),
  s = n(906732),
  o = n(508688),
  a = n(806519),
  l = n(626135),
  u = n(768581),
  _ = n(981631),
  d = n(185923),
  c = n(474936),
  E = n(689938),
  I = n(702816);
t.Z = e => {
  let {
    emojis: t
  } = e, {
    analyticsLocations: n
  } = (0, s.ZP)();
  r.useEffect(() => {
    l.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
      type: c.cd.EMOJI_AUTOCOMPLETE_INLINE,
      location_stack: n
    })
  }, [n]);
  let T = (0, i.jsx)("div", {
    className: I.emojis,
    children: t.slice(0, 3).map((e, t) => {
      if (null == e.id) return null;
      let n = (0, i.jsx)("div", {
        className: I.emojiBackground,
        children: (0, i.jsx)("img", {
          alt: e.name,
          className: I.emoji,
          src: u.ZP.getEmojiURL({
            id: e.id,
            animated: e.animated,
            size: d.$U
          })
        })
      }, e.id);
      return 2 === t ? n : (0, i.jsx)(a.ZP, {
        className: I.emojiMask,
        mask: a.ZP.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
        children: n
      }, e.id)
    })
  });
  return (0, i.jsxs)(o.RX, {
    className: I.upsell,
    children: [(0, i.jsx)(o.z5, {
      children: (0, i.jsx)(o.BR, {
        children: E.Z.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({
          count: t.length
        })
      })
    }), (0, i.jsx)(o.dY, {
      children: T
    })]
  })
}