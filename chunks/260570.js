n.d(t, {
  Z: function() {
return M;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(338545),
  l = n(442837),
  u = n(846519),
  c = n(481060),
  d = n(788307),
  _ = n(607070),
  E = n(100527),
  f = n(906732),
  h = n(676035),
  p = n(633302),
  m = n(314897),
  I = n(158776),
  T = n(785717),
  g = n(277085),
  S = n(825801),
  A = n(215105),
  N = n(429974),
  v = n(228168),
  O = n(981631),
  R = n(689938),
  C = n(346050);
let y = 'text-sm/medium',
  D = 36,
  L = 144;

function b(e) {
  let {
statusActivity: t,
user: a,
guildId: h,
channelId: m,
profileType: I,
hasEntered: O = !0,
animate: b = !0,
editEnabled: M,
showReplyPopout: P = !1,
onReply: U,
onClose: w
  } = e, {
analyticsLocations: x
  } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {
trackUserProfileAction: G
  } = (0, T.KZ)(), k = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [B] = i.useState(() => new u.V7()), [F, V] = i.useState(!0), H = i.useRef(null), Z = i.useRef(null), Y = i.useRef(null), j = i.useRef(null), {
emoji: W,
state: K
  } = null != t ? t : {}, z = null != K && '' !== K ? K : null, q = null != z && z.length > 0, Q = null != W, X = Q && !q, $ = Q ? 1.25 : 0, J = 18 + $, ee = L + $, et = D + $, en = Q || q, er = M && !en, ei = M && en, [ea, es] = i.useState(X), [eo, el] = i.useState(!X), [eu, ec] = i.useState(!1);
  i.useLayoutEffect(() => {
if (null == H.current || X)
  return;
let e = H.current.getBoundingClientRect().height;
if (es(X || e <= J), O) {
  var t, n, r, i;
  let e = null !== (r = null === (t = H.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : ee,
    a = null !== (i = null === (n = Y.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : et;
  el(!X && e > a), Z.current = e, j.current = a;
}
  }, [
O,
X,
J,
ee,
et
  ]);
  let [ed, e_] = (0, o.useSpring)(() => ({
maxHeight: ''.concat(et, 'px'),
config: {
  clamp: !0,
  duration: k ? 0 : 150
}
  }));
  if (i.useEffect(() => () => B.stop(), [B]), !en && !er)
return null;
  let eE = e => {
  var t, n;
  if (!!eo) {
    if (e) {
      let e = Math.min(null !== (t = Z.current) && void 0 !== t ? t : ee, ee);
      e_({
        maxHeight: ''.concat(e, 'px'),
        delay: k ? 0 : 300,
        config: {
          clamp: !0,
          duration: k ? 0 : 150
        }
      });
    } else {
      let e = Math.min(null !== (n = j.current) && void 0 !== n ? n : et, et);
      e_({
        maxHeight: ''.concat(e, 'px'),
        delay: 0
      });
    }
    if (k) {
      V(!e);
      return;
    }
    B.start(e ? 300 : 150, () => {
      V(!e);
    });
  }
},
ef = () => Q ? (0, r.jsx)(d.I, {
  className: q ? C.statusEmojiInline : C.statusEmojiOnly,
  emoji: W,
  animate: b,
  hideTooltip: !1,
  tooltipDelay: v.vB
}) : null,
eh = () => q ? (0, r.jsx)(c.Text, {
  variant: y,
  className: C.statusText,
  children: z
}) : null,
ep = () => {
  let e = s()(C.content, {
    [C.clamp]: F,
    [C.unclamp]: !F,
    [C.singleLineAlign]: ea
  });
  return (0, r.jsxs)(o.animated.div, {
    style: ed,
    className: e,
    children: [
      ef(),
      eh()
    ]
  });
},
em = () => (0, r.jsxs)('div', {
  className: s()(C.content, C.clamp, C.placeholderWidth, {
    [C.panel]: I === v.y0.PANEL
  }),
  ref: Y,
  children: [
    ef(),
    eh()
  ]
}),
eI = () => (0, r.jsxs)('div', {
  className: s()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, {
    [C.panel]: I === v.y0.PANEL
  }),
  ref: H,
  children: [
    ef(),
    eh()
  ]
}),
eT = () => (0, r.jsxs)('div', {
  className: C.content,
  children: [
    (0, r.jsx)(c.CirclePlusIcon, {
      className: C.addStatusIcon,
      colorClass: C.addStatusIconColor
    }),
    (0, r.jsx)(c.Text, {
      variant: y,
      className: C.addStatusPrompt,
      children: R.Z.Messages.USER_SETTINGS_ADD_STATUS
    })
  ]
}),
eg = () => {
  var e;
  return er ? R.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL : R.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
    emoji: null !== (e = null == W ? void 0 : W.name) && void 0 !== e ? e : '',
    status: K
  });
},
eS = () => {
  G({
    action: 'PRESS_ADD_CUSTOM_STATUS'
  }), null == w || w(), (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('51714').then(n.bind(n, 211065));
    return t => (0, r.jsx)(e, {
      ...t,
      sourceAnalyticsLocations: x
    });
  });
},
eA = {
  [C.biteSize]: I === v.y0.BITE_SIZE,
  [C.fullSize]: I === v.y0.FULL_SIZE,
  [C.panel]: I === v.y0.PANEL
},
eN = s()(C.background, {
  [C.editable]: ei
}),
ev = s()({
  [C.statusBubbleShape]: !q && Q || !ea,
  [C.statusBubbleSingleLineWithTextShape]: ea && q || er
}),
eO = s()(C.statusBubbleOuter, eA, ev, {
  [C.statusBubbleOuterAddStatusCursor]: er
}),
eR = s()(C.statusBubble, ev, {
  [C.statusBubbleEmojiOnlyPadding]: X,
  [C.statusBubbleWithTextPadding]: q || er,
  [C.statusBubbleWithTextMinWidth]: q,
  [C.statusBubbleCopyStatusCursor]: en
}),
eC = () => {
  if (Q) {
    let e = null != W.id ? '`' + ':'.concat(W.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(W.name);
    return X ? ''.concat(e) : ''.concat(e, ' ').concat(K);
  }
  if (!X)
    return ''.concat(K);
},
ey = () => (0, r.jsxs)(c.ClickableContainer, {
  className: s()(C.visibleContainer, eA, eN),
  'aria-label': eg(),
  focusProps: {
    ringClassName: ev
  },
  onClick: er ? eS : void 0,
  onFocus: () => {
    ec(!0), eE(!0);
  },
  onBlur: e => {
    !e.currentTarget.contains(e.relatedTarget) && (ec(!1), eE(!1));
  },
  onMouseOver: () => {
    G({
      action: 'HOVER_CUSTOM_STATUS'
    }), ec(!0), eE(!0);
  },
  onMouseLeave: () => {
    ec(!1), eE(!1);
  },
  children: [
    (0, r.jsx)('div', {
      className: eO,
      children: (0, r.jsxs)('span', {
        className: eR,
        children: [
          en && ep(),
          er && eT()
        ]
      })
    }),
    en && (0, r.jsx)(S.Z, {
      user: a,
      sourceDetails: eC(),
      sourceType: v.N9.STATUS,
      isVisible: eu,
      isExpandable: eo,
      onReply: U
    }),
    ei && (0, r.jsx)(g.Z, {
      isVisible: eu,
      isExpandable: eo,
      onClose: w
    })
  ]
});
  return (0, r.jsxs)('div', {
children: [
  (0, r.jsx)('div', {
    className: s()(C.invisibleContainer, eA),
    children: (0, r.jsx)('div', {
      className: eO,
      children: (0, r.jsxs)('span', {
        className: eR,
        children: [
          er && eT(),
          en && em(),
          en && eI()
        ]
      })
    })
  }),
  (0, r.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        setPopoutRef: t
      } = e;
      return (0, r.jsx)(A.Z, {
        user: a,
        guildId: h,
        channelId: m,
        profileType: I,
        sourceDetails: eC(),
        sourceType: v.N9.STATUS,
        setPopoutRef: t,
        modalKey: N.d,
        onReply: U
      });
    },
    animationPosition: 'top',
    position: 'bottom',
    align: 'center',
    shouldShow: P,
    children: () => ey()
  })
]
  });
}

function M(e) {
  let {
user: t,
editEnabled: n,
...i
  } = e, a = (0, l.e7)([m.default], () => m.default.getId() === t.id), s = (0, h.a)(), o = (0, l.e7)([I.Z], () => I.Z.findActivity(t.id, e => {
let {
  type: t
} = e;
return t === O.IIU.CUSTOM_STATUS;
  })), {
analyticsLocations: u
  } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS);
  return (0, r.jsx)(f.Gt, {
value: u,
children: (0, r.jsx)(b, {
  user: t,
  editEnabled: n && a,
  statusActivity: n && a ? s : o,
  ...i
})
  });
}