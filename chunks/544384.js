"use strict";
n.d(t, {
  E: function() {
    return O
  },
  Z: function() {
    return R
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(410575),
  a = n(358221),
  l = n(418469),
  u = n(776031),
  _ = n(803647),
  d = n(199902),
  c = n(131951),
  E = n(594174),
  I = n(645284),
  T = n(990138),
  h = n(948573),
  S = n(5192),
  f = n(358085),
  N = n(981631),
  A = n(65154),
  m = n(689938);

function O(e, t, n) {
  let i = (0, r.e7)([a.Z], () => a.Z.getSelectedParticipantId(e.id)),
    s = (0, r.e7)([d.Z], () => null != i ? d.Z.getActiveStreamForStreamKey(i) : null, [i]);
  return (0, r.Wu)([E.default], () => {
    let i = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
      stream: t,
      username: S.ZP.getName(e.getGuildId(), e.id, E.default.getUser(t.ownerId))
    }));
    return 1 === i.length && i[0].stream.ownerId === (null == s ? void 0 : s.ownerId) ? [] : i
  }, [e, s, n, t])
}

function R(e) {
  var t;
  let {
    channel: n,
    currentUser: r,
    activeStreams: a,
    hideSelfOptions: d = !1,
    showReportOption: E = !1,
    handleGoLive: S,
    onClose: R,
    onSelect: C,
    appContext: p = N.IlC.APP
  } = e, g = c.Z.supports(A.AN.DESKTOP_CAPTURE_APPLICATIONS), L = null !== (t = a.find(e => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null, v = O(n, r, a), D = (0, u.Z)(L, p), M = (0, l.Z)(L, p, N.VqG), P = null == L ? (0, i.jsx)(s.MenuItem, {
    id: "share-your-screen",
    label: m.Z.Messages.SHARE_YOUR_SCREEN,
    icon: I.Z,
    action: S
  }) : (0, i.jsxs)(i.Fragment, {
    children: [f.isPlatformEmbedded ? (0, i.jsx)(s.MenuItem, {
      id: "stream-settings",
      label: m.Z.Messages.SCREENSHARE_STREAM_QUALITY,
      children: D
    }) : null, E ? M : null, g ? (0, i.jsx)(s.MenuItem, {
      id: "change-windows",
      label: m.Z.Messages.SCREENSHARE_CHANGE_WINDOWS,
      icon: I.Z,
      action: S
    }) : null, (0, i.jsx)(s.MenuItem, {
      id: "stop-streaming",
      label: m.Z.Messages.STOP_STREAMING,
      icon: T.Z,
      action: () => (0, _.Z)(L)
    })]
  });
  return (0, i.jsx)(o.Z, {
    section: N.jXE.CONTEXT_MENU,
    children: (0, i.jsxs)(s.Menu, {
      onSelect: C,
      navId: "manage-streams",
      onClose: R,
      "aria-label": null != L ? m.Z.Messages.STOP_STREAMING : m.Z.Messages.SHARE_YOUR_SCREEN,
      children: [(0, i.jsx)(s.MenuGroup, {
        children: v.map(e => {
          let {
            stream: t,
            username: n
          } = e;
          return (0, i.jsx)(s.MenuItem, {
            id: t.ownerId,
            label: m.Z.Messages.STOP_WATCHING_USER.format({
              username: n
            }),
            icon: h.Z,
            action: () => (0, _.Z)(t)
          }, "manage-stream-menu".concat(t.ownerId))
        })
      }), d ? null : P]
    })
  })
}