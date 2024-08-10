t.r(n), t.d(n, {
  default: function() {
return F;
  }
}), t(47120);
var l, s, a = t(735250),
  r = t(470079),
  i = t(512722),
  o = t.n(i),
  c = t(338545),
  u = t(442837),
  d = t(481060),
  m = t(668781),
  E = t(287734),
  _ = t(872810),
  S = t(410575),
  g = t(812206),
  C = t(600164),
  h = t(313201),
  Z = t(594190),
  N = t(998594),
  I = t(751571),
  x = t(361291),
  f = t(592125),
  R = t(430824),
  A = t(131951),
  T = t(944486),
  v = t(594174),
  L = t(449224),
  p = t(626135),
  M = t(358085),
  O = t(998502),
  j = t(451467),
  P = t(537413),
  D = t(960861),
  G = t(989941),
  U = t(399299),
  b = t(351152),
  w = t(567126),
  k = t(143135),
  B = t(37113),
  V = t(981631),
  y = t(761274),
  W = t(689938),
  H = t(1871);
(s = l || (l = {}))[s.GUILD = 0] = 'GUILD', s[s.NATIVE_PICKER_SOURCE = 1] = 'NATIVE_PICKER_SOURCE', s[s.SOURCE = 2] = 'SOURCE', s[s.CONFIRM = 3] = 'CONFIRM';

function F(e) {
  var n, l, s, i, F, z;
  let {
selectGuild: K = !1,
selectSource: Y = !0,
guildId: J,
analyticsLocation: Q,
onClose: X,
transitionState: q
  } = e, {
preset: $,
resolution: ee,
fps: en,
soundshareEnabled: et
  } = (0, u.cj)([x.Z], () => x.Z.getState()), el = (0, u.e7)([
T.Z,
f.Z
  ], () => f.Z.getChannel(T.Z.getVoiceChannelId())), es = (0, u.e7)([
Z.ZP,
L.Z
  ], () => (0, M.isWindows)() ? (0, G.Z)(Z.ZP, L.Z) : null), ea = (0, u.e7)([v.default], () => {
let e = v.default.getCurrentUser();
return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
  }), er = null !== (n = null == el ? void 0 : el.getGuildId()) && void 0 !== n ? n : J, ei = (0, u.e7)([R.Z], () => {
var e;
return null != er ? null === (e = R.Z.getGuild(er)) || void 0 === e ? void 0 : e.premiumTier : null;
  }), [eo, ec] = null !== (l = (0, P.Z)($, ea, ei)) && void 0 !== l ? l : [
B.LY.RESOLUTION_720,
B.ws.FPS_30
  ], eu = (0, u.e7)([D.ZP], () => D.ZP.supported()), {
lastPickerAction: ed,
lastPickerError: em
  } = (0, u.e7)([D.ZP], () => D.ZP.getPickerState()), eE = N.Z.useExperiment({
location: 'GoLiveModal'
  }, {
disable: !eu,
autoTrackExposure: !0
  }).enableSystemPicker;
  (0, D.UB)(), $ !== B.tI.PRESET_CUSTOM && (ee = eo, en = ec), !(0, j.Z)($, ee, en, ea, ei) && (ee = eo, en = ec);
  let e_ = (0, h.Dt)();
  let [eS, eg] = r.useState((F = K, z = Y, F ? 0 : z ? 2 : 3)), [eC, eh] = r.useState(null), [eZ, eN] = r.useState(!1), [eI, ex] = r.useState(null), [ef, eR] = r.useState(null), [eA, eT] = r.useState(null), [ev, eL] = r.useState($), [ep, eM] = r.useState(ee), [eO, ej] = r.useState(en), [eP, eD] = r.useState(et), [eG, eU] = r.useState(null != J ? J : null), eb = null !== (s = null == el ? void 0 : el.id) && void 0 !== s ? s : eI;
  r.useEffect(() => {
let e = (0, M.isWindows)() ? (0, G.Z)(Z.ZP, L.Z) : null,
  n = (null == e ? void 0 : e.id) != null ? g.Z.getApplication(e.id) : null;
p.default.track(V.rMx.OPEN_MODAL, {
  type: 'Go Live Modal',
  application_id: null == n ? void 0 : n.id,
  application_name: null == e ? void 0 : e.name,
  game_id: null == n ? void 0 : n.id,
  location_section: Q
});
  }, [Q]);

  function ew() {
! function() {
  var e, n;
  o()(null != es || null != ef, 'got nothing to stream');
  let t = null !== (e = null == el ? void 0 : el.id) && void 0 !== e ? e : eI;
  o()(null != t, 'Received null target channel ID');
  let l = f.Z.getChannel(t),
    s = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : J;
  null == el && E.default.selectVoiceChannel(t);
  let a = ev,
    r = ep,
    i = eO;
  !(0, j.Z)(a, r, i, ea, ei) && (a = B.tI.PRESET_VIDEO, r = B.LY.RESOLUTION_720, i = B.ws.FPS_30), (0, _.Rc)({
    preset: a,
    resolution: r,
    frameRate: i,
    soundshareEnabled: eP
  });
  let c = (0, k.Z)(es, ef, Z.ZP.getRunningGames()),
    u = !(0, M.isWindows)() || null == c || (null == ef ? void 0 : ef.id.startsWith('camera:')) || null == c ? null : c.pid;
  (0, _.WH)(s, t, {
    pid: u,
    sourceId: null == u && null != ef ? ef.id : null,
    sourceName: null == u && null != ef ? ef.name : null,
    audioSourceId: eA,
    sound: eP
  }), !eE && (async () => {
    !await I.Z.hasPermission(y.Eu.SCREEN_RECORDING, {
      showAuthorizationError: !1
    }) && m.Z.show({
      title: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
      body: W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
    });
  })();
}(), X();
  }
  let ek = r.useCallback((e, n, t) => {
let l = (0, P.Z)(e, ea, ei),
  [s, a] = null != l ? l : [
    n,
    t
  ];
if (e !== ev && (n = s, t = a), !(0, j.Z)(e, n, t, ea, ei)) {
  let [e, l] = (0, P.Z)(B.tI.PRESET_VIDEO, ea, ei);
  n = e, t = l;
}
t !== eO && ej(t), n !== ep && eM(n), s !== n || a !== t ? eL(B.tI.PRESET_CUSTOM) : e !== ev && eL(e);
  }, [
ea,
ei,
eO,
ep,
ev
  ]);
  async function eB(e) {
var n, l, s;
if (e.preventDefault(), 2 === eS || 1 === eS)
  return eg(3);
let r = (0, k.Z)(es, ef, Z.ZP.getRunningGames()),
  i = O.ZP.supportsFeature(V.eRX.ELEVATED_HOOK) && (null == r ? void 0 : r.elevated);
if ((0, M.isMac)() && null != ef && (null === (n = ef.id) || void 0 === n ? void 0 : n.startsWith('screen'))) {
  let e = await A.Z.getMediaEngine().getDesktopSources(),
    n = ef.id;
  if (e.length > 0 && !e.some(e => e.includes(n))) {
    ;
    l = n, s = e, p.default.track(V.rMx.SCREENSHARE_FAILED, {
      source_id: l,
      screens: s.length
    }), (0, d.openModal)(e => (0, a.jsx)(d.ConfirmModal, {
      header: W.Z.Messages.SCREENSHARE_RELAUNCH,
      confirmText: W.Z.Messages.OKAY,
      cancelText: W.Z.Messages.CANCEL,
      onConfirm: () => O.ZP.relaunch(),
      ...e,
      children: (0, a.jsx)(d.Text, {
        variant: 'text-md/normal',
        children: W.Z.Messages.SCREENSHARE_RELAUNCH_BODY
      })
    }));
    return;
  }
}
i ? ! function() {
  var e;
  let n = null !== (e = null == es ? void 0 : es.pid) && void 0 !== e ? e : null;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e('74300').then(t.bind(t, 566852));
    return t => (0, a.jsx)(e, {
      ...t,
      handleStream: ew,
      pid: n
    });
  });
}() : ew();
  }
  let [eV, ey] = r.useState(void 0), eW = r.useCallback(e => {
D.ZP.releasePickerStream(), D.ZP.presentPicker(null != e ? e : eV);
  }, [eV]), eH = r.useCallback(e => {
if (eR(e), null != e) {
  if (eE && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0) {
    let n = e.id.split(':')[1];
    ey(n), eW(n), eg(1);
  } else
    eg(3);
  eN(!0);
}
  }, [
eE,
eW
  ]), eF = r.useCallback(e => {
eU(e);
var n = 3;
eg(n = Y ? 2 : 3);
  }, [Y]);
  1 === eS && eE && (ed === D.Uc.Update ? eg(3) : ed === D.Uc.Cancel && eg(2));
  let ez = !(1 === eS && eE && ed === D.Uc.Error),
eK = function(e) {
  switch (e) {
    case 2:
    case 1:
      return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
    case 3:
      return null;
    default:
      return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
  }
}(eS),
eY = (0, a.jsx)(d.ModalHeader, {
  className: H.modalHeader,
  separator: !1,
  children: (0, a.jsxs)(C.Z, {
    direction: C.Z.Direction.VERTICAL,
    align: C.Z.Align.CENTER,
    className: H.header,
    children: [
      (0, a.jsx)(d.Heading, {
        variant: 'heading-xl/semibold',
        id: e_,
        className: H.headerText,
        children: W.Z.Messages.GO_LIVE_MODAL_TITLE
      }),
      ez && null != eK ? (0, a.jsx)(d.Text, {
        className: H.headerDescription,
        variant: 'text-md/normal',
        color: 'text-normal',
        children: eK
      }) : null
    ]
  })
}),
eJ = r.useCallback(() => {
  eE && D.ZP.releasePickerStream(), eg(2);
}, [
  eg,
  eE
]),
eQ = (0, a.jsxs)(d.Slides, {
  springConfig: {
    ...c.config.stiff,
    clamp: !0
  },
  activeSlide: eS,
  width: 480,
  onSlideReady: eh,
  children: [
    (0, a.jsx)(d.Slide, {
      id: 0,
      children: (0, a.jsx)('div', {
        className: H.modalSize,
        children: (0, a.jsx)(b.Z, {
          onSelectGuild: eF
        })
      })
    }),
    (0, a.jsx)(d.Slide, {
      id: 2,
      children: (0, a.jsx)('div', {
        className: H.modalSize,
        children: eE ? (0, a.jsx)(w.H, {
          onSourceSelect: eH
        }) : (0, a.jsx)(w.o, {
          selectedSource: ef,
          onChangeSelectedSource: eH
        })
      })
    }),
    (0, a.jsx)(d.Slide, {
      id: 1,
      children: (0, a.jsx)('div', {
        className: H.modalSize,
        children: ed === D.Uc.Error ? (0, a.jsx)(d.Text, {
          className: H.errorMessage,
          variant: 'text-md/normal',
          color: 'text-danger',
          children: null != em && em.length > 0 ? em : W.Z.Messages.ERROR_ANOTHER_TRY
        }) : (0, a.jsx)(d.Spinner, {
          className: H.sourceSpinner
        })
      })
    }),
    (0, a.jsx)(d.Slide, {
      id: 3,
      children: (0, a.jsx)('div', {
        className: H.modalSize,
        children: (0, a.jsx)(U.Z, {
          selectedChannelId: null !== (i = null == el ? void 0 : el.id) && void 0 !== i ? i : eI,
          selectedPreset: ev,
          selectedResolution: ep,
          selectedSource: ef,
          selectedFPS: eO,
          sound: eP,
          sourceChanged: eZ,
          selectSource: Y,
          onChangeSelectedFPS: e => ek(ev, ep, e),
          onChangeSelectedResolution: e => ek(ev, e, eO),
          onChangeSelectedPreset: e => ek(e, ep, eO),
          onChangeSelectedChannelId: ex,
          onChangeSelectedSource: eH,
          onChangeSource: () => eJ(),
          onChangeAudioDevice: e => eT(e),
          onChangeGuild: () => eg(0),
          onChangeSound: e => eD(e),
          onClose: X,
          selectedGuildId: eG,
          targetGuildPremiumTier: ei,
          selectGuild: K,
          isAnimationDone: 3 === eC && q === d.ModalTransitionState.ENTERED
        })
      })
    })
  ]
}),
eX = function(e, n, t, l) {
  switch (e) {
    case 2:
      return n ? 0 : null;
    case 1:
      return 2;
    case 3:
      if (l)
        return 2;
      if (!t && n)
        return 0;
      return null;
    default:
      return null;
  }
}(eS, K, Y, eZ),
eq = 3 !== eS || null == ef && null == es || null == eb,
e$ = r.useCallback(() => {
  null != eX && (D.ZP.releasePickerStream(), eg(eX));
}, [
  eg,
  eX
]),
e0 = (0, a.jsxs)(d.ModalFooter, {
  justify: null == eX ? C.Z.Justify.START : C.Z.Justify.BETWEEN,
  children: [
    (0, a.jsx)(d.Button, {
      type: 'submit',
      size: d.Button.Sizes.SMALL,
      disabled: eq,
      autoFocus: !0,
      children: W.Z.Messages.GO_LIVE_MODAL_CTA
    }),
    eE && 1 === eS ? (0, a.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      color: d.ButtonColors.PRIMARY,
      onClick: () => eW(),
      children: W.Z.Messages.RETRY
    }) : null,
    null == eX ? (0, a.jsx)(d.Button, {
      className: H.cancelButton,
      look: d.Button.Looks.LINK,
      size: d.Button.Sizes.SMALL,
      color: d.ButtonColors.PRIMARY,
      onClick: X,
      children: W.Z.Messages.CANCEL
    }) : (0, a.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      color: d.ButtonColors.PRIMARY,
      onClick: e$,
      children: W.Z.Messages.BACK
    })
  ]
});
  return (0, a.jsx)(S.Z, {
page: V.ZY5.GO_LIVE_MODAL,
children: (0, a.jsxs)(d.ModalRoot, {
  'aria-labelledby': e_,
  transitionState: q,
  size: d.ModalSize.DYNAMIC,
  className: H.modalSize,
  children: [
    (0, a.jsx)(d.ModalCloseButton, {
      onClick: X,
      className: H.modalCloseButton
    }),
    (0, a.jsx)('div', {
      className: H.art
    }),
    (0, a.jsxs)('form', {
      onSubmit: eB,
      children: [
        eY,
        eQ,
        e0
      ]
    })
  ]
})
  });
}