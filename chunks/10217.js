n(47120);
var a, l, i = n(735250),
  s = n(470079),
  o = n(120356),
  r = n.n(o),
  c = n(913527),
  d = n.n(c),
  u = n(442837),
  m = n(846519),
  p = n(212605),
  C = n(481060),
  v = n(100527),
  g = n(906732),
  h = n(318374),
  x = n(717680),
  E = n(594174),
  f = n(863840),
  L = n(962399),
  I = n(810090),
  S = n(626135),
  M = n(823379),
  _ = n(709054),
  N = n(39604),
  Z = n(572720),
  T = n(981631),
  j = n(689938),
  A = n(440855),
  b = n(860857);
(l = a || (a = {})).DELETE = 'delete', l.EDIT = 'edit', l.SHARE = 'share';

function P(e) {
  let {
clip: t,
isNew: n,
videoRef: a
  } = e, l = 0 === t.length, [o, r] = s.useMemo(() => {
let e = t.length,
  n = !1,
  a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
return null != a && 1000 * a < t.length && (e = 1000 * a, n = !0), [
  n,
  d().duration(e)
];
  }, [
t.length,
t.editMetadata
  ]), c = ''.concat(r.seconds()).padStart(2, '0');
  return (0, i.jsxs)('div', {
className: A.clipThumbContainer,
children: [
  (0, i.jsx)(k, {
    clip: t,
    videoRef: a
  }),
  (0, i.jsxs)('div', {
    className: A.clipBadges,
    children: [
      l && (0, i.jsx)('div', {
        className: A.clipProcessingBadge,
        children: (0, i.jsx)(C.Text, {
          variant: 'text-md/medium',
          color: 'always-white',
          children: j.Z.Messages.CLIPS_PROCESSING_BADGE
        })
      }),
      !l && n && (0, i.jsxs)(C.Text, {
        className: A.clipNewBadge,
        variant: 'eyebrow',
        color: 'always-white',
        children: [
          (0, i.jsx)(C.SparklesIcon, {
            size: 'md',
            color: 'currentColor',
            className: A.newIcon
          }),
          j.Z.Messages.NEW.toUpperCase()
        ]
      }),
      !l && (0, i.jsxs)('div', {
        className: A.clipDurationBadge,
        children: [
          o ? (0, i.jsx)(L.Z, {
            className: A.clipDurationEditIcon
          }) : null,
          (0, i.jsx)(C.Text, {
            variant: 'text-md/medium',
            color: 'always-white',
            children: ''.concat(r.minutes(), ':').concat(c)
          })
        ]
      })
    ]
  })
]
  });
}

function R(e) {
  var t;
  let {
clip: n,
focused: a,
onFocus: l
  } = e, [o, c] = s.useState(n.name), d = !n.name, [u, m] = s.useState(!1), [v, g] = s.useState(null !== (t = n.name) && void 0 !== t ? t : ''), [h, x] = s.useState(!1), E = async () => {
x(!0), await (0, N.Tm)(n.id, {
  name: '' === v ? void 0 : v
}), x(!1), m(!1);
  };
  return (s.useEffect(() => {
if (o !== n.name) {
  var e;
  c(n.name), g(null !== (e = n.name) && void 0 !== e ? e : '');
}
  }, [
n.name,
o
  ]), u) ? (0, i.jsx)(C.TextInput, {
inputClassName: r()(b['heading-lg/medium'], A.clipTitleInput),
onClick: e => e.stopPropagation(),
value: v,
autoFocus: !0,
onKeyDown: e => {
  'Enter' === e.key && E();
},
disabled: h,
onChange: g,
onBlur: E
  }) : (0, i.jsxs)(C.Clickable, {
className: A.clipTitleInputPlaceholder,
onFocus: l,
onClick: e => {
  e.stopPropagation(), m(!0);
},
children: [
  d ? (0, i.jsx)(C.Heading, {
    className: A.clipTitle,
    color: 'text-muted',
    variant: 'heading-lg/medium',
    children: j.Z.Messages.CLIPS_ADD_A_TITLE
  }) : (0, i.jsx)(C.Heading, {
    className: A.clipTitle,
    color: 'text-normal',
    variant: 'heading-lg/medium',
    children: n.name
  }),
  a && (0, i.jsx)(C.PencilIcon, {
    size: 'custom',
    'aria-label': j.Z.Messages.EDIT,
    color: C.tokens.colors.TEXT_MUTED,
    height: p.Z.sm,
    width: p.Z.sm,
    className: A.clipTitleIcon
  })
]
  });
}

function k(e) {
  let {
clip: t,
videoRef: n
  } = e, a = (0, Z.l)(t);
  return 0 === t.length ? (0, i.jsx)(C.Spinner, {
type: C.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
className: A.clipThumb
  }) : null != a ? (0, i.jsx)(I.Z, {
preload: 'metadata',
muted: !0,
poster: t.thumbnail,
src: a,
loop: !0,
className: A.clipThumb,
ref: n
  }) : (0, i.jsx)('img', {
alt: '',
src: t.thumbnail,
className: A.clipThumb
  });
}

function y(e) {
  let {
clip: t,
exporting: n,
actionsDisabled: a,
onBeforeDelete: l,
onDelete: o,
onEdit: r,
onShare: c,
onBlur: d
  } = e, u = (0, x.Z)(), m = s.useCallback(e => {
e.stopPropagation(), e.shiftKey ? (l(), (0, N.sS)(t.filepath)) : o(t, l), S.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
  type: 'delete'
});
  }, [
o,
l,
t
  ]), p = s.useCallback(e => {
e.stopPropagation(), r(t), S.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
  type: 'edit'
});
  }, [
r,
t
  ]), v = s.useCallback(e => {
e.stopPropagation(), c(t), S.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
  type: 'share'
});
  }, [
c,
t
  ]);
  return (0, i.jsxs)('div', {
className: A.buttonContainer,
children: [
  null != o && (0, i.jsx)(C.Tooltip, {
    text: j.Z.Messages.DELETE,
    children: e => (0, i.jsx)(C.Button, {
      ...e,
      disabled: a,
      color: u ? C.Button.Colors.RED : C.Button.Colors.PRIMARY,
      onClick: m,
      className: A.button,
      size: C.Button.Sizes.NONE,
      look: C.Button.Looks.FILLED,
      children: (0, i.jsx)(C.TrashIcon, {
        size: 'md',
        color: 'currentColor',
        className: A.miniIcon
      })
    })
  }),
  (0, i.jsx)(C.Tooltip, {
    text: j.Z.Messages.EDIT,
    children: e => (0, i.jsx)(C.Button, {
      ...e,
      disabled: a,
      color: C.Button.Colors.PRIMARY,
      onClick: p,
      className: A.button,
      size: C.Button.Sizes.NONE,
      look: C.Button.Looks.FILLED,
      children: (0, i.jsx)(L.Z, {
        className: A.miniIcon
      })
    })
  }),
  (0, i.jsx)(C.Tooltip, {
    text: j.Z.Messages.SHARE,
    children: e => {
      let {
        onBlur: t,
        ...l
      } = e;
      return (0, i.jsx)(C.Button, {
        ...l,
        disabled: a && !n,
        submitting: n,
        color: C.Button.Colors.BRAND,
        onBlur: e => {
          d(e), null == t || t();
        },
        onClick: v,
        className: A.button,
        size: C.Button.Sizes.NONE,
        look: C.Button.Looks.FILLED,
        children: (0, i.jsx)(C.ShareIcon, {
          size: 'lg',
          color: 'currentColor',
          className: A.miniIcon
        })
      });
    }
  })
]
  });
}
t.Z = function(e) {
  var t, n, a;
  let {
clip: l,
exporting: o,
actionsDisabled: c,
isNew: d,
onDelete: p,
onEdit: x,
onShare: L
  } = e, I = (0, u.Wu)([E.default], () => l.users.map(e => E.default.getUser(e)).filter(M.lm)), {
analyticsLocations: N
  } = (0, g.ZP)(v.Z.CLIPS_GALLERY_ITEM), [Z, b] = s.useState(!1), k = s.useRef(null), B = (0, f.Z)(null !== (a = null === (t = l.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), D = s.useRef(new m.sW(500, () => {
var e;
let t = k.current;
null != t && t.paused && (t.currentTime = B.current, null === (e = k.current) || void 0 === e || e.play());
  })), H = s.useCallback(() => {
let e = k.current;
null != e && (e.pause(), e.src = '');
  }, []), V = s.useCallback(() => {
var e;
b(!0), null === (e = D.current) || void 0 === e || e.delay();
  }, []), w = s.useCallback(() => {
var e, t, n;
b(!1);
let a = k.current;
null === (e = D.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (n = null === (t = l.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== n ? n : 0);
  }, [null === (n = l.editMetadata) || void 0 === n ? void 0 : n.start]), Y = s.useCallback(e => {
var t, n;
(null === (n = e.relatedTarget) || void 0 === n ? void 0 : null === (t = n.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && w();
  }, [w]), G = new Date(_.default.extractTimestamp(l.id)), O = G.toLocaleDateString(), z = G.toLocaleTimeString([], {
hour: '2-digit',
minute: '2-digit'
  }), F = ''.concat(O, ' \u2022 ').concat(z);
  return (0, i.jsx)(g.Gt, {
value: N,
children: (0, i.jsxs)(C.ClickableContainer, {
  'aria-disabled': c,
  'aria-label': j.Z.Messages.EDIT,
  onClick: c ? void 0 : () => {
    x(l), S.default.track(T.rMx.CLIP_GALLERY_CARD_CLICKED);
  },
  className: r()(A.clipItem, {
    [A.disabled]: c
  }),
  onBlur: Y,
  onFocus: V,
  onMouseOver: V,
  onMouseLeave: w,
  children: [
    (0, i.jsx)(P, {
      clip: l,
      isNew: d,
      videoRef: k
    }),
    (0, i.jsxs)('div', {
      className: A.clipFooter,
      children: [
        (0, i.jsx)(R, {
          clip: l,
          focused: Z,
          onFocus: V
        }),
        (0, i.jsx)(C.Text, {
          className: A.clipMetadata,
          color: 'text-normal',
          variant: 'text-md/medium',
          children: l.applicationName
        }),
        (0, i.jsx)(C.Text, {
          className: A.clipMetadata,
          color: 'text-normal',
          variant: 'text-md/medium',
          children: F
        }),
        (0, i.jsxs)('div', {
          className: A.usersAndDelete,
          children: [
            (0, i.jsx)(h.Z, {
              maxUsers: 4,
              users: I,
              onFocus: e => {
                var t, n, a, l;
                let i = e.relatedTarget,
                  s = null === (n = e.currentTarget.parentElement) || void 0 === n ? void 0 : null === (t = n.parentElement) || void 0 === t ? void 0 : t.parentElement;
                if ((null == i ? void 0 : i.parentElement) !== s)
                  (null == i ? void 0 : null === (l = i.parentElement) || void 0 === l ? void 0 : null === (a = l.parentElement) || void 0 === a ? void 0 : a.parentElement) !== s && V();
              }
            }),
            Z && (0, i.jsx)(y, {
              clip: l,
              actionsDisabled: c,
              exporting: o,
              onBeforeDelete: H,
              onDelete: p,
              onEdit: x,
              onShare: L,
              onBlur: e => {
                var t;
                (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && w();
              }
            })
          ]
        })
      ]
    })
  ]
})
  });
};