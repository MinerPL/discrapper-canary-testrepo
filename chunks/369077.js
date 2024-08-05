s.d(t, {
  Dh: function() {
return O;
  },
  Gd: function() {
return R;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(100527);
s(502762), s(659101);
var d = s(594174),
  _ = s(931240),
  E = s(905362),
  u = s(353093),
  T = s(891728),
  I = s(438365),
  S = s(114487),
  N = s(219039),
  C = s(979264),
  m = s(308083),
  A = s(981631),
  g = s(689938),
  h = s(947020);

function O(e) {
  let {
className: t,
clanTag: s,
clanBadge: i,
onTagClick: o,
guildId: c,
guildName: d,
guildIcon: _,
guildIconSize: E,
memberCount: u
  } = e, T = a.useRef(null), [I, A] = a.useState(!1);
  return a.useEffect(() => {
let e = T.current;
null != e && null != e.offsetWidth && null != e.scrollWidth && A(e.offsetWidth < e.scrollWidth);
  }, []), (0, n.jsxs)('div', {
className: r()(h.container, t),
children: [
  (0, n.jsxs)('div', {
    className: h.guildPrefixContainer,
    children: [
      (0, n.jsx)(S.b, {
        guildId: c,
        guildName: d,
        guildIcon: _,
        iconSize: E,
        className: h.guildPrefixIcon,
        animate: !1
      }),
      (0, n.jsxs)('div', {
        className: h.details,
        children: [
          (0, n.jsx)(l.Tooltip, {
            text: d,
            color: l.Tooltip.Colors.PRIMARY,
            shouldShow: I,
            children: e => (0, n.jsx)('span', {
              ref: T,
              ...e,
              className: h.guildName,
              children: d
            })
          }),
          null != u && (0, n.jsx)(N.Z, {
            count: u
          })
        ]
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: h.tagContainer,
    children: (0, n.jsx)(C.aG, {
      guildId: c,
      className: h.tag,
      clanTag: s,
      clanBadge: i,
      onClick: o,
      badgeSize: m.NC.SIZE_16,
      textColor: 'interactive-normal',
      textVariant: 'text-sm/semibold',
      badgeClassName: h.badge
    })
  })
]
  });
}

function p(e) {
  let {
userClanTag: t,
userClanBadge: s,
guildId: i,
guildName: r,
guildIcon: I,
clan: S,
userId: N
  } = e, C = (0, T.C)(), m = (0, o.e7)([d.default], () => {
var e;
return (0, u.vh)(null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId;
  }), p = a.useMemo(() => {
if (i !== m) {
  if (C.has(i))
    return () => {
      (0, l.openModal)(e => (0, n.jsx)(l.ConfirmModal, {
        ...e,
        header: g.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
        confirmText: g.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
        confirmButtonColor: l.Button.Colors.BRAND,
        cancelText: g.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
        onConfirm: async () => {
          await (0, _.nE)(i, !0, c.Z.PROFILE_POPOUT);
        },
        children: (0, n.jsx)(l.Text, {
          variant: 'text-sm/normal',
          children: g.Z.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
            guildName: r
          })
        })
      }));
    };
  if (null != S)
    return () => {
      (0, E.q)(i, S, {
        source: A.jXE.USER_PROFILE,
        location: c.Z.CLAN_TAG,
        tagUserId: N
      });
    };
}
  }, [
C,
S,
m,
i,
r,
N
  ]);
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(l.Heading, {
    className: h.header,
    variant: 'eyebrow',
    children: g.Z.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
  }),
  (0, n.jsx)(O, {
    className: h.profileContainer,
    clanTag: t,
    clanBadge: s,
    onTagClick: p,
    guildName: r,
    guildId: i,
    guildIcon: I,
    guildIconSize: 40,
    memberCount: null == S ? void 0 : S.memberCount
  })
]
  });
}

function R(e) {
  let {
userId: t,
wrapChildren: s
  } = e, {
userClanTag: a,
userClanBadge: i,
guildId: r,
guildName: o,
guildIcon: l,
clan: c
  } = (0, I.r)({
userId: t
  });
  if (null == a || null == r || null == o)
return null;
  let d = (0, n.jsx)(p, {
userClanTag: a,
userClanBadge: i,
guildId: r,
guildName: o,
guildIcon: l,
clan: c,
userId: t
  });
  return null != s ? (0, n.jsx)(n.Fragment, {
children: s(d)
  }) : d;
}