n.d(t, {
  F9: function() {
return T;
  },
  Zb: function() {
return p;
  },
  e$: function() {
return m;
  },
  ll: function() {
return g;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(481060),
  l = n(271383),
  u = n(430824),
  c = n(594174),
  d = n(806519),
  _ = n(5192),
  E = n(192918),
  f = n(687694),
  h = n(827418);

function p(e) {
  let {
children: t,
selected: n
  } = e, {
showReplyIcon: i,
openOnHover: s
  } = (0, f.C)({
location: 'ContentCard'
  });
  return (0, r.jsxs)('div', {
className: a()(h.container, {
  [h.selected]: n
}, {
  [h.openOnHover]: s
}),
children: [
  t,
  i && (0, r.jsx)('div', {
    className: h.reply,
    children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
      size: 'md',
      color: 'currentColor',
      className: h.icon
    })
  })
]
  });
}

function m(e) {
  let {
children: t
  } = e;
  return (0, r.jsx)('div', {
className: h.infoSection,
children: t
  });
}

function I(e) {
  let {
users: t,
guildId: n
  } = e;
  return (0, r.jsx)('div', {
className: h.facePile,
children: t.map((e, i) => {
  let a = (0, r.jsx)(o.Avatar, {
    src: e.getAvatarURL(n, 80),
    size: o.AvatarSizes.SIZE_16,
    'aria-label': 'avatar'
  });
  return i === t.length - 1 ? (0, r.jsx)('div', {
    className: h.facePileItem,
    children: a
  }, e.id) : (0, r.jsx)(d.ZP, {
    width: 16,
    height: 16,
    className: h.facePileItem,
    mask: d.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
    children: a
  }, e.id);
})
  });
}

function T(e) {
  let {
guildId: t,
channelId: n,
entry: i,
maxAvatars: a = 3
  } = e, d = i.author_id, f = (0, s.e7)([c.default], () => c.default.getUser(d)), {
displayParticipants: p,
numOtherParticipants: m
  } = (0, E.Z)(i, a), T = (0, s.e7)([l.ZP], () => l.ZP.getMember(t, d)), g = (0, s.e7)([u.Z], () => {
var e;
return (null == T ? void 0 : T.colorRoleId) != null ? null === (e = u.Z.getRole(t, T.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0;
  }, [
t,
T
  ]);
  if (null == f)
return null;
  let S = null == T ? void 0 : T.colorString,
A = _.ZP.getName(t, n, f);
  return (0, r.jsxs)('div', {
className: h.userSection,
children: [
  (0, r.jsx)(I, {
    users: p,
    guildId: t
  }),
  (0, r.jsx)(o.NameWithRole, {
    color: null != S ? S : void 0,
    roleName: g,
    name: A,
    className: h.userName
  }),
  m > 0 ? (0, r.jsx)('div', {
    className: h.additionalParticipantBadge,
    children: (0, r.jsxs)(o.Text, {
      variant: 'text-xxs/medium',
      color: 'text-normal',
      className: h.additionalParticipantBadgeText,
      children: [
        '+',
        m
      ]
    })
  }) : null
]
  });
}

function g(e) {
  let {
children: t
  } = e;
  return (0, r.jsx)(o.Heading, {
variant: 'heading-sm/medium',
className: h.contentDescription,
lineClamp: 1,
children: t
  });
}