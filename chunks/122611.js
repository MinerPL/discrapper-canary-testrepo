"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("524437"),
  r = n("433517"),
  o = n("258841"),
  u = n("705348"),
  d = n("243778"),
  c = n("360453"),
  f = n("377743"),
  E = n("834743"),
  h = n("862099"),
  _ = n("704631"),
  C = n("819792"),
  m = n("919285"),
  S = n("118470"),
  I = n("413307"),
  p = n("849688"),
  T = n("374023"),
  g = n("661599"),
  A = n("923608"),
  N = n("617899"),
  v = n("8521"),
  O = n("760326"),
  R = n("536687"),
  L = n("652785"),
  P = n("921944");

function M(e) {
  e.stopPropagation()
}

function y(e) {
  var t;
  let {
    guild: n
  } = e, [o, c] = s.useState(null !== (t = r.Storage.get(L.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), h = e => {
    r.Storage.set(L.LAST_HIDDEN_CHANNEL_NOTICE, e), c(e)
  }, C = (0, l.useStateFromStoresArray)(L.CHANNEL_NOTICE_STORES, () => L.CHANNEL_NOTICES.filter(e => {
    let {
      store: t
    } = e;
    return null == t ? void 0 : t.channelNoticePredicate(n, o)
  }).map(e => e.dismissibleContentType));
  return (0, a.jsx)(d.default, {
    contentTypes: C,
    groupName: P.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        h(Date.now()), s(P.ContentDismissActionType.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case i.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
            return (0, a.jsx)(_.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_INVITE:
            return (0, a.jsx)(N.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, a.jsx)(E.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, a.jsx)(O.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, a.jsx)(f.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, a.jsx)(A.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
            return (0, a.jsx)(u.default, {
              guild: n,
              markAsDismissed: () => s(P.ContentDismissActionType.UNKNOWN)
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, a.jsx)("div", {
        onContextMenu: M,
        children: r
      })
    }
  })
}
t.default = e => {
  let {
    guild: t
  } = e;
  switch ((0, R.default)(t)) {
    case R.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
      return (0, a.jsx)(I.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, a.jsx)(c.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, a.jsx)(v.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, a.jsx)(h.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, a.jsx)(g.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, a.jsx)(m.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, a.jsx)(S.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, a.jsx)(C.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.SIGNUP:
      return (0, a.jsx)(p.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.CLAN_UPSELL:
      return (0, a.jsx)(o.default, {
        guildId: t.id
      })
  }
  return T.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(y, {
    guild: e.guild
  })
}