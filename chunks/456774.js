"use strict";
n.r(t), n.d(t, {
  default: function() {
    return er
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("442837"),
  l = n("481060"),
  u = n("700582"),
  d = n("835473"),
  _ = n("557135"),
  c = n("471445"),
  E = n("666188"),
  I = n("549817"),
  T = n("819553"),
  f = n("17181"),
  S = n("303737"),
  h = n("66999"),
  A = n("217804"),
  m = n("965638"),
  N = n("434404"),
  p = n("962086"),
  O = n("160404"),
  C = n("41776"),
  R = n("703656"),
  g = n("427679"),
  L = n("592125"),
  v = n("607744"),
  D = n("496675"),
  M = n("594174"),
  y = n("940627"),
  P = n("705600"),
  U = n("242315"),
  b = n("507893"),
  G = n("645284"),
  w = n("632184"),
  k = n("170039"),
  B = n("806519"),
  V = n("5192"),
  x = n("59688"),
  F = n("718582"),
  H = n("599539"),
  Y = n("837771"),
  j = n("126134"),
  W = n("981631"),
  K = n("765305"),
  z = n("689938"),
  Z = n("303820"),
  X = n("181096");

function Q(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: Z.facepile,
    children: [t.map((e, r) => {
      let a = (0, i.jsx)(u.default, {
        user: e,
        size: l.AvatarSizes.SIZE_24,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: Z.facePileItem,
        children: a
      }, e.id) : (0, i.jsx)(B.default, {
        width: 24,
        height: 24,
        mask: B.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: Z.facePileItem,
        children: a
      }, e.id)
    }), n > 0 && (0, i.jsxs)(l.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: Z.othersCount,
      children: ["+", n]
    }), r]
  })
}

function q(e) {
  let {
    title: t,
    subtitle: n,
    usersToShow: r,
    othersCount: a,
    icon: s,
    extraPill: o,
    titleClassName: u
  } = e;
  return (0, i.jsxs)("div", {
    className: X.content,
    children: [(0, i.jsx)(l.Heading, {
      color: "header-primary",
      variant: "heading-sm/semibold",
      className: u,
      children: t
    }), (0, i.jsxs)("div", {
      className: Z.cardDetailsTextContainer,
      children: [s, (0, i.jsx)(l.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        className: X.singleLineTitle,
        children: n
      })]
    }), (r.length > 0 || null != o) && (0, i.jsx)(Q, {
      users: r,
      othersCount: a,
      extraPill: o
    })]
  })
}

function J(e) {
  let {
    onClick: t,
    inCall: n
  } = e, a = n ? z.default.Messages.GUILD_POPOUT_JOINED : z.default.Messages.JOIN, s = r.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, i.jsx)(l.Button, {
    size: l.Button.Sizes.TINY,
    color: l.Button.Colors.GREEN,
    disabled: n,
    onClick: s,
    className: Z.joinButton,
    children: a
  })
}

function $(e) {
  let {
    channelId: t,
    userIds: n,
    applicationId: a,
    guildId: u,
    streamersCount: _,
    cardData: E
  } = e, [I, T] = r.useState(!1), f = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t)), {
    totalUsers: S,
    usersToShow: h,
    othersCount: A
  } = (0, F.useGetCardUsers)(n, u, t), m = (0, d.useGetOrFetchApplication)(a), N = (0, Y.useImage)(E, u);
  if (null == m || null == f) return null;
  let p = (0, Y.getClickHandler)(E, u),
    O = (0, Y.getJoinButton)(E, u),
    C = (0, c.getSimpleChannelIconComponent)(f.type),
    R = _ > 0 ? (0, i.jsxs)("div", {
      className: X.pill,
      children: [(0, i.jsx)(G.default, {
        className: X.pillIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-normal",
        variant: "text-xs/medium",
        children: _
      })]
    }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == p ? void 0 : p(),
    tag: "div",
    "aria-label": z.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: S,
      gameName: m.name,
      channelName: null == f ? void 0 : f.name
    }),
    onMouseOver: () => T(!0),
    onMouseLeave: () => T(!1),
    children: (0, i.jsxs)("div", {
      className: X.container,
      children: [(0, i.jsx)("div", {
        className: X.image,
        children: N
      }), (0, i.jsx)(q, {
        title: m.name,
        subtitle: null == f ? void 0 : f.name,
        icon: null != C ? (0, i.jsx)(C, {
          width: 12,
          height: 12,
          className: s()(Z.cardIcon, Z.cardDetailsIcon)
        }) : null,
        usersToShow: h,
        othersCount: A,
        extraPill: R,
        titleClassName: X.singleLineTitle
      }), I && O]
    })
  })
}

function ee(e) {
  var t;
  let {
    hangoutActivity: n,
    guildId: a
  } = e, [u, d] = r.useState(!1), {
    channelId: _,
    userIds: c,
    streamUserIds: E,
    videoUserIds: I
  } = n, T = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(_)), {
    totalUsers: f,
    usersToShow: S,
    othersCount: h,
    usersText: A
  } = (0, F.useGetCardUsers)(c, a, _, E), {
    usersToShow: m,
    othersCount: N,
    audienceCount: p
  } = (0, F.useGetEventCardUsers)(T), O = (0, Y.getClickHandler)(n, a), C = (0, Y.getJoinButton)(n, a), R = (0, Y.useImage)(n, a), v = null == T ? void 0 : T.isGuildStageVoice(), D = A, y = (0, o.useStateFromStores)([g.default], () => {
    var e;
    return null === (e = g.default.getStageInstanceByChannel(_)) || void 0 === e ? void 0 : e.topic
  });
  if (v) D = null == T ? void 0 : T.name;
  else if (0 === E.length && I.length > 0) {
    let e = V.default.getName(a, _, M.default.getUser(I[0]));
    D = 1 === I.length ? z.default.Messages.GUILD_POPOUT_USER_ON_VIDEO.format({
      username: e
    }) : z.default.Messages.GUILD_POPOUT_USERS_ON_VIDEO.format({
      username: e,
      count: I.length - 1
    })
  }
  let P = null != p ? (0, i.jsxs)("div", {
    className: X.pill,
    children: [(0, i.jsx)(U.default, {
      className: X.pillIcon
    }), (0, i.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: p
    })]
  }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == O ? void 0 : O(),
    tag: "div",
    "aria-label": z.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: f,
      channelName: null == T ? void 0 : T.name
    }),
    onMouseOver: () => d(!0),
    onMouseLeave: () => d(!1),
    children: (0, i.jsxs)("div", {
      className: X.container,
      children: [(0, i.jsx)("div", {
        className: X.image,
        children: R
      }), (0, i.jsx)(q, {
        title: null !== (t = null != y ? y : null == T ? void 0 : T.name) && void 0 !== t ? t : "",
        subtitle: D,
        icon: v && (0, i.jsx)(k.default, {
          width: 12,
          height: 12,
          className: s()(Z.cardIcon, Z.cardDetailsIcon)
        }),
        usersToShow: v ? m : S,
        othersCount: v ? N : h,
        titleClassName: X.singleLineTitle,
        extraPill: P
      }), u && C]
    })
  })
}

function et(e) {
  let {
    event: t,
    cardData: n
  } = e, [a, u] = r.useState(!1), d = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t.channel_id)), {
    usersToShow: _,
    othersCount: c,
    audienceCount: E
  } = (0, F.useGetEventCardUsers)(d), I = (0, A.getLocationDataForEvent)(t, d), T = null == I ? void 0 : I.locationName, f = null == I ? void 0 : I.IconComponent, S = (0, Y.getClickHandler)(n, t.guild_id), h = (0, Y.getJoinButton)(n, t.guild_id), m = (0, Y.useImage)(n, t.guild_id), N = null != E ? (0, i.jsxs)("div", {
    className: X.pill,
    children: [(0, i.jsx)(U.default, {
      className: X.pillIcon
    }), (0, i.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: E
    })]
  }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == S ? void 0 : S(),
    tag: "div",
    onMouseOver: () => u(!0),
    onMouseLeave: () => u(!1),
    "aria-label": z.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: t.name
    }),
    children: (0, i.jsxs)("div", {
      className: X.container,
      children: [(0, i.jsx)("div", {
        className: X.image,
        children: m
      }), (0, i.jsx)(q, {
        title: t.name,
        subtitle: null != d ? d.name : T,
        icon: null != f ? (0, i.jsx)(f, {
          width: 12,
          height: 12,
          className: s()(Z.cardIcon, Z.cardDetailsIcon)
        }) : null,
        usersToShow: _,
        othersCount: c,
        extraPill: N,
        titleClassName: t.entity_type === K.GuildScheduledEventEntityTypes.EXTERNAL || t.entity_type === K.GuildScheduledEventEntityTypes.NONE ? X.multiLineTitle : X.singleLineTitle
      }), a && h]
    })
  })
}

function en(e) {
  var t;
  let {
    channelId: n,
    guildId: a
  } = e, s = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(n)), {
    needSubscriptionToAccess: u
  } = (0, h.default)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : void 0), d = (0, o.useStateFromStores)([D.default], () => !D.default.can(W.Permissions.CONNECT, s)), c = r.useCallback(() => {
    (0, R.transitionToGuild)(a, n)
  }, [n, a]), E = r.useCallback(() => {
    null != s && (!d && _.default.handleVoiceConnect({
      channel: s,
      connected: !1,
      needSubscriptionToAccess: u,
      locked: d
    }), (0, R.transitionToGuild)(a, n))
  }, [s, n, a, d, u]);
  return (0, i.jsxs)(l.ClickableContainer, {
    onClick: c,
    tag: "div",
    "aria-label": z.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == s ? void 0 : s.name
    }),
    className: Z.emptyStateCardContainer,
    children: [(0, i.jsx)(w.default, {
      width: 12,
      height: 12,
      className: Z.cardIcon
    }), (0, i.jsx)("div", {
      className: Z.cardDetailsContainer,
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == s ? void 0 : s.name
      })
    }), (0, i.jsx)(J, {
      onClick: E
    })]
  })
}

function ei(e) {
  let {
    guild: t,
    guildPeekCardType: a
  } = e, s = (0, x.useCanShowNewGuildTooltipActivityEmptyState)(), o = a === j.GuildPeekCardTypes.WHO, u = (0, F.useGuildPopoutCards)(t), d = r.useMemo(() => u.map(e => {
    if (o && e.category !== j.CardCategory.EMPTY) {
      let n = null;
      return e.category === j.CardCategory.EMBEDDED_ACTIVITY ? n = e.embeddedActivities[0].channelId : e.category === j.CardCategory.HANGOUT || e.category === j.CardCategory.GAMING ? n = e.channelId : e.category === j.CardCategory.EVENT && (n = e.event.channel_id), (0, i.jsx)(H.default, {
        cardData: e,
        guildId: t.id
      }, "".concat(e.category, "-").concat(n))
    }
    if (e.category === j.CardCategory.HANGOUT) return (0, i.jsx)(ee, {
      hangoutActivity: e,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId));
    if (e.category === j.CardCategory.EVENT) return (0, i.jsx)(et, {
      event: e.event,
      cardData: e
    }, "".concat(e.category, "-").concat(e.event.id));
    if (e.category === j.CardCategory.EMBEDDED_ACTIVITY) {
      let {
        channelId: n,
        applicationId: r,
        userIds: a
      } = e.embeddedActivities[0];
      return (0, i.jsx)($, {
        channelId: n,
        applicationId: r,
        userIds: Array.from(a),
        guildId: t.id,
        streamersCount: e.streamersCount,
        cardType: j.CardCategory.EMBEDDED_ACTIVITY,
        cardData: e
      }, "".concat(e.category, "-").concat(e.embeddedActivities[0].channelId))
    } else if (e.category === j.CardCategory.GAMING) {
      let {
        channelId: n,
        games: r,
        voiceStates: a,
        streamersCount: s
      } = e;
      return (0, i.jsx)($, {
        channelId: n,
        applicationId: r[0].application_id,
        userIds: a.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        guildId: t.id,
        streamersCount: s,
        cardType: j.CardCategory.GAMING,
        cardData: e
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if (e.category === j.CardCategory.EMPTY) return (0, i.jsx)(en, {
      channelId: e.channelId,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [u, t.id, o]);
  if (0 === u.length) return null;
  if (u[0].category === j.CardCategory.EMPTY) return s ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: Z.emptyStatePrompt,
      children: [(0, i.jsx)("img", {
        src: n("121727"),
        alt: ""
      }), (0, i.jsxs)("div", {
        className: Z.emptyStateTextContainer,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: z.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_HEADER
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: z.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_BODY
        })]
      })]
    }), d]
  }) : null;
  return (0, i.jsx)("div", {
    className: Z.cards,
    children: d
  })
}

function er(e) {
  let {
    guild: t,
    closePopout: n
  } = e, r = (0, x.useGuildPeekCardType)(), a = (0, E.default)(t), s = (0, m.useShouldShowInvitesDisabledNotif)(t), {
    isViewingRoles: u,
    backNavigationSection: d
  } = (0, o.useStateFromStoresObject)([O.default], () => ({
    isViewingRoles: O.default.isViewingRoles(t.id),
    backNavigationSection: O.default.getBackNavigationSection(t.id)
  })), {
    isUserLurking: _,
    isUnverifiedAccount: c
  } = (0, o.useStateFromStoresObject)([C.default, v.default], () => {
    let e = C.default.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !v.default.getCheck(t.id).canChat
    }
  }), h = () => {
    O.default.isFullServerPreview(t.id) && (0, R.transitionTo)(W.Routes.CHANNEL(t.id)), T.default.shouldShowOnboarding(t.id) && (I.default.finishOnboarding(t.id), (0, f.discardOnboardingPromise)(t.id)), (0, p.stopImpersonating)(t.id), N.default.open(t.id, d), d === W.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, S.announceDeleteTemplateChannels)(t.id)
  };
  return (0, i.jsxs)("div", {
    className: Z.container,
    children: [(0, i.jsxs)("div", {
      className: Z.header,
      children: [a ? (0, i.jsx)(P.default, {
        guild: t,
        size: 16,
        className: Z.rowIconV2,
        tooltipColor: l.Tooltip.Colors.PRIMARY
      }) : (0, i.jsx)(y.default, {
        guild: t,
        size: 20,
        className: Z.rowIcon
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        children: t.name
      })]
    }), !_ && !c && (0, i.jsx)(ei, {
      guild: t,
      guildPeekCardType: r
    }), s ? (0, i.jsxs)("div", {
      className: Z.footer,
      children: [(0, i.jsx)(b.default, {
        width: 12,
        height: 12,
        className: Z.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: z.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            n(), N.default.open(t.id, W.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, u ? (0, i.jsxs)("div", {
      className: Z.footer,
      children: [(0, i.jsx)(b.default, {
        width: 12,
        height: 12,
        className: Z.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: z.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            n(), h()
          }
        })
      })]
    }) : null]
  })
}