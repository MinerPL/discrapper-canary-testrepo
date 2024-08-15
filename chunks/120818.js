n.d(t, {
  T: function() {
return C;
  }
});
var i = n(735250),
  l = n(470079),
  r = n(91192),
  a = n(442837),
  s = n(481060),
  o = n(44315),
  c = n(563534),
  u = n(846121),
  d = n(703656),
  h = n(259580),
  p = n(981631),
  _ = n(176505),
  f = n(689938),
  g = n(945486);

function m(e, t) {
  return (0, i.jsx)(s.Text, {
variant: 'text-xs/bold',
color: 'text-normal',
children: e
  }, t);
}
let C = l.memo(function(e) {
  let {
guild: t
  } = e, n = (0, a.e7)([c.Z], () => c.Z.getNewMemberActions(t.id), [t.id]), C = (0, a.e7)([u.Z], () => u.Z.getCompletedActions(t.id)), I = l.useMemo(() => {
if (null == n || null == C)
  return 0;
let e = 0;
return n.forEach(t => {
  null != C[t.channelId] && e++;
}), e;
  }, [
C,
n
  ]), E = null == n ? 0 : n.length, N = (0, r.JA)('progress-bar-'.concat(t.id));
  return (0, i.jsxs)('li', {
children: [
  (0, i.jsxs)(s.Clickable, {
    ...N,
    role: 'button',
    focusProps: {
      offset: {
        right: 4
      }
    },
    className: g.progressBarContainer,
    onClick: function() {
      (0, d.uL)(p.Z5c.CHANNEL(t.id, _.oC.GUILD_HOME));
    },
    children: [
      (0, i.jsxs)('div', {
        className: g.progressBarText,
        children: [
          (0, i.jsx)(s.Heading, {
            variant: 'heading-sm/bold',
            children: f.Z.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_GET_STARTED
          }),
          (0, i.jsxs)('div', {
            className: g.rightContainer,
            children: [
              (0, i.jsx)(s.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                className: g.rightText,
                children: f.Z.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_COUNTER.format({
                  numberHook: m,
                  total: E.toString(),
                  completed: I.toString()
                })
              }),
              (0, i.jsx)(h.Z, {
                className: g.arrow,
                width: 16,
                height: 16,
                direction: h.Z.Directions.RIGHT
              })
            ]
          })
        ]
      }),
      (0, i.jsx)(s.Progress, {
        className: g.progressBar,
        foregroundGradientColor: [
          (0, o.Lq)(p.Ilk.GREEN_300),
          (0, o.Lq)(p.Ilk.GREEN_230)
        ],
        percent: I / E * 100 + 3,
        animate: !0
      })
    ]
  }),
  (0, i.jsx)('div', {
    role: 'separator',
    className: g.divider
  })
]
  });
});