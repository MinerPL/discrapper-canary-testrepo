"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("118810"),
  u = n("77078"),
  r = n("272030"),
  c = n("452453"),
  o = n("65997"),
  i = n("218525"),
  d = n("773336"),
  f = n("50885"),
  E = n("782340");

function C(e) {
  let {
    text: t,
    target: n,
    onHeightUpdate: C,
    onSelect: L,
    isChannelTextArea: S = !1
  } = e, p = a.useCallback(() => {
    (0, r.closeContextMenu)(), (0, s.isElement)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0))
  }, [n]), [M, m] = (0, i.default)({
    text: t,
    target: n,
    onHeightUpdate: C
  }), h = (0, o.default)();
  if (!d.isPlatformEmbedded || !((0, s.isElement)(n, HTMLInputElement) || (0, s.isElement)(n, HTMLTextAreaElement))) return null;
  let g = "" !== t ? [(0, l.jsx)(u.MenuItem, {
    id: "copy",
    label: E.default.Messages.COPY,
    hint: (0, d.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => f.default.copy(t)
  }, "copy"), (0, l.jsx)(u.MenuItem, {
    id: "cut",
    label: E.default.Messages.CUT,
    hint: (0, d.isMac)() ? "⌘X" : "Ctrl+X",
    action: () => setTimeout(() => f.default.cut(), 0)
  }, "cut")] : null;
  return (0, l.jsxs)(u.Menu, {
    className: c.ContextMenuClassName,
    navId: "textarea-context",
    onClose: p,
    "aria-label": E.default.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
    onSelect: L,
    children: [S && (0, l.jsx)(u.MenuGroup, {
      children: h
    }), (0, l.jsx)(u.MenuGroup, {
      children: M
    }), (0, l.jsx)(u.MenuGroup, {
      children: m
    }), (0, l.jsxs)(u.MenuGroup, {
      children: [g, (0, l.jsx)(u.MenuItem, {
        id: "paste",
        label: E.default.Messages.PASTE,
        hint: (0, d.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => f.default.paste(), 0)
      })]
    })]
  })
}