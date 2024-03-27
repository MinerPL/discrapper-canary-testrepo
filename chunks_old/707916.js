"use strict";
l.r(t), l.d(t, {
  GuildEventShareButton: function() {
    return g
  },
  GuildEventInterestedButton: function() {
    return v
  },
  GuildEventLurkerInterestedButton: function() {
    return N
  },
  default: function() {
    return I
  }
}), l("222007");
var n = l("37983"),
  s = l("884691"),
  u = l("862337"),
  a = l("77078"),
  i = l("660279"),
  o = l("36694"),
  r = l("83900"),
  d = l("433487"),
  c = l("491920"),
  E = l("745049"),
  f = l("782340"),
  h = l("169199");

function C(e) {
  let {
    text: t,
    disabled: l,
    onJoinClick: s
  } = e;
  return (0, n.jsx)(a.Button, {
    className: h.button,
    size: a.Button.Sizes.SMALL,
    onClick: s,
    color: a.Button.Colors.GREEN,
    disabled: l,
    children: t
  })
}

function g(e) {
  let {
    onInviteClick: t,
    canInvite: l,
    isChannelPublic: i
  } = e, d = new u.Timeout, [E, C] = s.useState(!1);
  s.useEffect(() => () => {
    d.stop()
  }, []);
  let g = e => {
    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
  };
  return null == t ? null : (0, n.jsx)(a.Tooltip, {
    text: _(l, i),
    position: "top",
    tooltipClassName: h.tooltips,
    "aria-label": f.default.Messages.SHARE_LINK,
    children: e => l && i ? (0, n.jsxs)(a.Button, {
      ...e,
      className: h.button,
      innerClassName: h.innerButton,
      color: a.Button.Colors.PRIMARY,
      size: a.Button.Sizes.SMALL,
      onClick: t,
      children: [(0, n.jsx)(c.default, {
        width: 16,
        height: 16
      }), f.default.Messages.SHARE]
    }) : (0, n.jsxs)(a.Button, {
      ...e,
      className: h.button,
      innerClassName: h.innerButton,
      color: a.Button.Colors.PRIMARY,
      size: a.Button.Sizes.SMALL,
      disabled: E,
      look: E ? a.Button.Looks.OUTLINED : a.Button.Looks.FILLED,
      onClick: g,
      children: [E ? (0, n.jsx)(o.default, {
        width: 16,
        height: 16
      }) : (0, n.jsx)(r.default, {
        width: 16,
        height: 16
      }), E ? f.default.Messages.COPIED : f.default.Messages.SHARE]
    })
  })
}

function v(e) {
  let {
    isUserRsvped: t,
    isUserLurking: l,
    onRsvpClick: s,
    ...u
  } = e, r = t && !l;
  return (0, n.jsxs)(a.Button, {
    ...u,
    className: h.button,
    innerClassName: h.innerButton,
    size: a.Button.Sizes.SMALL,
    onClick: s,
    color: a.Button.Colors.PRIMARY,
    look: r ? a.Button.Looks.OUTLINED : a.Button.Looks.FILLED,
    disabled: l,
    children: [r ? (0, n.jsx)(o.default, {
      width: 16,
      height: 16
    }) : (0, n.jsx)(i.default, {
      width: 16,
      height: 16
    }), f.default.Messages.INDICATE_RSVP]
  })
}

function N(e) {
  return (0, n.jsx)(a.Tooltip, {
    text: f.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
    position: "top",
    tooltipClassName: h.tooltips,
    "aria-label": f.default.Messages.SHARE_LINK,
    children: t => (0, n.jsx)(v, {
      ...t,
      ...e
    })
  })
}
let S = e => null == e || e,
  _ = (e, t) => S(e) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : S(t) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

function I(e) {
  let {
    isActive: t,
    isUserLurking: l,
    rsvped: s,
    canInvite: u,
    isChannelPublic: i = !0,
    entityType: o,
    onContextMenu: r,
    onJoinClick: c,
    onRsvpClick: S,
    onStartClick: _,
    onInviteClick: I,
    onEndClick: L,
    isJoined: m = !1
  } = e, x = void 0 !== c;
  return (0, n.jsxs)("div", {
    className: h.container,
    children: [null != r ? (0, n.jsx)(a.Tooltip, {
      text: f.default.Messages.MORE,
      position: "top",
      "aria-label": f.default.Messages.EDIT,
      children: e => (0, n.jsx)(a.Clickable, {
        ...e,
        onClick: r,
        className: h.iconButton,
        children: (0, n.jsx)(d.default, {
          width: 20,
          height: 20,
          className: h.icon
        })
      })
    }) : null, (0, n.jsx)(g, {
      onInviteClick: I,
      canInvite: u,
      isChannelPublic: i
    }), t && o !== E.GuildScheduledEventEntityTypes.EXTERNAL ? (0, n.jsx)(C, {
      text: function(e) {
        let {
          isJoined: t,
          canJoin: l,
          isVoiceChannel: n
        } = e;
        return l ? t ? f.default.Messages.GO_TO_CHANNEL : n ? f.default.Messages.GUILD_EVENT_JOIN : f.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : f.default.Messages.CHANNEL_LOCKED_SHORT
      }({
        isJoined: m,
        canJoin: x,
        isVoiceChannel: o === E.GuildScheduledEventEntityTypes.VOICE
      }),
      disabled: !x,
      onJoinClick: c
    }) : null, l && !t && (0, n.jsx)(N, {
      isUserRsvped: s,
      isUserLurking: l
    }), !l && !t && null != S && (0, n.jsx)(v, {
      isUserRsvped: s,
      isUserLurking: l,
      onRsvpClick: S
    }), t || null == _ ? null : (0, n.jsx)(a.Button, {
      className: h.button,
      innerClassName: h.innerButton,
      size: a.Button.Sizes.SMALL,
      onClick: _,
      color: a.Button.Colors.GREEN,
      children: f.default.Messages.START
    }), t && null != L ? (0, n.jsx)(a.Button, {
      className: h.button,
      innerClassName: h.innerButton,
      size: a.Button.Sizes.SMALL,
      onClick: L,
      color: a.Button.Colors.PRIMARY,
      children: f.default.Messages.END_EVENT
    }) : null]
  })
}