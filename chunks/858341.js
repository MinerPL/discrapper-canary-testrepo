"use strict";
n.r(l), n.d(l, {
  default: function() {
    return E
  }
});
var t = n("735250");
n("470079");
var u = n("374470"),
  a = n("481060"),
  d = n("239091"),
  s = n("299206"),
  r = n("26737"),
  i = n("905041"),
  o = n("89013"),
  c = n("449751"),
  f = n("601184"),
  h = n("168405"),
  M = n("536639"),
  p = n("689938");

function E(e) {
  var l;
  let n, E, _, {
      channel: m,
      message: x,
      target: C,
      attachment: S,
      onSelect: g
    } = e,
    G = C;
  if (null != S) E = n = S.url;
  else
    for (;
      (0, u.isElement)(G);)(0, u.isElement)(G, HTMLImageElement) && null != G.src && (E = G.src), (0, u.isElement)(G, HTMLAnchorElement) && null != G.href && (n = G.href, _ = G.textContent), G = G.parentNode;
  let j = null === (l = document.getSelection()) || void 0 === l ? void 0 : l.toString(),
    v = (0, r.default)(j),
    A = (0, o.default)(j),
    I = (0, M.default)(x, m),
    b = (0, h.default)(x, m),
    k = (0, c.default)(x, m),
    L = (0, f.default)(x, m),
    O = (0, i.default)(null != n ? n : E, _),
    T = (0, s.default)({
      id: x.id,
      label: p.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(x.channel_id, "-").concat(x.id)
    }),
    H = (0, s.default)({
      id: x.author.id,
      label: p.default.Messages.COPY_ID_AUTHOR
    });
  return (0, t.jsxs)(a.Menu, {
    navId: "message",
    onClose: d.closeContextMenu,
    "aria-label": p.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: g,
    children: [(0, t.jsx)(a.MenuGroup, {
      children: v
    }), (0, t.jsx)(a.MenuGroup, {
      children: A
    }), (0, t.jsxs)(a.MenuGroup, {
      children: [I, b, k, L]
    }), (0, t.jsx)(a.MenuGroup, {
      children: O
    }), (0, t.jsxs)(a.MenuGroup, {
      children: [T, H]
    })]
  })
}