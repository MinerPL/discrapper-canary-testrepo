"use strict";
n.r(t), n.d(t, {
  InstantInviteGuestPage: function() {
    return E
  }
}), n("724458");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("397195"),
  u = n("473403"),
  d = n("603236"),
  c = n("689938"),
  I = n("651937"),
  g = n("794711");
let h = e => {
    let {
      guild: t,
      inviteChannel: n,
      setInviteChannel: s
    } = e, i = (0, o.default)(t.id), d = a.useMemo(() => i.reduce((e, t) => ({
      ...e,
      [t.id]: t
    }), {}), [i]), I = a.useMemo(() => Object.values(d).map(e => ({
      value: e.id,
      label: e.name
    })), [d]);
    return (0, l.jsx)(r.SearchableSelect, {
      options: I,
      value: null == n ? void 0 : n.id,
      onChange: e => {
        s(d[e])
      },
      placeholder: c.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
      renderOptionPrefix: e => {
        if (null == e) return null;
        let n = d[e.value];
        return null == n ? null : (0, l.jsx)(u.ChannelItemIcon, {
          channel: n,
          guild: t
        })
      }
    })
  },
  E = e => {
    let {
      handleDone: t,
      headerId: n,
      inviteChannel: a,
      copyValue: s
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(r.ModalHeader, {
        children: [(0, l.jsx)(r.ModalCloseButton, {
          className: I.closeButton,
          onClick: t
        }), (0, l.jsx)("div", {
          className: I.headerContainer,
          children: (0, l.jsx)(r.FormTitle, {
            id: n,
            tag: "h2",
            className: i()(g.marginReset, I.headerCloseButtonSpacing, I.headerText),
            children: c.default.Messages.INVITE_A_GUEST_VOICE_ONLY
          })
        })]
      }), (0, l.jsx)(r.ModalContent, {
        className: I.noScroll,
        children: (0, l.jsxs)("div", {
          className: I.guestBody,
          children: [(0, l.jsx)(r.Text, {
            tag: "div",
            variant: "heading-sm/normal",
            color: "header-secondary",
            children: c.default.Messages.INVITE_A_GUEST_EXPLANATION
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h5",
            className: I.guestSelectChannelHeader,
            children: c.default.Messages.INVITE_A_GUEST_STEP_1
          }), (0, l.jsx)(h, {
            ...e
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h5",
            className: I.guestSendInviteLinkHeader,
            children: c.default.Messages.INVITE_A_GUEST_STEP_2
          }), (0, l.jsx)(d.InviteCopyInput, {
            ...e,
            copyValue: null == a ? "" : s,
            disabled: null == a
          })]
        })
      })]
    })
  }