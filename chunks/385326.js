"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(570140),
  _ = n(475179),
  d = n(925549),
  c = n(37234),
  E = n(835473),
  I = n(358221),
  T = n(928518),
  h = n(703656),
  S = n(607187),
  f = n(937995),
  N = n(366050),
  A = n(944486),
  m = n(594174),
  O = n(566620),
  R = n(317381),
  C = n(963614),
  p = n(917107),
  g = n(208156),
  L = n(748492),
  v = n(350064),
  D = n(701488),
  M = n(918559),
  P = n(981631),
  y = n(354459),
  U = n(323926),
  b = n(376838),
  G = n(661781);

function w(e) {
  var t, n;
  let {
    channel: s,
    isLoading: v
  } = e, [w, k] = r.useState(!1), B = (0, a.e7)([R.ZP], () => R.ZP.getSelfEmbeddedActivityForChannel(s.id)), x = (0, a.e7)([R.ZP], () => R.ZP.getActivityPanelMode()), V = (0, E.q)(null == B ? void 0 : B.applicationId), Z = null == B ? void 0 : B.launchId, H = (0, a.e7)([A.Z], () => A.Z.getChannelId() === s.id), {
    dockedRect: F,
    isHidden: Y
  } = (0, a.cj)([N.Z], () => {
    let e = N.Z.pipWindow;
    return {
      dockedRect: null != e ? N.Z.getDockedRect(e.id) : null,
      isHidden: N.Z.isEmbeddedActivityHidden()
    }
  }), j = (0, a.e7)([T.Z], () => T.Z.getWindow(P.KJ3.CHANNEL_CALL_POPOUT)), {
    activityParticipant: W,
    selectedParticipant: K,
    participantsOpen: z
  } = (0, a.cj)([I.Z], () => ({
    activityParticipant: null != B ? I.Z.getParticipant(s.id, B.applicationId) : null,
    selectedParticipant: I.Z.getSelectedParticipant(s.id),
    participantsOpen: I.Z.getParticipantsOpen(s.id)
  })), q = H || null != j, X = (0, p.Z)(s.id), Q = X && (null == K ? void 0 : K.type) !== y.fO.ACTIVITY, J = !X && x === M.Ez.PIP, $ = (!q || q && (Q || J) && null == F) && !Y, ee = $ && null != N.Z.pipVideoWindow && null != N.Z.pipActivityWindow;

  function et() {
    var e;
    null != B && _.Z.selectParticipant(s.id, B.applicationId);
    let t = null !== (e = s.getGuildId()) && void 0 !== e ? e : P.ME;
    d.Z.channelListScrollTo(t, s.id), (0, h.XU)(t, s.id), null == j && (0, c.Ou)()
  }

  function en() {
    k(!w)
  }
  r.useEffect(() => {
    if ((null == B ? void 0 : B.applicationId) != null) {
      let e = $ ? D.cE.PIP : D.cE.FOCUSED;
      u.Z.dispatch({
        type: "ACTIVITY_LAYOUT_MODE_UPDATE",
        layoutMode: e,
        applicationId: B.applicationId
      })
    }
  }, [null == B ? void 0 : B.applicationId, $]);
  if (null == B || null == Z || null == W && (0, p.Z)(s.id) || null == V) return null;
  let ei = Array.from(B.userIds).map(e => m.default.getUser(e)).filter(e => null != e),
    er = {
      instance_id: null !== (n = null !== (t = B.compositeInstanceId) && void 0 !== t ? t : B.launchId) && void 0 !== n ? n : "",
      channel_id: s.id
    };
  return null != s.guild_id && "" !== s.guild_id && (er.guild_id = s.guild_id), (0, i.jsx)(f.ZP, {
    timeout: 2e3,
    children: e => {
      var t, n, r, a, u, _, d, c;
      let {
        idle: E,
        onActive: I,
        onForceIdle: T
      } = e;
      return (0, i.jsxs)(S.Z, {
        className: o()(U.root, {
          [U.pipMode]: $,
          [G.elevationHigh]: $,
          [b.idle]: E && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
          [U.pipModeShort]: $ && !w,
          [U.pipModeTall]: $ && w,
          [U.hidden]: Y,
          [U.multiPIPMode]: ee
        }),
        noBorder: !$,
        children: [(r = I, a = T, u = E, _ = J, d = ei, $ && null != B && ((null == W ? void 0 : W.type) === y.fO.ACTIVITY || _) ? (null === (c = B.config) || void 0 === c ? void 0 : c.useInteractivePIP) ? (0, i.jsx)(L.of, {
          onJumpToChannel: et,
          applicationId: B.applicationId,
          channel: s,
          showControls: !u,
          onMouseDown: r,
          onMouseMove: r,
          onMouseLeave: a,
          onToggleHeight: en,
          isExpanded: w,
          hideExpandedButton: _
        }) : _ ? (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(L.q5, {
            idle: u,
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: a,
            onJumpToChannel: () => {
              et(), (0, O.tg)(M.Ez.PANEL)
            },
            channel: s,
            applicationId: B.applicationId,
            users: d
          })
        }) : null == W ? null : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: a,
            className: U.clickShield,
            onDoubleClick: et
          }), (0, i.jsx)(L.YB, {
            idle: u,
            onMouseMove: r,
            onMouseDown: r,
            onMouseLeave: a,
            onJumpToChannel: et,
            channel: s,
            applicationId: B.applicationId,
            selectedParticipant: W
          })]
        }) : null), v ? (0, i.jsx)(l.Spinner, {
          className: o()(U.iframe, {
            [U.pipModeShort]: $ && !w,
            [U.pipModeTall]: $ && w
          })
        }) : (0, i.jsx)(g.J, {
          allowPopups: (0, C.h)(V),
          referrerPolicy: D.um.has(B.applicationId) ? "no-referrer" : "origin",
          url: B.url,
          queryParams: er,
          className: o()(U.iframe, {
            [U.pipModeShort]: $ && !w,
            [U.pipModeTall]: $ && w,
            [U.pipNonInteractive]: $ && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
          }),
          shouldRefocus: !$ && H
        }), !$ && (0, i.jsx)(L.Ds, {
          participantsOpen: z,
          showToggleParticipants: !1,
          channelId: s.id
        })]
      })
    }
  })
}
t.Z = e => {
  let {
    channel: t,
    ...n
  } = e, {
    isLoading: r
  } = (0, v.$)(t);
  return (0, i.jsx)(w, {
    channel: t,
    isLoading: r,
    ...n
  })
}