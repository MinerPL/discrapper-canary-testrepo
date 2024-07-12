i.d(n, {
  Z: function() {
return m;
  }
});
var s = i(735250);
i(470079);
var l = i(120356),
  o = i.n(l),
  t = i(481060),
  r = i(194359),
  a = i(906732),
  d = i(475413),
  c = i(261253),
  u = i(7242),
  I = i(934861),
  _ = i(981631),
  f = i(689938),
  E = i(682731);

function m(e) {
  let {
isCurrentUser: n,
user: i,
relationshipType: l,
friendToken: m,
improvedFriendingEnabled: S = !1,
persistentCallCtaEnabled: Z = !1,
activeInviteToCallCtaEnabled: x = !1,
onClose: v
  } = e, {
newestAnalyticsLocation: h
  } = (0, a.ZP)();
  if (n || l === _.OGo.BLOCKED)
return null;
  let p = Z ? (0, s.jsx)(c.Z, {
user: i,
onClose: v
  }) : null;
  if (S) {
let e = (0, s.jsx)(u.Z, {
  user: i,
  onClose: v
});
if (l === _.OGo.FRIEND && x && null != e)
  return (0, s.jsxs)('div', {
    className: E.multipleButtons,
    children: [
      (0, s.jsx)(I.v, {
        userId: i.id,
        onClose: v
      }),
      e
    ]
  });
if (l === _.OGo.FRIEND || i.bot)
  return (0, s.jsxs)('div', {
    className: E.multipleButtons,
    children: [
      p,
      (0, s.jsx)(I.c, {
        userId: i.id,
        onClose: v
      })
    ]
  });
if (l === _.OGo.PENDING_OUTGOING || l === _.OGo.PENDING_INCOMING)
  return x && null != e ? (0, s.jsxs)('div', {
    className: E.multipleButtons,
    children: [
      (0, s.jsx)(d.ef, {
        icon: t.UserClockIcon,
        tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
        disabled: !0
      }),
      (0, s.jsx)(I.v, {
        userId: i.id,
        onClose: v
      }),
      e
    ]
  }) : (0, s.jsxs)('div', {
    className: E.multipleButtons,
    children: [
      (0, s.jsx)(d.ef, {
        icon: t.UserClockIcon,
        tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
        disabled: !0
      }),
      p,
      (0, s.jsx)(I.c, {
        userId: i.id,
        onClose: v
      })
    ]
  });
return x && null != e ? (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    (0, s.jsx)(d.ef, {
      action: 'SEND_FRIEND_REQUEST',
      icon: t.UserPlusIcon,
      tooltipText: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
      onClick: () => {
        r.Z.addRelationship({
          userId: i.id,
          context: {
            location: h
          },
          friendToken: m
        });
      }
    }),
    (0, s.jsx)(I.v, {
      userId: i.id,
      onClose: v
    }),
    e
  ]
}) : (0, s.jsxs)('div', {
  className: E.multipleButtons,
  children: [
    p,
    (0, s.jsx)(I.v, {
      userId: i.id,
      onClose: v
    }),
    (0, s.jsx)(d.tG, {
      action: 'SEND_FRIEND_REQUEST',
      icon: t.UserPlusIcon,
      text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
      color: o()(t.Button.Colors.BRAND, E.color),
      onClick: () => {
        r.Z.addRelationship({
          userId: i.id,
          context: {
            location: h
          },
          friendToken: m
        });
      }
    })
  ]
});
  }
  return l === _.OGo.FRIEND || i.bot ? (0, s.jsx)(I.c, {
userId: i.id,
onClose: v
  }) : l === _.OGo.PENDING_OUTGOING ? (0, s.jsx)(d.tG, {
text: f.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
color: t.Button.Colors.GREEN,
disabled: !0
  }) : l === _.OGo.PENDING_INCOMING ? (0, s.jsx)(I.c, {
userId: i.id,
onClose: v
  }) : (0, s.jsx)(d.tG, {
action: 'SEND_FRIEND_REQUEST',
text: f.Z.Messages.ADD_FRIEND_BUTTON,
color: t.Button.Colors.GREEN,
onClick: () => {
  r.Z.addRelationship({
    userId: i.id,
    context: {
      location: h
    },
    friendToken: m
  });
}
  });
}