"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var a = n("374470"),
  l = n("481060"),
  s = n("239091"),
  d = n("911969"),
  u = n("299206"),
  r = n("26737"),
  o = n("905041"),
  c = n("89013"),
  I = n("570870"),
  T = n("449751"),
  p = n("601184"),
  E = n("168405"),
  N = n("689938");

function S(e) {
  var t;
  let n, S, f, {
      channel: _,
      message: h,
      target: O,
      attachment: m,
      onSelect: A,
      onHeightUpdate: G
    } = e,
    C = O;
  if (null != m) S = n = m.url;
  else
    for (;
      (0, a.isElement)(C);)(0, a.isElement)(C, HTMLImageElement) && null != C.src && (S = C.src), (0, a.isElement)(C, HTMLAnchorElement) && null != C.href && (n = C.href, f = C.textContent), C = C.parentNode;
  let M = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
    R = (0, r.default)(M),
    v = (0, c.default)(M),
    y = (0, I.default)({
      commandType: d.ApplicationCommandType.MESSAGE,
      commandTargetId: h.id,
      channel: _,
      guildId: void 0,
      onHeightUpdate: G
    }),
    g = (0, E.default)(h, _),
    P = (0, T.default)(h, _),
    H = (0, p.default)(h, _),
    x = (0, o.default)(null != n ? n : S, f),
    D = (0, u.default)({
      id: h.id,
      label: N.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(h.channel_id, "-").concat(h.id)
    });
  return (0, i.jsxs)(l.Menu, {
    navId: "message",
    onClose: s.closeContextMenu,
    "aria-label": N.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: A,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: R
    }), (0, i.jsx)(l.MenuGroup, {
      children: v
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [y, g, P, H]
    }), (0, i.jsx)(l.MenuGroup, {
      children: x
    }), (0, i.jsx)(l.MenuGroup, {
      children: D
    })]
  })
}