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
isReplySource: P,
onReply: U,
showReplyPopout: w = !1,
showGuildProfile: x = !0,
onClose: G
  } = e, {
analyticsLocations: k
  } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {
trackUserProfileAction: B
  } = (0, T.KZ)(), F = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [V] = i.useState(() => new u.V7()), [H, Z] = i.useState(!0), Y = i.useRef(null), j = i.useRef(null), W = i.useRef(null), K = i.useRef(null), {
emoji: z,
state: q
  } = null != t ? t : {}, Q = null != q && '' !== q ? q : null, X = null != Q && Q.length > 0, $ = null != z, J = $ && !X, ee = $ ? 1.25 : 0, et = 18 + ee, en = L + ee, er = D + ee, ei = $ || X, ea = M && !ei, es = M && ei, [eo, el] = i.useState(J), [eu, ec] = i.useState(!J), [ed, e_] = i.useState(!1), eE = I === v.y0.FULL_SIZE ? x ? N.TW : N.c1 : void 0;
  i.useLayoutEffect(() => {
if (null == Y.current || J)
  return;
let e = Y.current.getBoundingClientRect().height;
if (el(J || e <= et), O) {
  var t, n, r, i;
  let e = null !== (r = null === (t = Y.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : en,
    a = null !== (i = null === (n = W.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : er;
  ec(!J && e > a), j.current = e, K.current = a;
}
  }, [
O,
J,
et,
en,
er
  ]);
  let [ef, eh] = (0, c.useSpring)(() => ({
maxHeight: ''.concat(er, 'px'),
config: {
  clamp: !0,
  duration: 150
}
  }));
  if (i.useEffect(() => () => V.stop(), [V]), !ei && !ea)
return null;
  let ep = e => {
  var t, n;
  if (!!eu) {
    if (e) {
      let e = Math.min(null !== (t = j.current) && void 0 !== t ? t : en, en);
      eh({
        maxHeight: ''.concat(e, 'px'),
        delay: F ? 0 : 300,
        config: {
          clamp: !0,
          duration: F ? 0 : 150
        }
      });
    } else {
      let e = Math.min(null !== (n = K.current) && void 0 !== n ? n : er, er);
      eh({
        maxHeight: ''.concat(e, 'px'),
        delay: 0
      });
    }
    if (F) {
      Z(!e);
      return;
    }
    V.start(e ? 300 : 150, () => {
      Z(!e);
    });
  }
},
em = () => $ ? (0, r.jsx)(d.I, {
  className: X ? C.statusEmojiInline : C.statusEmojiOnly,
  emoji: z,
  animate: b,
  hideTooltip: !1,
  tooltipDelay: v.vB
}) : null,
eI = () => X ? (0, r.jsx)(c.Text, {
  variant: y,
  className: C.statusText,
  children: Q
}) : null,
eT = () => {
  let e = s()(C.content, {
    [C.clamp]: H,
    [C.unclamp]: !H,
    [C.singleLineAlign]: eo
  });
  return (0, r.jsxs)(o.animated.div, {
    style: ef,
    className: e,
    children: [
      em(),
      eI()
    ]
  });
},
eg = () => (0, r.jsxs)('div', {
  className: s()(C.content, C.clamp, C.placeholderWidth, {
    [C.panel]: I === v.y0.PANEL
  }),
  ref: W,
  children: [
    em(),
    eI()
  ]
}),
eS = () => (0, r.jsxs)('div', {
  className: s()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, {
    [C.panel]: I === v.y0.PANEL
  }),
  ref: Y,
  children: [
    em(),
    eI()
  ]
}),
eA = () => (0, r.jsxs)('div', {
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
eN = () => {
  var e;
  return ea ? R.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL : R.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
    emoji: null !== (e = null == z ? void 0 : z.name) && void 0 !== e ? e : '',
    status: q
  });
},
ev = () => {
  B({
    action: 'PRESS_ADD_CUSTOM_STATUS'
  }), null == G || G(), (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('51714').then(n.bind(n, 211065));
    return t => (0, r.jsx)(e, {
      ...t,
      sourceAnalyticsLocations: k
    });
  });
},
eO = {
  [C.biteSize]: I === v.y0.BITE_SIZE,
  [C.fullSize]: I === v.y0.FULL_SIZE,
  [C.panel]: I === v.y0.PANEL
},
eR = s()(C.background, {
  [C.editable]: es
}),
eC = {
  [C.hoisted]: P
},
ey = s()({
  [C.statusBubbleShape]: !X && $ || !eo,
  [C.statusBubbleSingleLineWithTextShape]: eo && X || ea
}),
eD = s()(C.statusBubbleOuter, eO, ey, {
  [C.statusBubbleOuterAddStatusCursor]: ea
}),
eL = s()(C.statusBubble, ey, {
  [C.statusBubbleEmojiOnlyPadding]: J,
  [C.statusBubbleWithTextPadding]: X || ea,
  [C.statusBubbleWithTextMinWidth]: X,
  [C.statusBubbleCopyStatusCursor]: ei
}),
eb = () => {
  if ($) {
    let e = null != z.id ? '`' + ':'.concat(z.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(z.name);
    return J ? ''.concat(e) : ''.concat(e, ' ').concat(q);
  }
  if (!J)
    return ''.concat(q);
},
eM = () => (0, r.jsxs)(c.ClickableContainer, {
  className: s()(C.visibleContainer, eO, eR, eC),
  'aria-label': eN(),
  focusProps: {
    ringClassName: ey
  },
  onClick: ea ? ev : void 0,
  onFocus: () => {
    e_(!0), ep(!0);
  },
  onBlur: e => {
    !e.currentTarget.contains(e.relatedTarget) && (e_(!1), ep(!1));
  },
  onMouseOver: () => {
    B({
      action: 'HOVER_CUSTOM_STATUS'
    }), e_(!0), ep(!0);
  },
  onMouseLeave: () => {
    e_(!1), ep(!1);
  },
  children: [
    (0, r.jsx)('div', {
      className: eD,
      children: (0, r.jsxs)('span', {
        className: eL,
        children: [
          ei && eT(),
          ea && eA()
        ]
      })
    }),
    ei && (0, r.jsx)(S.Z, {
      user: a,
      sourceDetails: eb(),
      sourceType: v.N9.STATUS,
      isVisible: ed,
      isExpandable: eu,
      onReply: U
    }),
    es && (0, r.jsx)(g.Z, {
      isVisible: ed,
      isExpandable: eu,
      onClose: G
    })
  ]
});
  return (0, r.jsxs)('div', {
children: [
  (0, r.jsx)('div', {
    className: s()(C.invisibleContainer, eO),
    children: (0, r.jsx)('div', {
      className: eD,
      children: (0, r.jsxs)('span', {
        className: eL,
        children: [
          ea && eA(),
          ei && eg(),
          ei && eS()
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
        sourceDetails: eb(),
        sourceType: v.N9.STATUS,
        setPopoutRef: t,
        modalKey: eE,
        onReply: U
      });
    },
    animationPosition: 'top',
    position: 'bottom',
    align: 'center',
    spacing: 6,
    shouldShow: w,
    children: () => eM()
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