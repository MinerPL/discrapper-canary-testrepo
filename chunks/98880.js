t.d(n, {
  U4: function() {
return i;
  },
  cG: function() {
return w;
  },
  kA: function() {
return V;
  },
  qR: function() {
return W;
  }
}), t(47120), t(411104);
var i, a, l = t(735250),
  o = t(470079),
  r = t(120356),
  s = t.n(r),
  c = t(442837),
  u = t(481060),
  d = t(607070),
  m = t(361213),
  p = t(542094),
  _ = t(778569),
  C = t(182906),
  f = t(367907),
  h = t(220082),
  A = t(810090),
  E = t(768581),
  N = t(792125),
  v = t(541099),
  x = t(783097),
  I = t(695676),
  g = t(176412),
  P = t(226026),
  S = t(753972),
  L = t(981631),
  R = t(217702),
  T = t(231338),
  b = t(689938),
  M = t(126152),
  y = t(413097);

function j(e) {
  let {
application: n,
look: t = 'large_banner',
isPartner: i,
onClick: a,
bannerImageStyle: o,
enableVideoBanner: r = !0,
children: s,
sectionName: c,
resultsPosition: u,
tracksImpression: d = !0,
disabled: m = !1
  } = e;
  return (0, l.jsx)(O, {
application: n,
onClick: a,
sectionName: c,
resultsPosition: u,
disabled: m,
tracksImpression: d,
look: t,
children: 'icon' === t ? (0, l.jsx)(Z, {
  application: n
}) : (0, l.jsx)(H, {
  application: n,
  look: t,
  isPartner: i,
  bannerImageStyle: o,
  enableVideoBanner: r,
  children: s
})
  });
}

function O(e) {
  let {
application: n,
onClick: t,
children: i,
sectionName: a,
resultsPosition: r,
tracksImpression: c,
disabled: d,
containerStyle: m,
look: p
  } = e, {
name: _,
description: C
  } = o.useMemo(() => (0, x.sl)(n, {
fakeAppIconURL: y
  }), [n]), {
trackItemImpressionRef: f
  } = (0, P.Z)({
applicationId: n.id,
sectionName: a,
sectionPosition: r
  }), h = o.useMemo(() => {
let e = d ? M.containerDisabled : M.container;
return s()(e, {
  [M.containerBorderRadius]: 'row' !== p,
  [M.rowContainer]: 'row' === p,
  [M.iconCard]: 'icon' === p
}, m);
  }, [
m,
d,
p
  ]);
  return d ? (0, l.jsx)('div', {
ref: c ? f : void 0,
className: h,
children: i
  }) : (0, l.jsx)(u.Clickable, {
innerRef: c ? f : void 0,
className: h,
onClick: t,
'aria-label': b.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
  applicationName: _,
  applicationDescription: C
}),
children: (0, l.jsx)(u.FocusBlock, {
  children: i
})
  });
}

function Z(e) {
  let {
application: n
  } = e, {
name: t,
iconURL: i
  } = o.useMemo(() => (0, x.sl)(n, {
fakeAppIconURL: y
  }), [n]);
  return (0, l.jsx)(u.Tooltip, {
tooltipContentClassName: M.tooltipContent,
text: t,
children: e => {
  let {
    ...n
  } = e;
  return (0, l.jsx)('div', {
    ...n,
    children: (0, l.jsx)(S.Z, {
      src: i,
      className: M.iconCard,
      'aria-hidden': !0,
      rendersPlaceholder: !0
    })
  });
}
  });
}

function H(e) {
  let {
application: n,
look: t,
isPartner: i,
bannerImageStyle: a,
enableVideoBanner: r,
children: c
  } = e, {
iconURL: d,
name: m,
description: p
  } = o.useMemo(() => (0, x.sl)(n, {
fakeAppIconURL: y
  }), [n]), _ = o.useMemo(() => null == p ? null : (0, g.ae)(p), [p]), C = (0, h.ZP)(d, ''), [f, A] = o.useState(!1), E = o.useCallback(() => {
!0 === r && A(!0);
  }, [r]), v = o.useCallback(() => A(!1), []);
  return (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsxs)('div', {
    onMouseEnter: E,
    onFocus: E,
    onMouseLeave: v,
    onBlur: v,
    className: s()(M.bannerImageContainer, {
      [M.mediumBanner]: 'medium_banner' === t,
      [M.largeBanner]: 'large_banner' === t
    }),
    children: [
      (0, l.jsx)('span', {
        className: a,
        children: (0, l.jsx)(U, {
          application: n,
          fallbackColor: C,
          showVideo: f
        })
      }),
      i && (0, l.jsx)('div', {
        className: M.partnerLabelWrapper,
        children: (0, l.jsx)(u.Text, {
          className: (0, N.Q)(T.BR.DARK),
          variant: 'text-sm/medium',
          color: 'text-normal',
          children: b.Z.Messages.APP_DIRECTORY_PARTNER
        })
      }),
      'large_banner' === t || 'medium_banner' === t ? (0, l.jsx)('div', {
        className: M.bannerImageChildContainer,
        children: c
      }) : null
    ]
  }),
  (0, l.jsxs)('div', {
    className: s()(M.appDetailsContainer, {
      [M.appDetailsRowContainer]: 'row' === t
    }),
    children: [
      (0, l.jsx)(S.Z, {
        src: d,
        className: s()(M.icon, {
          [M.rowIcon]: 'row' === t
        }),
        'aria-hidden': !0,
        rendersPlaceholder: !0
      }),
      (0, l.jsxs)('div', {
        className: M.appDetails,
        children: [
          (0, l.jsx)(u.Heading, {
            variant: 'heading-md/semibold',
            color: 'header-primary',
            lineClamp: 1,
            children: m
          }),
          (0, l.jsx)(u.Text, {
            variant: 'text-sm/normal',
            color: 'text-secondary',
            lineClamp: 1,
            children: _
          })
        ]
      }),
      'row' === t ? (0, l.jsx)('div', {
        className: M.rowDivider
      }) : null
    ]
  })
]
  });
}

function U(e) {
  let {
application: n,
fallbackColor: t,
showVideo: i
  } = e;
  if ((0, x.BQ)(n)) {
if ((0, x.ye)({
    application: n
  }))
  return (0, l.jsx)(D, {
    application: n,
    showVideo: i
  });
if (null != n.bot)
  return (0, l.jsx)(B, {
    bot: n.bot,
    fallbackColor: t
  });
  }
  return (0, l.jsx)(k, {
fallbackColor: t
  });
}

function D(e) {
  let {
application: n,
showVideo: t
  } = e, i = (0, _.Z)({
applicationId: n.id,
size: 600,
names: ['embedded_cover']
  }), a = o.useMemo(() => {
let e = (0, x.yJ)(n);
return null != e && null != e.activity_preview_video_asset_id ? (0, m.Z)(n.id, e.activity_preview_video_asset_id) : null;
  }, [n]), [r, c] = o.useState(t);
  return o.useEffect(() => {
t && c(!0);
  }, [t]), (0, l.jsxs)(l.Fragment, {
children: [
  null != a && r ? (0, l.jsx)('div', {
    className: M.activityVideoContainer,
    children: (0, l.jsx)('div', {
      className: s()(M.activityVideo, {
        [M.videoFadeOut]: !t
      }),
      onAnimationEnd: () => t ? null : c(!1),
      children: (0, l.jsx)(A.Z, {
        src: a,
        mediaLayoutType: R.hV.MOSAIC,
        loop: !0,
        autoPlay: !0,
        muted: !0
      })
    })
  }) : null,
  (0, l.jsx)(C.Z, {
    imageBackground: i,
    applicationName: n.name,
    imageClassName: M.bannerImage,
    imageNotFoundClassName: M.bannerImage
  })
]
  });
}

function B(e) {
  let {
bot: n,
fallbackColor: t
  } = e, i = (0, c.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, E.aN)({
id: n.id,
banner: n.banner,
canAnimate: !i,
size: 600
  });
  return null == a ? (0, l.jsx)(k, {
fallbackColor: t
  }) : (0, l.jsx)('img', {
src: a,
alt: '',
className: M.bannerImage
  });
}

function k(e) {
  let {
fallbackColor: n
  } = e;
  return (0, l.jsx)('div', {
className: M.bannerImage,
style: {
  backgroundColor: n
}
  });
}

function w(e) {
  let {
application: n,
sectionName: t,
resultsPosition: i,
query: a,
installOnDemand: l,
location: r
  } = e, {
pushHistory: s
  } = (0, I.hH)();
  return o.useCallback(e => {
e.stopPropagation(), (0, f.yw)(L.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
  application_id: n.id,
  section_name: t,
  search_results_position: i,
  source: v.Z.entrypoint(),
  location: r,
  query: a
}), s({
  type: I.gc.APPLICATION,
  application: n,
  installOnDemand: l,
  sectionName: t
});
  }, [
n,
l,
r,
s,
a,
i,
t
  ]);
}

function V(e) {
  let n = w(e);
  return (0, l.jsx)(j, {
...e,
onClick: n
  });
}

function W(e) {
  let {
channel: n,
application: t,
location: i,
sectionName: a,
isOneClickCTA: o,
...r
  } = e;
  if (!(0, x.BQ)(t))
throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
  let {
onActivityItemSelected: s,
activityAction: c,
buttonColor: d,
buttonText: m
  } = (0, g.P7)({
channel: n,
application: t,
location: i,
sectionName: a
  });
  if (c === p.JS.START)
return o ? (0, l.jsx)(j, {
  ...r,
  sectionName: a,
  application: t,
  onClick: s,
  enableVideoBanner: !0
}) : (0, l.jsx)(V, {
  ...r,
  sectionName: a,
  application: t,
  location: i
});
  return (0, l.jsx)(j, {
...r,
sectionName: a,
application: t,
onClick: e => {
  e.stopPropagation();
},
bannerImageStyle: M.darkenBannerImage,
enableVideoBanner: !1,
disabled: !0,
children: (0, l.jsx)('div', {
  className: M.voiceLauncherAppCardContainer,
  children: (0, l.jsx)(u.Button, {
    className: M.voiceLauncherAppCardButton,
    type: 'submit',
    size: u.Button.Sizes.LARGE,
    color: d,
    disabled: !1,
    onClick: s,
    'aria-label': b.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
      buttonText: m,
      applicationName: t.name
    }),
    children: m
  })
})
  });
}
(a = i || (i = {})).ICON = 'icon', a.ROW = 'row', a.NO_BANNER = 'no_banner', a.MEDIUM_BANNER = 'medium_banner', a.LARGE_BANNER = 'large_banner';