"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("146606"),
  o = n("446674"),
  u = n("77078"),
  d = n("561288"),
  c = n("228157"),
  f = n("987317"),
  E = n("543155"),
  h = n("843962"),
  _ = n("679653"),
  C = n("393414"),
  S = n("659558"),
  I = n("439141"),
  m = n("648911"),
  p = n("999180"),
  T = n("289180"),
  g = n("19065"),
  A = n("981913"),
  N = n("742683"),
  R = n("116439"),
  O = n("42887"),
  v = n("697218"),
  L = n("471671"),
  M = n("945330"),
  P = n("823050"),
  y = n("439932"),
  D = n("191145"),
  x = n("458685"),
  b = n("49111"),
  U = n("353927"),
  G = n("782340"),
  j = n("675434"),
  w = n("678016");
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
  } = e, n = O.default.getCameraComponent(), l = (0, o.useStateFromStores)([O.default], () => O.default.getVideoDeviceId()), i = (0, m.default)();
  return s.useEffect(() => {
    let e = v.default.getCurrentUser();
    if (i && null != e) {
      let t = (0, S.getLastUsedVideoBackgroundOption)(e);
      (0, I.applyBackgroundOptionPreview)(t, l, {
        track: !1
      }).catch(b.NOOP)
    }
  }, [i, l]), (0, a.jsxs)("div", {
    className: j.previewRoot,
    children: [(0, a.jsx)(u.Spinner, {}), (0, a.jsx)("div", {
      className: j.preview,
      children: (0, a.jsx)(n, {
        disabled: !1,
        deviceId: l,
        width: B.width,
        height: B.height
      })
    }), (0, a.jsx)("div", {
      className: j.previewChannelHeader,
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
    className: j.actions,
    children: [(0, a.jsx)(A.CenterControlButton, {
      iconComponent: M.default,
      color: "red",
      className: j.actionButton,
      label: G.default.Messages.DISMISS,
      onClick: () => d.default.stopRinging(n.id)
    }), t && (0, a.jsx)(u.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, a.jsx)(x.default, {
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
        return (0, a.jsx)(R.default, {
          join: !0,
          enabled: r,
          color: "green",
          centerButton: !0,
          hasPermission: o,
          cameraUnavailable: l,
          channel: n,
          onPopoutClick: s > 1 ? i : null,
          className: j.actionButton,
          popoutOpen: u,
          onCameraUnavailable: g.default,
          onChange: () => {
            f.default.selectVoiceChannel(n.id, !0), (0, C.transitionToGuild)(b.ME, n.id)
          }
        })
      }
    }), (0, a.jsx)(N.default, {
      channel: n,
      color: "green",
      centerButton: !0,
      className: i(j.actionButton, j.last)
    })]
  })
}

function Y(e) {
  let {
    animatedStyle: t,
    y: n,
    x: l,
    channel: f
  } = e, [C, S] = s.useState(!1), I = (0, h.getChannelIconURL)(f), m = (0, _.default)(f), [p, T] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.supports(U.Features.VIDEO), Object.keys(O.default.getVideoDevices()).length]), g = (0, o.useStateFromStores)([L.default], () => L.default.isFocused()), A = (0, o.useStateFromStores)([D.default], () => D.default.getMode(f.id)), N = s.useCallback(e => {
    null != e.top && null != e.left && c.default.move(e.left, e.top)
  }, []), R = (0, r.useSpring)({
    value: C ? 1 : 0,
    config: {
      ...r.config.stiff,
      clamp: !0
    }
  });
  s.useEffect(() => {
    let e = e => {
      e.keyCode === b.KeyboardKeys.ESCAPE && d.default.stopRinging(f.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [f]);
  let v = A === b.ChannelModes.VIDEO && p && T > 0,
    M = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(P.default, {
        className: j.icon,
        ringing: g,
        src: null != I ? I : "",
        ringingType: P.default.RingingType.INCOMING,
        size: C ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
      }), (0, a.jsxs)("div", {
        className: j.titleGroup,
        children: [(0, a.jsx)(u.Text, {
          className: j.title,
          color: "header-primary",
          variant: C ? "text-md/semibold" : "text-lg/semibold",
          children: m
        }), (0, a.jsx)(u.Text, {
          color: "header-secondary",
          className: j.subtitle,
          variant: C ? "text-sm/normal" : "text-md/normal",
          children: A === b.ChannelModes.VOICE ? G.default.Messages.INCOMING_CALL_ELLIPSIS : G.default.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
        })]
      })]
    }),
    x = v ? k : F;
  return (0, a.jsx)(E.default, {
    className: j.wrapper,
    selector: ".".concat(j.root),
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
        className: i(j.root, w.elevationHigh, {
          [j.previewCamera]: C
        }, C ? (0, y.getThemeClass)("dark") : null),
        style: {
          ...t,
          width: R.value.interpolate([0, 1], [x.width, B.width]),
          minHeight: R.value.interpolate([0, 1], [x.height, B.height]),
          translateX: R.value.interpolate([0, 1], [0, -1 * Math.abs(B.width - x.width) / 2])
        },
        children: [C ? (0, a.jsx)(H, {
          header: M
        }) : (0, a.jsx)("div", {
          className: j.mainChannelInfo,
          children: M
        }), (0, a.jsx)(V, {
          canVideo: v,
          channel: f,
          numVideoDevices: T
        }), v && !C ? (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          fullWidth: !0,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          className: j.previewButton,
          onClick: () => S(!0),
          children: G.default.Messages.INCOMING_CALL_PREVIEW_CAMERA
        }) : null]
      })
    })
  })
}