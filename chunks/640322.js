"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("151426"),
  r = n("95410"),
  o = n("55058"),
  u = n("384997"),
  d = n("48821"),
  c = n("388437"),
  f = n("667048"),
  E = n("153014"),
  h = n("79176"),
  _ = n("986321"),
  C = n("519440"),
  S = n("600177"),
  I = n("947337"),
  m = n("488445"),
  p = n("197881"),
  T = n("401774"),
  g = n("607894"),
  A = n("746504"),
  N = n("107153"),
  R = n("32505"),
  O = n("731681"),
  v = n("427474"),
  L = n("994428");

function M(e) {
  e.stopPropagation()
}

function P(e) {
  var t;
  let {
    guild: n
  } = e, [d, E] = s.useState(null !== (t = r.Storage.get(v.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), _ = e => {
    r.Storage.set(v.LAST_HIDDEN_CHANNEL_NOTICE, e), E(e)
  }, C = (0, l.useStateFromStoresArray)(v.CHANNEL_NOTICE_STORES, () => v.CHANNEL_NOTICES.filter(e => {
    let {
      store: t
    } = e;
    return null == t ? void 0 : t.channelNoticePredicate(n, d)
  }).map(e => e.dismissibleContentType));
  return (0, a.jsx)(u.default, {
    contentTypes: C,
    groupName: L.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        _(Date.now()), s(L.ContentDismissActionType.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case i.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
            return (0, a.jsx)(h.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_INVITE:
            return (0, a.jsx)(A.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, a.jsx)(f.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, a.jsx)(R.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, a.jsx)(c.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, a.jsx)(g.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
            return (0, a.jsx)(o.default, {
              guild: n,
              markAsDismissed: () => s(L.ContentDismissActionType.UNKNOWN)
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
var y = e => {
  let {
    guild: t
  } = e, n = (0, O.default)(t);
  switch (n) {
    case O.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
      return (0, a.jsx)(I.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, a.jsx)(d.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, a.jsx)(N.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, a.jsx)(E.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, a.jsx)(T.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, a.jsx)(C.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, a.jsx)(S.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, a.jsx)(_.default, {
        guild: t
      });
    case O.ConnectedChannelNotices.SIGNUP:
      return (0, a.jsx)(m.default, {
        guild: t
      })
  }
  return p.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(P, {
    guild: e.guild
  })
}