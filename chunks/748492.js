"use strict";
n.d(t, {
  Ds: function() {
    return w
  },
  YB: function() {
    return b
  },
  of: function() {
    return k
  },
  q5: function() {
    return G
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(846027),
  u = n(40851),
  _ = n(835473),
  d = n(221888),
  c = n(788983),
  E = n(189771),
  I = n(560688),
  T = n(618158),
  h = n(922745),
  S = n(871499),
  f = n(402113),
  N = n(800965),
  A = n(157813),
  m = n(25827),
  O = n(131951),
  R = n(285952),
  C = n(605403),
  p = n(808268),
  g = n(602623),
  L = n(349619),
  v = n(981631),
  D = n(231338),
  M = n(689938),
  P = n(221343),
  y = n(376838);

function U(e) {
  let {
    onClick: t,
    isExpanded: n
  } = e;
  return (0, i.jsx)(S.Z, {
    iconClassName: s()(P.arrowIcon, {
      [P.arrowIconExpanded]: n
    }),
    onClick: t,
    iconComponent: C.Z,
    label: n ? M.Z.Messages.PICTURE_IN_PICTURE_COLLAPSE : M.Z.Messages.PICTURE_IN_PICTURE_EXPAND
  })
}

function b(e) {
  var t, n;
  let {
    channel: r,
    applicationId: s,
    onMouseDown: a,
    onMouseMove: S,
    onMouseLeave: A,
    onJumpToChannel: C,
    idle: p,
    selectedParticipant: g
  } = e, M = (0, u.bp)() === v.IlC.POPOUT, U = (0, o.e7)([O.Z], () => O.Z.isVideoEnabled()), b = (0, o.e7)([O.Z], () => Object.values(O.Z.getVideoDevices())[0]), G = !1 === (null === (t = null == b ? void 0 : b.disabled) || void 0 === t || t), w = (0, _.Z)([s])[0], k = (0, E.Z)(r), B = e => {
    l.Z.setVideoEnabled(e)
  };
  return (0, i.jsxs)("div", {
    className: y.videoControls,
    onMouseMove: S,
    onMouseDown: a,
    onMouseLeave: A,
    children: [(0, i.jsx)("div", {
      className: y.topControls,
      children: (0, i.jsx)(h.r, {
        idle: p,
        title: null !== (n = null == w ? void 0 : w.name) && void 0 !== n ? n : r.name,
        onJumpToChannel: C,
        preventIdleComponent: T.Z
      })
    }), (0, i.jsxs)("div", {
      className: y.bottomControls,
      children: [(0, i.jsxs)(R.Z, {
        grow: 0,
        shrink: 1,
        basis: "50%",
        align: R.Z.Align.CENTER,
        children: [(0, i.jsx)(m.C, {
          className: P.leftPipIcon,
          enabled: U,
          cameraUnavailable: !G,
          hasPermission: k,
          onChange: B,
          onCameraUnavailable: () => {
            G ? B(!0) : (0, I.Z)()
          }
        }), (0, i.jsx)(T.Z, {
          children: (0, i.jsx)(d.Z, {
            channelId: r.id,
            guildId: r.getGuildId(),
            className: y.__invalid_leftTrayIcon,
            participant: g,
            compact: !0
          })
        })]
      }), (0, i.jsxs)(R.Z, {
        grow: 0,
        shrink: 1,
        justify: R.Z.Justify.END,
        basis: "50%",
        align: R.Z.Align.CENTER,
        children: [M ? null : (0, i.jsx)(N.Z, {
          className: P.rightPipIcon,
          popoutOpen: !1,
          onOpenPopout: () => {
            (0, L.Z)(() => c.hP(r))
          },
          onClosePopout: D.Vq
        }), (0, i.jsx)(f.Z, {
          applicationId: s,
          channelId: r.id,
          className: P.rightPipIcon
        })]
      })]
    })]
  })
}

function G(e) {
  var t;
  let {
    channel: n,
    applicationId: r,
    onMouseDown: o,
    onMouseMove: l,
    onMouseLeave: u,
    onJumpToChannel: d,
    idle: c,
    users: E
  } = e, I = (0, _.Z)([r])[0];
  return (0, i.jsxs)(a.Clickable, {
    className: s()(y.videoControls, y.videoControlsTextActivity),
    onMouseMove: l,
    onMouseDown: o,
    onMouseLeave: u,
    onDoubleClick: d,
    children: [(0, i.jsx)("div", {
      className: s()(y.topControls),
      children: (0, i.jsx)(h.r, {
        idle: c,
        title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : n.name,
        onJumpToChannel: d,
        preventIdleComponent: T.Z
      })
    }), (0, i.jsxs)("div", {
      className: y.bottomControls,
      children: [(0, i.jsx)(g.Z, {
        renderIcon: !1,
        users: E,
        size: 24,
        max: 3,
        className: P.__invalid_userSummaryContainer
      }), (0, i.jsx)(f.Z, {
        applicationId: r,
        channelId: n.id,
        iconClassName: P.leaveActivityIcon,
        isActive: !0
      })]
    })]
  })
}

function w(e) {
  let {
    channelId: t,
    participantsOpen: n,
    showToggleParticipants: r
  } = e;
  return r ? (0, i.jsx)(A.Z, {
    channelId: t,
    isParticipantsOpen: n,
    className: P.participantsButton
  }) : null
}

function k(e) {
  var t;
  let {
    onMouseDown: n,
    onMouseMove: r,
    onMouseLeave: o,
    showControls: a,
    applicationId: l,
    channel: u,
    onJumpToChannel: d,
    onToggleHeight: c,
    isExpanded: E,
    hideExpandedButton: I
  } = e, S = (0, _.Z)([l])[0];
  return (0, i.jsx)("div", {
    className: P.pipHeader,
    onMouseMove: r,
    onMouseDown: n,
    onMouseLeave: o,
    children: (0, i.jsxs)("div", {
      className: s()(y.topControls, P.pipHeaderContent, {
        [P.pipHeaderContentOpen]: a
      }),
      children: [!a && (0, i.jsx)(p.Z, {
        className: P.menuIcon,
        width: 12,
        height: 12
      }), a && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.r, {
          idle: !a,
          title: null !== (t = null == S ? void 0 : S.name) && void 0 !== t ? t : u.name,
          onJumpToChannel: d,
          preventIdleComponent: T.Z
        }), (0, i.jsxs)("div", {
          className: P.pipHeaderButtonsRight,
          children: [I ? null : (0, i.jsx)(U, {
            isExpanded: E,
            onClick: c
          }), (0, i.jsx)(f.Z, {
            applicationId: l,
            channelId: u.id,
            iconClassName: P.leaveActivityIcon
          })]
        })]
      })]
    })
  })
}