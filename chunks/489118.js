"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var l = n("37983"),
  o = n("884691"),
  r = n("77078"),
  a = n("476765"),
  s = n("462392"),
  i = n("903639"),
  u = n("782340"),
  c = n("680388");
let d = e => {
  var t;
  let {
    duration: n,
    onSelectDuration: o
  } = e, a = (0, i.getDisableCommunicationDurationOptions)(), s = a.find(e => e.value === n);
  return (0, l.jsx)(r.FormItem, {
    className: c.durationSelector,
    required: !0,
    children: (0, l.jsx)(r.SearchableSelect, {
      value: null !== (t = null == s ? void 0 : s.value) && void 0 !== t ? t : i.DisableCommunicationDuration.DURATION_60_SEC,
      options: a,
      onChange: e => {
        let t = a.find(t => t.value === e);
        null != t && o(t.value)
      },
      placeholder: u.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
    })
  })
};

function A(e) {
  let {
    action: t,
    triggerType: n,
    isEdit: A,
    onUpdateDuration: C,
    onClose: L,
    transitionState: _
  } = e, f = (0, a.useUID)(), [I, N] = o.useState(() => null != t.metadata.durationSeconds && t.metadata.durationSeconds > 0 ? t.metadata.durationSeconds : i.DisableCommunicationDuration.DURATION_60_SEC), T = (0, s.getActionInfo)(t.type, t, n);
  if (null == T) return null;
  let {
    headerText: O
  } = T;
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: _,
    "aria-labelledby": f,
    size: r.ModalSize.SMALL,
    children: [(0, l.jsxs)(r.ModalContent, {
      className: c.actionContentContainer,
      children: [(0, l.jsx)(r.Heading, {
        id: f,
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: c.header,
        children: O
      }), (0, l.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: u.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
      }), (0, l.jsx)(d, {
        duration: I,
        onSelectDuration: e => {
          N(e)
        }
      })]
    }), (0, l.jsxs)(r.ModalFooter, {
      children: [(0, l.jsx)(r.Button, {
        onClick: () => {
          C(I)
        },
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.SMALL,
        children: A ? u.default.Messages.EDIT : u.default.Messages.SAVE
      }), (0, l.jsx)(r.Button, {
        onClick: () => {
          L()
        },
        color: r.Button.Colors.TRANSPARENT,
        look: r.Button.Looks.LINK,
        children: u.default.Messages.CANCEL
      })]
    })]
  })
}