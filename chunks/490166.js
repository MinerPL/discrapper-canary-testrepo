"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var n = s("735250");
s("470079");
var o = s("481060"),
  a = s("536442"),
  l = s("13140"),
  i = s("487029"),
  d = s("689938"),
  c = s("886968");

function r(e) {
  let {
    guildId: t,
    channel: r,
    keybind: u,
    transitionState: D,
    onClose: O
  } = e;

  function _() {
    (0, a.hideHotspot)(a.HotspotLocations.SOUNDBOARD_WHEEL_EDUCATION_MODAL), O()
  }

  function h() {
    _(), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("49237"), s.e("99387"), s.e("21228")]).then(s.bind(s, "355453"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    })
  }
  return (0, n.jsxs)(o.ModalRoot, {
    transitionState: D,
    "aria-label": d.default.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_HEADER,
    children: [(0, n.jsxs)(o.ModalContent, {
      className: c.content,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        className: c.header,
        children: d.default.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_HEADER
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: d.default.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_BODY.format({
          keybind: (0, l.toString)(u.shortcut, !0).split(" + "),
          keybindHook: (e, t) => (0, n.jsx)("span", {
            className: c.keybindHintKeys,
            children: (0, n.jsx)(o.KeyCombo, {
              className: c.keybindShortcut,
              shortcut: (0, l.toString)(u.shortcut, !1)
            })
          }, t),
          openSettingsHook: (e, t) => (0, n.jsx)(o.Anchor, {
            onClick: h,
            children: e
          }, t)
        })
      }), (0, n.jsx)("div", {
        className: c.soundWheel,
        children: (0, n.jsx)(i.default, {
          width: 372,
          height: 316,
          guildId: t,
          channel: r,
          interactive: !1,
          keepOpen: !0,
          onClose: () => {},
          analyticsSource: "education modal"
        })
      })]
    }), (0, n.jsxs)(o.ModalFooter, {
      children: [(0, n.jsx)(o.Button, {
        onClick: _,
        children: d.default.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_CONFIRM
      }), (0, n.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: h,
        children: d.default.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_EDIT_KEYBIND
      })]
    }), (0, n.jsx)(o.ModalCloseButton, {
      className: c.closeButton,
      onClick: _
    })]
  })
}