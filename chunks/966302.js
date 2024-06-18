"use strict";
n.d(t, {
  Z: function() {
    return j
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(481060),
  _ = n(26151),
  d = n(922555),
  c = n(287734),
  E = n(249e3),
  I = n(43267),
  T = n(933557),
  h = n(703656),
  S = n(932724),
  f = n(672339),
  N = n(898531),
  A = n(923973),
  m = n(189771),
  O = n(560688),
  R = n(871499),
  C = n(136995),
  p = n(25827),
  g = n(131951),
  L = n(594174),
  v = n(451478),
  D = n(465670),
  M = n(421600),
  P = n(792125),
  y = n(358221),
  U = n(793865),
  b = n(981631),
  G = n(65154),
  w = n(689938),
  k = n(152435),
  B = n(661781);
let x = {
    width: 232,
    height: 315
  },
  V = {
    width: 232,
    height: 267
  },
  Z = 475,
  H = 267;

function F(e) {
  let {
    header: t
  } = e, n = g.Z.getCameraComponent(), s = (0, l.e7)([g.Z], () => g.Z.getVideoDeviceId()), o = (0, N.Z)();
  return r.useEffect(() => {
    let e = L.default.getCurrentUser();
    if (o && null != e) {
      let t = (0, S.P)(e);
      (0, f.FU)(t, s, {
        track: !1
      }).catch(b.dG4)
    }
  }, [o, s]), (0, i.jsxs)("div", {
    className: k.previewRoot,
    children: [(0, i.jsx)(u.Spinner, {}), (0, i.jsx)("div", {
      className: k.preview,
      children: (0, i.jsx)(n, {
        disabled: !1,
        deviceId: s,
        width: Z,
        height: H
      })
    }), (0, i.jsx)("div", {
      className: k.previewChannelHeader,
      children: t
    })]
  })
}

function Y(e) {
  let {
    canVideo: t,
    channel: n,
    numVideoDevices: r
  } = e, {
    cameraUnavailable: s,
    enabled: a
  } = (0, A.Z)(), l = (0, m.Z)(n);
  return (0, i.jsxs)("div", {
    className: k.actions,
    children: [(0, i.jsx)(R.d, {
      iconComponent: D.Z,
      color: "red",
      className: k.actionButton,
      label: w.Z.Messages.DISMISS,
      onClick: () => _.Z.stopRinging(n.id)
    }), t && (0, i.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(U.Z, {
          onClose: t
        })
      },
      position: "top",
      align: "center",
      animation: u.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: o
        } = e, {
          isShown: u
        } = t;
        return (0, i.jsx)(p.C, {
          join: !0,
          enabled: a,
          color: "green",
          centerButton: !0,
          hasPermission: l,
          cameraUnavailable: s,
          channel: n,
          onPopoutClick: r > 1 ? o : null,
          className: k.actionButton,
          popoutOpen: u,
          onCameraUnavailable: O.Z,
          onChange: () => {
            c.default.selectVoiceChannel(n.id, !0), (0, h.XU)(b.ME, n.id)
          }
        })
      }
    }), (0, i.jsx)(C.Z, {
      channel: n,
      color: "green",
      centerButton: !0,
      className: o()(k.actionButton, k.last)
    })]
  })
}

function j(e) {
  let {
    animatedStyle: t,
    y: n,
    x: s,
    channel: c
  } = e, [h, S] = r.useState(!1), f = (0, I.x)(c), N = (0, T.ZP)(c), [A, m] = (0, l.Wu)([g.Z], () => [g.Z.supports(G.AN.VIDEO), Object.keys(g.Z.getVideoDevices()).length]), O = (0, l.e7)([v.Z], () => v.Z.isFocused()), R = (0, l.e7)([y.Z], () => y.Z.getMode(c.id)), C = r.useCallback(e => {
    null != e.top && null != e.left && d.Z.move(e.left, e.top)
  }, []), p = (0, a.useSpring)({
    value: h ? 1 : 0,
    config: {
      ...a.config.stiff,
      clamp: !0
    }
  });
  r.useEffect(() => {
    let e = e => {
      e.keyCode === b.yXg.ESCAPE && _.Z.stopRinging(c.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [c]);
  let L = R === b.WtW.VIDEO && A && m > 0,
    D = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(M.Z, {
        className: k.icon,
        ringing: O,
        src: null != f ? f : "",
        ringingType: M.Z.RingingType.INCOMING,
        size: h ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
      }), (0, i.jsxs)("div", {
        className: k.titleGroup,
        children: [(0, i.jsx)(u.Text, {
          className: k.title,
          color: "header-primary",
          variant: h ? "text-md/semibold" : "text-lg/semibold",
          children: N
        }), (0, i.jsx)(u.Text, {
          color: "header-secondary",
          className: k.subtitle,
          variant: h ? "text-sm/normal" : "text-md/normal",
          children: R === b.WtW.VOICE ? w.Z.Messages.INCOMING_CALL_ELLIPSIS : w.Z.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
        })]
      })]
    }),
    U = L ? x : V;
  return (0, i.jsx)(E.Z, {
    className: k.wrapper,
    selector: ".".concat(k.root),
    initialPosition: {
      left: s,
      top: n
    },
    maxX: window.innerWidth,
    maxY: window.innerHeight,
    onDragEnd: C,
    dragAnywhere: !0,
    children: (0, i.jsx)(i.Fragment, {
      children: (0, i.jsxs)(a.animated.div, {
        className: o()(k.root, B.elevationHigh, {
          [k.previewCamera]: h
        }, h ? (0, P.Q)("dark") : null),
        style: {
          ...t,
          width: p.value.interpolate([0, 1], [U.width, Z]),
          minHeight: p.value.interpolate([0, 1], [U.height, H]),
          translateX: p.value.interpolate([0, 1], [0, -1 * Math.abs(Z - U.width) / 2])
        },
        children: [h ? (0, i.jsx)(F, {
          header: D
        }) : (0, i.jsx)("div", {
          className: k.mainChannelInfo,
          children: D
        }), (0, i.jsx)(Y, {
          canVideo: L,
          channel: c,
          numVideoDevices: m
        }), L && !h ? (0, i.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          fullWidth: !0,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          className: k.previewButton,
          onClick: () => S(!0),
          children: w.Z.Messages.INCOMING_CALL_PREVIEW_CAMERA
        }) : null]
      })
    })
  })
}