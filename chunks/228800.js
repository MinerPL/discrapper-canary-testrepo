"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
  }
}), n("222007"), n("70102");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("151426"),
  u = n("31745"),
  d = n("77078"),
  c = n("371642"),
  f = n("84339"),
  h = n("244201"),
  C = n("427953"),
  p = n("871388"),
  m = n("389153"),
  E = n("56947"),
  g = n("386045"),
  S = n("734217"),
  T = n("10641"),
  A = n("139321"),
  _ = n("562228"),
  M = n("140596"),
  I = n("300322"),
  N = n("845579"),
  v = n("982108"),
  x = n("778588"),
  L = n("377253"),
  y = n("957255"),
  R = n("101125"),
  O = n("351825"),
  D = n("738602"),
  P = n("430025"),
  b = n("659500"),
  j = n("773336"),
  k = n("412861"),
  F = n("335350"),
  H = n("79254"),
  U = n("64096"),
  G = n("49111"),
  B = n("80028"),
  V = n("994428"),
  w = n("782340"),
  W = n("465597"),
  Z = a.memo(function(e) {
    var t, l, Z;
    let z, {
        className: K,
        channel: Y,
        draftType: X,
        editorTextContent: q,
        setValue: J,
        canOnlyUseTextCommands: Q
      } = e,
      $ = (0, h.useAppContext)(),
      ee = a.useRef(null),
      et = (0, r.useStateFromStores)([R.default], () => R.default.getActivities()),
      en = (0, r.useStateFromStores)([g.default], () => g.default.getSettings().clipsEnabled),
      es = (0, r.useStateFromStores)([g.default], () => g.default.getLastClipsSession()),
      ea = (0, r.useStateFromStoresArray)([g.default], () => g.default.getNewClipIds()),
      el = (0, r.useStateFromStores)([v.default], () => null == v.default.getCurrentSidebarChannelId(Y.id)),
      {
        showClipsHeaderEntrypoint: ei
      } = E.ClipsExperiment.useExperiment({
        location: "ChannelAttachButton"
      }, {
        autoTrackExposure: !1
      }),
      er = (0, r.useStateFromStores)([A.HotspotStore], () => A.HotspotStore.hasHotspot(A.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER)),
      eo = (0, d.useModalsStore)(e => (0, d.hasModalOpenSelector)(e, B.CLIPS_GALLERY_MODAL_KEY)),
      eu = (0, r.useStateFromStores)([x.default], () => x.default.hasLayers()),
      ed = (0, r.useStateFromStores)([g.default], () => g.default.hasClips()),
      [ec, ef] = a.useState(null),
      eh = (0, E.useEnableClips)() && (en || ed),
      eC = Y.isPrivate(),
      ep = (0, r.useStateFromStores)([y.default], () => eC || y.default.can(G.Permissions.ATTACH_FILES, Y) && y.default.can(G.Permissions.SEND_MESSAGES, Y)),
      em = (0, f.default)(es);
    (null == em ? void 0 : em.newClipIds.length) !== (null == es ? void 0 : es.newClipIds.length) && (null !== (t = null == es ? void 0 : es.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ec && er && el && !eo && !ei && !eu && ef("recentClips");
    let eE = (e, t, n) => {
        null != t && "ETOOLARGE" === t.code ? (0, k.showUploadFileSizeExceededError)(Y, []) : (0, k.promptToUpload)(e, Y, X, {
          requireConfirm: !0,
          showLargeMessageDialog: n
        }), b.ComponentDispatch.dispatchToLastSubscribed(G.ComponentActions.TEXTAREA_FOCUS)
      },
      eg = (0, r.useStateFromStores)([L.default], () => L.default.hasCurrentUserSentMessageSinceAppStart());

    function eS() {
      (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("167573").then(n.bind(n, "167573"));
        return t => (0, s.jsx)(e, {
          ...t,
          channelId: Y.id
        })
      }, {
        modalKey: B.CLIPS_GALLERY_MODAL_KEY
      }), ef(null)
    }
    a.useEffect(() => {
      let e = () => {
        var e;
        return null === (e = ee.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
      };
      return b.ComponentDispatch.subscribe(G.ComponentActions.UPLOAD_FILE, e), () => {
        b.ComponentDispatch.unsubscribe(G.ComponentActions.UPLOAD_FILE, e)
      }
    });
    let eT = (0, I.useCanStartPublicThread)(Y),
      eA = (0, I.useCanStartPrivateThread)(Y),
      e_ = !N.UseLegacyChatInput.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
      eM = (0, r.useStateFromStores)([y.default, M.default], () => (0, m.canUseApplicationCommands)(y.default, M.default, Q, Y)),
      eI = (0, _.useCanPostPollsInChannel)(null != Y ? Y : void 0),
      eN = (0, d.useRedesignIconContext)().enabled,
      ev = (0, C.useActivitiesInTextButtonVisibility)(Y.id, "ChannelAttachButton"),
      ex = null !== (l = null == ea ? void 0 : ea.length) && void 0 !== l ? l : 0,
      eL = (0, U.default)({
        canAttachFiles: ep,
        canStartThreads: eT || eA,
        useSlate: e_,
        hasClips: eh,
        canUseApplicationCommands: eM,
        channel: Y,
        activities: et,
        newClipsCount: ex,
        canPostPolls: eI,
        canLaunchActivities: null !== (Z = null == ev ? void 0 : ev.showInOmniButtonMenu) && void 0 !== Z && Z,
        appContext: $
      });
    if (0 === eL.length) return null;
    let ey = et.some(e => (0, p.default)(e, G.ActivityFlags.SYNC)),
      eR = et.some(e => (0, p.default)(e, G.ActivityFlags.JOIN) && !(0, p.default)(e, G.ActivityFlags.EMBEDDED)) || ey;
    z = eN ? (0, s.jsx)(u.CirclePlusIcon, {
      className: W.attachButtonIcon,
      colorClass: W.attachButtonPlus
    }) : eR ? (0, s.jsx)(P.default, {
      className: W.attachButtonIcon,
      foreground: W.attachButtonPlay,
      background: W.attachButtonPlus,
      width: 24,
      height: 24
    }) : ex > 0 ? (0, s.jsx)(D.default, {
      className: W.attachButtonIcon,
      foreground: W.attachButtonClip,
      background: W.attachButtonPlus,
      width: 24,
      height: 24
    }) : (0, s.jsx)(O.default, {
      className: W.attachButtonIcon,
      foreground: W.attachButtonPlus,
      width: 24,
      height: 24
    });
    let eO = (0, s.jsx)(d.Popout, {
      shouldShow: null != ec,
      animation: d.Popout.Animation.NONE,
      align: "recentClips" === ec ? "center" : "left",
      position: "top",
      positionKey: null != ec ? ec : "null",
      onRequestOpen: () => {
        eg && (0, T.markDismissibleContentAsDismissed)(o.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX, {
          dismissAction: V.ContentDismissActionType.TAKE_ACTION
        }), ef("attachMenu")
      },
      onRequestClose: () => {
        !(0, d.hasAnyModalOpen)() && (eg && (0, T.markDismissibleContentAsDismissed)(o.DismissibleContent.ACTIVITIES_OMNIMENU_NEW_BADGE, {
          dismissAction: V.ContentDismissActionType.TAKE_ACTION
        }), ef(null))
      },
      renderPopout: e => {
        switch (ec) {
          case "recentClips":
            return (0, s.jsx)(S.default, {
              ...e,
              onOpenClips: eS,
              lastClipsSession: es
            });
          case "attachMenu":
            return (0, s.jsx)(H.default, {
              ...e,
              onClose: () => ef(null),
              options: eL,
              channel: Y,
              onFileUpload: () => {
                var e;
                return null === (e = ee.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
              },
              draftType: X,
              editorTextContent: q,
              setValue: J,
              openClips: eS
            });
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, s.jsx)(d.Button, {
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        className: i(W.attachButton, K),
        innerClassName: W.attachButtonInner,
        "aria-label": w.default.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
        onDoubleClick: ep ? () => {
          var e;
          return null === (e = ee.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
        } : void 0,
        ...e,
        children: z
      })
    });
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: W.uploadInput,
        children: (0, s.jsx)(c.default, {
          ref: ee,
          onChange: e => {
            eE(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
          },
          multiple: Y.rateLimitPerUser <= 0,
          tabIndex: -1,
          "aria-hidden": !0
        })
      }), (0, s.jsx)("div", {
        className: W.attachWrapper,
        children: (0, s.jsx)(F.default, {
          channel: Y,
          isOmniMenuOpen: "attachMenu" === ec,
          openOmniMenu: () => ef("attachMenu"),
          children: eO
        })
      })]
    })
  })