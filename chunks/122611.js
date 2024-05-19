"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("524437"),
  r = n("433517"),
  o = n("963202"),
  u = n("824991"),
  d = n("705348"),
  c = n("878241"),
  f = n("243778"),
  E = n("360453"),
  h = n("377743"),
  _ = n("834743"),
  C = n("862099"),
  m = n("704631"),
  S = n("819792"),
  p = n("919285"),
  g = n("118470"),
  I = n("413307"),
  T = n("849688"),
  A = n("374023"),
  N = n("661599"),
  v = n("923608"),
  R = n("617899"),
  O = n("8521"),
  L = n("760326"),
  M = n("536687"),
  y = n("652785"),
  P = n("981631"),
  x = n("921944");

function D(e) {
  e.stopPropagation()
}

function b(e) {
  var t;
  let {
    guild: n
  } = e, [E, C] = s.useState(null !== (t = r.Storage.get(y.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), S = e => {
    r.Storage.set(y.LAST_HIDDEN_CHANNEL_NOTICE, e), C(e)
  }, p = (0, c.useIsGuildEligibleForClanConversion)({
    guildId: n.id,
    location: "ChannelNoticesGuard"
  }), {
    defaultGameId: g
  } = (0, o.useClanPrepilotExperimentForGuild)({
    guild: n,
    location: "ChannelNoticesGuard_2",
    includeConverted: !1
  }), I = (0, l.useStateFromStoresArray)(y.CHANNEL_NOTICE_STORES, () => y.CHANNEL_NOTICES.filter(e => {
    let {
      type: t,
      store: a
    } = e;
    if (t === P.ChannelNoticeTypes.CLAN_ADMIN_UPSELL) return p;
    return null == a ? void 0 : a.channelNoticePredicate(n, E)
  }).map(e => e.dismissibleContentType));
  return (0, a.jsx)(f.default, {
    contentTypes: I,
    groupName: x.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        S(Date.now()), s(x.ContentDismissActionType.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case i.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
            return (0, a.jsx)(m.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_INVITE:
            return (0, a.jsx)(R.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, a.jsx)(_.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, a.jsx)(L.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, a.jsx)(h.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, a.jsx)(v.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
            return (0, a.jsx)(d.default, {
              guild: n,
              markAsDismissed: () => s(x.ContentDismissActionType.UNKNOWN)
            });
          case i.DismissibleContent.CHANNEL_LIST_CLAN_ADMIN_UPSELL:
            return (0, a.jsx)(u.default, {
              guild: n,
              markAsDismissed: l,
              defaultGameId: g
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, a.jsx)("div", {
        onContextMenu: D,
        children: r
      })
    }
  })
}
t.default = e => {
  let {
    guild: t
  } = e;
  switch ((0, M.default)(t)) {
    case M.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
      return (0, a.jsx)(I.default, {
        guild: t
      });
    case M.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, a.jsx)(E.default, {
        guild: t
      });
    case M.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, a.jsx)(O.default, {
        guild: t
      });
    case M.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, a.jsx)(C.default, {
        guild: t
      });
    case M.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, a.jsx)(N.default, {
        guild: t
      });
    case M.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, a.jsx)(p.default, {
        guild: t
      });
    case M.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, a.jsx)(g.default, {
        guild: t
      });
    case M.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, a.jsx)(S.default, {
        guild: t
      });
    case M.ConnectedChannelNotices.SIGNUP:
      return (0, a.jsx)(T.default, {
        guild: t
      })
  }
  return A.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(b, {
    guild: e.guild
  })
}