"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(700111),
  a = n(481060),
  l = n(239091),
  u = n(782568),
  _ = n(364640),
  d = n(198620),
  c = n(797053),
  E = n(746878),
  I = n(981631),
  T = n(261805),
  h = n(504649);

function S(e) {
  return {
    react(t, r, S) {
      let f = S.noStyleAndInteraction ? void 0 : async n => {
        let i = await (0, d.B_)(t.attachmentUrl);
        e.shouldStopPropagation && (null == n || n.stopPropagation()), _.Z.trackLinkClicked(i), e.shouldCloseDefaultModals && (0, a.closeAllModals)(), (0, u.Z)(i)
      }, N = S.noStyleAndInteraction ? I.dG4 : e => {
        (0, l.jW)(e, async () => {
          let {
            default: e
          } = await n.e("98466").then(n.bind(n, 151578));
          return n => (0, i.jsx)(e, {
            ...n,
            attachmentUrl: t.attachmentUrl,
            attachmentName: t.attachmentName
          })
        })
      };
      return (0, i.jsxs)(c.Z, {
        role: "link",
        href: t.attachmentUrl,
        onClick: f,
        onContextMenu: N,
        className: "attachmentLink",
        children: [(0, i.jsx)(o.U, {
          className: s()(h.icon, T.icon),
          color: a.tokens.colors.MENTION_FOREGROUND,
          width: 16,
          height: 16
        }), (0, E.S)(t, r, S)]
      }, S.key)
    }
  }
}