"use strict";
t.r(n), t.d(n, {
  default: function() {
    return E
  }
});
var u = t("37983");
t("884691");
var a = t("118810"),
  l = t("77078"),
  r = t("272030"),
  s = t("861370"),
  i = t("152298"),
  c = t("26051"),
  d = t("667358"),
  o = t("518155"),
  f = t("718381"),
  h = t("875834"),
  p = t("780657"),
  M = t("782340");

function E(e) {
  var n;
  let t, E, I, {
      channel: S,
      message: m,
      target: v,
      attachment: _,
      onSelect: x
    } = e,
    N = v;
  if (null != _) E = t = _.url;
  else
    for (;
      (0, a.isElement)(N);)(0, a.isElement)(N, HTMLImageElement) && null != N.src && (E = N.src), (0, a.isElement)(N, HTMLAnchorElement) && null != N.href && (t = N.href, I = N.textContent), N = N.parentNode;
  let A = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString(),
    g = (0, i.default)(A),
    G = (0, d.default)(A),
    O = (0, p.default)(m, S),
    C = (0, h.default)(m, S),
    j = (0, o.default)(m, S),
    T = (0, f.default)(m, S),
    y = (0, c.default)(null != t ? t : E, I),
    P = (0, s.default)({
      id: m.id,
      label: M.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(m.channel_id, "-").concat(m.id)
    }),
    R = (0, s.default)({
      id: m.author.id,
      label: M.default.Messages.COPY_ID_AUTHOR
    });
  return (0, u.jsxs)(l.Menu, {
    navId: "message",
    onClose: r.closeContextMenu,
    "aria-label": M.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: x,
    children: [(0, u.jsx)(l.MenuGroup, {
      children: g
    }), (0, u.jsx)(l.MenuGroup, {
      children: G
    }), (0, u.jsxs)(l.MenuGroup, {
      children: [O, C, j, T]
    }), (0, u.jsx)(l.MenuGroup, {
      children: y
    }), (0, u.jsxs)(l.MenuGroup, {
      children: [P, R]
    })]
  })
}