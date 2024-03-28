"use strict";
n.r(t), n.d(t, {
  NewMemberAction: function() {
    return R
  },
  default: function() {
    return P
  }
}), n("789020");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("933557"),
  d = n("471445"),
  o = n("592125"),
  u = n("271383"),
  N = n("430824"),
  c = n("496675"),
  _ = n("93879"),
  I = n("441674"),
  E = n("186523"),
  f = n("931468"),
  O = n("768581"),
  S = n("630388"),
  T = n("526120"),
  m = n("563534"),
  D = n("846121"),
  A = n("305762"),
  g = n("981631"),
  G = n("372897"),
  h = n("689938"),
  L = n("830174");

function R(e) {
  let {
    title: t,
    emojiId: n,
    emojiName: l,
    icon: s,
    completed: r,
    Icon: d,
    ...o
  } = e, u = "channel" === o.variant ? o.channelId : null, N = "static" === o.variant ? o.subtitle : o.channelName, c = null != u ? O.default.getNewMemberActionIconURL({
    channelId: u,
    icon: s
  }) : null;
  return (0, a.jsxs)("div", {
    className: L.action,
    children: [null != c ? (0, a.jsx)("img", {
      src: c,
      className: L.icon,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": !0
    }) : (0, a.jsx)(A.default, {
      emojiId: n,
      emojiName: l,
      size: A.CTAEmojiSize.LARGE,
      defaultComponent: (0, a.jsx)("div", {
        className: L.channelIconContainer,
        children: (0, a.jsx)(d, {
          className: L.channelIcon
        })
      })
    }), (0, a.jsxs)("div", {
      className: L.actionInfo,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), null != N ? (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: N
      }) : null]
    }), r ? (0, a.jsx)(I.default, {
      backgroundColor: "#fff",
      className: L.checkCircleCompleted,
      width: 24,
      height: 24
    }) : (0, a.jsx)(E.default, {
      className: L.checkCircle,
      width: 24,
      height: 24
    })]
  })
}

function p(e) {
  var t;
  let {
    action: n,
    completed: u
  } = e, {
    channelId: N,
    title: I,
    emoji: E,
    icon: f
  } = n, {
    id: O,
    name: S
  } = null != E ? E : {}, m = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(N)), D = (0, r.default)(m, !0), A = (0, s.useStateFromStores)([c.default], () => c.default.can(g.Permissions.VIEW_CHANNEL, m)), G = l.useCallback(() => {
    if (null == m) return null;
    (0, T.selectNewMemberActionChannel)(m.guild_id, m.id)
  }, [m]);
  if (null == m || !A) return null;
  let h = null !== (t = (0, d.getChannelIconComponent)(m)) && void 0 !== t ? t : _.default;
  return (0, a.jsx)(i.Clickable, {
    className: L.clickableAction,
    onClick: G,
    children: (0, a.jsx)(R, {
      variant: "channel",
      channelId: N,
      title: I,
      channelName: D,
      emojiId: O,
      emojiName: S,
      icon: f,
      completed: u,
      Icon: h
    })
  })
}

function P(e) {
  let {
    guildId: t
  } = e, n = (0, s.useStateFromStores)([m.default], () => m.default.getNewMemberActions(t), [t]), r = (0, s.useStateFromStores)([D.default], () => D.default.getCompletedActions(t)), d = (0, s.useStateFromStores)([u.default], () => u.default.getSelfMember(t)), o = (0, s.useStateFromStores)([N.default], () => N.default.getGuild(t));
  l.useEffect(() => {
    var e;
    null == r && (null == d ? void 0 : d.flags) != null && (0, S.hasFlag)(null !== (e = d.flags) && void 0 !== e ? e : 0, G.GuildMemberFlags.STARTED_HOME_ACTIONS) && (0, T.fetchNewMemberActions)(t)
  }, [r, t, null == d ? void 0 : d.flags]);
  let c = l.useCallback(() => {
    null != o && null != o.rulesChannelId && (0, T.selectNewMemberActionChannel)(o.id, o.rulesChannelId)
  }, [o]);
  return null == d || null == n || 0 === n.length ? null : (0, a.jsxs)("div", {
    className: L.container,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: h.default.Messages.GET_STARTED
    }), n.map(e => (0, a.jsx)(p, {
      action: e,
      completed: (null == r ? void 0 : r[e.channelId]) === !0,
      guildId: t
    }, e.channelId)), (null == o ? void 0 : o.rulesChannelId) != null && (0, a.jsxs)(i.Clickable, {
      className: L.action,
      onClick: c,
      children: [(0, a.jsx)("div", {
        className: L.rulesIconContainer,
        children: (0, a.jsx)(f.default, {
          className: L.rulesIcon
        })
      }), (0, a.jsx)("div", {
        className: L.actionInfo,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: h.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })]
  })
}