n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(570140),
  c = n(475179),
  d = n(925549),
  _ = n(37234),
  E = n(835473),
  f = n(358221),
  h = n(928518),
  p = n(703656),
  m = n(607187),
  I = n(937995),
  T = n(366050),
  g = n(944486),
  S = n(594174),
  A = n(566620),
  N = n(317381),
  v = n(963614),
  O = n(917107),
  R = n(208156),
  C = n(748492),
  y = n(350064),
  D = n(701488),
  L = n(918559),
  b = n(981631),
  M = n(354459),
  P = n(514978),
  U = n(582920),
  w = n(256507);

function x(e) {
  var t, n, a;
  let {
channel: y,
isLoading: x
  } = e, [G, k] = i.useState(!1), B = (0, o.e7)([N.ZP], () => N.ZP.getSelfEmbeddedActivityForChannel(y.id)), F = (0, o.e7)([N.ZP], () => N.ZP.getActivityPanelMode()), V = (0, E.q)(null == B ? void 0 : B.applicationId), H = null == B ? void 0 : B.launchId, Z = (0, o.e7)([g.Z], () => g.Z.getChannelId() === y.id), {
dockedRect: Y,
isHidden: j
  } = (0, o.cj)([T.Z], () => {
let e = T.Z.pipWindow;
return {
  dockedRect: null != e ? T.Z.getDockedRect(e.id) : null,
  isHidden: T.Z.isEmbeddedActivityHidden()
};
  }), W = (0, o.e7)([h.Z], () => h.Z.getWindow(b.KJ3.CHANNEL_CALL_POPOUT)), {
activityParticipant: K,
selectedParticipant: z,
participantsOpen: q
  } = (0, o.cj)([f.Z], () => ({
activityParticipant: null != B ? f.Z.getParticipant(y.id, B.applicationId) : null,
selectedParticipant: f.Z.getSelectedParticipant(y.id),
participantsOpen: f.Z.getParticipantsOpen(y.id)
  })), Q = Z || null != W, X = (0, O.Z)(y.id), $ = X && (null == z ? void 0 : z.type) !== M.fO.ACTIVITY, J = !X && F === L.Ez.PIP, ee = (!Q || Q && ($ || J) && null == Y) && !j, et = ee && null != T.Z.pipVideoWindow && null != T.Z.pipActivityWindow;

  function en() {
var e;
null != B && c.Z.selectParticipant(y.id, B.applicationId);
let t = null !== (e = y.getGuildId()) && void 0 !== e ? e : b.ME;
d.Z.channelListScrollTo(t, y.id), (0, p.XU)(t, y.id), null == W && (0, _.Ou)();
  }

  function er() {
k(!G);
  }
  i.useEffect(() => {
if ((null == B ? void 0 : B.applicationId) != null) {
  let e = ee ? D.cE.PIP : D.cE.FOCUSED;
  u.Z.dispatch({
    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
    layoutMode: e,
    applicationId: B.applicationId
  });
}
  }, [
null == B ? void 0 : B.applicationId,
ee
  ]);
  if (null == B || null == H || null == K && (0, O.Z)(y.id) || null == V)
return null;
  let ei = Array.from(B.userIds).map(e => S.default.getUser(e)).filter(e => null != e),
ea = {
  instance_id: null !== (a = null !== (n = B.compositeInstanceId) && void 0 !== n ? n : B.launchId) && void 0 !== a ? a : '',
  channel_id: y.id,
  location_id: null === (t = B.location) || void 0 === t ? void 0 : t.id,
  launch_id: B.launchId
};
  return null != y.guild_id && '' !== y.guild_id && (ea.guild_id = y.guild_id), (0, r.jsx)(I.ZP, {
timeout: 2000,
children: e => {
  var t, n, i, a, o, u, c, d;
  let {
    idle: _,
    onActive: E,
    onForceIdle: f
  } = e;
  return (0, r.jsxs)(m.Z, {
    className: s()(P.root, {
      [P.pipMode]: ee,
      [w.elevationHigh]: ee,
      [U.idle]: _ && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
      [P.pipModeShort]: ee && !G,
      [P.pipModeTall]: ee && G,
      [P.hidden]: j,
      [P.multiPIPMode]: et
    }),
    noBorder: !ee,
    children: [
      (0, r.jsx)('div', {
        className: 'theme-dark',
        children: (i = E, a = f, o = _, u = J, c = ei, ee && null != B && ((null == K ? void 0 : K.type) === M.fO.ACTIVITY || u) ? (null === (d = B.config) || void 0 === d ? void 0 : d.useInteractivePIP) ? (0, r.jsx)(C.of, {
          onJumpToChannel: en,
          applicationId: B.applicationId,
          channel: y,
          showControls: !o,
          onMouseDown: i,
          onMouseMove: i,
          onMouseLeave: a,
          onToggleHeight: er,
          isExpanded: G,
          hideExpandedButton: u
        }) : u ? (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(C.q5, {
            idle: o,
            onMouseMove: i,
            onMouseDown: i,
            onMouseLeave: a,
            onJumpToChannel: () => {
              en(), (0, A.tg)(L.Ez.PANEL);
            },
            channel: y,
            applicationId: B.applicationId,
            users: c
          })
        }) : null == K ? null : (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)('div', {
              onMouseMove: i,
              onMouseDown: i,
              onMouseLeave: a,
              className: P.clickShield,
              onDoubleClick: en
            }),
            (0, r.jsx)(C.YB, {
              idle: o,
              onMouseMove: i,
              onMouseDown: i,
              onMouseLeave: a,
              onJumpToChannel: en,
              channel: y,
              applicationId: B.applicationId,
              selectedParticipant: K
            })
          ]
        }) : null)
      }),
      x ? (0, r.jsx)(l.Spinner, {
        className: s()(P.iframe, {
          [P.pipModeShort]: ee && !G,
          [P.pipModeTall]: ee && G
        })
      }) : (0, r.jsx)(R.J, {
        allowPopups: (0, v.h)(V),
        referrerPolicy: D.um.has(B.applicationId) ? 'no-referrer' : 'origin',
        url: B.url,
        queryParams: ea,
        className: s()(P.iframe, {
          [P.pipModeShort]: ee && !G,
          [P.pipModeTall]: ee && G,
          [P.pipNonInteractive]: ee && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
        }),
        shouldRefocus: !ee && Z
      }),
      !ee && (0, r.jsx)(C.Ds, {
        participantsOpen: q,
        showToggleParticipants: !1,
        channelId: y.id
      })
    ]
  });
}
  });
}
t.Z = e => {
  let {
channel: t,
...n
  } = e, {
isLoading: i
  } = (0, y.$)(t);
  return (0, r.jsx)(x, {
channel: t,
isLoading: i,
...n
  });
};