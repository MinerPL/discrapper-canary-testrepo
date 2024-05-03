"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var l = n("735250"),
  s = n("470079"),
  u = n("374470"),
  a = n("481060"),
  r = n("239091"),
  c = n("886036"),
  i = n("877794"),
  o = n("358085"),
  d = n("998502"),
  f = n("689938");

function E(e) {
  let {
    text: t,
    target: n,
    onHeightUpdate: E,
    onSelect: p,
    isChannelTextArea: M = !1
  } = e, C = s.useCallback(() => {
    (0, r.closeContextMenu)(), (0, u.isElement)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0))
  }, [n]), [m, S] = (0, i.default)({
    text: t,
    target: n,
    onHeightUpdate: E
  }), h = (0, c.default)();
  if (!o.isPlatformEmbedded || !((0, u.isElement)(n, HTMLInputElement) || (0, u.isElement)(n, HTMLTextAreaElement))) return null;
  let g = "" !== t ? [(0, l.jsx)(a.MenuItem, {
    id: "copy",
    label: f.default.Messages.COPY,
    hint: (0, o.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => d.default.copy(t)
  }, "copy"), (0, l.jsx)(a.MenuItem, {
    id: "cut",
    label: f.default.Messages.CUT,
    hint: (0, o.isMac)() ? "⌘X" : "Ctrl+X",
    action: () => setTimeout(() => d.default.cut(), 0)
  }, "cut")] : null;
  return (0, l.jsxs)(a.Menu, {
    navId: "textarea-context",
    onClose: C,
    "aria-label": f.default.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
    onSelect: p,
    children: [M && (0, l.jsx)(a.MenuGroup, {
      children: h
    }), (0, l.jsx)(a.MenuGroup, {
      children: m
    }), (0, l.jsx)(a.MenuGroup, {
      children: S
    }), (0, l.jsxs)(a.MenuGroup, {
      children: [g, (0, l.jsx)(a.MenuItem, {
        id: "paste",
        label: f.default.Messages.PASTE,
        hint: (0, o.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => d.default.paste(), 0)
      })]
    })]
  })
}