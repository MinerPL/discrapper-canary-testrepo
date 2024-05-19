"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("442837"),
  l = n("481060"),
  u = n("570140"),
  d = n("475179"),
  _ = n("925549"),
  c = n("37234"),
  E = n("835473"),
  I = n("358221"),
  T = n("928518"),
  f = n("703656"),
  S = n("607187"),
  h = n("937995"),
  A = n("366050"),
  m = n("944486"),
  N = n("594174"),
  p = n("566620"),
  O = n("317381"),
  C = n("963614"),
  R = n("917107"),
  g = n("208156"),
  L = n("748492"),
  v = n("350064"),
  D = n("701488"),
  M = n("918559"),
  y = n("981631"),
  P = n("354459"),
  U = n("323926"),
  b = n("376838"),
  G = n("661781");

function w(e) {
  var t, n;
  let {
    channel: a,
    isLoading: v
  } = e, [w, k] = r.useState(!1), B = (0, o.useStateFromStores)([O.default], () => O.default.getSelfEmbeddedActivityForChannel(a.id)), V = (0, o.useStateFromStores)([O.default], () => O.default.getActivityPanelMode()), x = (0, E.useGetOrFetchApplication)(null == B ? void 0 : B.applicationId), F = null == B ? void 0 : B.launchId, H = (0, o.useStateFromStores)([m.default], () => m.default.getChannelId() === a.id), {
    dockedRect: Y,
    isHidden: j
  } = (0, o.useStateFromStoresObject)([A.default], () => {
    let e = A.default.pipWindow;
    return {
      dockedRect: null != e ? A.default.getDockedRect(e.id) : null,
      isHidden: A.default.isEmbeddedActivityHidden()
    }
  }), W = (0, o.useStateFromStores)([T.default], () => T.default.getWindow(y.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
    activityParticipant: K,
    selectedParticipant: z,
    participantsOpen: Z
  } = (0, o.useStateFromStoresObject)([I.default], () => ({
    activityParticipant: null != B ? I.default.getParticipant(a.id, B.applicationId) : null,
    selectedParticipant: I.default.getSelectedParticipant(a.id),
    participantsOpen: I.default.getParticipantsOpen(a.id)
  })), X = H || null != W, Q = (0, R.default)(a.id), q = Q && (null == z ? void 0 : z.type) !== P.ParticipantTypes.ACTIVITY, J = !Q && V === M.ActivityPanelModes.PIP, $ = (!X || X && (q || J) && null == Y) && !j, ee = $ && null != A.default.pipVideoWindow && null != A.default.pipActivityWindow;

  function et() {
    var e;
    null != B && d.default.selectParticipant(a.id, B.applicationId);
    let t = null !== (e = a.getGuildId()) && void 0 !== e ? e : y.ME;
    _.default.channelListScrollTo(t, a.id), (0, f.transitionToGuild)(t, a.id), null == W && (0, c.popAllLayers)()
  }

  function en() {
    k(!w)
  }
  r.useEffect(() => {
    if ((null == B ? void 0 : B.applicationId) != null) {
      let e = $ ? D.ActivityLayoutMode.PIP : D.ActivityLayoutMode.FOCUSED;
      u.default.dispatch({
        type: "ACTIVITY_LAYOUT_MODE_UPDATE",
        layoutMode: e,
        applicationId: B.applicationId
      })
    }
  }, [null == B ? void 0 : B.applicationId, $]);
  if (null == B || null == F || null == K && (0, R.default)(a.id) || null == x) return null;
  let ei = Array.from(B.userIds).map(e => N.default.getUser(e)).filter(e => null != e),
    er = {
      instance_id: null !== (n = null !== (t = B.compositeInstanceId) && void 0 !== t ? t : B.launchId) && void 0 !== n ? n : "",
      channel_id: a.id
    };
  return null != a.guild_id && "" !== a.guild_id && (er.guild_id = a.guild_id), (0, i.jsx)(h.default, {
    timeout: 2e3,
    children: e => {
      var t, n, r, o, u, d, _, c;
      let {
        idle: E,
        onActive: I,
        onForceIdle: T
      } = e;
      return (0, i.jsxs)(S.default, {
        className: s()(U.root, {
          [U.pipMode]: $,
          [G.elevationHigh]: $,
          [b.idle]: E && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
          [U.pipModeShort]: $ && !w,
          [U.pipModeTall]: $ && w,
          [U.hidden]: j,
          [U.multiPIPMode]: ee
        }),
        noBorder: !$,
        children: [(r = I, o = T, u = E, d = J, _ = ei, $ && null != B && ((null == K ? void 0 : K.type) === P.ParticipantTypes.ACTIVITY || d) ? (null === (c = B.config) || void 0 === c ? void 0 : c.useInteractivePIP) ? (0, i.jsx)(L.InteractivePIPHeader, {
          onJumpToChannel: et,
          applicationId: B.applicationId,
          channel: a,
          showControls: !u,
          onMouseDown: r,
          onMouseMove: r,
          onMouseLeave: o,
          onToggleHeight: en,
          isExpanded: w,
          hideExpandedButton: d
        }) : d ? (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(L.TextActivityPIPOverlay, {
            idle: u,
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: o,
            onJumpToChannel: () => {
              et(), (0, p.updateActivityPanelMode)(M.ActivityPanelModes.PANEL)
            },
            channel: a,
            applicationId: B.applicationId,
            users: _
          })
        }) : null == K ? null : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: o,
            className: U.clickShield,
            onDoubleClick: et
          }), (0, i.jsx)(L.PIPOverlay, {
            idle: u,
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: o,
            onJumpToChannel: et,
            channel: a,
            applicationId: B.applicationId,
            selectedParticipant: K
          })]
        }) : null), v ? (0, i.jsx)(l.Spinner, {
          className: s()(U.iframe, {
            [U.pipModeShort]: $ && !w,
            [U.pipModeTall]: $ && w
          })
        }) : (0, i.jsx)(g.EmbedIFrameWithLoadingBackground, {
          allowPopups: (0, C.allowPopups)(x),
          referrerPolicy: D.APPLICATIONS_WITH_NO_REFFERER.has(B.applicationId) ? "no-referrer" : "origin",
          url: B.url,
          queryParams: er,
          className: s()(U.iframe, {
            [U.pipModeShort]: $ && !w,
            [U.pipModeTall]: $ && w,
            [U.pipNonInteractive]: $ && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
          }),
          shouldRefocus: !$ && H
        }), !$ && (0, i.jsx)(L.TileOverlay, {
          participantsOpen: Z,
          showToggleParticipants: !1,
          channelId: a.id
        })]
      })
    }
  })
}
t.default = e => {
  let {
    channel: t,
    ...n
  } = e, {
    isLoading: r
  } = (0, v.useEmbeddedActivityLifecycle)(t);
  return (0, i.jsx)(w, {
    channel: t,
    isLoading: r,
    ...n
  })
}