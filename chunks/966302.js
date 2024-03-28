"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("718017"),
  o = n("442837"),
  u = n("481060"),
  d = n("26151"),
  c = n("922555"),
  f = n("287734"),
  E = n("249000"),
  h = n("43267"),
  _ = n("933557"),
  C = n("703656"),
  m = n("932724"),
  S = n("672339"),
  I = n("898531"),
  p = n("923973"),
  T = n("189771"),
  g = n("560688"),
  A = n("871499"),
  N = n("136995"),
  v = n("25827"),
  O = n("131951"),
  R = n("594174"),
  L = n("451478"),
  P = n("465670"),
  M = n("421600"),
  y = n("792125"),
  D = n("358221"),
  b = n("793865"),
  x = n("981631"),
  U = n("65154"),
  j = n("689938"),
  G = n("78764"),
  w = n("344534");
let k = {
    width: 232,
    height: 315
  },
  F = {
    width: 232,
    height: 267
  },
  B = {
    width: 475,
    height: 267
  };

function H(e) {
  let {
    header: t
  } = e, n = O.default.getCameraComponent(), l = (0, o.useStateFromStores)([O.default], () => O.default.getVideoDeviceId()), i = (0, I.default)();
  return s.useEffect(() => {
    let e = R.default.getCurrentUser();
    if (i && null != e) {
      let t = (0, m.getLastUsedVideoBackgroundOption)(e);
      (0, S.applyBackgroundOptionPreview)(t, l, {
        track: !1
      }).catch(x.NOOP)
    }
  }, [i, l]), (0, a.jsxs)("div", {
    className: G.previewRoot,
    children: [(0, a.jsx)(u.Spinner, {}), (0, a.jsx)("div", {
      className: G.preview,
      children: (0, a.jsx)(n, {
        disabled: !1,
        deviceId: l,
        width: B.width,
        height: B.height
      })
    }), (0, a.jsx)("div", {
      className: G.previewChannelHeader,
      children: t
    })]
  })
}

function V(e) {
  let {
    canVideo: t,
    channel: n,
    numVideoDevices: s
  } = e, {
    cameraUnavailable: l,
    enabled: r
  } = (0, p.default)(), o = (0, T.default)(n);
  return (0, a.jsxs)("div", {
    className: G.actions,
    children: [(0, a.jsx)(A.CenterControlButton, {
      iconComponent: P.default,
      color: "red",
      className: G.actionButton,
      label: j.default.Messages.DISMISS,
      onClick: () => d.default.stopRinging(n.id)
    }), t && (0, a.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(b.default, {
          onClose: t
        })
      },
      position: "top",
      align: "center",
      animation: u.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: i
        } = e, {
          isShown: u
        } = t;
        return (0, a.jsx)(v.default, {
          join: !0,
          enabled: r,
          color: "green",
          centerButton: !0,
          hasPermission: o,
          cameraUnavailable: l,
          channel: n,
          onPopoutClick: s > 1 ? i : null,
          className: G.actionButton,
          popoutOpen: u,
          onCameraUnavailable: g.default,
          onChange: () => {
            f.default.selectVoiceChannel(n.id, !0), (0, C.transitionToGuild)(x.ME, n.id)
          }
        })
      }
    }), (0, a.jsx)(N.default, {
      channel: n,
      color: "green",
      centerButton: !0,
      className: i()(G.actionButton, G.last)
    })]
  })
}

function Y(e) {
  let {
    animatedStyle: t,
    y: n,
    x: l,
    channel: f
  } = e, [C, m] = s.useState(!1), S = (0, h.getChannelIconURL)(f), I = (0, _.default)(f), [p, T] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.supports(U.Features.VIDEO), Object.keys(O.default.getVideoDevices()).length]), g = (0, o.useStateFromStores)([L.default], () => L.default.isFocused()), A = (0, o.useStateFromStores)([D.default], () => D.default.getMode(f.id)), N = s.useCallback(e => {
    null != e.top && null != e.left && c.default.move(e.left, e.top)
  }, []), v = (0, r.useSpring)({
    value: C ? 1 : 0,
    config: {
      ...r.config.stiff,
      clamp: !0
    }
  });
  s.useEffect(() => {
    let e = e => {
      e.keyCode === x.KeyboardKeys.ESCAPE && d.default.stopRinging(f.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [f]);
  let R = A === x.ChannelModes.VIDEO && p && T > 0,
    P = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default, {
        className: G.icon,
        ringing: g,
        src: null != S ? S : "",
        ringingType: M.default.RingingType.INCOMING,
        size: C ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
      }), (0, a.jsxs)("div", {
        className: G.titleGroup,
        children: [(0, a.jsx)(u.Text, {
          className: G.title,
          color: "header-primary",
          variant: C ? "text-md/semibold" : "text-lg/semibold",
          children: I
        }), (0, a.jsx)(u.Text, {
          color: "header-secondary",
          className: G.subtitle,
          variant: C ? "text-sm/normal" : "text-md/normal",
          children: A === x.ChannelModes.VOICE ? j.default.Messages.INCOMING_CALL_ELLIPSIS : j.default.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
        })]
      })]
    }),
    b = R ? k : F;
  return (0, a.jsx)(E.default, {
    className: G.wrapper,
    selector: ".".concat(G.root),
    initialPosition: {
      left: l,
      top: n
    },
    maxX: window.innerWidth,
    maxY: window.innerHeight,
    onDragEnd: N,
    dragAnywhere: !0,
    children: (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(r.animated.div, {
        className: i()(G.root, w.elevationHigh, {
          [G.previewCamera]: C
        }, C ? (0, y.getThemeClass)("dark") : null),
        style: {
          ...t,
          width: v.value.interpolate([0, 1], [b.width, B.width]),
          minHeight: v.value.interpolate([0, 1], [b.height, B.height]),
          translateX: v.value.interpolate([0, 1], [0, -1 * Math.abs(B.width - b.width) / 2])
        },
        children: [C ? (0, a.jsx)(H, {
          header: P
        }) : (0, a.jsx)("div", {
          className: G.mainChannelInfo,
          children: P
        }), (0, a.jsx)(V, {
          canVideo: R,
          channel: f,
          numVideoDevices: T
        }), R && !C ? (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          fullWidth: !0,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          className: G.previewButton,
          onClick: () => m(!0),
          children: j.default.Messages.INCOMING_CALL_PREVIEW_CAMERA
        }) : null]
      })
    })
  })
}