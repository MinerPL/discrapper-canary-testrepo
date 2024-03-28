"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("653041");
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("524437"),
  i = n("481060"),
  r = n("872810"),
  o = n("367907"),
  u = n("67212"),
  d = n("770471"),
  c = n("757454"),
  f = n("286328"),
  h = n("493355"),
  C = n("134598"),
  p = n("243778"),
  m = n("594190"),
  g = n("569545"),
  E = n("989941"),
  S = n("199902"),
  _ = n("314897"),
  I = n("944486"),
  N = n("885110"),
  T = n("449224"),
  A = n("436088"),
  L = n("976401"),
  v = n("981631"),
  x = n("921944"),
  R = n("689938");

function M() {
  let e = (0, a.useStateFromStores)([I.default], () => I.default.getVoiceChannelId()),
    t = (0, a.useStateFromStores)([_.default], () => _.default.getId()),
    n = (0, a.useStateFromStores)([m.default, T.default], () => (0, E.default)(m.default, T.default)),
    {
      canBroadcast: M
    } = d.default.useExperiment({
      location: "broadcast_button_rtc_panel_no_track"
    }, {
      autoTrackExposure: !1
    }),
    O = (0, c.default)() && null != n,
    y = (0, a.useStateFromStores)([N.default], () => null != N.default.getBroadcast()),
    D = (0, a.useStateFromStoresArray)([S.default], () => S.default.getAllActiveStreams());
  if (!O && !y) return null;
  if (d.default.trackExposure({
      location: "broadcast_button_rtc_panel"
    }), !M) return null;
  let b = [];
  O && b.push(s.DismissibleContent.BROADCASTING_BROADCASTER_TOOLTIP);
  let j = () => {
      o.default.trackWithMetadata(v.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED, {
        game_id: null == n ? void 0 : n.id
      })
    },
    G = () => {
      if (O) {
        let l = D.find(e => e.ownerId === t);
        null == l ? (0, C.openBroadcastingPrivacySettingsModal)(R.default.Messages.START_BROADCASTING, R.default.Messages.START_BROADCASTING_CTA, () => {
          (0, r.createBroadcastChannelOrStartStream)({
            pid: null == n ? void 0 : n.pid,
            channelId: e
          })
        }) : (0, u.startBroadcastForStream)((0, g.encodeStreamKey)(l), null == n ? void 0 : n.pid)
      } else(0, u.stopBroadcast)()
    },
    U = e => (0, l.jsx)(L.default, {
      tooltipText: O ? R.default.Messages.START_BROADCASTING : R.default.Messages.STOP_BROADCASTING,
      onClick: () => {
        G(), null == e || e(x.ContentDismissActionType.UNKNOWN)
      },
      onMouseEnter: j,
      icon: O ? A.default : () => (0, l.jsx)(h.default, {
        width: 20,
        height: 20
      })
    }),
    P = e => (0, l.jsx)(f.default, {
      markAsDismissed: e
    });
  return (0, l.jsx)(p.default, {
    contentTypes: b,
    bypassAutoDismiss: !0,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      return t === s.DismissibleContent.BROADCASTING_BROADCASTER_TOOLTIP ? (0, l.jsx)(i.Popout, {
        position: "top",
        align: "center",
        renderPopout: () => P(n),
        shouldShow: !0,
        children: () => U(n)
      }) : U()
    }
  })
}