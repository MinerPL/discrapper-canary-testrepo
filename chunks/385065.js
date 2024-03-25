"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var a = n("118810"),
  s = n("77078"),
  l = n("272030"),
  r = n("798609"),
  d = n("861370"),
  u = n("152298"),
  o = n("26051"),
  c = n("667358"),
  I = n("563816"),
  T = n("518155"),
  p = n("718381"),
  E = n("875834"),
  N = n("782340");

function f(e) {
  var t;
  let n, f, S, {
      channel: _,
      message: h,
      target: m,
      attachment: O,
      onSelect: A,
      onHeightUpdate: G
    } = e,
    v = m;
  if (null != O) f = n = O.url;
  else
    for (;
      (0, a.isElement)(v);)(0, a.isElement)(v, HTMLImageElement) && null != v.src && (f = v.src), (0, a.isElement)(v, HTMLAnchorElement) && null != v.href && (n = v.href, S = v.textContent), v = v.parentNode;
  let C = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
    M = (0, u.default)(C),
    R = (0, c.default)(C),
    y = (0, I.default)({
      commandType: r.ApplicationCommandType.MESSAGE,
      commandTargetId: h.id,
      channel: _,
      guildId: void 0,
      onHeightUpdate: G
    }),
    g = (0, E.default)(h, _),
    P = (0, T.default)(h, _),
    x = (0, p.default)(h, _),
    H = (0, o.default)(null != n ? n : f, S),
    b = (0, d.default)({
      id: h.id,
      label: N.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(h.channel_id, "-").concat(h.id)
    });
  return (0, i.jsxs)(s.Menu, {
    navId: "message",
    onClose: l.closeContextMenu,
    "aria-label": N.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: A,
    children: [(0, i.jsx)(s.MenuGroup, {
      children: M
    }), (0, i.jsx)(s.MenuGroup, {
      children: R
    }), (0, i.jsxs)(s.MenuGroup, {
      children: [y, g, P, x]
    }), (0, i.jsx)(s.MenuGroup, {
      children: H
    }), (0, i.jsx)(s.MenuGroup, {
      children: b
    })]
  })
}