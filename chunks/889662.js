"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var l = n("735250"),
  s = n("470079"),
  u = n("374470"),
  a = n("481060"),
  c = n("239091"),
  r = n("632120"),
  i = n("886036"),
  o = n("877794"),
  d = n("358085"),
  f = n("998502"),
  E = n("689938");

function p(e) {
  let {
    text: t,
    target: n,
    onHeightUpdate: p,
    onSelect: M,
    isChannelTextArea: C = !1
  } = e, m = s.useCallback(() => {
    (0, c.closeContextMenu)(), (0, u.isElement)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0))
  }, [n]), [S, h] = (0, o.default)({
    text: t,
    target: n,
    onHeightUpdate: p
  }), g = (0, i.default)();
  if (!d.isPlatformEmbedded || !((0, u.isElement)(n, HTMLInputElement) || (0, u.isElement)(n, HTMLTextAreaElement))) return null;
  let L = "" !== t ? [(0, l.jsx)(a.MenuItem, {
    id: "copy",
    label: E.default.Messages.COPY,
    hint: (0, d.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => f.default.copy(t)
  }, "copy"), (0, l.jsx)(a.MenuItem, {
    id: "cut",
    label: E.default.Messages.CUT,
    hint: (0, d.isMac)() ? "⌘X" : "Ctrl+X",
    action: () => setTimeout(() => f.default.cut(), 0)
  }, "cut")] : null;
  return (0, l.jsxs)(a.Menu, {
    className: r.ContextMenuClassName,
    navId: "textarea-context",
    onClose: m,
    "aria-label": E.default.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
    onSelect: M,
    children: [C && (0, l.jsx)(a.MenuGroup, {
      children: g
    }), (0, l.jsx)(a.MenuGroup, {
      children: S
    }), (0, l.jsx)(a.MenuGroup, {
      children: h
    }), (0, l.jsxs)(a.MenuGroup, {
      children: [L, (0, l.jsx)(a.MenuItem, {
        id: "paste",
        label: E.default.Messages.PASTE,
        hint: (0, d.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => f.default.paste(), 0)
      })]
    })]
  })
}