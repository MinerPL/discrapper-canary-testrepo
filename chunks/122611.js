n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(704215),
  l = n(433517),
  o = n(963202),
  c = n(824991),
  d = n(705348),
  u = n(243778),
  _ = n(360453),
  h = n(377743),
  E = n(834743),
  m = n(862099),
  I = n(704631),
  g = n(819792),
  p = n(919285),
  T = n(118470),
  S = n(413307),
  f = n(849688),
  C = n(374023),
  N = n(661599),
  A = n(923608),
  v = n(617899),
  Z = n(8521),
  L = n(760326),
  O = n(536687),
  R = n(652785),
  x = n(981631),
  b = n(921944);

function P(e) {
  e.stopPropagation();
}

function M(e) {
  var t;
  let {
guild: n
  } = e, [_, m] = a.useState(null !== (t = l.K.get(R.Iv)) && void 0 !== t ? t : 0), g = e => {
l.K.set(R.Iv, e), m(e);
  }, {
defaultGameId: p,
enableClanCreation: T
  } = (0, o.St)({
guild: n,
location: 'ChannelNoticesGuard',
includeConverted: !1
  }), S = (0, s.Wu)(R.HG, () => R.XN.filter(e => {
let {
  type: t,
  store: i
} = e;
if (t === x.vID.CLAN_ADMIN_UPSELL)
  return !n.hasFeature(x.oNc.CLAN) && T;
return null == i ? void 0 : i.channelNoticePredicate(n, _);
  }).map(e => e.dismissibleContentType));
  return (0, i.jsx)(u.Z, {
contentTypes: S,
groupName: b.R.CHANNEL_NOTICES,
children: e => {
  let {
    visibleContent: t,
    markAsDismissed: a
  } = e, s = () => {
    g(Date.now()), a(b.L.UNKNOWN);
  }, l = (() => {
    switch (t) {
      case r.z.CHANNEL_NOTICE_HUBLINK:
        return (0, i.jsx)(I.Z, {
          guild: n,
          markAsDismissed: s
        });
      case r.z.CHANNEL_NOTICE_INVITE:
        return (0, i.jsx)(v.Z, {
          guild: n,
          markAsDismissed: s
        });
      case r.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
        return (0, i.jsx)(E.Z, {
          guild: n,
          markAsDismissed: s
        });
      case r.z.CHANNEL_NOTICE_QUICKSWITCHER:
        return (0, i.jsx)(L.Z, {
          guild: n,
          markAsDismissed: s
        });
      case r.z.CHANNEL_NOTICE_GUILD_BANNER:
        return (0, i.jsx)(h.Z, {
          guild: n,
          markAsDismissed: s
        });
      case r.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
        return (0, i.jsx)(A.Z, {
          guild: n,
          markAsDismissed: s
        });
      case r.z.LINKED_ROLE_ADMIN_GUILD:
        return (0, i.jsx)(d.Z, {
          guild: n,
          markAsDismissed: () => a(b.L.UNKNOWN)
        });
      case r.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL:
        return (0, i.jsx)(c.ZP, {
          guild: n,
          markAsDismissed: s,
          defaultGameId: p
        });
      default:
        return null;
    }
  })();
  return null == l ? null : (0, i.jsx)('div', {
    onContextMenu: P,
    children: l
  });
}
  });
}
t.Z = e => {
  let {
guild: t
  } = e;
  switch ((0, O.Z)(t)) {
case O.R.ENABLE_PUBLIC_GUILD:
  return (0, i.jsx)(S.Z, {
    guild: t
  });
case O.R.APPLIED_GUILD_BOOST_GRACE_PERIOD:
  return (0, i.jsx)(_.Z, {
    guild: t
  });
case O.R.MAX_MEMBER_COUNT:
  return (0, i.jsx)(Z.Z, {
    guild: t
  });
case O.R.GUILD_LIVE_CHANNEL:
  return (0, i.jsx)(m.ZP, {
    guild: t
  });
case O.R.GUILD_MFA_WARNING:
  return (0, i.jsx)(N.Z, {
    guild: t
  });
case O.R.COMMANDS_MIGRATION:
  return (0, i.jsx)(p.Z, {
    guild: t
  });
case O.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
  return (0, i.jsx)(T.Z, {
    guild: t
  });
case O.R.HUB_STUDY_ROOM:
  return (0, i.jsx)(g.Z, {
    guild: t
  });
case O.R.SIGNUP:
  return (0, i.jsx)(f.Z, {
    guild: t
  });
  }
  return C.s.isDisallowPopupsSet() ? null : (0, i.jsx)(M, {
guild: e.guild
  });
};