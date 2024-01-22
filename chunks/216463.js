"use strict";
n.r(t), n.d(t, {
  InstantInviteGuestPage: function() {
    return I
  }
}), n("808653");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("77078"),
  o = n("155996"),
  u = n("41594"),
  d = n("652453"),
  c = n("782340"),
  f = n("435808"),
  g = n("926622");
let h = e => {
    let {
      guild: t,
      inviteChannel: n,
      setInviteChannel: a
    } = e, s = (0, o.default)(t.id), d = i.useMemo(() => s.reduce((e, t) => ({
      ...e,
      [t.id]: t
    }), {}), [s]), f = i.useMemo(() => Object.values(d).map(e => ({
      value: e.id,
      label: e.name
    })), [d]);
    return (0, l.jsx)(r.SearchableSelect, {
      options: f,
      value: null == n ? void 0 : n.id,
      onChange: e => {
        a(d[e])
      },
      placeholder: c.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
      renderOptionPrefix: e => {
        if (null == e) return null;
        let n = e.value,
          i = d[n];
        return null == i ? null : (0, l.jsx)(u.ChannelItemIcon, {
          channel: i,
          guild: t
        })
      }
    })
  },
  I = e => {
    let {
      handleDone: t,
      headerId: n,
      inviteChannel: i,
      copyValue: a
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(r.ModalHeader, {
        children: [(0, l.jsx)(r.ModalCloseButton, {
          className: f.closeButton,
          onClick: t
        }), (0, l.jsx)("div", {
          className: f.headerContainer,
          children: (0, l.jsx)(r.FormTitle, {
            id: n,
            tag: "h2",
            className: s(g.marginReset, f.headerCloseButtonSpacing, f.headerText),
            children: c.default.Messages.INVITE_A_GUEST_VOICE_ONLY
          })
        })]
      }), (0, l.jsx)(r.ModalContent, {
        className: f.noScroll,
        children: (0, l.jsxs)("div", {
          className: f.guestBody,
          children: [(0, l.jsx)(r.Text, {
            tag: "div",
            variant: "heading-sm/normal",
            color: "header-secondary",
            children: c.default.Messages.INVITE_A_GUEST_EXPLANATION
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h5",
            className: f.guestSelectChannelHeader,
            children: c.default.Messages.INVITE_A_GUEST_STEP_1
          }), (0, l.jsx)(h, {
            ...e
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h5",
            className: f.guestSendInviteLinkHeader,
            children: c.default.Messages.INVITE_A_GUEST_STEP_2
          }), (0, l.jsx)(d.InviteCopyInput, {
            ...e,
            copyValue: null == i ? "" : a,
            disabled: null == i
          })]
        })
      })]
    })
  }