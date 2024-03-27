"use strict";
n.r(t), n.d(t, {
  InstantInviteGuestPage: function() {
    return g
  }
}), n("808653");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  u = n("155996"),
  o = n("41594"),
  d = n("652453"),
  c = n("782340"),
  h = n("696862"),
  f = n("890957");
let I = e => {
    let {
      guild: t,
      inviteChannel: n,
      setInviteChannel: s
    } = e, i = (0, u.default)(t.id), d = a.useMemo(() => i.reduce((e, t) => ({
      ...e,
      [t.id]: t
    }), {}), [i]), h = a.useMemo(() => Object.values(d).map(e => ({
      value: e.id,
      label: e.name
    })), [d]);
    return (0, l.jsx)(r.SearchableSelect, {
      options: h,
      value: null == n ? void 0 : n.id,
      onChange: e => {
        s(d[e])
      },
      placeholder: c.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
      renderOptionPrefix: e => {
        if (null == e) return null;
        let n = e.value,
          a = d[n];
        return null == a ? null : (0, l.jsx)(o.ChannelItemIcon, {
          channel: a,
          guild: t
        })
      }
    })
  },
  g = e => {
    let {
      handleDone: t,
      headerId: n,
      inviteChannel: a,
      copyValue: s
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(r.ModalHeader, {
        children: [(0, l.jsx)(r.ModalCloseButton, {
          className: h.closeButton,
          onClick: t
        }), (0, l.jsx)("div", {
          className: h.headerContainer,
          children: (0, l.jsx)(r.FormTitle, {
            id: n,
            tag: "h2",
            className: i(f.marginReset, h.headerCloseButtonSpacing, h.headerText),
            children: c.default.Messages.INVITE_A_GUEST_VOICE_ONLY
          })
        })]
      }), (0, l.jsx)(r.ModalContent, {
        className: h.noScroll,
        children: (0, l.jsxs)("div", {
          className: h.guestBody,
          children: [(0, l.jsx)(r.Text, {
            tag: "div",
            variant: "heading-sm/normal",
            color: "header-secondary",
            children: c.default.Messages.INVITE_A_GUEST_EXPLANATION
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h5",
            className: h.guestSelectChannelHeader,
            children: c.default.Messages.INVITE_A_GUEST_STEP_1
          }), (0, l.jsx)(I, {
            ...e
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h5",
            className: h.guestSendInviteLinkHeader,
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