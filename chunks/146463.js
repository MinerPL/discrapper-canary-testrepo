var a = n(735250);
n(470079);
var t = n(120356),
  r = n.n(t),
  l = n(91192),
  i = n(442837),
  o = n(481060),
  c = n(209613),
  d = n(430824),
  u = n(855981),
  I = n(55543),
  E = n(693546),
  _ = n(826581),
  T = n(246364),
  N = n(328977),
  R = n(571728),
  C = n(762660),
  M = n(689938),
  m = n(811140);
let A = () => null;

function x(e) {
  let {
status: s
  } = e, n = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, t = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  switch (s) {
case T.wB.REJECTED:
  n = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, t = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
  break;
case T.wB.APPROVED:
  n = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, t = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
  break;
default:
  n = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, t = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  }
  return (0, a.jsxs)('div', {
className: m.emptyContainer,
children: [
  (0, a.jsxs)('div', {
    className: m.emptyIcon,
    children: [
      (0, a.jsx)(I.Z, {
        className: m.star
      }),
      (0, a.jsx)(o.CheckmarkLargeIcon, {
        size: 'md',
        color: 'currentColor',
        className: m.checkmark
      }),
      (0, a.jsx)(u.Z, {
        className: m.plus
      })
    ]
  }),
  (0, a.jsx)(o.Heading, {
    variant: 'heading-xl/semibold',
    children: n
  }),
  (0, a.jsx)(o.Text, {
    color: 'header-secondary',
    className: m.emptyBody,
    variant: 'text-sm/normal',
    children: t
  })
]
  });
}
s.Z = function(e) {
  var s;
  let {
applicationStatus: n,
guildJoinRequests: t,
guildId: u,
onScroll: I,
listRef: h,
atMaxMemberCapacity: S
  } = e, P = (0, i.e7)([d.Z], () => d.Z.getGuild(u), [u]), g = (0, i.e7)([_.Z], () => _.Z.isFetching()), b = g ? [t.length + 25] : [t.length], j = (0, N.L)({
guildId: u
  }), v = null !== (s = (0, R.A)({
guildId: u
  })) && void 0 !== s ? s : 0, p = (0, c.Z)('guild-join-requests'), f = e => {
let {
  row: s
} = e, l = t[s];
return null == l ? (0, a.jsx)(C.h, {}, s) : (0, a.jsx)(C.C, {
  className: r()({
    [m.selected]: j === l,
    [m.siblingSelected]: j === t[s - 1]
  }),
  guild: P,
  guildJoinRequest: l,
  onClick: () => E.Z.setSelectedGuildJoinRequest(u, l),
  applicationStatus: n,
  atMaxMemberCapacity: S
}, ''.concat(l.userId, '-').concat(l.applicationStatus, '-').concat(s));
  };
  return g || 0 !== t.length ? (0, a.jsxs)(a.Fragment, {
children: [
  0 !== v && n === T.wB.SUBMITTED && (0, a.jsx)(o.Text, {
    className: m.title,
    variant: 'text-xs/semibold',
    color: 'header-secondary',
    children: function(e, s) {
      let n = s.toLocaleString();
      switch (e) {
        case T.wB.SUBMITTED:
          return M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
            count: n
          });
        case T.wB.REJECTED:
          return M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
            count: n
          });
        case T.wB.APPROVED:
          return M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
            count: n
          });
        default:
          return '';
      }
    }(n, v).toUpperCase()
  }),
  (0, a.jsx)(l.bG, {
    navigator: p,
    children: (0, a.jsx)(l.SJ, {
      children: e => {
        let {
          ref: s,
          role: n,
          ...t
        } = e;
        return (0, a.jsx)(o.List, {
          innerRole: n,
          innerAriaLabel: M.Z.Messages.MEMBERS,
          ref: e => {
            var n;
            h.current = e, s.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
          },
          paddingTop: 0,
          paddingBottom: 16,
          sectionHeight: 0,
          rowHeight: 64,
          renderSection: A,
          renderRow: f,
          sections: b,
          onScroll: I,
          fade: !0,
          ...t
        }, 'guild-application-review');
      }
    })
  })
]
  }) : (0, a.jsx)(x, {
status: n
  });
};