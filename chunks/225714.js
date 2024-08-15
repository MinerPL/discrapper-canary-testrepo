n.d(s, {
  Z: function() {
return f;
  }
});
var i = n(735250);
n(470079);
var t = n(481060),
  l = n(194359),
  o = n(906732),
  a = n(475413),
  r = n(261253),
  d = n(7242),
  c = n(934861),
  u = n(981631),
  _ = n(689938),
  I = n(353040);

function f(e) {
  let {
isCurrentUser: s,
user: n,
relationshipType: f,
friendToken: E,
persistentCallCtaEnabled: m = !1,
activeInviteToCallCtaEnabled: S = !1,
onClose: x
  } = e, {
newestAnalyticsLocation: v
  } = (0, o.ZP)();
  if (s || f === u.OGo.BLOCKED)
return null;
  let Z = m ? (0, i.jsx)(r.Z, {
  user: n,
  onClose: x
}) : null,
h = (0, i.jsx)(d.Z, {
  user: n,
  onClose: x
});
  if (f === u.OGo.FRIEND && S && null != h)
return (0, i.jsxs)('div', {
  className: I.multipleButtons,
  children: [
    (0, i.jsx)(c.v, {
      userId: n.id,
      onClose: x
    }),
    h
  ]
});
  if (f === u.OGo.FRIEND || n.bot)
return (0, i.jsxs)('div', {
  className: I.multipleButtons,
  children: [
    Z,
    (0, i.jsx)(c.c, {
      userId: n.id,
      onClose: x
    })
  ]
});
  if (f === u.OGo.PENDING_OUTGOING || f === u.OGo.PENDING_INCOMING)
return S && null != h ? (0, i.jsxs)('div', {
  className: I.multipleButtons,
  children: [
    (0, i.jsx)(a.ef, {
      icon: t.UserClockIcon,
      tooltipText: _.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    (0, i.jsx)(c.v, {
      userId: n.id,
      onClose: x
    }),
    h
  ]
}) : (0, i.jsxs)('div', {
  className: I.multipleButtons,
  children: [
    (0, i.jsx)(a.ef, {
      icon: t.UserClockIcon,
      tooltipText: _.Z.Messages.FRIENDS_SECTION_PENDING,
      disabled: !0
    }),
    Z,
    (0, i.jsx)(c.c, {
      userId: n.id,
      onClose: x
    })
  ]
});
  return S && null != h ? (0, i.jsxs)('div', {
className: I.multipleButtons,
children: [
  (0, i.jsx)(a.ef, {
    action: 'SEND_FRIEND_REQUEST',
    icon: t.UserPlusIcon,
    tooltipText: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
    onClick: () => {
      l.Z.addRelationship({
        userId: n.id,
        context: {
          location: v
        },
        friendToken: E
      });
    }
  }),
  (0, i.jsx)(c.v, {
    userId: n.id,
    onClose: x
  }),
  h
]
  }) : (0, i.jsxs)('div', {
className: I.multipleButtons,
children: [
  Z,
  (0, i.jsx)(c.v, {
    userId: n.id,
    onClose: x
  }),
  (0, i.jsx)(a.tG, {
    action: 'SEND_FRIEND_REQUEST',
    icon: t.UserPlusIcon,
    text: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
    color: t.Button.Colors.BRAND,
    onClick: () => {
      l.Z.addRelationship({
        userId: n.id,
        context: {
          location: v
        },
        friendToken: E
      });
    }
  })
]
  });
}