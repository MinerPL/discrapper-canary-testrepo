"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  i = s("442837"),
  r = s("481060"),
  l = s("660216"),
  o = s("825209"),
  d = s("714338"),
  u = s("556296"),
  c = s("474333"),
  h = s("13140"),
  f = s("710111"),
  p = s("981631"),
  E = s("689938"),
  R = s("182201");

function D(e) {
  var t;
  let {
    transitionState: s,
    onClose: D
  } = e, m = (0, i.useStateFromStores)([u.default], () => u.default.getKeybindForAction(p.GlobalKeybindActions.SOUNDBOARD_HOLD)), [N, g] = a.useState(null !== (t = null == m ? void 0 : m.shortcut) && void 0 !== t ? t : []);
  return a.useEffect(() => (d.default.disable(), () => {
    d.default.enable()
  }), []), (0, n.jsxs)(r.ModalRoot, {
    transitionState: s,
    children: [(0, n.jsxs)(r.ModalHeader, {
      separator: !1,
      children: [(0, n.jsx)(r.Heading, {
        className: R.header,
        variant: "heading-xl/semibold",
        children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
      }), (0, n.jsx)(r.ModalCloseButton, {
        className: R.closeButton,
        onClick: D
      })]
    }), (0, n.jsxs)(r.ModalContent, {
      className: R.content,
      children: [(0, n.jsx)(c.default, {
        className: R.warning,
        messageType: c.HelpMessageTypes.WARNING,
        children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
      }), (0, n.jsx)(r.Heading, {
        className: R.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: E.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
      }), (0, n.jsx)(r.Text, {
        className: R.action,
        variant: "text-md/normal",
        children: E.default.Messages.KEYBIND_SOUNDBOARD_HOLD
      }), (0, n.jsx)(r.Text, {
        className: R.actionDescription,
        variant: "text-sm/normal",
        children: E.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
      }), (0, n.jsx)(r.Heading, {
        className: R.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: E.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
      }), (0, n.jsx)(o.default, {
        defaultValue: N,
        onChange: g
      }), (0, n.jsx)(r.Anchor, {
        className: R.resetButton,
        onClick: () => g((0, h.toCombo)(f.DEFAULT_KEYBIND)),
        children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
      })]
    }), (0, n.jsxs)(r.ModalFooter, {
      children: [(0, n.jsx)(r.Button, {
        onClick: function() {
          if (0 === N.length) return null != m && l.default.deleteKeybind(m.id), D();
          null == m ? l.default.addKeybind({
            action: p.GlobalKeybindActions.SOUNDBOARD_HOLD,
            shortcut: N,
            enabled: !0,
            params: {}
          }) : l.default.setKeybind({
            ...m,
            shortcut: N
          });
          D()
        },
        children: E.default.Messages.SAVE
      }), (0, n.jsx)(r.Button, {
        onClick: D,
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.PRIMARY,
        children: E.default.Messages.CANCEL
      })]
    })]
  })
}