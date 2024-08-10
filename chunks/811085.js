n.d(t, {
  Z: function() {
return A;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  l = n(442837),
  r = n(692547),
  o = n(481060),
  c = n(594174),
  _ = n(531441),
  u = n(451284),
  d = n(959562),
  E = n(800530),
  T = n(689938),
  S = n(645275);

function A() {
  let e = (0, u.P)(),
t = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
[n, A] = a.useState(36),
I = a.useRef({
  [_.Sn.ALL_GOOD]: null,
  [_.Sn.LIMITED]: null,
  [_.Sn.VERY_LIMITED]: null,
  [_.Sn.AT_RISK]: null,
  [_.Sn.SUSPENDED]: null
}),
N = a.useCallback(() => {
  A(Math.max(Math.max(...Object.values(I.current).map(e => {
    var t;
    return null !== (t = null == e ? void 0 : e.getBoundingClientRect().height) && void 0 !== t ? t : 36;
  })), 36));
}, []);
  a.useEffect(() => {
N();
let e = (0, s.debounce)(N, 100);
window.addEventListener('resize', e);
  }, [N]);
  let g = {
  [_.Sn.ALL_GOOD]: {
    title: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_TITLE_V2,
    description: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_DESCRIPTION_V2.format({
      termsOfService: E.sQ.TOS_LINK,
      communityGuidelines: E.sQ.COMMUNITY_GUIDELINES
    }),
    status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_SHORT,
    Icon: o.CircleCheckIcon,
    color: r.Z.colors.STATUS_POSITIVE
  },
  [_.Sn.LIMITED]: {
    title: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE_V2,
    description: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION_V2,
    status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
    Icon: o.CircleWarningIcon,
    color: r.Z.colors.STATUS_WARNING
  },
  [_.Sn.VERY_LIMITED]: {
    title: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE_V2,
    description: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION_V2,
    status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
    Icon: o.CircleWarningIcon,
    color: r.Z.unsafe_rawColors.ORANGE_345
  },
  [_.Sn.AT_RISK]: {
    title: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE_V2,
    description: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
    status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
    Icon: o.CircleWarningIcon,
    color: r.Z.colors.STATUS_DANGER
  },
  [_.Sn.SUSPENDED]: {
    title: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE_V2,
    description: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION_V2,
    status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
    Icon: o.CircleXIcon,
    color: r.Z.colors.ICON_MUTED
  }
},
{
  title: f,
  description: C,
  color: U,
  Icon: m
} = g[e.state],
h = Object.keys(g).length;
  return (0, i.jsxs)(o.Card, {
className: S.container,
outline: !1,
children: [
  (0, i.jsx)('div', {
    className: S.profile,
    children: (0, i.jsx)(d.Z, {
      user: t,
      size: o.AvatarSizes.SIZE_80
    })
  }),
  (0, i.jsxs)('div', {
    className: S.status,
    children: [
      (0, i.jsxs)('div', {
        className: S.title,
        children: [
          (0, i.jsx)(o.Heading, {
            color: 'header-primary',
            variant: 'heading-lg/normal',
            children: f.format({
              hook: e => (0, i.jsx)(o.Text, {
                style: {
                  color: U.css
                },
                variant: 'heading-lg/bold',
                tag: 'span',
                children: e
              })
            })
          }),
          (0, i.jsx)(o.Text, {
            color: 'text-normal',
            variant: 'text-sm/normal',
            children: C
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: S.health,
        style: {
          height: n
        },
        children: [
          (0, i.jsx)('div', {
            className: S.line
          }),
          Object.entries(g).map((t, n) => {
            let [a, s] = t, l = parseInt(a) === e.state;
            return (0, i.jsxs)('div', {
              className: S.statusOption,
              ref: e => I.current[parseInt(a)] = e,
              children: [
                l ? (0, i.jsx)(m, {
                  className: S.marker,
                  color: s.color
                }) : (0, i.jsx)('div', {
                  className: S.marker,
                  style: {
                    marginLeft: 0 === n ? -6 : 0,
                    marginRight: n === h - 1 ? -6 : 0
                  },
                  children: (0, i.jsx)('div', {
                    className: S.empty
                  })
                }),
                s.status.format({
                  hook: e => (0, i.jsx)(o.Text, {
                    color: 'text-normal',
                    variant: 'text-sm/normal',
                    className: S.statusLabel,
                    children: e
                  })
                })
              ]
            }, n);
          })
        ]
      })
    ]
  })
]
  });
}