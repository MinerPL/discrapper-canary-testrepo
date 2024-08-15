s.r(t), s.d(t, {
  default: function() {
return v;
  }
}), s(47120);
var n = s(735250),
  i = s(470079),
  a = s(512722),
  r = s.n(a),
  l = s(990547),
  o = s(399606),
  u = s(481060),
  d = s(232567),
  c = s(809206),
  E = s(479531),
  _ = s(484459),
  m = s(594174),
  g = s(626135),
  S = s(51144),
  I = s(986197),
  T = s(135200),
  O = s(346585),
  N = s(347649),
  h = s(361117),
  f = s(108793),
  M = s(635774),
  L = s(387955),
  x = s(801461),
  C = s(448624),
  R = s(981631),
  A = s(689938),
  P = s(962830);

function v(e) {
  let t, {
  source: s,
  transitionState: a,
  onClose: v,
  oneClickFlow: y = !1
} = e,
[Z, U] = i.useState(y ? C.A.SUGGESTIONS : C.A.INFO),
[G, b] = i.useState(!1),
[j, D] = i.useState(null),
[W, k] = i.useState(y ? x.Wq.SUGGESTION : x.Wq.NONE),
[F, w] = i.useState(!1),
[B, q] = i.useState(!1),
H = i.useRef(null),
X = (0, o.e7)([T.Z], () => T.Z.isCurrentUsernameInvalid()),
V = (0, o.e7)([m.default], () => {
  let e = m.default.getCurrentUser();
  return r()(null != e, 'PomeloModal: user cannot be undefined'), e;
}),
z = (0, N.CC)(),
{
  usernameSuggestion: Y,
  usernameSuggestionLoading: K
} = (0, h.G)(y ? x.en : void 0);
  i.useEffect(() => {
W === x.Wq.EDIT_USERNAME && q(!0), g.default.track(R.rMx.POMELO_EDIT_STEP_VIEWED, {
  source: s,
  step: W
});
  }, [
W,
s
  ]), i.useEffect(() => {
!B && !F && null != Y && Y.length > 0 && $(e => ({
  ...e,
  username: Y
}));
  }, [
Y,
B,
F
  ]);
  let [Q, $] = i.useState({
username: (0, O.e$)(V),
globalName: S.ZP.getName(V)
  }), J = e => {
D(null), null != e.username && w(!0), $(t => ({
  ...t,
  ...e
}));
  }, ee = i.useMemo(() => [{
  slideId: C.A.INFO,
  next: C.A.EDIT_SCREEN,
  footerButtons: [
    'REMIND_ME_LATER',
    'GET_STARTED'
  ]
},
{
  slideId: C.A.EDIT_SCREEN,
  next: C.A.FINISH_LATER,
  back: C.A.INFO,
  footerButtons: [
    W === x.Wq.PREVIEW ? 'GOT_IT' : 'BACK',
    W === x.Wq.PREVIEW ? 'GOT_IT' : W === x.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT'
  ]
},
{
  slideId: C.A.FINISH_LATER,
  back: C.A.EDIT_SCREEN
},
{
  slideId: C.A.SUGGESTIONS,
  footerButtons: [W === x.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
},
{
  slideId: C.A.FINISH_LATER
}
  ], [W]), et = ee.length, es = i.useCallback(async () => {
if (Q.globalName.length <= 0) {
  let e = A.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
    minNum: 1,
    maxNum: 32
  });
  D(e), g.default.track(R.rMx.POMELO_ERRORS, {
    reason: e,
    display_name_error: !0,
    location: 'modal'
  });
  return;
}
if (S.ZP.getGlobalName(V) === Q.globalName) {
  k(x.Wq.EDIT_USERNAME);
  return;
}
try {
  D(null), b(!0), await (0, c.S2)({
    global_name: Q.globalName
  }), k(x.Wq.EDIT_USERNAME);
} catch (t) {
  let e = new E.Z(t).getAnyErrorMessage();
  g.default.track(R.rMx.POMELO_ERRORS, {
    reason: e,
    display_name_error: !0,
    location: 'modal'
  }), D(e);
} finally {
  b(!1);
}
  }, [
V,
Q
  ]), en = i.useCallback(async () => {
try {
  D(null), b(!0), await I.Z.createPomelo({
    username: (0, O.R_)(Q.username)
  }, y), await (0, d.In)(V.id), k(x.Wq.PREVIEW);
} catch (s) {
  let e = new E.Z(s),
    t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : A.Z.Messages.ERROR_GENERIC_TITLE;
  D(t), g.default.track(R.rMx.POMELO_ERRORS, {
    reason: t,
    username_error: !0,
    location: 'modal',
    one_click_flow: y
  });
} finally {
  b(!1);
}
  }, [
Q,
V.id,
y
  ]), ei = X || (0, O.NX)(V), ea = i.useCallback(() => {
k(ei ? x.Wq.EDIT_USERNAME : x.Wq.EDIT_DISPLAY_NAME), U(ee[Math.min(et - 1, Z + 1)].slideId);
  }, [
Z,
ee,
et,
ei
  ]), er = i.useCallback(() => {
D(null), Z === C.A.EDIT_SCREEN ? W === x.Wq.EDIT_USERNAME ? ei ? (k(x.Wq.NONE), U(ee[Math.max(0, Z - 1)].slideId)) : k(x.Wq.EDIT_DISPLAY_NAME) : W === x.Wq.EDIT_DISPLAY_NAME ? (k(x.Wq.NONE), U(ee[Math.max(0, Z - 1)].slideId)) : W === x.Wq.PREVIEW && k(x.Wq.EDIT_USERNAME) : U(ee[Math.max(0, Z - 1)].slideId);
  }, [
ee,
Z,
W,
ei
  ]), el = i.useCallback(() => {
U(C.A.FINISH_LATER);
  }, []), eo = i.useCallback(() => {
y ? (U(C.A.SUGGESTIONS), k(x.Wq.SUGGESTION)) : (U(C.A.INFO), k(x.Wq.NONE));
  }, [y]), eu = i.useMemo(() => {
if (Z === C.A.EDIT_SCREEN && W === x.Wq.EDIT_DISPLAY_NAME)
  return es;
if (Z === C.A.EDIT_SCREEN && W === x.Wq.EDIT_USERNAME)
  return en;
if (Z === C.A.SUGGESTIONS && W === x.Wq.SUGGESTION)
  return en;
else
  return ea;
  }, [
Z,
W,
es,
en,
ea
  ]), ed = i.useMemo(() => {
var e, t;
return p(null !== (t = null === (e = ee.find(e => e.slideId === Z)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
  handleNext: eu,
  handleBack: er,
  handleRemindMeLater: el,
  onClose: v
}, G, K, F);
  }, [
er,
el,
eu,
v,
ee,
Z,
G,
K,
F
  ]), ec = i.useMemo(() => (0, O.zV)(V), [V]);
  i.useLayoutEffect(() => {
(0, _.Z)(V.id, ec);
  }, [
V,
ec
  ]), i.useEffect(() => {
var e, t;
switch (W) {
  case x.Wq.EDIT_DISPLAY_NAME:
    null === (e = H.current) || void 0 === e || e.focusDisplayName();
    break;
  case x.Wq.EDIT_USERNAME:
  case x.Wq.SUGGESTION:
    null === (t = H.current) || void 0 === t || t.focusUsername();
}
  }, [W]);
  return !F && null == j && (W === x.Wq.EDIT_USERNAME ? t = A.Z.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
source: V.username
  }) : W === x.Wq.SUGGESTION && (K || null != Y) && (t = A.Z.Messages.POMELO_SUGGESTIONS_OCF)), (0, n.jsxs)(u.ModalRoot, {
className: P.modalRoot,
impression: {
  impressionName: l.ImpressionNames.POMELO_LANDING,
  impressionProperties: {
    source: s,
    impression_group: l.ImpressionGroups.POMELO_FLOW,
    one_click_flow: y
  }
},
transitionState: a,
size: u.ModalSize.DYNAMIC,
children: [
  (0, n.jsx)(u.Button, {
    onClick: () => {
      z && (Z === C.A.SUGGESTIONS || Z === C.A.EDIT_SCREEN) ? U(C.A.FINISH_LATER) : v();
    },
    size: u.Button.Sizes.MIN,
    look: u.Button.Looks.BLANK,
    className: P.closeContainer,
    'aria-label': A.Z.Messages.CLOSE,
    children: (0, n.jsx)(u.XSmallIcon, {
      size: 'custom',
      color: 'currentColor',
      width: 15,
      height: 15,
      className: P.close
    })
  }),
  (0, n.jsx)(u.ModalContent, {
    className: P.contentContainer,
    children: (0, n.jsxs)(u.Slides, {
      activeSlide: Z,
      width: 480,
      children: [
        (0, n.jsx)(u.Slide, {
          id: C.A.INFO,
          children: (0, n.jsx)(L.Z, {
            user: V
          })
        }),
        (0, n.jsx)(u.Slide, {
          id: C.A.EDIT_SCREEN,
          children: (0, n.jsx)(f.Z, {
            user: V,
            error: j,
            editState: W,
            userRef: H,
            formValues: Q,
            footerNotice: t,
            onChangeFormValue: J,
            onFocusUsername: () => k(x.Wq.EDIT_USERNAME),
            onFocusDisplayName: () => k(x.Wq.EDIT_DISPLAY_NAME),
            onClose: v
          })
        }),
        (0, n.jsx)(u.Slide, {
          id: C.A.FINISH_LATER,
          children: (0, n.jsx)(M.Z, {
            onClose: v,
            handleStartFlow: eo
          })
        }),
        (0, n.jsx)(u.Slide, {
          id: C.A.SUGGESTIONS,
          children: (0, n.jsx)(f.Z, {
            user: V,
            error: j,
            editState: W,
            userRef: H,
            formValues: Q,
            footerNotice: t,
            onChangeFormValue: J,
            onFocusUsername: () => k(x.Wq.SUGGESTION),
            onFocusDisplayName: () => k(x.Wq.EDIT_DISPLAY_NAME),
            onClose: v,
            usernameSuggestionLoading: K,
            oneClickFlow: y
          })
        })
      ]
    })
  }),
  ed
]
  });
}
let p = (e, t, s, i, a) => 0 === e.length ? null : (0, n.jsxs)(u.ModalFooter, {
  className: P.footer,
  children: [
(0, n.jsxs)('div', {
  className: P.inline,
  children: [
    e.includes('REMIND_ME_LATER') && (0, n.jsx)(u.Button, {
      className: P.unfilledButton,
      type: 'button',
      size: u.Button.Sizes.SMALL,
      look: u.Button.Looks.BLANK,
      color: u.Button.Colors.CUSTOM,
      onClick: t.handleRemindMeLater,
      children: A.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
    }),
    e.includes('NEXT') && (0, n.jsx)(u.Button, {
      type: 'button',
      size: u.Button.Sizes.SMALL,
      submitting: s,
      onClick: t.handleNext,
      children: A.Z.Messages.NEXT
    }),
    e.includes('SUBMIT') && (0, n.jsx)(u.Button, {
      type: 'button',
      size: u.Button.Sizes.SMALL,
      submitting: s,
      onClick: t.handleNext,
      children: A.Z.Messages.SUBMIT
    }),
    e.includes('GET_STARTED') && (0, n.jsx)(u.Button, {
      type: 'button',
      size: u.Button.Sizes.SMALL,
      onClick: t.handleNext,
      children: A.Z.Messages.GET_STARTED
    }),
    e.includes('GOT_IT') && (0, n.jsx)(u.Button, {
      type: 'button',
      size: u.Button.Sizes.SMALL,
      onClick: t.onClose,
      children: A.Z.Messages.GOT_IT
    }),
    e.includes('UPDATE') && (0, n.jsx)(u.Button, {
      type: 'button',
      size: u.Button.Sizes.SMALL,
      disabled: i && !a,
      submitting: s,
      onClick: t.handleNext,
      children: A.Z.Messages.UPDATE
    })
  ]
}),
e.includes('BACK') && (0, n.jsx)(u.Button, {
  className: P.unfilledButton,
  type: 'button',
  size: u.Button.Sizes.SMALL,
  look: u.Button.Looks.BLANK,
  color: u.Button.Colors.CUSTOM,
  onClick: t.handleBack,
  children: A.Z.Messages.BACK
})
  ]
});