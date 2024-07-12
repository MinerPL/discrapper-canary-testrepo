n.d(t, {
  Z: function() {
return M;
  }
}), n(653041), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(481060),
  s = n(367907),
  l = n(372900),
  u = n(666188),
  c = n(549817),
  d = n(819553),
  _ = n(17181),
  E = n(303737),
  f = n(965638),
  h = n(434404),
  p = n(962086),
  m = n(160404),
  I = n(703656),
  T = n(814443),
  g = n(592125),
  S = n(940627),
  A = n(705600),
  N = n(626135),
  v = n(912787),
  O = n(272709),
  R = n(718582),
  C = n(126134),
  y = n(981631),
  D = n(689938),
  L = n(588096);

function b(e) {
  let {
guild: t
  } = e, n = -1, a = (0, R.V1)(t), o = i.useMemo(() => a.map(e => {
{
  let i = null;
  return e.category === C.L.EMBEDDED_ACTIVITY ? i = e.embeddedActivities[0].channelId : e.category === C.L.HANGOUT || e.category === C.L.GAMING ? i = e.channelId : e.category === C.L.EVENT && (i = e.event.channel_id), n++, (0, r.jsx)(O.Z, {
    cardData: e,
    guildId: t.id,
    cardIndex: n
  }, ''.concat(e.category, '-').concat(i));
}
  }), [
a,
t.id,
n,
!0
  ]);
  return (i.useEffect(() => {
let e = [],
  n = [],
  r = [],
  i = [],
  o = [],
  l = [],
  u = [],
  c = {};
for (let s of a) {
  var d, _, E, f, h;
  if (3 === e.length)
    break;
  let a = null !== (E = (0, v.i)(s)) && void 0 !== E ? E : '',
    p = (0, R.bA)(a, t.id),
    m = e.length;
  e.push(s.category), r.push(p.length), i.push(p.length > 0 ? p[0].id : '0'), o.push(p.length > 0 && null !== (f = null === (d = T.Z.getUserAffinity(p[0].id)) || void 0 === d ? void 0 : d.affinity) && void 0 !== f ? f : 0), n.push(Math.min(p.length, 6)), l.push(a), u.push(null !== (h = null === (_ = g.Z.getChannel(a)) || void 0 === _ ? void 0 : _.type) && void 0 !== h ? h : y.d4z.UNKNOWN), c['position_'.concat(m + 1, '_affinity_user_ids')] = p.slice(0, 6).map(e => e.id), c['position_'.concat(m + 1, '_user_affinity_scores')] = p.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = T.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
  });
}
0 !== e.length && (c.card_types = e, c.affinity_users_counts = n, c.total_users_counts = r, c.max_affinity_user_ids = i, c.max_affinity_user_scores = o, c.channel_ids = l, c.channel_types = u, c.guild_id = t.id, N.default.track(y.rMx.GUILD_TOOLTIP_SHOWN, {
  ...c,
  ...(0, s.hH)(t.id)
}));
  }, []), 0 === a.length) ? null : (0, r.jsx)('div', {
className: L.cards,
children: o
  });
}

function M(e) {
  var t;
  let {
guild: n,
closePopout: s,
nudge: T
  } = e, g = i.useRef(null), N = (0, u.Z)(n), v = (0, f.Ij)(n), {
isViewingRoles: O,
backNavigationSection: R
  } = (0, a.cj)([m.Z], () => ({
isViewingRoles: m.Z.isViewingRoles(n.id),
backNavigationSection: m.Z.getBackNavigationSection(n.id)
  })), C = () => {
m.Z.isFullServerPreview(n.id) && (0, I.uL)(y.Z5c.CHANNEL(n.id)), d.ZP.shouldShowOnboarding(n.id) && (c.Z.finishOnboarding(n.id), (0, _.discardOnboardingPromise)(n.id)), (0, p.mL)(n.id), h.Z.open(n.id, R), R === y.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(n.id);
  }, M = null === (t = g.current) || void 0 === t ? void 0 : t.clientHeight, P = T + 14;
  return (0, r.jsx)(l.Z.Provider, {
value: n.id,
children: (0, r.jsxs)('div', {
  className: L.container,
  ref: g,
  children: [
    (0, r.jsx)('div', {
      className: L.tooltipPointer,
      style: {
        top: Math.min(P, null != M ? M - 22 : P)
      }
    }),
    (0, r.jsxs)('div', {
      className: L.header,
      children: [
        N ? (0, r.jsx)(A.Z, {
          guild: n,
          size: 16,
          className: L.rowIconV2,
          tooltipColor: o.Tooltip.Colors.PRIMARY
        }) : (0, r.jsx)(S.Z, {
          guild: n,
          size: 20,
          className: L.rowIcon
        }),
        (0, r.jsx)(o.Text, {
          variant: 'text-md/semibold',
          color: 'header-primary',
          children: n.name
        })
      ]
    }),
    (0, r.jsx)(b, {
      guild: n
    }),
    v ? (0, r.jsxs)('div', {
      className: L.footer,
      children: [
        (0, r.jsx)(o.CircleInformationIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 12,
          height: 12,
          className: L.infoIcon
        }),
        (0, r.jsx)(o.Text, {
          color: 'text-muted',
          variant: 'text-xs/medium',
          children: D.Z.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
            onClick: () => {
              s(), h.Z.open(n.id, y.pNK.INSTANT_INVITES);
            }
          })
        })
      ]
    }) : null,
    O ? (0, r.jsxs)('div', {
      className: L.footer,
      children: [
        (0, r.jsx)(o.CircleInformationIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 12,
          height: 12,
          className: L.infoIcon
        }),
        (0, r.jsx)(o.Text, {
          color: 'text-muted',
          variant: 'text-xs/medium',
          children: D.Z.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
            onClick: () => {
              s(), C();
            }
          })
        })
      ]
    }) : null
  ]
})
  });
}