n.d(t, {
  P: function() {
return x;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  r = n(469035),
  i = n(120356),
  l = n.n(i),
  o = n(338545),
  c = n(442837),
  d = n(110924),
  _ = n(607070),
  u = n(819640),
  E = n(617136),
  T = n(113434),
  I = n(569984),
  R = n(497505),
  C = n(918701),
  p = n(977156),
  g = n(5881),
  A = n(602667),
  m = n(78826),
  N = n(693900),
  f = n(617889),
  S = n(46140),
  h = n(981631),
  M = n(487383);

function x(e) {
  var t, n, i;
  let {
quest: I
  } = e, x = (0, g.T)({
quest: I,
location: S.dr.QUESTS_BAR
  }), b = (0, p.Zy)({
location: S.dr.QUESTS_BAR
  }), O = (0, c.e7)([_.Z], () => _.Z.useReducedMotion), L = (0, c.e7)([u.Z], () => u.Z.hasLayers()), P = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, v = (0, d.Z)(P), Z = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, D = (0, d.Z)(Z), B = (null === (i = I.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, j = null != I.userStatus && (0, C.zE)(I.userStatus, R.jn.QUEST_BAR), U = (0, T.tP)(I), {
hasError: G,
isLoading: y
  } = (0, m.d7)(), H = b && !j && !B && !U && !y, k = a.useRef(H), w = (0, f.B)(I, H && !G), F = a.useRef(-1), V = a.useRef(!1), [W, K] = a.useState(!1), [Y, z] = a.useState(!1), [Q, q] = a.useState(!0), [J, X] = a.useState(!0), [$, ee] = a.useState(w.preEnrollmentExpandedHeight), et = a.useRef(null), en = a.useCallback(() => {
var e, t;
ee((null !== (t = null === (e = et.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * w.paddingVertical);
  }, [w.paddingVertical]), es = (0, f.L)(w.trackingCtx.content), ea = a.useCallback(() => {
es.current.expandedAt = performance.now(), (0, r.Z)(() => {
  es.current.paintedAfterExpandAt = performance.now();
}), en(), z(!0);
  }, [
es,
en
  ]), er = a.useCallback(() => {
K(!0);
  }, []), ei = a.useCallback(() => {
K(!1), !V.current && !Z && z(!1);
  }, [Z]), el = a.useCallback(() => {
K(!1), !Z && z(!1), V.current = !1;
  }, [Z]), eo = a.useCallback(function() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
if (Y)
  return;
let {
  withDelay: t = !1
} = e;
t ? F.current = window.setTimeout(ea, 75) : ea();
  }, [
ea,
Y
  ]), ec = a.useCallback(() => {
eo();
  }, [eo]), ed = a.useCallback(() => {
if (window.clearTimeout(F.current), !!w.canCollapseOnBlur && !W)
  !V.current && z(!1);
  }, [
W,
w
  ]), e_ = a.useCallback(() => {
(0, E.dA)({
  questId: I.id,
  event: h.rMx.QUEST_HOVER
}), V.current = !0, eo({
  withDelay: !0
});
  }, [
eo,
I
  ]), eu = a.useCallback(() => {
V.current = !1, ed();
  }, [ed]), eE = a.useCallback(e => {
Y && ee(t => t + e);
  }, [Y]);
  a.useLayoutEffect(() => {
Z && w.shouldExpandOnQuestComplete && ea();
  }, [
ea,
Z,
w.shouldExpandOnQuestComplete
  ]), a.useLayoutEffect(() => {
P && !v && V.current && ea();
  }, [
ea,
P,
v
  ]), a.useLayoutEffect(() => {
!Z && P && !v && !V.current && z(!1);
  }, [
P,
Z,
v
  ]), a.useLayoutEffect(() => {
H !== k.current && X(!1), k.current = H;
  }, [H]);
  let eT = P ? S.XZ : S.R4,
[{
  expansionSpring: eI
}, eR] = (0, o.useSpring)(() => ({
  from: {
    expansionSpring: 0
  },
  config: eT,
  immediate: O,
  onRest: () => {
    es.current.expandAnimationEndedAt = performance.now(), q(!0);
  },
  onStart: () => {
    es.current.expandAnimationBeganAt = performance.now(), q(!1);
  }
})),
[{
  height: eC
}, ep] = (0, o.useSpring)(() => ({
  from: {
    height: w.collapsedHeight
  },
  config: eT,
  immediate: O
}));
  a.useLayoutEffect(() => {
eR({
  expansionSpring: Y ? 1 : 0
}), ep({
  height: Y ? $ : w.collapsedHeight
});
  }, [
Y,
$,
eR,
ep,
w.collapsedHeight
  ]);
  let {
visibilitySpring: eg
  } = (0, o.useSpring)({
from: {
  visibilitySpring: 0
},
to: {
  visibilitySpring: H ? 1 : 0
},
config: {
  tension: 250,
  friction: 10,
  clamp: !0
},
immediate: O,
onRest: () => {
  X(!0);
},
onStart: () => {
  X(!1);
}
  });
  return (a.useLayoutEffect(() => {
Z && !D && w.canCollapseOnBlur && en();
  }, [
Z,
ea,
w.canCollapseOnBlur,
en,
D
  ]), a.useEffect(() => {
G && (0, E.dA)({
  questId: I.id,
  event: h.rMx.QUEST_CONTENT_RENDERING_FAILURE,
  properties: {
    ...(0, E.mH)(R.jn.QUEST_BAR),
    reason: 'asset_loading_error'
  }
}), !b && (0, E.dA)({
  questId: I.id,
  event: h.rMx.QUEST_CONTENT_RENDERING_FAILURE,
  properties: {
    ...(0, E.mH)(R.jn.QUEST_BAR),
    reason: 'not_eligible_for_quest'
  }
});
  }, [
G,
b,
I.id
  ]), b && (H || !J || y) && !G) ? (0, s.jsx)(A.A, {
questOrQuests: I,
questContent: w.trackingCtx.content,
overrideVisibility: !L && H,
children: () => {
  let e = w.component;
  return (0, s.jsx)(o.animated.div, {
    'aria-hidden': !H,
    className: l()(M.wrapper, {
      [M.wrapperInvisible]: !H,
      [M.wrapperVisible]: H && J
    }),
    style: {
      color: I.config.colors.secondary,
      height: eg.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          !w.canCollapseOnBlur && Y ? $ : w.collapsedHeight
        ]
      })
    },
    children: (0, s.jsx)(o.animated.div, {
      onMouseLeave: eu,
      onMouseEnter: e_,
      onFocus: ec,
      onBlur: ed,
      className: l()(M.contentWrapper, {
        [M.contentWrapperExpanded]: Y,
        [M.contentWrapperAccepted]: P
      }),
      style: {
        backgroundColor: w.preEnrollmentBackgroundColor,
        backgroundImage: P ? w.postEnrollmentBackgroundImage : void 0,
        height: eC,
        transform: eg.to({
          range: [
            0,
            1
          ],
          output: [
            100,
            0
          ]
        }).to(e => 'translateY('.concat(e, '%)'))
      },
      children: (0, s.jsx)(N.t, {
        springConfig: eT,
        isExpanded: Y,
        onHeightChange: eE,
        children: (0, s.jsx)(e, {
          expandedContentRef: et,
          expansionSpring: eI,
          isExpanded: Y,
          isExpansionAnimationComplete: Q,
          onCtxMenuClosed: ei,
          onCtxMenuOpened: er,
          onCtxMenuSelection: el,
          quest: I,
          useReducedMotion: O
        })
      })
    })
  });
}
  }) : (G ? x.log('Not rendered due to asset error') : !b && x.log('Not rendered due to ineligibility'), null);
}
t.Z = 12633 == n.j ? function(e) {
  let {
overrideQuest: t
  } = e, n = (0, c.e7)([I.Z], () => {
var e;
return null !== (e = null != t ? t : I.Z.questDeliveryOverride) && void 0 !== e ? e : (0, C._)(I.Z.quests, R.jn.QUEST_BAR);
  });
  return null == n ? null : (0, s.jsx)(m.p, {
source: S.dr.QUESTS_BAR,
questId: n.id,
children: (0, s.jsx)(x, {
  quest: n
})
  }, n.id);
} : null;