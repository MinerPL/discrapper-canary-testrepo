"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var i = n("735250");
n("470079");
var l = n("374470"),
  a = n("481060"),
  s = n("239091"),
  d = n("911969"),
  u = n("299206"),
  o = n("26737"),
  r = n("905041"),
  c = n("89013"),
  I = n("570870"),
  T = n("449751"),
  p = n("601184"),
  E = n("168405"),
  S = n("689938");

function N(e) {
  var t;
  let n, N, _, {
      channel: f,
      message: h,
      target: A,
      mediaItem: O,
      onSelect: m,
      onHeightUpdate: G
    } = e,
    C = A;
  if (null != O) N = n = O.url;
  else
    for (;
      (0, l.isElement)(C);)(0, l.isElement)(C, HTMLImageElement) && null != C.src && (N = C.src), (0, l.isElement)(C, HTMLAnchorElement) && null != C.href && (n = C.href, _ = C.textContent), C = C.parentNode;
  let M = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
    v = (0, o.default)(M),
    R = (0, c.default)(M),
    y = (0, I.default)({
      commandType: d.ApplicationCommandType.MESSAGE,
      commandTargetId: h.id,
      channel: f,
      guildId: void 0,
      onHeightUpdate: G
    }),
    g = (0, E.default)(h, f),
    P = (0, T.default)(h, f),
    H = (0, p.default)(h, f),
    b = (0, r.default)(null != n ? n : N, _),
    x = (0, u.default)({
      id: h.id,
      label: S.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(h.channel_id, "-").concat(h.id)
    });
  return (0, i.jsxs)(a.Menu, {
    navId: "message",
    onClose: s.closeContextMenu,
    "aria-label": S.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: m,
    children: [(0, i.jsx)(a.MenuGroup, {
      children: v
    }), (0, i.jsx)(a.MenuGroup, {
      children: R
    }), (0, i.jsxs)(a.MenuGroup, {
      children: [y, g, P, H]
    }), (0, i.jsx)(a.MenuGroup, {
      children: b
    }), (0, i.jsx)(a.MenuGroup, {
      children: x
    })]
  })
}