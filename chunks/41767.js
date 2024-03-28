"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var o = n("735250"),
  l = n("470079"),
  a = n("481060"),
  s = n("153124"),
  r = n("556012"),
  u = n("590433"),
  i = n("689938"),
  A = n("525803");
let c = e => {
  var t;
  let {
    duration: n,
    onSelectDuration: l
  } = e, s = (0, u.getDisableCommunicationDurationOptions)(), r = s.find(e => e.value === n);
  return (0, o.jsx)(a.FormItem, {
    className: A.durationSelector,
    required: !0,
    children: (0, o.jsx)(a.SearchableSelect, {
      value: null !== (t = null == r ? void 0 : r.value) && void 0 !== t ? t : u.DisableCommunicationDuration.DURATION_60_SEC,
      options: s,
      onChange: e => {
        let t = s.find(t => t.value === e);
        null != t && l(t.value)
      },
      placeholder: i.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
    })
  })
};

function d(e) {
  let {
    action: t,
    triggerType: n,
    isEdit: d,
    onUpdateDuration: _,
    onClose: C,
    transitionState: I
  } = e, T = (0, s.useUID)(), [L, N] = l.useState(() => null != t.metadata.durationSeconds && t.metadata.durationSeconds > 0 ? t.metadata.durationSeconds : u.DisableCommunicationDuration.DURATION_60_SEC), O = (0, r.getActionInfo)(t.type, t, n);
  if (null == O) return null;
  let {
    headerText: E
  } = O;
  return (0, o.jsxs)(a.ModalRoot, {
    transitionState: I,
    "aria-labelledby": T,
    size: a.ModalSize.SMALL,
    children: [(0, o.jsxs)(a.ModalContent, {
      className: A.actionContentContainer,
      children: [(0, o.jsx)(a.Heading, {
        id: T,
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: A.header,
        children: E
      }), (0, o.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: i.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
      }), (0, o.jsx)(c, {
        duration: L,
        onSelectDuration: e => {
          N(e)
        }
      })]
    }), (0, o.jsxs)(a.ModalFooter, {
      children: [(0, o.jsx)(a.Button, {
        onClick: () => {
          _(L)
        },
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        children: d ? i.default.Messages.EDIT : i.default.Messages.SAVE
      }), (0, o.jsx)(a.Button, {
        onClick: () => {
          C()
        },
        color: a.Button.Colors.TRANSPARENT,
        look: a.Button.Looks.LINK,
        children: i.default.Messages.CANCEL
      })]
    })]
  })
}