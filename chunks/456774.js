"use strict";
n.r(t), n.d(t, {
  CardCategory: function() {
    return r
  },
  default: function() {
    return es
  }
});
var i, r, a = n("735250"),
  s = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("442837"),
  d = n("481060"),
  _ = n("700582"),
  c = n("835473"),
  E = n("557135"),
  I = n("471445"),
  T = n("666188"),
  f = n("549817"),
  S = n("819553"),
  h = n("17181"),
  A = n("303737"),
  m = n("66999"),
  N = n("15274"),
  p = n("217804"),
  O = n("965638"),
  R = n("434404"),
  C = n("962086"),
  g = n("160404"),
  L = n("41776"),
  v = n("703656"),
  D = n("881824"),
  M = n("922482"),
  y = n("592125"),
  P = n("607744"),
  U = n("496675"),
  b = n("979651"),
  G = n("366695"),
  w = n("940627"),
  B = n("705600"),
  k = n("305878"),
  V = n("737688"),
  x = n("242315"),
  F = n("507893"),
  H = n("944581"),
  Y = n("645284"),
  j = n("632184"),
  W = n("806519"),
  K = n("59688"),
  z = n("718582"),
  Z = n("981631"),
  X = n("765305"),
  Q = n("689938"),
  q = n("569779");
(i = r || (r = {})).HANGOUT = "hangout", i.EMBEDDED_ACTIVITY = "embedded-activity", i.EVENT = "event", i.GAMING = "gaming", i.EMPTY = "empty";

function J(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: i
  } = e;
  return (0, a.jsxs)("div", {
    className: q.facepile,
    children: [t.map((e, i) => {
      let r = (0, a.jsx)(_.default, {
        user: e,
        size: d.AvatarSizes.SIZE_24,
        "aria-label": ""
      });
      return i === t.length - 1 && 0 === n ? (0, a.jsx)("div", {
        className: q.facePileItem,
        children: r
      }, e.id) : (0, a.jsx)(W.default, {
        width: 24,
        height: 24,
        mask: W.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: q.facePileItem,
        children: r
      }, e.id)
    }), n > 0 && (0, a.jsxs)(d.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: q.othersCount,
      children: ["+", n]
    }), i]
  })
}

function $(e) {
  let {
    title: t,
    subtitle: n,
    icon: i,
    iconLocation: r,
    usersToShow: s,
    othersCount: o,
    extraPill: l
  } = e;
  return (0, a.jsxs)("div", {
    className: q.cardDetailsContainer,
    children: [(0, a.jsxs)("div", {
      className: q.cardDetailsTextContainer,
      children: ["title" === r && i, (0, a.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        lineClamp: 1,
        children: t
      })]
    }), (0, a.jsxs)("div", {
      className: q.cardDetailsTextContainer,
      children: ["subtitle" === r && i, (0, a.jsx)(d.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        lineClamp: 1,
        children: n
      })]
    }), (0, a.jsx)(J, {
      users: s,
      othersCount: o,
      extraPill: l
    })]
  })
}

function ee(e) {
  let {
    onClick: t,
    inCall: n
  } = e, i = n ? Q.default.Messages.GUILD_POPOUT_JOINED : Q.default.Messages.JOIN, r = s.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, a.jsx)(d.Button, {
    size: d.Button.Sizes.TINY,
    color: d.Button.Colors.GREEN,
    disabled: n,
    onClick: r,
    className: q.joinButton,
    children: i
  })
}

function et(e) {
  let {
    channelId: t,
    userIds: n,
    applicationId: i,
    guildId: r,
    streamersCount: o,
    cardType: _
  } = e, T = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(t)), f = (0, u.useStateFromStores)([U.default], () => !U.default.can(Z.Permissions.CONNECT, T)), {
    totalUsers: S,
    usersToShow: h,
    othersCount: A
  } = (0, z.useGetCardUsers)(n, r, t), N = (0, c.useGetOrFetchApplication)(i), {
    needSubscriptionToAccess: p
  } = (0, m.default)(null != t ? t : void 0), O = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(t)), R = s.useCallback(() => {
    (0, v.transitionToGuild)(r, t)
  }, [t, r]), C = s.useCallback(() => {
    null != T && (T.type === Z.ChannelTypes.GUILD_VOICE && !f && E.default.handleVoiceConnect({
      channel: T,
      connected: O,
      needSubscriptionToAccess: p,
      locked: f
    }), (0, v.transitionToGuild)(r, t))
  }, [T, t, r, O, f, p]);
  if (null == N || null == T) return null;
  let g = (0, I.getSimpleChannelIconComponent)(T.type),
    L = o > 0 ? (0, a.jsxs)("div", {
      className: q.numberPill,
      children: [(0, a.jsx)(Y.default, {
        width: 12,
        height: 12,
        className: l()(q.cardIcon, q.cardDetailsIcon)
      }), (0, a.jsx)(d.Text, {
        color: "text-normal",
        variant: "text-xs/normal",
        children: o
      })]
    }) : null;
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: R,
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: S,
      gameName: N.name,
      channelName: null == T ? void 0 : T.name
    }),
    className: q.cardContainer,
    children: [(0, a.jsx)(G.default, {
      game: N,
      className: q.cardImage
    }), (0, a.jsx)($, {
      title: N.name,
      subtitle: null == T ? void 0 : T.name,
      icon: null != g ? (0, a.jsx)(g, {
        width: 12,
        height: 12,
        className: l()(q.cardIcon, q.cardDetailsIcon)
      }) : null,
      iconLocation: "subtitle",
      usersToShow: h,
      othersCount: A,
      extraPill: L
    }), (0, a.jsx)(ee, {
      onClick: C,
      inCall: O
    }), "gaming" === _ ? (0, a.jsx)(V.default, {
      width: 12,
      height: 12,
      className: l()(q.cardIcon, q.cardTypeIcon)
    }) : (0, a.jsx)(H.default, {
      width: 12,
      height: 12,
      className: l()(q.cardIcon, q.cardTypeIcon)
    })]
  })
}

function en(e) {
  var t, n;
  let {
    hangoutActivity: i,
    guildId: r
  } = e, {
    channelId: o,
    userIds: _
  } = i, c = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(o)), {
    needSubscriptionToAccess: I
  } = (0, m.default)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0), T = (0, u.useStateFromStores)([U.default], () => !U.default.can(Z.Permissions.CONNECT, c)), f = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(o)), {
    totalUsers: S,
    usersToShow: h,
    othersCount: A,
    streamUserIds: N,
    streamerUsersText: p
  } = (0, z.useGetCardUsers)(_, r, o), O = s.useCallback(() => {
    (0, v.transitionToGuild)(r, o)
  }, [o, r]), R = s.useCallback(() => {
    null != c && (!T && E.default.handleVoiceConnect({
      channel: c,
      connected: f,
      needSubscriptionToAccess: I,
      locked: T
    }), (0, v.transitionToGuild)(r, o))
  }, [c, o, r, f, T, I]);
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: O,
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: S,
      channelName: null == c ? void 0 : c.name
    }),
    className: q.cardContainer,
    children: [(0, a.jsx)("div", {
      className: l()(q.cardImage, q.cardImageIcon),
      children: N.length > 0 ? (0, a.jsx)(Y.default, {
        width: 12,
        height: 12,
        className: q.cardIcon
      }) : (0, a.jsx)(j.default, {
        width: 12,
        height: 12,
        className: q.cardIcon
      })
    }), (0, a.jsx)($, {
      title: null !== (n = null == c ? void 0 : c.name) && void 0 !== n ? n : "",
      subtitle: N.length > 0 ? p : "",
      icon: (0, a.jsx)(j.default, {
        width: 12,
        height: 12,
        className: l()(q.cardIcon, q.cardDetailsIcon)
      }),
      iconLocation: "title",
      usersToShow: h,
      othersCount: A
    }), (0, a.jsx)(ee, {
      onClick: R,
      inCall: f
    })]
  })
}

function ei(e) {
  var t;
  let {
    event: n
  } = e, i = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(n.channel_id)), {
    needSubscriptionToAccess: r
  } = (0, m.default)(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : void 0), o = (0, u.useStateFromStores)([U.default], () => !U.default.can(Z.Permissions.CONNECT, i)), _ = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(null == i ? void 0 : i.id)), {
    usersToShow: c,
    othersCount: I,
    audienceCount: T
  } = (0, z.useGetEventCardUsers)(i), f = (0, p.getLocationDataForEvent)(n, i), S = null == f ? void 0 : f.locationName, h = null == f ? void 0 : f.IconComponent, A = s.useCallback(() => {
    (0, N.openGuildEventDetails)({
      eventId: n.id
    })
  }, [n.id]), O = s.useCallback(() => {
    if (null == i) {
      (0, N.openGuildEventDetails)({
        eventId: n.id
      });
      return
    }
    let e = async () => {
      let e = await (0, M.connectOrLurkStage)(n.guild_id, i.id);
      (0, D.navigateToStage)(e)
    };
    n.entity_type === X.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? e() : n.entity_type === X.GuildScheduledEventEntityTypes.VOICE && (!o && E.default.handleVoiceConnect({
      channel: i,
      connected: _,
      needSubscriptionToAccess: r,
      locked: o
    }), (0, v.transitionToGuild)(n.guild_id, i.id))
  }, [i, n.entity_type, n.guild_id, n.id, _, o, r]), R = null != T ? (0, a.jsxs)("div", {
    className: q.numberPill,
    children: [(0, a.jsx)(x.default, {
      width: 12,
      height: 12,
      className: l()(q.cardIcon, q.cardDetailsIcon)
    }), (0, a.jsx)(d.Text, {
      color: "text-normal",
      variant: "text-xs/normal",
      children: T
    })]
  }) : null;
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: A,
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: n.name
    }),
    className: q.cardContainer,
    children: [(0, a.jsx)("div", {
      className: l()(q.cardImage, q.cardImageIcon),
      children: (0, a.jsx)(k.default, {
        width: 12,
        height: 12,
        className: q.cardIcon
      })
    }), (0, a.jsx)($, {
      title: n.name,
      subtitle: null != i ? i.name : S,
      icon: null != h ? (0, a.jsx)(h, {
        width: 12,
        height: 12,
        className: l()(q.cardIcon, q.cardDetailsIcon)
      }) : null,
      iconLocation: "subtitle",
      usersToShow: c,
      othersCount: I,
      extraPill: R
    }), (0, a.jsx)(ee, {
      onClick: O,
      inCall: _
    }), (0, a.jsx)(k.default, {
      width: 12,
      height: 12,
      className: l()(q.cardIcon, q.cardTypeIcon)
    })]
  })
}

function er(e) {
  var t;
  let {
    channelId: n,
    guildId: i
  } = e, r = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(n)), {
    needSubscriptionToAccess: o
  } = (0, m.default)(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : void 0), l = (0, u.useStateFromStores)([U.default], () => !U.default.can(Z.Permissions.CONNECT, r)), _ = s.useCallback(() => {
    (0, v.transitionToGuild)(i, n)
  }, [n, i]), c = s.useCallback(() => {
    null != r && (!l && E.default.handleVoiceConnect({
      channel: r,
      connected: !1,
      needSubscriptionToAccess: o,
      locked: l
    }), (0, v.transitionToGuild)(i, n))
  }, [r, n, i, l, o]);
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: _,
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == r ? void 0 : r.name
    }),
    className: q.emptyStateCardContainer,
    children: [(0, a.jsx)(j.default, {
      width: 12,
      height: 12,
      color: "white"
    }), (0, a.jsx)("div", {
      className: q.cardDetailsContainer,
      children: (0, a.jsx)(d.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == r ? void 0 : r.name
      })
    }), (0, a.jsx)(ee, {
      onClick: c
    })]
  })
}

function ea(e) {
  let {
    guild: t
  } = e, i = (0, K.useCanShowNewGuildTooltipActivityEmptyState)(), r = (0, z.useGuildPopoutCards)(t), o = s.useMemo(() => r.map(e => {
    if ("hangout" === e.category) return (0, a.jsx)(en, {
      hangoutActivity: e,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId));
    if ("event" === e.category) return (0, a.jsx)(ei, {
      event: e.event
    }, "".concat(e.category, "-").concat(e.event.id));
    if ("embedded-activity" === e.category) {
      let {
        channelId: n,
        applicationId: i,
        userIds: r
      } = e.embeddedActivity;
      return (0, a.jsx)(et, {
        channelId: n,
        applicationId: i,
        userIds: Array.from(r),
        guildId: t.id,
        streamersCount: e.streamersCount,
        cardType: "embedded-activity"
      }, "".concat(e.category, "-").concat(e.embeddedActivity.channelId))
    } else if ("gaming" === e.category) {
      let {
        channelId: n,
        game: i,
        voiceStates: r,
        streamersCount: s
      } = e;
      return (0, a.jsx)(et, {
        channelId: n,
        applicationId: i.application_id,
        userIds: r.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        guildId: t.id,
        streamersCount: s,
        cardType: "gaming"
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if ("empty" === e.category) return (0, a.jsx)(er, {
      channelId: e.channelId,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [r, t.id]);
  if (0 === r.length) return null;
  if ("empty" === r[0].category) return i ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: q.emptyStatePrompt,
      children: [(0, a.jsx)("img", {
        src: n("121727"),
        alt: ""
      }), (0, a.jsxs)("div", {
        className: q.emptyStateTextContainer,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: Q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_HEADER
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: Q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_BODY
        })]
      })]
    }), o]
  }) : null;
  return (0, a.jsx)(a.Fragment, {
    children: o
  })
}

function es(e) {
  let {
    guild: t,
    closePopout: n
  } = e, i = (0, T.default)(t), r = (0, O.useShouldShowInvitesDisabledNotif)(t), {
    isViewingRoles: s,
    backNavigationSection: o
  } = (0, u.useStateFromStoresObject)([g.default], () => ({
    isViewingRoles: g.default.isViewingRoles(t.id),
    backNavigationSection: g.default.getBackNavigationSection(t.id)
  })), {
    isUserLurking: l,
    isUnverifiedAccount: _
  } = (0, u.useStateFromStoresObject)([L.default, P.default], () => {
    let e = L.default.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !P.default.getCheck(t.id).canChat
    }
  }), c = () => {
    g.default.isFullServerPreview(t.id) && (0, v.transitionTo)(Z.Routes.CHANNEL(t.id)), S.default.shouldShowOnboarding(t.id) && (f.default.finishOnboarding(t.id), (0, h.discardOnboardingPromise)(t.id)), (0, C.stopImpersonating)(t.id), R.default.open(t.id, o), o === Z.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, A.announceDeleteTemplateChannels)(t.id)
  };
  return (0, a.jsxs)("div", {
    className: q.container,
    children: [(0, a.jsxs)("div", {
      className: q.header,
      children: [i ? (0, a.jsx)(B.default, {
        guild: t,
        size: 16,
        className: q.rowIconV2
      }) : (0, a.jsx)(w.default, {
        guild: t,
        size: 20,
        className: q.rowIcon
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        lineClamp: 1,
        children: t.name
      })]
    }), !l && !_ && (0, a.jsx)(ea, {
      guild: t
    }), r ? (0, a.jsxs)("div", {
      className: q.footer,
      children: [(0, a.jsx)(F.default, {
        width: 12,
        height: 12,
        className: q.infoIcon
      }), (0, a.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: Q.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            n(), R.default.open(t.id, Z.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, s ? (0, a.jsxs)("div", {
      className: q.footer,
      children: [(0, a.jsx)(F.default, {
        width: 12,
        height: 12,
        className: q.infoIcon
      }), (0, a.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: Q.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            n(), c()
          }
        })
      })]
    }) : null]
  })
}