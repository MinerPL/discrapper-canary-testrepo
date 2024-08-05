t.d(n, {
  Z: function() {
return P;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(120356),
  o = t.n(l),
  r = t(581051),
  s = t(353381),
  c = t(442837),
  u = t(993365),
  d = t(481060),
  m = t(115130),
  p = t(147865),
  _ = t(427996),
  C = t(240991),
  f = t(810090),
  h = t(88410),
  A = t(783097),
  E = t(695676),
  N = t(520315),
  v = t(29380),
  x = t(689938),
  I = t(970311),
  g = t(153521);

function P(e) {
  let {
channel: n,
application: t,
videoUrl: l,
imageCoverUrl: r,
sectionName: s
  } = e, u = a.useMemo(() => {
var e;
return null !== (e = (0, A.jD)(t)) && void 0 !== e ? e : '';
  }, [t]), d = (0, c.e7)([m.Z], () => m.Z.getIsEnabled()), p = null != l || null != r, {
isSlideReady: C
  } = (0, E.hH)(), [h, N] = a.useState(!1);
  return a.useEffect(() => {
C && N(!0);
  }, [C]), (0, i.jsx)('div', {
className: I.container,
children: (0, i.jsxs)('div', {
  className: I.profileAndVideoContainer,
  children: [
    p ? (0, i.jsxs)('div', {
      className: I.videoContainer,
      children: [
        h ? (0, i.jsx)(f.Z, {
          className: o()(I.videoCover, I.video),
          loop: !0,
          muted: !0,
          autoPlay: !0,
          src: l,
          poster: r
        }) : null,
        (0, i.jsx)('img', {
          className: I.videoCover,
          src: r,
          'aria-label': x.Z.Messages.IMAGE
        })
      ]
    }) : null,
    (0, i.jsxs)('div', {
      className: p ? I.overviewContainerWithVideo : I.overviewContainerNoVideo,
      children: [
        (0, i.jsx)(S, {
          application: t
        }),
        (0, i.jsx)(L, {
          application: t
        }),
        u.length > 0 ? (0, i.jsx)(b, {
          description: u
        }) : null,
        d ? (0, i.jsx)('div', {
          className: I.developerShelfControlsContainer,
          children: (0, i.jsx)(_.W, {
            hideSearch: !0,
            className: I.developerShelfControls
          })
        }) : null,
        (0, i.jsx)(T, {
          channel: n,
          application: t,
          sectionName: s
        })
      ]
    })
  ]
})
  });
}

function S(e) {
  var n;
  let {
application: t
  } = e, a = (0, A.BQ)(t) ? t.name : null !== (n = (0, A.$d)(t)) && void 0 !== n ? n : '';
  return (0, i.jsx)('div', {
className: I.titleContainer,
children: (0, i.jsx)('div', {
  className: I.titleInnerContainer,
  children: (0, i.jsx)(d.Heading, {
    variant: 'heading-xl/extrabold',
    children: a
  })
})
  });
}

function L(e) {
  let {
application: n
  } = e, t = a.useMemo(() => {
var e;
return (0, A.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
  }, [n]);
  return (0, A.ye)({
application: n
  }) ? (0, i.jsxs)('div', {
className: I.tagsContainer,
children: [
  (0, i.jsx)(R, {
    application: n
  }),
  t.map((e, n) => (0, i.jsx)('div', {
    className: I.tagContainer,
    children: (0, i.jsx)(u.x, {
      variant: 'text-sm/semibold',
      color: 'interactive-normal',
      children: e
    })
  }, e + n))
]
  }) : null;
}

function R(e) {
  var n;
  let {
application: t
  } = e;
  if (!(0, A.ye)({
  application: t
}))
return null;
  let a = null !== (n = 'maxParticipants' in t ? t.maxParticipants : 'max_participants' in t ? t.max_participants : 0) && void 0 !== n ? n : 0;
  return (0, i.jsxs)('div', {
className: I.tagContainer,
children: [
  (0, i.jsx)(d.GroupIcon, {
    size: 'xs',
    color: d.tokens.colors.INTERACTIVE_NORMAL
  }),
  (0, i.jsx)(u.x, {
    variant: 'text-sm/semibold',
    color: 'interactive-normal',
    children: (0, p.lY)(a)
  })
]
  });
}

function T(e) {
  let {
channel: n,
application: t,
sectionName: a
  } = e, l = (0, h.Z)({
applicationId: t.id,
channel: n
  });
  return (0, A.BQ)(t) && (0, A.ye)({
application: t
  }) ? (0, i.jsx)('div', {
className: I.entrypointContainer,
children: null != t ? (0, i.jsx)(v.Z, {
  channel: n,
  application: t,
  sectionName: a,
  commandName: l,
  buttonSize: d.ButtonSizes.MAX
}) : null
  }) : null;
}

function b(e) {
  let {
description: n
  } = e, [t, l] = a.useState(!0);
  a.useLayoutEffect(() => l(!1), []);
  let o = a.useMemo(() => (0, C.YP)(n), [n]),
{
  ref: c,
  lineHeight: m,
  lineCount: p
} = function() {
  let e = a.useRef(null),
    [n, t] = a.useState(null),
    [i, l] = a.useState(null);
  return a.useLayoutEffect(() => {
    let n = e.current;
    if (null === n || 0 === n.clientHeight)
      return;
    let i = parseInt(getComputedStyle(n).lineHeight);
    if (!isNaN(i))
      t(i), l(Math.floor(n.clientHeight / i));
  }, []), {
    ref: e,
    lineHeight: n,
    lineCount: i
  };
}(),
_ = a.useMemo(() => {
  if (null == m || null == p)
    return {
      key: 0
    };
  let e = m * p;
  return {
    key: 1,
    minHeightOverride: Math.min(e, 1 * m),
    maxHeightOverride: e
  };
}, [
  p,
  m
]),
{
  ref: f,
  isTransitioning: h,
  onTransitionEnd: A
} = (0, N.Z)({
  isExpanded: t,
  ..._
}),
E = t || h;
  return (0, i.jsxs)('div', {
className: I.descriptionContainer,
children: [
  (0, i.jsx)('div', {
    ref: f,
    className: I.overflowHidden,
    onTransitionEnd: A,
    children: (0, i.jsx)(u.x, {
      ref: c,
      className: g.markup,
      variant: 'text-sm/medium',
      lineClamp: E ? void 0 : 1,
      style: {
        maxHeight: E ? void 0 : _.minHeightOverride
      },
      children: o
    })
  }),
  null != p && p > 1 ? (0, i.jsxs)(d.Clickable, {
    className: I.expandableDescriptionClickable,
    onClick: () => l(e => !e),
    children: [
      (0, i.jsx)(u.x, {
        variant: 'text-sm/semibold',
        color: 'text-brand',
        children: E ? x.Z.Messages.APP_LAUNCHER_SHOW_LESS : x.Z.Messages.APP_LAUNCHER_SHOW_MORE
      }),
      E ? (0, i.jsx)(s.u, {
        size: 'sm',
        color: d.tokens.colors.TEXT_BRAND
      }) : (0, i.jsx)(r.C, {
        size: 'sm',
        color: d.tokens.colors.TEXT_BRAND
      })
    ]
  }) : null
]
  });
}