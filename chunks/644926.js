"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  l = s("446674"),
  a = s("77078"),
  i = s("913139"),
  o = s("278108"),
  d = s("485328"),
  c = s("227602"),
  u = s("555158"),
  h = s("13798"),
  f = s("846325"),
  p = s("49111"),
  R = s("782340"),
  E = s("963534");

function m(e) {
  var t;
  let {
    transitionState: s,
    onClose: m
  } = e, N = (0, l.useStateFromStores)([c.default], () => c.default.getKeybindForAction(p.GlobalKeybindActions.SOUNDBOARD_HOLD)), [g, D] = r.useState(null !== (t = null == N ? void 0 : N.shortcut) && void 0 !== t ? t : []);
  return r.useEffect(() => (d.default.disable(), () => {
    d.default.enable()
  }), []), (0, n.jsxs)(a.ModalRoot, {
    transitionState: s,
    children: [(0, n.jsxs)(a.ModalHeader, {
      separator: !1,
      children: [(0, n.jsx)(a.Heading, {
        className: E.header,
        variant: "heading-xl/semibold",
        children: R.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
      }), (0, n.jsx)(a.ModalCloseButton, {
        className: E.closeButton,
        onClick: m
      })]
    }), (0, n.jsxs)(a.ModalContent, {
      className: E.content,
      children: [(0, n.jsx)(u.default, {
        className: E.warning,
        messageType: u.HelpMessageTypes.WARNING,
        children: R.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
      }), (0, n.jsx)(a.Heading, {
        className: E.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: R.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
      }), (0, n.jsx)(a.Text, {
        className: E.action,
        variant: "text-md/normal",
        children: R.default.Messages.KEYBIND_SOUNDBOARD_HOLD
      }), (0, n.jsx)(a.Text, {
        className: E.actionDescription,
        variant: "text-sm/normal",
        children: R.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
      }), (0, n.jsx)(a.Heading, {
        className: E.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: R.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
      }), (0, n.jsx)(o.default, {
        defaultValue: g,
        onChange: D
      }), (0, n.jsx)(a.Anchor, {
        className: E.resetButton,
        onClick: () => D((0, h.toCombo)(f.DEFAULT_KEYBIND)),
        children: R.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
      })]
    }), (0, n.jsxs)(a.ModalFooter, {
      children: [(0, n.jsx)(a.Button, {
        onClick: function() {
          if (0 === g.length) return null != N && i.default.deleteKeybind(N.id), m();
          null == N ? i.default.addKeybind({
            action: p.GlobalKeybindActions.SOUNDBOARD_HOLD,
            shortcut: g,
            enabled: !0,
            params: {}
          }) : i.default.setKeybind({
            ...N,
            shortcut: g
          });
          m()
        },
        children: R.default.Messages.SAVE
      }), (0, n.jsx)(a.Button, {
        onClick: m,
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        children: R.default.Messages.CANCEL
      })]
    })]
  })
}