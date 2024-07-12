n.d(t, {
  Z: function() {
return D;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(338545),
  l = n(442837),
  u = n(846519),
  c = n(481060),
  d = n(788307),
  _ = n(607070),
  E = n(100527),
  f = n(906732),
  h = n(676035),
  p = n(314897),
  m = n(158776),
  I = n(785717),
  T = n(277085),
  g = n(825801),
  S = n(228168),
  A = n(981631),
  N = n(689938),
  v = n(230891);
let O = 'text-sm/medium',
  R = 36,
  C = 144;

function y(e) {
  var t;
  let {
statusActivity: a,
profileType: h,
editEnabled: p,
reactReplyEnabled: m,
hasEntered: A = !0,
animate: y = !0,
onClose: D
  } = e, {
analyticsLocations: L
  } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {
trackUserProfileAction: b
  } = (0, I.KZ)(), M = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [P] = i.useState(() => new u.V7()), [U, w] = i.useState(!0), x = i.useRef(null), G = i.useRef(null), k = i.useRef(null), B = i.useRef(null), {
emoji: F,
state: V
  } = null != a ? a : {}, H = null != V && '' !== V ? V : null, Z = null != H && H.length > 0, Y = null != F, j = Y && !Z, W = Y ? 1.25 : 0, K = 18 + W, z = C + W, q = R + W, Q = Y || Z, X = p && !Q, $ = p && Q, J = m && Q, [ee, et] = i.useState(j), [en, er] = i.useState(!j), [ei, ea] = i.useState(!1);
  i.useLayoutEffect(() => {
if (null == x.current || j)
  return;
let e = x.current.getBoundingClientRect().height;
if (et(j || e <= K), A) {
  var t, n, r, i;
  let e = null !== (r = null === (t = x.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : z,
    a = null !== (i = null === (n = k.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : q;
  er(!j && e > a), G.current = e, B.current = a;
}
  }, [
A,
j,
K,
z,
q
  ]);
  let [eo, es] = (0, s.useSpring)(() => ({
maxHeight: ''.concat(q, 'px'),
config: {
  clamp: !0,
  duration: M ? 0 : 150
}
  }));
  if (i.useEffect(() => () => P.stop(), [P]), !Q && !X)
return null;
  let el = e => {
  var t, n;
  if (!!en) {
    if (e) {
      let e = Math.min(null !== (t = G.current) && void 0 !== t ? t : z, z);
      es({
        maxHeight: ''.concat(e, 'px'),
        delay: M ? 0 : 300,
        config: {
          clamp: !0,
          duration: M ? 0 : 150
        }
      });
    } else {
      let e = Math.min(null !== (n = B.current) && void 0 !== n ? n : q, q);
      es({
        maxHeight: ''.concat(e, 'px'),
        delay: 0
      });
    }
    if (M) {
      w(!e);
      return;
    }
    P.start(e ? 300 : 150, () => {
      w(!e);
    });
  }
},
eu = () => Y ? (0, r.jsx)(d.I, {
  className: Z ? v.statusEmojiInline : v.statusEmojiOnly,
  emoji: F,
  animate: y,
  hideTooltip: !1,
  tooltipDelay: S.vB
}) : null,
ec = () => Z ? (0, r.jsx)(c.Text, {
  variant: O,
  className: v.statusText,
  children: H
}) : null,
ed = () => (0, r.jsxs)('div', {
  className: v.content,
  children: [
    (0, r.jsx)(c.CirclePlusIcon, {
      className: v.addStatusIcon,
      colorClass: v.addStatusIconColor
    }),
    (0, r.jsx)(c.Text, {
      variant: O,
      className: v.addStatusPrompt,
      children: N.Z.Messages.USER_SETTINGS_ADD_STATUS
    })
  ]
}),
e_ = {
  [v.biteSize]: h === S.y0.BITE_SIZE,
  [v.fullSize]: h === S.y0.FULL_SIZE,
  [v.panel]: h === S.y0.PANEL
},
eE = o()(v.background, {
  [v.editable]: $
}),
ef = o()({
  [v.statusBubbleShape]: !Z && Y || !ee,
  [v.statusBubbleSingleLineWithTextShape]: ee && Z || X
}),
eh = o()(v.statusBubbleOuter, e_, ef, {
  [v.statusBubbleOuterAddStatusCursor]: X
}),
ep = o()(v.statusBubble, ef, {
  [v.statusBubbleEmojiOnlyPadding]: j,
  [v.statusBubbleWithTextPadding]: Z || X,
  [v.statusBubbleWithTextMinWidth]: Z,
  [v.statusBubbleCopyStatusCursor]: Q
});
  return (0, r.jsx)(f.Gt, {
value: L,
children: (0, r.jsxs)('div', {
  children: [
    (0, r.jsx)('div', {
      className: o()(v.invisibleContainer, e_),
      children: (0, r.jsx)('div', {
        className: eh,
        children: (0, r.jsxs)('span', {
          className: ep,
          children: [
            X && ed(),
            Q && (0, r.jsxs)('div', {
              className: o()(v.content, v.clamp, v.placeholderWidth, {
                [v.panel]: h === S.y0.PANEL
              }),
              ref: k,
              children: [
                eu(),
                ec()
              ]
            }),
            Q && (0, r.jsxs)('div', {
              className: o()(v.content, v.unclamp, v.placeholderWidth, v.incorporeal, {
                [v.panel]: h === S.y0.PANEL
              }),
              ref: x,
              children: [
                eu(),
                ec()
              ]
            })
          ]
        })
      })
    }),
    (0, r.jsxs)(c.ClickableContainer, {
      className: o()(v.visibleContainer, e_, eE),
      'aria-label': X ? N.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL : N.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
        emoji: null !== (t = null == F ? void 0 : F.name) && void 0 !== t ? t : '',
        status: V
      }),
      focusProps: {
        ringClassName: ef
      },
      onClick: X ? () => {
        b({
          action: 'PRESS_ADD_CUSTOM_STATUS'
        }), null == D || D(), (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e('51714').then(n.bind(n, 211065));
          return t => (0, r.jsx)(e, {
            ...t,
            sourceAnalyticsLocations: L
          });
        });
      } : void 0,
      onFocus: () => {
        ea(!0), el(!0);
      },
      onBlur: e => {
        !e.currentTarget.contains(e.relatedTarget) && (ea(!1), el(!1));
      },
      onMouseOver: () => {
        b({
          action: 'HOVER_CUSTOM_STATUS'
        }), ea(!0), el(!0);
      },
      onMouseLeave: () => {
        ea(!1), el(!1);
      },
      children: [
        (0, r.jsx)('div', {
          className: eh,
          children: (0, r.jsxs)('span', {
            className: ep,
            children: [
              Q && (() => {
                let e = o()(v.content, {
                  [v.clamp]: U,
                  [v.unclamp]: !U,
                  [v.singleLineAlign]: ee
                });
                return (0, r.jsxs)(s.animated.div, {
                  style: eo,
                  className: e,
                  children: [
                    eu(),
                    ec()
                  ]
                });
              })(),
              X && ed()
            ]
          })
        }),
        J && (0, r.jsx)(g.Z, {
          isVisible: ei,
          isExpandable: en
        }),
        $ && (0, r.jsx)(T.Z, {
          isVisible: ei,
          isExpandable: en,
          onClose: D
        })
      ]
    })
  ]
})
  });
}

function D(e) {
  let {
user: t,
editEnabled: n,
reactReplyEnabled: i,
...a
  } = e, o = (0, l.e7)([p.default], () => p.default.getId() === t.id), s = (0, h.a)(), u = (0, l.e7)([m.Z], () => m.Z.findActivity(t.id, e => {
let {
  type: t
} = e;
return t === A.IIU.CUSTOM_STATUS;
  }));
  return (0, r.jsx)(y, {
reactReplyEnabled: i && !o,
editEnabled: n && o,
statusActivity: n && o ? s : u,
...a
  });
}