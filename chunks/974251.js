"use strict";
n.r(t), n("47120"), n("411104");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("524437"),
  u = n("264539"),
  d = n("481060"),
  c = n("53281"),
  f = n("110924"),
  h = n("40851"),
  m = n("867176"),
  p = n("620662"),
  E = n("581364"),
  C = n("924557"),
  g = n("435064"),
  S = n("712114"),
  _ = n("605236"),
  T = n("536442"),
  I = n("79390"),
  A = n("628566"),
  N = n("665906"),
  v = n("695346"),
  x = n("433355"),
  M = n("819640"),
  R = n("375954"),
  L = n("496675"),
  y = n("885110"),
  O = n("151785"),
  j = n("627553"),
  P = n("38761"),
  D = n("585483"),
  b = n("358085"),
  U = n("127654"),
  F = n("316595"),
  w = n("193910"),
  k = n("951211"),
  H = n("981631"),
  B = n("356659"),
  G = n("921944"),
  V = n("689938"),
  W = n("164841");
t.default = l.memo(function(e) {
  var t, s;
  let Y, {
      className: z,
      channel: K,
      draftType: Z,
      editorTextContent: q,
      setValue: X,
      canOnlyUseTextCommands: Q
    } = e,
    J = (0, h.useAppContext)(),
    $ = l.useRef(null),
    ee = (0, r.useStateFromStores)([y.default], () => y.default.getActivities()),
    et = (0, r.useStateFromStores)([g.default], () => g.default.getSettings().clipsEnabled),
    en = (0, r.useStateFromStores)([g.default], () => g.default.getLastClipsSession()),
    ea = (0, r.useStateFromStoresArray)([g.default], () => g.default.getNewClipIds()),
    el = (0, r.useStateFromStores)([x.default], () => null == x.default.getCurrentSidebarChannelId(K.id)),
    {
      showClipsHeaderEntrypoint: es
    } = C.ClipsExperiment.useExperiment({
      location: "ChannelAttachButton"
    }, {
      autoTrackExposure: !1
    }),
    ei = (0, r.useStateFromStores)([T.HotspotStore], () => T.HotspotStore.hasHotspot(T.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER)),
    er = (0, d.useModalsStore)(e => (0, d.hasModalOpenSelector)(e, B.CLIPS_GALLERY_MODAL_KEY)),
    eo = (0, r.useStateFromStores)([M.default], () => M.default.hasLayers()),
    eu = (0, r.useStateFromStores)([g.default], () => g.default.hasClips()),
    [ed, ec] = l.useState(null),
    ef = (0, C.useEnableClips)() && (et || eu),
    eh = K.isPrivate(),
    em = (0, r.useStateFromStores)([L.default], () => eh || L.default.can(H.Permissions.ATTACH_FILES, K) && L.default.can(H.Permissions.SEND_MESSAGES, K)),
    ep = (0, f.default)(en);
  (null == ep ? void 0 : ep.newClipIds.length) !== (null == en ? void 0 : en.newClipIds.length) && (null !== (t = null == en ? void 0 : en.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ed && ei && el && !er && !es && !eo && ec("recentClips");
  let eE = (e, t, n) => {
      null != t && "ETOOLARGE" === t.code ? (0, U.showUploadFileSizeExceededError)(K, []) : (0, U.promptToUpload)(e, K, Z, {
        requireConfirm: !0,
        showLargeMessageDialog: n
      }), D.ComponentDispatch.dispatchToLastSubscribed(H.ComponentActions.TEXTAREA_FOCUS)
    },
    eC = (0, r.useStateFromStores)([R.default], () => R.default.hasCurrentUserSentMessageSinceAppStart());

  function eg() {
    (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("2668")]).then(n.bind(n, "542055"));
      return t => (0, a.jsx)(e, {
        ...t,
        channelId: K.id
      })
    }, {
      modalKey: B.CLIPS_GALLERY_MODAL_KEY
    }), ec(null)
  }
  l.useEffect(() => {
    let e = () => {
      var e;
      return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    };
    return D.ComponentDispatch.subscribe(H.ComponentActions.UPLOAD_FILE, e), () => {
      D.ComponentDispatch.unsubscribe(H.ComponentActions.UPLOAD_FILE, e)
    }
  });
  let eS = (0, N.useCanStartPublicThread)(K),
    e_ = (0, N.useCanStartPrivateThread)(K),
    eT = !v.UseLegacyChatInput.useSetting() && !(0, b.isAndroidWeb)() && null != window.ResizeObserver,
    eI = (0, r.useStateFromStores)([L.default, A.default], () => (0, E.canUseApplicationCommands)(L.default, A.default, Q, K)),
    eA = (0, I.useCanPostPollsInChannel)(null != K ? K : void 0),
    eN = (0, d.useRedesignIconContext)().enabled,
    ev = (0, m.useShowActivitiesInOmniButtonMenu)(K.id, "ChannelAttachButton"),
    ex = null !== (s = null == ea ? void 0 : ea.length) && void 0 !== s ? s : 0,
    eM = (0, k.default)({
      canAttachFiles: em,
      canStartThreads: eS || e_,
      useSlate: eT,
      hasClips: ef,
      canUseApplicationCommands: eI,
      channel: K,
      activities: ee,
      newClipsCount: ex,
      canPostPolls: eA,
      canLaunchActivities: ev,
      appContext: J
    });
  if (0 === eM.length) return null;
  let eR = ee.some(e => (0, p.default)(e, H.ActivityFlags.SYNC)),
    eL = ee.some(e => (0, p.default)(e, H.ActivityFlags.JOIN) && !(0, p.default)(e, H.ActivityFlags.EMBEDDED)) || eR;
  Y = eN ? (0, a.jsx)(u.CirclePlusIcon, {
    className: W.__invalid_attachButtonIcon,
    colorClass: W.attachButtonPlus
  }) : eL ? (0, a.jsx)(P.default, {
    className: W.__invalid_attachButtonIcon,
    foreground: W.attachButtonPlay,
    background: W.attachButtonPlus,
    width: 24,
    height: 24
  }) : ex > 0 ? (0, a.jsx)(j.default, {
    className: W.__invalid_attachButtonIcon,
    foreground: W.attachButtonClip,
    background: W.attachButtonPlus,
    width: 24,
    height: 24
  }) : (0, a.jsx)(O.default, {
    className: W.__invalid_attachButtonIcon,
    foreground: W.attachButtonPlus,
    width: 24,
    height: 24
  });
  let ey = (0, a.jsx)(d.Popout, {
    shouldShow: null != ed,
    animation: d.Popout.Animation.NONE,
    align: "recentClips" === ed ? "center" : "left",
    position: "top",
    positionKey: null != ed ? ed : "null",
    onRequestOpen: () => {
      eC && (0, _.markDismissibleContentAsDismissed)(o.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
        dismissAction: G.ContentDismissActionType.TAKE_ACTION
      }), ec("attachMenu")
    },
    onRequestClose: () => {
      !(0, d.hasAnyModalOpen)() && (eC && (0, _.markDismissibleContentAsDismissed)(o.DismissibleContent.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
        dismissAction: G.ContentDismissActionType.TAKE_ACTION
      }), ec(null))
    },
    renderPopout: e => {
      switch (ed) {
        case "recentClips":
          return (0, a.jsx)(S.default, {
            ...e,
            onOpenClips: eg,
            lastClipsSession: en
          });
        case "attachMenu":
          return (0, a.jsx)(w.default, {
            ...e,
            onClose: () => ec(null),
            options: eM,
            channel: K,
            onFileUpload: () => {
              var e;
              return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
            },
            draftType: Z,
            editorTextContent: q,
            setValue: X,
            openClips: eg
          });
        default:
          throw Error("Invalid popout type provided")
      }
    },
    children: e => (0, a.jsx)(d.Button, {
      look: d.Button.Looks.BLANK,
      size: d.Button.Sizes.NONE,
      className: i()(W.attachButton, z),
      innerClassName: W.attachButtonInner,
      "aria-label": V.default.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
      onDoubleClick: em ? () => {
        var e;
        return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
      } : void 0,
      ...e,
      children: Y
    })
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: W.uploadInput,
      children: (0, a.jsx)(c.default, {
        ref: $,
        onChange: e => {
          eE(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
        },
        multiple: K.rateLimitPerUser <= 0,
        tabIndex: -1,
        "aria-hidden": !0
      })
    }), (0, a.jsx)("div", {
      className: W.attachWrapper,
      children: (0, a.jsx)(F.default, {
        channel: K,
        isOmniMenuOpen: "attachMenu" === ed,
        openOmniMenu: () => ec("attachMenu"),
        children: ey
      })
    })]
  })
})