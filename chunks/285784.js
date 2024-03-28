"use strict";
l.r(t), l.d(t, {
  GuildEventInterestedButton: function() {
    return g
  },
  GuildEventLurkerInterestedButton: function() {
    return C
  },
  GuildEventShareButton: function() {
    return N
  },
  default: function() {
    return L
  }
}), l("47120");
var n = l("735250"),
  s = l("470079"),
  u = l("846519"),
  i = l("481060"),
  a = l("808602"),
  o = l("263704"),
  r = l("757698"),
  d = l("808268"),
  c = l("792316"),
  f = l("765305"),
  E = l("689938"),
  h = l("358640");

function _(e) {
  let {
    text: t,
    disabled: l,
    onJoinClick: s
  } = e;
  return (0, n.jsx)(i.Button, {
    className: h.__invalid_button,
    size: i.Button.Sizes.SMALL,
    onClick: s,
    color: i.Button.Colors.GREEN,
    disabled: l,
    children: t
  })
}

function N(e) {
  let {
    onInviteClick: t,
    canInvite: l,
    isChannelPublic: a
  } = e, d = new u.Timeout, [f, _] = s.useState(!1);
  s.useEffect(() => () => {
    d.stop()
  }, []);
  let N = e => {
    null != t && t(e), _(!0), d.start(1e3, () => _(!1))
  };
  return null == t ? null : (0, n.jsx)(i.Tooltip, {
    text: m(l, a),
    position: "top",
    tooltipClassName: h.tooltips,
    "aria-label": E.default.Messages.SHARE_LINK,
    children: e => l && a ? (0, n.jsxs)(i.Button, {
      ...e,
      className: h.__invalid_button,
      innerClassName: h.innerButton,
      color: i.Button.Colors.PRIMARY,
      size: i.Button.Sizes.SMALL,
      onClick: t,
      children: [(0, n.jsx)(c.default, {
        width: 16,
        height: 16
      }), E.default.Messages.SHARE]
    }) : (0, n.jsxs)(i.Button, {
      ...e,
      className: h.__invalid_button,
      innerClassName: h.innerButton,
      color: i.Button.Colors.PRIMARY,
      size: i.Button.Sizes.SMALL,
      disabled: f,
      look: f ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
      onClick: N,
      children: [f ? (0, n.jsx)(o.default, {
        width: 16,
        height: 16
      }) : (0, n.jsx)(r.default, {
        width: 16,
        height: 16
      }), f ? E.default.Messages.COPIED : E.default.Messages.SHARE]
    })
  })
}

function g(e) {
  let {
    isUserRsvped: t,
    isUserLurking: l,
    onRsvpClick: s,
    ...u
  } = e, r = t && !l;
  return (0, n.jsxs)(i.Button, {
    ...u,
    className: h.__invalid_button,
    innerClassName: h.innerButton,
    size: i.Button.Sizes.SMALL,
    onClick: s,
    color: i.Button.Colors.PRIMARY,
    look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
    disabled: l,
    children: [r ? (0, n.jsx)(o.default, {
      width: 16,
      height: 16
    }) : (0, n.jsx)(a.default, {
      width: 16,
      height: 16
    }), E.default.Messages.INDICATE_RSVP]
  })
}

function C(e) {
  return (0, n.jsx)(i.Tooltip, {
    text: E.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
    position: "top",
    tooltipClassName: h.tooltips,
    "aria-label": E.default.Messages.SHARE_LINK,
    children: t => (0, n.jsx)(g, {
      ...t,
      ...e
    })
  })
}
let v = e => null == e || e,
  m = (e, t) => v(e) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : v(t) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

function L(e) {
  let {
    isActive: t,
    isUserLurking: l,
    rsvped: s,
    canInvite: u,
    isChannelPublic: a = !0,
    entityType: o,
    onContextMenu: r,
    onJoinClick: c,
    onRsvpClick: v,
    onStartClick: m,
    onInviteClick: L,
    onEndClick: S,
    isJoined: I = !1
  } = e, x = void 0 !== c;
  return (0, n.jsxs)("div", {
    className: h.container,
    children: [null != r ? (0, n.jsx)(i.Tooltip, {
      text: E.default.Messages.MORE,
      position: "top",
      "aria-label": E.default.Messages.EDIT,
      children: e => (0, n.jsx)(i.Clickable, {
        ...e,
        onClick: r,
        className: h.iconButton,
        children: (0, n.jsx)(d.default, {
          width: 20,
          height: 20,
          className: h.icon
        })
      })
    }) : null, (0, n.jsx)(N, {
      onInviteClick: L,
      canInvite: u,
      isChannelPublic: a
    }), t && o !== f.GuildScheduledEventEntityTypes.EXTERNAL ? (0, n.jsx)(_, {
      text: function(e) {
        let {
          isJoined: t,
          canJoin: l,
          isVoiceChannel: n
        } = e;
        return l ? t ? E.default.Messages.GO_TO_CHANNEL : n ? E.default.Messages.GUILD_EVENT_JOIN : E.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.default.Messages.CHANNEL_LOCKED_SHORT
      }({
        isJoined: I,
        canJoin: x,
        isVoiceChannel: o === f.GuildScheduledEventEntityTypes.VOICE
      }),
      disabled: !x,
      onJoinClick: c
    }) : null, l && !t && (0, n.jsx)(C, {
      isUserRsvped: s,
      isUserLurking: l
    }), !l && !t && null != v && (0, n.jsx)(g, {
      isUserRsvped: s,
      isUserLurking: l,
      onRsvpClick: v
    }), t || null == m ? null : (0, n.jsx)(i.Button, {
      className: h.__invalid_button,
      innerClassName: h.innerButton,
      size: i.Button.Sizes.SMALL,
      onClick: m,
      color: i.Button.Colors.GREEN,
      children: E.default.Messages.START
    }), t && null != S ? (0, n.jsx)(i.Button, {
      className: h.__invalid_button,
      innerClassName: h.innerButton,
      size: i.Button.Sizes.SMALL,
      onClick: S,
      color: i.Button.Colors.PRIMARY,
      children: E.default.Messages.END_EVENT
    }) : null]
  })
}