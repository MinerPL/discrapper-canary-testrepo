n.d(t, {
  Z: function() {
return Y;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(338545),
  l = n(442837),
  u = n(481060),
  c = n(26151),
  d = n(922555),
  _ = n(287734),
  E = n(249000),
  f = n(43267),
  h = n(933557),
  p = n(703656),
  m = n(932724),
  I = n(672339),
  T = n(898531),
  g = n(738436),
  S = n(189771),
  A = n(560688),
  N = n(871499),
  v = n(136995),
  O = n(25827),
  R = n(131951),
  C = n(594174),
  y = n(451478),
  D = n(792125),
  L = n(358221),
  b = n(584511),
  M = n(793865),
  P = n(981631),
  U = n(65154),
  w = n(689938),
  x = n(414539),
  G = n(759823);
let k = {
width: 232,
height: 315
  },
  B = {
width: 232,
height: 267
  },
  F = 475,
  V = 267;

function H(e) {
  let {
header: t
  } = e, n = R.Z.getCameraComponent(), a = (0, l.e7)([R.Z], () => R.Z.getVideoDeviceId()), s = (0, T.Z)();
  return i.useEffect(() => {
let e = C.default.getCurrentUser();
if (s && null != e) {
  let t = (0, m.P)(e);
  (0, I.FU)(t, a, {
    track: !1
  }).catch(P.dG4);
}
  }, [
s,
a
  ]), (0, r.jsxs)('div', {
className: x.previewRoot,
children: [
  (0, r.jsx)(u.Spinner, {}),
  (0, r.jsx)('div', {
    className: x.preview,
    children: (0, r.jsx)(n, {
      disabled: !1,
      deviceId: a,
      width: F,
      height: V
    })
  }),
  (0, r.jsx)('div', {
    className: x.previewChannelHeader,
    children: t
  })
]
  });
}

function Z(e) {
  let {
canVideo: t,
channel: n,
numVideoDevices: i
  } = e, {
cameraUnavailable: a,
enabled: o
  } = (0, g.Z)(), l = (0, S.Z)(n);
  return (0, r.jsxs)('div', {
className: x.actions,
children: [
  (0, r.jsx)(N.d, {
    iconComponent: u.CloseSmallIcon,
    color: 'red',
    className: x.actionButton,
    label: w.Z.Messages.DISMISS,
    onClick: () => c.Z.stopRinging(n.id)
  }),
  t && (0, r.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(M.Z, {
        onClose: t
      });
    },
    position: 'top',
    align: 'center',
    animation: u.Popout.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: s
      } = e, {
        isShown: u
      } = t;
      return (0, r.jsx)(O.C, {
        join: !0,
        enabled: o,
        color: 'green',
        centerButton: !0,
        hasPermission: l,
        cameraUnavailable: a,
        channel: n,
        onPopoutClick: i > 1 ? s : null,
        className: x.actionButton,
        popoutOpen: u,
        onCameraUnavailable: A.Z,
        onChange: () => {
          _.default.selectVoiceChannel(n.id, !0), (0, p.XU)(P.ME, n.id);
        }
      });
    }
  }),
  (0, r.jsx)(v.Z, {
    channel: n,
    color: 'green',
    centerButton: !0,
    className: s()(x.actionButton, x.last)
  })
]
  });
}

function Y(e) {
  let {
animatedStyle: t,
y: n,
x: a,
channel: _
  } = e, [p, m] = i.useState(!1), I = (0, f.x)(_), T = (0, h.ZP)(_), [g, S] = (0, l.Wu)([R.Z], () => [
R.Z.supports(U.AN.VIDEO),
Object.keys(R.Z.getVideoDevices()).length
  ]), A = (0, l.e7)([y.Z], () => y.Z.isFocused()), N = (0, l.e7)([L.Z], () => L.Z.getMode(_.id)), v = i.useCallback(e => {
null != e.top && null != e.left && d.Z.move(e.left, e.top);
  }, []), O = (0, u.useSpring)({
value: p ? 1 : 0,
config: {
  ...o.config.stiff,
  clamp: !0
}
  }, 'animate-always');
  i.useEffect(() => {
let e = e => {
  e.keyCode === P.yXg.ESCAPE && c.Z.stopRinging(_.id);
};
return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
  }, [_]);
  let C = N === P.WtW.VIDEO && g && S > 0,
M = (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)(b.Z, {
      className: x.icon,
      ringing: A,
      src: null != I ? I : '',
      ringingType: b.Z.RingingType.INCOMING,
      size: p ? u.AvatarSizes.SIZE_40 : u.AvatarSizes.SIZE_80
    }),
    (0, r.jsxs)('div', {
      className: x.titleGroup,
      children: [
        (0, r.jsx)(u.Text, {
          className: x.title,
          color: 'header-primary',
          variant: p ? 'text-md/semibold' : 'text-lg/semibold',
          children: T
        }),
        (0, r.jsx)(u.Text, {
          color: 'header-secondary',
          className: x.subtitle,
          variant: p ? 'text-sm/normal' : 'text-md/normal',
          children: N === P.WtW.VOICE ? w.Z.Messages.INCOMING_CALL_ELLIPSIS : w.Z.Messages.INCOMING_VIDEO_CALL_ELLIPSIS
        })
      ]
    })
  ]
}),
Y = C ? k : B;
  return (0, r.jsx)(E.Z, {
className: x.wrapper,
selector: '.'.concat(x.root),
initialPosition: {
  left: a,
  top: n
},
maxX: window.innerWidth,
maxY: window.innerHeight,
onDragEnd: v,
dragAnywhere: !0,
children: (0, r.jsx)(r.Fragment, {
  children: (0, r.jsxs)(o.animated.div, {
    className: s()(x.root, G.elevationHigh, {
      [x.previewCamera]: p
    }, p ? (0, D.Q)('dark') : null),
    style: {
      ...t,
      width: O.value.interpolate([
        0,
        1
      ], [
        Y.width,
        F
      ]),
      minHeight: O.value.interpolate([
        0,
        1
      ], [
        Y.height,
        V
      ]),
      translateX: O.value.interpolate([
        0,
        1
      ], [
        0,
        -1 * Math.abs(F - Y.width) / 2
      ])
    },
    children: [
      p ? (0, r.jsx)(H, {
        header: M
      }) : (0, r.jsx)('div', {
        className: x.mainChannelInfo,
        children: M
      }),
      (0, r.jsx)(Z, {
        canVideo: C,
        channel: _,
        numVideoDevices: S
      }),
      C && !p ? (0, r.jsx)(u.Button, {
        size: u.Button.Sizes.SMALL,
        fullWidth: !0,
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        className: x.previewButton,
        onClick: () => m(!0),
        children: w.Z.Messages.INCOMING_CALL_PREVIEW_CAMERA
      }) : null
    ]
  })
})
  });
}