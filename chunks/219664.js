n(47120);
var a = n(735250),
  s = n(470079),
  r = n(120356),
  l = n.n(r),
  i = n(683860),
  o = n(442837),
  c = n(692547),
  d = n(481060),
  u = n(738619),
  m = n(841762),
  h = n(25610),
  _ = n(406432),
  g = n(169525),
  x = n(255269),
  f = n(930282),
  C = n(524444),
  p = n(695346),
  T = n(433355),
  I = n(592125),
  E = n(496675),
  N = n(456269),
  b = n(109590),
  v = n(368844),
  S = n(73315),
  M = n(404616),
  A = n(510060),
  j = n(983200),
  R = n(196255),
  O = n(858543),
  Z = n(482062),
  L = n(883728),
  P = n(710352),
  w = n(981631),
  y = n(689938),
  D = n(286124);

function F(e) {
  let {
id: t,
channel: n,
goToThread: r,
overrideMedia: u,
className: m,
coords: h,
gridCoords: _,
gridSectionBoundaries: g,
observePostVisibilityAnalytics: f
  } = e, C = (0, o.e7)([I.Z], () => I.Z.getChannel(n.parent_id)), S = n.id, j = s.useRef(null), F = (0, o.e7)([T.ZP], () => T.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id), {
firstMessage: k,
loaded: H
  } = (0, b.cl)(n), {
firstMedia: G
  } = (0, N.mX)({
firstMessage: k,
formatInline: !1,
noStyleAndInteraction: !1
  }), {
messageCountText: V
  } = (0, N.nP)(n), {
isNew: W,
hasUnreads: q
  } = (0, N.J$)(n), K = s.useRef(null), {
handleLeftClick: Y,
handleRightClick: X
  } = (0, L.Z)({
facepileRef: K,
goToThread: r,
channel: n
  });
  s.useEffect(() => {
null == f || f(j.current, S);
  }, [
f,
S
  ]);
  let J = (0, o.e7)([E.Z], () => E.Z.can(w.Plq.MANAGE_MESSAGES, n)),
Q = p.QK.useSetting(),
$ = p.cC.useSetting(),
ee = (0, x.Z)($, J),
et = (0, v.aU)(k, C, !1),
[en, ea] = (0, A.rI)(h.width - 2 * A.LT),
es = (0, N.xw)(n, i.z.CREATION_DATE, P.R6.POSTED_DURATION_AGO),
er = (0, M.NN)(n),
el = (null == k ? void 0 : k.blocked) || null == (null != u ? u : G),
{
  onFocus: ei,
  ...eo
} = (0, Z.nX)({
  id: t,
  row: _.row,
  column: _.column,
  section: _.section,
  boundaries: g
}),
ec = n.isMediaPost();
  return (0, a.jsxs)('li', {
ref: j,
onClick: Y,
onFocus: ei,
onContextMenu: X,
className: l()(D.container, m, {
  [D.isOpen]: F
}),
style: {
  ...h
},
children: [
  (0, a.jsx)(d.Clickable, {
    onClick: Y,
    focusProps: {
      ringTarget: j
    },
    onContextMenu: X,
    'aria-label': y.Z.Messages.FORUM_POST_ARIA_LABEL.format({
      title: n.name,
      count: V
    }),
    className: D.focusTarget,
    ...eo
  }),
  (0, a.jsxs)('div', {
    className: D.header,
    children: [
      (0, a.jsxs)('div', {
        className: D.authorRow,
        children: [
          (0, a.jsxs)('div', {
            className: D.rowGroup,
            children: [
              (0, a.jsx)(R.Z, {
                channel: n,
                message: k
              }),
              (0, a.jsx)(d.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: D.postCreationTimestamp,
                children: es
              })
            ]
          }),
          W ? (0, a.jsx)(d.TextBadge, {
            className: l()(D.newBadge),
            color: c.Z.unsafe_rawColors.BRAND_260.css,
            text: y.Z.Messages.NEW
          }) : null
        ]
      }),
      (0, a.jsx)(d.HeadingLevel, {
        children: (0, a.jsx)(d.Heading, {
          variant: 'heading-md/extrabold',
          className: D.title,
          color: q ? 'header-primary' : 'text-muted',
          style: {
            width: ''.concat(h.width - 2 * A.I8, 'px')
          },
          children: er
        })
      })
    ]
  }),
  (0, a.jsx)('div', {
    className: D.postBody,
    children: (0, a.jsx)(d.FocusBlock, {
      children: el ? (0, a.jsx)(z, {
        channel: n,
        firstMessage: k,
        isFirstMessageLoaded: H,
        containerWidth: h.width,
        hasUnreads: q
      }) : (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(B, {
            mediaAttachments: et,
            globalSpoilerRenderSetting: ee,
            containerWidth: en,
            containerHeight: ec ? 9 / 16 * en : ea,
            canAutoPlay: Q,
            shouldMaintainAspectRatio: ec
          }),
          (0, a.jsx)('div', {
            className: D.tagsRow,
            children: (0, a.jsx)(O.ZP, {
              channel: n,
              tagsClassName: D.tagPill
            })
          })
        ]
      })
    })
  }),
  (0, a.jsx)('div', {
    className: D.footer,
    children: (0, a.jsx)(d.FocusBlock, {
      children: (0, a.jsx)(U, {
        channel: n,
        firstMessage: k,
        facepileRef: K
      })
    })
  })
]
  });
}

function U(e) {
  let {
channel: t,
facepileRef: n,
firstMessage: s
  } = e, r = (0, N.Q)(t), l = (null == s ? void 0 : s.reactions) != null && s.reactions.length > 0;
  return (0, a.jsxs)('div', {
className: D.forumPostControls,
children: [
  (0, a.jsxs)('div', {
    className: D.controlsGroup,
    children: [
      (0, a.jsx)('div', {
        className: D.messageCountContainer,
        children: (0, a.jsx)(M.m9, {
          channel: t,
          iconSize: 16,
          showReadState: !0
        })
      }),
      r.length > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)('span', {
            className: D.bullet,
            children: '\u2022'
          }),
          (0, a.jsxs)('div', {
            className: D.typing,
            children: [
              (0, a.jsx)(M.og, {
                channel: t,
                userIds: r,
                facepileRef: n
              }),
              (0, a.jsx)('div', {
                className: D.dots,
                children: (0, a.jsx)(d.Dots, {
                  themed: !0,
                  dotRadius: 2
                })
              }),
              (0, a.jsx)(u.Z, {
                channel: t,
                className: D.typingUsers,
                renderDots: !1
              })
            ]
          })
        ]
      }) : null
    ]
  }),
  (0, a.jsxs)('div', {
    className: D.controlsGroup,
    children: [
      l || null == s ? null : (0, a.jsx)(M.kZ, {
        firstMessage: s,
        channel: t
      }),
      null == s ? null : (0, a.jsx)(M.au, {
        firstMessage: s,
        channel: t
      })
    ]
  })
]
  });
}
t.Z = s.memo(function(e) {
  let {
id: t,
threadId: n,
goToThread: s,
overrideMedia: r,
className: l,
coords: i,
gridCoords: c,
gridSectionBoundaries: d,
observePostVisibilityAnalytics: u
  } = e, m = (0, o.e7)([I.Z], () => I.Z.getChannel(n));
  return null == m ? null : (0, a.jsx)(F, {
id: t,
channel: m,
goToThread: s,
overrideMedia: r,
className: l,
coords: i,
gridCoords: c,
observePostVisibilityAnalytics: u,
gridSectionBoundaries: d
  });
});
let k = e => e.preventDefault(),
  H = s.memo(function(e) {
return (0, a.jsx)(a.Fragment, {
  children: (0, C.Yi)(e)
});
  }),
  B = s.memo(function(e) {
let {
  mediaAttachments: t,
  globalSpoilerRenderSetting: n,
  containerWidth: r,
  containerHeight: i,
  canAutoPlay: o,
  shouldMaintainAspectRatio: c = !1
} = e, {
  containsVideo: u,
  containsGif: x
} = s.useMemo(() => (0, v.cp)(t), [t]), f = s.useMemo(() => t.slice(j.$x, j.GV), [t]), C = (0, j.tu)({
  numAttachments: f.length,
  containerWidth: r,
  containerHeight: i
}), p = (0, j.S$)({
  imageContainerStyles: C,
  containerWidth: r,
  containerHeight: i
}), T = (0, h.m)(), I = s.useMemo(() => f.map((e, t) => {
  var s;
  let [r, i] = (0, g.As)(e, !n, T), h = (0, g.MC)(i), f = {
    ...p[t],
    src: e.src,
    width: e.width,
    height: e.height,
    alt: null != e.alt && r ? h : e.alt,
    onClick: k,
    shouldRenderAccessory: !x && !u,
    renderForwardComponent: w.VqG
  }, I = (0, _.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src, E = o && !r ? e.src : I;
  return (0, a.jsxs)('div', {
    className: D.bodyMediaFrame,
    style: C[t],
    children: [
      c ? (0, a.jsx)(m.Z, {
        ...f,
        src: E,
        backgroundSrc: I,
        aspectRatio: f.maxWidth / f.maxHeight,
        alt: null !== (s = f.alt) && void 0 !== s ? s : '',
        className: l()(D.mediaPostContainer, {
          [D.obscured]: r
        }),
        imageChildClassName: D.mediaPostThumbnail
      }) : e.src.startsWith('data:') ? (0, a.jsx)(d.Image, {
        ...f,
        className: D.mediaContainer,
        imageClassName: l()(D.thumbnailOverride, {
          [D.obscured]: r
        })
      }) : (0, a.jsx)(H, {
        ...f,
        autoPlay: o && !r,
        containerClassName: D.mosaicMediaContainer,
        imageClassName: l()(D.imageCover, {
          [D.obscured]: r
        }),
        responsive: !0
      }),
      r && (0, a.jsx)('div', {
        className: D.obscuredTagContainer,
        children: (0, a.jsx)(S.Z, {
          obscureReason: i,
          iconClassname: D.obscuredTag
        })
      })
    ]
  }, e.src);
}), [
  o,
  x,
  u,
  n,
  C,
  p,
  f,
  c,
  T
]);
return (0, a.jsxs)('div', {
  className: D.bodyMedia,
  style: {
    width: r,
    height: i
  },
  children: [
    (0, a.jsx)(a.Fragment, {
      children: I
    }),
    (x || u) && (0, a.jsxs)('div', {
      className: D.mediaIconsRow,
      children: [
        u && (0, a.jsx)(d.PlayIcon, {
          color: 'currentColor',
          size: 'custom',
          width: 22,
          height: 22,
          className: D.mediaIcon
        }),
        x && (0, a.jsx)(d.GifIcon, {
          size: 'custom',
          width: 29,
          height: 29,
          color: 'currentColor',
          className: D.mediaIcon
        })
      ]
    }),
    t.length > j.Vn && (0, a.jsx)(G, {
      text: (t.length - j.Vn).toString(),
      icon: d.ImageIcon,
      pillClassName: D.moreImagesPill,
      iconClassName: D.moreImagesPillIcon,
      textClassName: D.moreImagesPillText
    })
  ]
});
  });

function G(e) {
  let {
text: t,
icon: n,
pillClassName: s,
iconClassName: r,
textClassName: l
  } = e;
  return (0, a.jsxs)('div', {
className: s,
children: [
  (0, a.jsx)(n, {
    className: r,
    color: 'currentColor'
  }),
  (0, a.jsxs)(d.Text, {
    variant: 'text-xs/medium',
    className: l,
    children: [
      '+',
      t
    ]
  })
]
  });
}

function z(e) {
  let {
channel: t,
firstMessage: n,
isFirstMessageLoaded: r,
containerWidth: i,
hasUnreads: o
  } = e, [c, u] = (0, A.rI)(i - 2 * A.LT), {
content: m
  } = (0, N.mX)({
firstMessage: n,
formatInline: !1,
noStyleAndInteraction: !0
  }), {
shouldRenderTagsRow: h
  } = (0, O.DM)({
channel: t,
isNew: !1
  }), _ = s.useMemo(() => ({
width: c,
height: u
  }), [
c,
u
  ]), g = o ? D.textContentUnread : D.textContentRead;
  return (0, a.jsx)(a.Fragment, {
children: (0, a.jsxs)('div', {
  className: D.contentPreview,
  style: _,
  children: [
    (0, a.jsxs)('div', {
      className: D.content,
      children: [
        r && null == n && (0, a.jsx)(d.Text, {
          variant: 'text-sm/normal',
          color: o ? 'header-secondary' : 'text-muted',
          children: y.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
        }),
        r && null != n && (0, a.jsx)(f.ZP, {
          message: n,
          content: m,
          className: g
        })
      ]
    }),
    (0, a.jsx)('div', {
      className: l()(D.textContentFooter, {
        [D.noTags]: !h
      }),
      children: h ? (0, a.jsx)(O.ZP, {
        channel: t,
        tagsClassName: D.tagPill,
        className: D.__invalid_row
      }) : null
    })
  ]
})
  });
}