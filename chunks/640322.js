"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
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
  m = n("197881"),
  p = n("401774"),
  T = n("607894"),
  g = n("746504"),
  A = n("107153"),
  N = n("32505"),
  R = n("731681"),
  O = n("427474"),
  v = n("994428");

function L(e) {
  e.stopPropagation()
}

function M(e) {
  var t;
  let {
    guild: n
  } = e, [d, E] = s.useState(null !== (t = r.Storage.get(O.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), _ = e => {
    r.Storage.set(O.LAST_HIDDEN_CHANNEL_NOTICE, e), E(e)
  }, C = (0, l.useStateFromStoresArray)(O.CHANNEL_NOTICE_STORES, () => O.CHANNEL_NOTICES.filter(e => {
    let {
      store: t
    } = e;
    return null == t ? void 0 : t.channelNoticePredicate(n, d)
  }).map(e => e.dismissibleContentType));
  return (0, a.jsx)(u.default, {
    contentTypes: C,
    groupName: v.DismissibleContentGroupName.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e, l = () => {
        _(Date.now()), s(v.ContentDismissActionType.UNKNOWN)
      }, r = (() => {
        switch (t) {
          case i.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
            return (0, a.jsx)(h.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_INVITE:
            return (0, a.jsx)(g.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, a.jsx)(f.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, a.jsx)(N.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, a.jsx)(c.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
            return (0, a.jsx)(T.default, {
              guild: n,
              markAsDismissed: l
            });
          case i.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
            return (0, a.jsx)(o.default, {
              guild: n,
              markAsDismissed: () => s(v.ContentDismissActionType.UNKNOWN)
            });
          default:
            return null
        }
      })();
      return null == r ? null : (0, a.jsx)("div", {
        onContextMenu: L,
        children: r
      })
    }
  })
}
var P = e => {
  let {
    guild: t
  } = e, n = (0, R.default)(t);
  switch (n) {
    case R.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
      return (0, a.jsx)(I.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
      return (0, a.jsx)(d.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.MAX_MEMBER_COUNT:
      return (0, a.jsx)(A.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
      return (0, a.jsx)(E.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.GUILD_MFA_WARNING:
      return (0, a.jsx)(p.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.COMMANDS_MIGRATION:
      return (0, a.jsx)(C.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, a.jsx)(S.default, {
        guild: t
      });
    case R.ConnectedChannelNotices.HUB_STUDY_ROOM:
      return (0, a.jsx)(_.default, {
        guild: t
      })
  }
  return m.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(M, {
    guild: e.guild
  })
}