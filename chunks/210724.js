n.d(t, {
  P: function() {
return x;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(338545),
  o = n(442837),
  c = n(481060),
  d = n(110924),
  _ = n(607070),
  u = n(819640),
  E = n(617136),
  T = n(113434),
  I = n(569984),
  R = n(497505),
  C = n(918701),
  g = n(977156),
  p = n(5881),
  A = n(602667),
  m = n(78826),
  N = n(693900),
  f = n(617889),
  h = n(46140),
  S = n(981631),
  M = n(487383);

function x(e) {
  var t, n, r;
  let {
quest: I
  } = e, x = (0, p.T)({
quest: I,
location: h.dr.QUESTS_BAR
  }), b = (0, g.Zy)({
location: h.dr.QUESTS_BAR
  }), O = (0, o.e7)([_.Z], () => _.Z.useReducedMotion), P = (0, o.e7)([u.Z], () => u.Z.hasLayers()), v = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, L = (0, d.Z)(v), Z = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, D = (0, d.Z)(Z), B = (null === (r = I.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null, j = null != I.userStatus && (0, C.zE)(I.userStatus, R.jn.QUEST_BAR), U = (0, T.tP)(I), {
hasError: G,
isLoading: y
  } = (0, m.d7)(), k = b && !j && !B && !U && !y, H = a.useRef(k), w = (0, f.B)(I, k && !G), F = a.useRef(-1), V = a.useRef(!1), [W, K] = a.useState(!1), [Y, z] = a.useState(!1), [Q, q] = a.useState(!0), [J, X] = a.useState(!0), [$, ee] = a.useState(w.preEnrollmentExpandedHeight), et = a.useRef(null), en = a.useCallback(e => {
q(!1), z(e);
  }, []), es = a.useCallback(() => {
var e, t;
ee((null !== (t = null === (e = et.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * w.paddingVertical);
  }, [w.paddingVertical]), ea = a.useCallback(() => {
es(), en(!0);
  }, [
es,
en
  ]), er = a.useCallback(() => {
K(!0);
  }, []), ei = a.useCallback(() => {
K(!1), !V.current && !Z && en(!1);
  }, [
Z,
en
  ]), el = a.useCallback(() => {
K(!1), !Z && en(!1), V.current = !1;
  }, [
Z,
en
  ]), eo = a.useCallback(function() {
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
  !V.current && en(!1);
  }, [
W,
w,
en
  ]), e_ = a.useCallback(() => {
(0, E.dA)({
  questId: I.id,
  event: S.rMx.QUEST_HOVER
}), V.current = !0, eo({
  withDelay: !0
});
  }, [
eo,
I
  ]), eu = a.useCallback(() => {
V.current = !1, ed();
  }, [ed]);
  a.useLayoutEffect(() => {
Z && w.shouldExpandOnQuestComplete && ea();
  }, [
ea,
Z,
w.shouldExpandOnQuestComplete
  ]), a.useLayoutEffect(() => {
v && !L && V.current && ea();
  }, [
ea,
v,
L
  ]), a.useLayoutEffect(() => {
!Z && v && !L && !V.current && en(!1);
  }, [
v,
Z,
L,
en
  ]), a.useLayoutEffect(() => {
k !== H.current && X(!1), H.current = k;
  }, [k]);
  let eE = v ? h.XZ : h.R4,
[{
  expansionSpring: eT
}, eI] = (0, c.useSpring)(() => ({
  from: {
    expansionSpring: 0
  },
  config: eE,
  onRest: () => {
    q(!0);
  },
  onStart: () => {
    q(!1);
  }
}));
  a.useEffect(() => {
eI({
  expansionSpring: Y ? 1 : 0,
  immediate: O
});
  }, [
Y,
eI,
O
  ]);
  let {
visibilitySpring: eR
  } = (0, c.useSpring)({
from: {
  visibilitySpring: 0
},
to: {
  visibilitySpring: k ? 1 : 0
},
config: {
  tension: 250,
  friction: 10,
  clamp: !0
},
onRest: () => {
  X(!0);
},
onStart: () => {
  X(!1);
}
  });
  return (a.useLayoutEffect(() => {
Z && !D && w.canCollapseOnBlur && es();
  }, [
Z,
ea,
w.canCollapseOnBlur,
es,
D
  ]), a.useEffect(() => {
G && (0, E.dA)({
  questId: I.id,
  event: S.rMx.QUEST_CONTENT_RENDERING_FAILURE,
  properties: {
    ...(0, E.mH)(R.jn.QUEST_BAR),
    reason: 'asset_loading_error'
  }
}), !b && (0, E.dA)({
  questId: I.id,
  event: S.rMx.QUEST_CONTENT_RENDERING_FAILURE,
  properties: {
    ...(0, E.mH)(R.jn.QUEST_BAR),
    reason: 'not_eligible_for_quest'
  }
});
  }, [
G,
b,
I.id
  ]), b && (k || !J || y) && !G) ? (0, s.jsx)(A.A, {
questOrQuests: I,
questContent: w.trackingCtx.content,
overrideVisibility: !P && k,
children: () => {
  let e = w.component;
  return (0, s.jsx)('div', {
    className: M.mask,
    children: (0, s.jsx)(l.animated.div, {
      'aria-hidden': !k,
      onMouseLeave: eu,
      onMouseEnter: e_,
      onFocus: ec,
      onBlur: ed,
      className: i()(M.wrapper, {
        [M.wrapperInvisible]: !k,
        [M.wrapperVisible]: k && J
      }),
      style: {
        color: I.config.colors.secondary,
        height: eR.to({
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
      children: (0, s.jsx)(l.animated.div, {
        className: i()(M.contentWrapper, {
          [M.contentWrapperExpanded]: Y,
          [M.contentWrapperAccepted]: v
        }),
        style: {
          backgroundColor: w.preEnrollmentBackgroundColor,
          backgroundImage: v ? w.postEnrollmentBackgroundImage : void 0
        },
        children: (0, s.jsx)(N.t, {
          springConfig: eE,
          isExpanded: Y,
          children: (0, s.jsx)(e, {
            expandedContentRef: et,
            expansionSpring: eT,
            isExpanded: Y,
            isExpansionAnimationComplete: Q,
            onCtxMenuClosed: ei,
            onCtxMenuOpened: er,
            onCtxMenuSelection: el,
            quest: I,
            useReducedMotion: O,
            collapsedHeight: w.collapsedHeight
          })
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
  } = e, n = (0, o.e7)([I.Z], () => {
var e;
return null !== (e = null != t ? t : I.Z.questDeliveryOverride) && void 0 !== e ? e : (0, C._)(I.Z.quests, R.jn.QUEST_BAR);
  });
  return null == n ? null : (0, s.jsx)(m.p, {
source: h.dr.QUESTS_BAR,
questId: n.id,
children: (0, s.jsx)(x, {
  quest: n
})
  }, n.id);
} : null;