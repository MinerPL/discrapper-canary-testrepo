t.d(n, {
  Z: function() {
return f;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(581051),
  r = t(353381),
  s = t(993365),
  o = t(481060),
  c = t(240991),
  u = t(810090),
  d = t(283442),
  m = t(783097),
  p = t(520315),
  _ = t(591204),
  E = t(689938),
  A = t(970311),
  h = t(153521);

function f(e) {
  let {
channel: n,
application: t,
videoUrl: a,
imageCoverUrl: r,
sectionName: o
  } = e, c = l.useMemo(() => {
var e;
return null !== (e = (0, m.jD)(t)) && void 0 !== e ? e : '';
  }, [t]), d = null != a || null != r, p = c.length > 0;
  return (0, i.jsxs)('div', {
className: A.container,
children: [
  (0, i.jsx)(N, {
    channel: n,
    application: t,
    sectionName: o
  }),
  d || p ? (0, i.jsxs)('div', {
    className: A.profileAndVideoContainer,
    children: [
      d ? (0, i.jsx)('div', {
        className: A.videoContainer,
        children: (0, i.jsx)(u.Z, {
          loop: !0,
          autoPlay: !0,
          muted: !0,
          className: p ? A.videoWithOverview : A.videoNoOverview,
          src: a,
          poster: r
        })
      }) : null,
      p ? (0, i.jsxs)('div', {
        className: d ? A.overviewContainerWithVideo : A.overviewContainerNoVideo,
        children: [
          (0, i.jsx)(s.x, {
            variant: 'text-sm/semibold',
            children: E.Z.Messages.OVERVIEW
          }),
          (0, i.jsx)(C, {
            description: c
          })
        ]
      }) : null
    ]
  }) : null
]
  });
}

function N(e) {
  let {
channel: n,
application: t,
sectionName: a
  } = e, {
name: r,
activityApplication: s
  } = l.useMemo(() => {
var e;
return (0, m.BQ)(t) ? {
  name: t.name,
  activityApplication: (0, m.ye)({
    application: t
  }) ? t : null
} : {
  name: null !== (e = (0, m.$d)(t)) && void 0 !== e ? e : ''
};
  }, [t]), c = n.isThread(), u = (0, d.Z)({
applicationId: t.id,
channel: n
  });
  return (0, i.jsx)('div', {
className: A.titleContainer,
children: (0, i.jsxs)('div', {
  className: A.titleInnerContainer,
  children: [
    (0, i.jsx)(o.Heading, {
      variant: 'heading-xl/extrabold',
      children: r
    }),
    null != s ? (0, i.jsx)(_.Z, {
      channel: n,
      application: s,
      disabled: c,
      sectionName: a,
      commandName: u
    }) : null
  ]
})
  });
}

function C(e) {
  let {
description: n
  } = e, [t, u] = l.useState(!0);
  l.useLayoutEffect(() => u(!1), []);
  let d = l.useMemo(() => (0, c.YP)(n), [n]),
{
  ref: m,
  lineHeight: _,
  lineCount: f
} = function() {
  let e = l.useRef(null),
    [n, t] = l.useState(null),
    [i, a] = l.useState(null);
  return l.useLayoutEffect(() => {
    let n = e.current;
    if (null === n || 0 === n.clientHeight)
      return;
    let i = parseInt(getComputedStyle(n).lineHeight);
    if (!isNaN(i))
      t(i), a(Math.floor(n.clientHeight / i));
  }, []), {
    ref: e,
    lineHeight: n,
    lineCount: i
  };
}(),
N = l.useMemo(() => {
  if (null == _ || null == f)
    return {
      key: 0
    };
  let e = _ * f;
  return {
    key: 1,
    minHeightOverride: Math.min(e, 3 * _),
    maxHeightOverride: e
  };
}, [
  f,
  _
]),
{
  ref: C,
  isTransitioning: v,
  onTransitionEnd: I
} = (0, p.Z)({
  isExpanded: t,
  ...N
}),
P = t || v;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    ref: C,
    className: A.overflowHidden,
    onTransitionEnd: I,
    children: (0, i.jsx)(s.x, {
      ref: m,
      className: h.markup,
      variant: 'text-sm/medium',
      lineClamp: P ? void 0 : 3,
      style: {
        maxHeight: P ? void 0 : N.minHeightOverride
      },
      children: d
    })
  }),
  null != f && f > 3 ? (0, i.jsxs)(o.Clickable, {
    className: A.expandableDescriptionClickable,
    onClick: () => u(e => !e),
    children: [
      (0, i.jsx)(s.x, {
        variant: 'text-sm/semibold',
        color: 'text-brand',
        children: P ? E.Z.Messages.APP_LAUNCHER_SHOW_LESS : E.Z.Messages.APP_LAUNCHER_SHOW_MORE
      }),
      P ? (0, i.jsx)(r.u, {
        size: 'sm',
        color: o.tokens.colors.TEXT_BRAND
      }) : (0, i.jsx)(a.C, {
        size: 'sm',
        color: o.tokens.colors.TEXT_BRAND
      })
    ]
  }) : null
]
  });
}