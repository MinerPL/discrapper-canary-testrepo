n(47120);
var a, l, s = n(735250),
  i = n(470079),
  o = n(120356),
  r = n.n(o),
  c = n(913527),
  d = n.n(c),
  u = n(442837),
  m = n(846519),
  p = n(212605),
  C = n(481060),
  g = n(100527),
  h = n(906732),
  v = n(318374),
  x = n(717680),
  f = n(594174),
  E = n(863840),
  L = n(962399),
  S = n(810090),
  I = n(626135),
  N = n(823379),
  Z = n(709054),
  M = n(39604),
  _ = n(572720),
  T = n(981631),
  j = n(689938),
  b = n(440855),
  A = n(860857);
(l = a || (a = {})).DELETE = 'delete', l.EDIT = 'edit', l.SHARE = 'share';

function P(e) {
  let {
clip: t,
isNew: n,
videoRef: a
  } = e, l = 0 === t.length, [o, r] = i.useMemo(() => {
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
  return (0, s.jsxs)('div', {
className: b.clipThumbContainer,
children: [
  (0, s.jsx)(R, {
    clip: t,
    videoRef: a
  }),
  (0, s.jsxs)('div', {
    className: b.clipBadges,
    children: [
      l && (0, s.jsx)('div', {
        className: b.clipProcessingBadge,
        children: (0, s.jsx)(C.Text, {
          variant: 'text-md/medium',
          color: 'always-white',
          children: j.Z.Messages.CLIPS_PROCESSING_BADGE
        })
      }),
      !l && n && (0, s.jsxs)(C.Text, {
        className: b.clipNewBadge,
        variant: 'eyebrow',
        color: 'always-white',
        children: [
          (0, s.jsx)(C.SparklesIcon, {
            size: 'md',
            color: 'currentColor',
            className: b.newIcon
          }),
          j.Z.Messages.NEW.toUpperCase()
        ]
      }),
      !l && (0, s.jsxs)('div', {
        className: b.clipDurationBadge,
        children: [
          o ? (0, s.jsx)(L.Z, {
            className: b.clipDurationEditIcon
          }) : null,
          (0, s.jsx)(C.Text, {
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

function k(e) {
  var t;
  let {
clip: n,
focused: a,
onFocus: l
  } = e, [o, c] = i.useState(n.name), d = !n.name, [u, m] = i.useState(!1), [g, h] = i.useState(null !== (t = n.name) && void 0 !== t ? t : ''), [v, x] = i.useState(!1), f = async () => {
x(!0), await (0, M.Tm)(n.id, {
  name: '' === g ? void 0 : g
}), x(!1), m(!1);
  };
  return (i.useEffect(() => {
if (o !== n.name) {
  var e;
  c(n.name), h(null !== (e = n.name) && void 0 !== e ? e : '');
}
  }, [
n.name,
o
  ]), u) ? (0, s.jsx)(C.TextInput, {
inputClassName: r()(A['heading-lg/medium'], b.clipTitleInput),
onClick: e => e.stopPropagation(),
value: g,
autoFocus: !0,
onKeyDown: e => {
  'Enter' === e.key && f();
},
disabled: v,
onChange: h,
onBlur: f
  }) : (0, s.jsxs)(C.Clickable, {
className: b.clipTitleInputPlaceholder,
onFocus: l,
onClick: e => {
  e.stopPropagation(), m(!0);
},
children: [
  d ? (0, s.jsx)(C.Heading, {
    className: b.clipTitle,
    color: 'text-muted',
    variant: 'heading-lg/medium',
    children: j.Z.Messages.CLIPS_ADD_A_TITLE
  }) : (0, s.jsx)(C.Heading, {
    className: b.clipTitle,
    color: 'text-normal',
    variant: 'heading-lg/medium',
    children: n.name
  }),
  a && (0, s.jsx)(C.PencilIcon, {
    size: 'custom',
    'aria-label': j.Z.Messages.EDIT,
    color: C.tokens.colors.TEXT_MUTED,
    height: p.Z.sm,
    width: p.Z.sm,
    className: b.clipTitleIcon
  })
]
  });
}

function R(e) {
  let {
clip: t,
videoRef: n
  } = e, a = (0, _.l)(t);
  return 0 === t.length ? (0, s.jsx)(C.Spinner, {
type: C.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
className: b.clipThumb
  }) : null != a ? (0, s.jsx)(S.Z, {
preload: 'metadata',
muted: !0,
poster: t.thumbnail,
src: a,
loop: !0,
className: b.clipThumb,
ref: n
  }) : (0, s.jsx)('img', {
alt: '',
src: t.thumbnail,
className: b.clipThumb
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
  } = e, u = (0, x.Z)(), m = i.useCallback(e => {
e.stopPropagation(), e.shiftKey ? (l(), (0, M.sS)(t.filepath)) : o(t, l), I.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
  type: 'delete'
});
  }, [
o,
l,
t
  ]), p = i.useCallback(e => {
e.stopPropagation(), r(t), I.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
  type: 'edit'
});
  }, [
r,
t
  ]), g = i.useCallback(e => {
e.stopPropagation(), c(t), I.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
  type: 'share'
});
  }, [
c,
t
  ]);
  return (0, s.jsxs)('div', {
className: b.buttonContainer,
children: [
  null != o && (0, s.jsx)(C.Tooltip, {
    text: j.Z.Messages.DELETE,
    children: e => (0, s.jsx)(C.Button, {
      ...e,
      disabled: a,
      color: u ? C.Button.Colors.RED : C.Button.Colors.PRIMARY,
      onClick: m,
      className: b.button,
      size: C.Button.Sizes.NONE,
      look: C.Button.Looks.FILLED,
      children: (0, s.jsx)(C.TrashIcon, {
        size: 'md',
        color: 'currentColor',
        className: b.miniIcon
      })
    })
  }),
  (0, s.jsx)(C.Tooltip, {
    text: j.Z.Messages.EDIT,
    children: e => (0, s.jsx)(C.Button, {
      ...e,
      disabled: a,
      color: C.Button.Colors.PRIMARY,
      onClick: p,
      className: b.button,
      size: C.Button.Sizes.NONE,
      look: C.Button.Looks.FILLED,
      children: (0, s.jsx)(L.Z, {
        className: b.miniIcon
      })
    })
  }),
  (0, s.jsx)(C.Tooltip, {
    text: j.Z.Messages.SHARE,
    children: e => {
      let {
        onBlur: t,
        ...l
      } = e;
      return (0, s.jsx)(C.Button, {
        ...l,
        disabled: a && !n,
        submitting: n,
        color: C.Button.Colors.BRAND,
        onBlur: e => {
          d(e), null == t || t();
        },
        onClick: g,
        className: b.button,
        size: C.Button.Sizes.NONE,
        look: C.Button.Looks.FILLED,
        children: (0, s.jsx)(C.ShareIcon, {
          size: 'lg',
          color: 'currentColor',
          className: b.miniIcon
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
  } = e, S = (0, u.Wu)([f.default], () => l.users.map(e => f.default.getUser(e)).filter(N.lm)), {
analyticsLocations: M
  } = (0, h.ZP)(g.Z.CLIPS_GALLERY_ITEM), [_, A] = i.useState(!1), R = i.useRef(null), B = (0, E.Z)(null !== (a = null === (t = l.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), D = i.useRef(new m.sW(500, () => {
var e;
let t = R.current;
null != t && t.paused && (t.currentTime = B.current, null === (e = R.current) || void 0 === e || e.play());
  })), H = i.useCallback(() => {
let e = R.current;
null != e && (e.pause(), e.src = '');
  }, []), w = i.useCallback(() => {
var e;
A(!0), null === (e = D.current) || void 0 === e || e.delay();
  }, []), V = i.useCallback(() => {
var e, t, n;
A(!1);
let a = R.current;
null === (e = D.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (n = null === (t = l.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== n ? n : 0);
  }, [null === (n = l.editMetadata) || void 0 === n ? void 0 : n.start]), G = i.useCallback(e => {
var t, n;
(null === (n = e.relatedTarget) || void 0 === n ? void 0 : null === (t = n.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && V();
  }, [V]), O = new Date(Z.default.extractTimestamp(l.id)), z = O.toLocaleDateString(), Y = O.toLocaleTimeString([], {
hour: '2-digit',
minute: '2-digit'
  }), F = ''.concat(z, ' \u2022 ').concat(Y);
  return (0, s.jsx)(h.Gt, {
value: M,
children: (0, s.jsxs)(C.ClickableContainer, {
  'aria-disabled': c,
  'aria-label': j.Z.Messages.EDIT,
  onClick: c ? void 0 : () => {
    x(l), I.default.track(T.rMx.CLIP_GALLERY_CARD_CLICKED);
  },
  className: r()(b.clipItem, {
    [b.disabled]: c
  }),
  onBlur: G,
  onFocus: w,
  onMouseOver: w,
  onMouseLeave: V,
  children: [
    (0, s.jsx)(P, {
      clip: l,
      isNew: d,
      videoRef: R
    }),
    (0, s.jsxs)('div', {
      className: b.clipFooter,
      children: [
        (0, s.jsx)(k, {
          clip: l,
          focused: _,
          onFocus: w
        }),
        (0, s.jsx)(C.Text, {
          className: b.clipMetadata,
          color: 'text-normal',
          variant: 'text-md/medium',
          children: l.applicationName
        }),
        (0, s.jsx)(C.Text, {
          className: b.clipMetadata,
          color: 'text-normal',
          variant: 'text-md/medium',
          children: F
        }),
        (0, s.jsxs)('div', {
          className: b.usersAndDelete,
          children: [
            (0, s.jsx)(v.Z, {
              maxUsers: 4,
              users: S,
              onFocus: e => {
                var t, n, a, l;
                let s = e.relatedTarget,
                  i = null === (n = e.currentTarget.parentElement) || void 0 === n ? void 0 : null === (t = n.parentElement) || void 0 === t ? void 0 : t.parentElement;
                if ((null == s ? void 0 : s.parentElement) !== i)
                  (null == s ? void 0 : null === (l = s.parentElement) || void 0 === l ? void 0 : null === (a = l.parentElement) || void 0 === a ? void 0 : a.parentElement) !== i && w();
              }
            }),
            _ && (0, s.jsx)(y, {
              clip: l,
              actionsDisabled: c,
              exporting: o,
              onBeforeDelete: H,
              onDelete: p,
              onEdit: x,
              onShare: L,
              onBlur: e => {
                var t;
                (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && V();
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