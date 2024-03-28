"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
  }
}), l("47120");
var a, s, n = l("735250"),
  i = l("470079"),
  r = l("512722"),
  u = l.n(r),
  o = l("718017"),
  d = l("442837"),
  c = l("481060"),
  f = l("668781"),
  m = l("287734"),
  S = l("872810"),
  E = l("410575"),
  C = l("812206"),
  _ = l("594190"),
  g = l("751571"),
  N = l("361291"),
  h = l("592125"),
  x = l("430824"),
  I = l("131951"),
  p = l("944486"),
  A = l("594174"),
  R = l("449224"),
  T = l("285952"),
  v = l("153124"),
  L = l("626135"),
  M = l("358085"),
  j = l("998502"),
  O = l("451467"),
  D = l("537413"),
  P = l("989941"),
  G = l("399299"),
  b = l("351152"),
  U = l("567126"),
  F = l("143135"),
  k = l("37113"),
  y = l("981631"),
  w = l("761274"),
  B = l("689938"),
  V = l("223318");
(s = a || (a = {}))[s.GUILD = 0] = "GUILD", s[s.SOURCE = 1] = "SOURCE", s[s.CONFIRM = 2] = "CONFIRM";

function H(e) {
  var t, a, s, r, H;
  let {
    selectGuild: W = !1,
    selectSource: z = !0,
    guildId: K,
    analyticsLocation: Y,
    onClose: Q,
    transitionState: Z
  } = e, {
    preset: J,
    resolution: X,
    fps: q,
    soundshareEnabled: $
  } = (0, d.useStateFromStoresObject)([N.default], () => N.default.getState()), ee = (0, d.useStateFromStores)([p.default, h.default], () => h.default.getChannel(p.default.getVoiceChannelId())), et = (0, d.useStateFromStores)([_.default, R.default], () => (0, M.isWindows)() ? (0, P.default)(_.default, R.default) : null), el = (0, d.useStateFromStores)([A.default], () => {
    let e = A.default.getCurrentUser();
    return u()(null != e, "GoLiveModal: user cannot be undefined"), e
  }), ea = null !== (t = null == ee ? void 0 : ee.getGuildId()) && void 0 !== t ? t : K, es = (0, d.useStateFromStores)([x.default], () => {
    var e;
    return null != ea ? null === (e = x.default.getGuild(ea)) || void 0 === e ? void 0 : e.premiumTier : null
  }), [en, ei] = null !== (a = (0, D.default)(J, el, es)) && void 0 !== a ? a : [k.ApplicationStreamResolutions.RESOLUTION_720, k.ApplicationStreamFPS.FPS_30];
  J !== k.ApplicationStreamPresets.PRESET_CUSTOM && (X = en, q = ei);
  let er = (0, v.useUID)();
  let [eu, eo] = i.useState((r = W, H = z, r ? 0 : H ? 1 : 2)), [ed, ec] = i.useState(null), [ef, em] = i.useState(!1), [eS, eE] = i.useState(null), [eC, e_] = i.useState(null), [eg, eN] = i.useState(null), [eh, ex] = i.useState(J), [eI, ep] = i.useState(X), [eA, eR] = i.useState(q), [eT, ev] = i.useState($), [eL, eM] = i.useState(null != K ? K : null), ej = null !== (s = null == ee ? void 0 : ee.id) && void 0 !== s ? s : eS;
  i.useEffect(() => {
    let e = (0, M.isWindows)() ? (0, P.default)(_.default, R.default) : null,
      t = (null == e ? void 0 : e.id) != null ? C.default.getApplication(e.id) : null;
    L.default.track(y.AnalyticEvents.OPEN_MODAL, {
      type: "Go Live Modal",
      application_id: null == t ? void 0 : t.id,
      application_name: null == e ? void 0 : e.name,
      game_id: null == t ? void 0 : t.id,
      location_section: Y
    })
  }, [Y]);

  function eO() {
    ! function() {
      var e, t;
      u()(null != et || null != eC, "got nothing to stream");
      let l = null !== (e = null == ee ? void 0 : ee.id) && void 0 !== e ? e : eS;
      u()(null != l, "Received null target channel ID");
      let a = h.default.getChannel(l),
        s = null !== (t = null == a ? void 0 : a.getGuildId()) && void 0 !== t ? t : K;
      null == ee && m.default.selectVoiceChannel(l);
      let n = eh,
        i = eI,
        r = eA;
      !(0, O.default)(n, i, r, el, es) && (n = k.ApplicationStreamPresets.PRESET_VIDEO, i = k.ApplicationStreamResolutions.RESOLUTION_720, r = k.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
        preset: n,
        resolution: i,
        frameRate: r,
        soundshareEnabled: eT
      });
      let o = (0, F.default)(et, eC, _.default.getRunningGames()),
        d = !(0, M.isWindows)() || null == o || (null == eC ? void 0 : eC.id.startsWith("camera:")) || null == o ? null : o.pid;
      (0, S.startStream)(s, l, {
        pid: d,
        sourceId: null == d && null != eC ? eC.id : null,
        sourceName: null == d && null != eC ? eC.name : null,
        audioSourceId: eg,
        sound: eT
      }), (async () => {
        !await g.default.hasPermission(w.NativePermissionTypes.SCREEN_RECORDING, {
          showAuthorizationError: !1
        }) && f.default.show({
          title: B.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
          body: B.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
        })
      })()
    }(), Q()
  }
  let eD = i.useCallback((e, t, l) => {
    let a = (0, D.default)(e, el, es),
      [s, n] = null != a ? a : [t, l];
    if (e !== eh && (t = s, l = n), !(0, O.default)(e, t, l, el, es)) {
      let [e, a] = (0, D.default)(k.ApplicationStreamPresets.PRESET_VIDEO, el, es);
      t = e, l = a
    }
    l !== eA && eR(l), t !== eI && ep(t), s !== t || n !== l ? ex(k.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eh && ex(e)
  }, [el, es, eA, eI, eh]);
  async function eP(e) {
    if (e.preventDefault(), 1 === eu) return eo(2);
    let t = (0, F.default)(et, eC, _.default.getRunningGames()),
      a = j.default.supportsFeature(y.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
    if ((0, M.isMac)() && null != eC) {
      let e = await I.default.getMediaEngine().getDesktopSources(),
        t = eC.id;
      if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
        var s, i;
        s = t, i = e, L.default.track(y.AnalyticEvents.SCREENSHARE_FAILED, {
          source_id: s,
          screens: i.length
        }), (0, c.openModal)(e => (0, n.jsx)(c.ConfirmModal, {
          header: B.default.Messages.SCREENSHARE_RELAUNCH,
          confirmText: B.default.Messages.OKAY,
          cancelText: B.default.Messages.CANCEL,
          onConfirm: () => j.default.relaunch(),
          ...e,
          children: (0, n.jsx)(c.Text, {
            variant: "text-md/normal",
            children: B.default.Messages.SCREENSHARE_RELAUNCH_BODY
          })
        }));
        return
      }
    }
    a ? ! function() {
      var e;
      let t = null !== (e = null == et ? void 0 : et.pid) && void 0 !== e ? e : null;
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await l.e("74300").then(l.bind(l, "566852"));
        return l => (0, n.jsx)(e, {
          ...l,
          handleStream: eO,
          pid: t
        })
      })
    }() : eO()
  }
  let eG = i.useCallback(e => {
      e_(e), null != e && (eo(2), em(!0))
    }, []),
    eb = i.useCallback(e => {
      eM(e), eo(z ? 1 : 2)
    }, [z]),
    eU = function(e) {
      switch (e) {
        case 1:
          return B.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
        case 2:
          return null;
        default:
          return B.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
      }
    }(eu),
    eF = (0, n.jsx)(c.ModalHeader, {
      className: V.modalHeader,
      separator: !1,
      children: (0, n.jsxs)(T.default, {
        direction: T.default.Direction.VERTICAL,
        align: T.default.Align.CENTER,
        className: V.header,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          id: er,
          className: V.headerText,
          children: B.default.Messages.GO_LIVE_MODAL_TITLE
        }), null != eU ? (0, n.jsx)(c.Text, {
          className: V.headerDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: eU
        }) : null]
      })
    }),
    ek = (0, n.jsxs)(c.Slides, {
      springConfig: {
        ...o.config.stiff,
        clamp: !0
      },
      activeSlide: eu,
      width: 480,
      onSlideReady: ec,
      children: [(0, n.jsx)(c.Slide, {
        id: 0,
        children: (0, n.jsx)("div", {
          className: V.modalSize,
          children: (0, n.jsx)(b.default, {
            onSelectGuild: eb
          })
        })
      }), (0, n.jsx)(c.Slide, {
        id: 1,
        children: (0, n.jsx)("div", {
          className: V.modalSize,
          children: (0, n.jsx)(U.default, {
            selectedSource: eC,
            onChangeSelectedSource: eG
          })
        })
      }), (0, n.jsx)(c.Slide, {
        id: 2,
        children: (0, n.jsx)("div", {
          className: V.modalSize,
          children: (0, n.jsx)(G.default, {
            selectedChannelId: eS,
            selectedPreset: eh,
            selectedResolution: eI,
            selectedSource: eC,
            selectedFPS: eA,
            sound: eT,
            sourceChanged: ef,
            selectSource: z,
            onChangeSelectedFPS: e => eD(eh, eI, e),
            onChangeSelectedResolution: e => eD(eh, e, eA),
            onChangeSelectedPreset: e => eD(e, eI, eA),
            onChangeSelectedChannelId: eE,
            onChangeSelectedSource: eG,
            onChangeSource: () => eo(1),
            onChangeAudioDevice: e => eN(e),
            onChangeGuild: () => eo(0),
            onChangeSound: e => ev(e),
            onClose: Q,
            selectedGuildId: eL,
            targetGuildPremiumTier: es,
            selectGuild: W,
            isAnimationDone: 2 === ed && Z === c.ModalTransitionState.ENTERED
          })
        })
      })]
    }),
    ey = function(e, t, l, a) {
      switch (e) {
        case 1:
          return t ? 0 : null;
        case 2:
          if (a) return 1;
          if (!l && t) return 0;
          return null;
        default:
          return null
      }
    }(eu, W, z, ef),
    ew = 2 !== eu || null == eC && null == et || null == ej,
    eB = (0, n.jsxs)(c.ModalFooter, {
      justify: null == ey ? T.default.Justify.START : T.default.Justify.BETWEEN,
      children: [(0, n.jsx)(c.Button, {
        type: "submit",
        size: c.Button.Sizes.SMALL,
        disabled: ew,
        autoFocus: !0,
        children: B.default.Messages.GO_LIVE_MODAL_CTA
      }), null == ey ? (0, n.jsx)(c.Button, {
        className: V.cancelButton,
        look: c.Button.Looks.LINK,
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: Q,
        children: B.default.Messages.CANCEL
      }) : (0, n.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        color: c.ButtonColors.PRIMARY,
        onClick: () => eo(ey),
        children: B.default.Messages.BACK
      })]
    });
  return (0, n.jsx)(E.default, {
    page: y.AnalyticsPages.GO_LIVE_MODAL,
    children: (0, n.jsxs)(c.ModalRoot, {
      "aria-labelledby": er,
      transitionState: Z,
      size: c.ModalSize.DYNAMIC,
      className: V.modalSize,
      children: [(0, n.jsx)(c.ModalCloseButton, {
        onClick: Q,
        className: V.modalCloseButton
      }), (0, n.jsx)("div", {
        className: V.art
      }), (0, n.jsxs)("form", {
        onSubmit: eP,
        children: [eF, ek, eB]
      })]
    })
  })
}