t.d(s, {
  Dh: function() {
return h;
  },
  Gd: function() {
return R;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(100527);
t(502762), t(659101);
var d = t(594174),
  _ = t(931240),
  E = t(905362),
  u = t(353093),
  I = t(891728),
  T = t(438365),
  S = t(114487),
  N = t(219039),
  C = t(979264),
  m = t(308083),
  A = t(981631),
  g = t(689938),
  O = t(989659);

function h(e) {
  let {
className: s,
clanTag: t,
clanBadge: i,
onTagClick: o,
guildId: c,
guildName: d,
guildIcon: _,
guildIconSize: E,
memberCount: u
  } = e, I = a.useRef(null), [T, A] = a.useState(!1);
  return a.useEffect(() => {
let e = I.current;
null != e && null != e.offsetWidth && null != e.scrollWidth && A(e.offsetWidth < e.scrollWidth);
  }, []), (0, n.jsxs)('div', {
className: r()(O.container, s),
children: [
  (0, n.jsxs)('div', {
    className: O.guildPrefixContainer,
    children: [
      (0, n.jsx)(S.b, {
        guildId: c,
        guildName: d,
        guildIcon: _,
        iconSize: E,
        className: O.guildPrefixIcon,
        animate: !1
      }),
      (0, n.jsxs)('div', {
        className: O.details,
        children: [
          (0, n.jsx)(l.Tooltip, {
            text: d,
            color: l.Tooltip.Colors.PRIMARY,
            shouldShow: T,
            children: e => (0, n.jsx)('span', {
              ref: I,
              ...e,
              className: O.guildName,
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
    className: O.tagContainer,
    children: (0, n.jsx)(C.aG, {
      guildId: c,
      className: O.tag,
      clanTag: t,
      clanBadge: i,
      onClick: o,
      badgeSize: m.NC.SIZE_16,
      textColor: 'interactive-normal',
      textVariant: 'text-sm/semibold',
      badgeClassName: O.badge
    })
  })
]
  });
}

function p(e) {
  let {
userClanTag: s,
userClanBadge: t,
guildId: i,
guildName: r,
guildIcon: T,
clan: S,
userId: N
  } = e, C = (0, I.C)(), m = (0, o.e7)([d.default], () => {
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
    className: O.header,
    variant: 'eyebrow',
    children: g.Z.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
  }),
  (0, n.jsx)(h, {
    className: O.profileContainer,
    clanTag: s,
    clanBadge: t,
    onTagClick: p,
    guildName: r,
    guildId: i,
    guildIcon: T,
    guildIconSize: 40,
    memberCount: null == S ? void 0 : S.memberCount
  })
]
  });
}

function R(e) {
  let {
userId: s,
wrapChildren: t
  } = e, {
userClanTag: a,
userClanBadge: i,
guildId: r,
guildName: o,
guildIcon: l,
clan: c
  } = (0, T.r)({
userId: s
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
userId: s
  });
  return null != t ? (0, n.jsx)(n.Fragment, {
children: t(d)
  }) : d;
}