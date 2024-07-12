n.d(t, {
  Z: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(239091),
  l = n(782568),
  u = n(364640),
  c = n(124072),
  d = n(198620),
  _ = n(746878),
  E = n(981631),
  f = n(762247),
  h = n(750614);

function p(e) {
  return {
react(t, i, p) {
  let m = p.noStyleAndInteraction ? void 0 : async n => {
    let r = await (0, d.B_)(t.attachmentUrl);
    e.shouldStopPropagation && (null == n || n.stopPropagation()), u.Z.trackLinkClicked(r), e.shouldCloseDefaultModals && (0, o.closeAllModals)(), (0, l.Z)(r);
  }, I = p.noStyleAndInteraction ? E.dG4 : e => {
    (0, s.jW)(e, async () => {
      let {
        default: e
      } = await n.e('98466').then(n.bind(n, 151578));
      return n => (0, r.jsx)(e, {
        ...n,
        attachmentUrl: t.attachmentUrl,
        attachmentName: t.attachmentName
      });
    });
  };
  return (0, r.jsxs)(c.Z, {
    role: 'link',
    href: t.attachmentUrl,
    onClick: m,
    onContextMenu: I,
    className: 'attachmentLink',
    children: [
      (0, r.jsx)(o.AttachmentIcon, {
        size: 'xs',
        className: a()(h.icon, f.icon),
        color: o.tokens.colors.MENTION_FOREGROUND
      }),
      (0, _.S)(t, i, p)
    ]
  }, p.key);
}
  };
}