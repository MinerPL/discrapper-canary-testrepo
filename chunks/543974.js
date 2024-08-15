a.r(n), a.d(n, {
  default: function() {
return g;
  }
}), a(47120);
var t = a(735250),
  i = a(470079),
  s = a(512722),
  o = a.n(s),
  r = a(990547),
  d = a(442837),
  l = a(481060),
  c = a(668781),
  m = a(494620),
  u = a(961842),
  C = a(254238),
  N = a(258609),
  h = a(689938),
  v = a(300369),
  x = a(505913);

function _(e) {
  let {
name: n,
subText: a
  } = e;
  return (0, t.jsxs)('div', {
className: v.deviceItemName,
children: [
  (0, t.jsx)(u.Z, {
    className: v.deviceItemIcon
  }),
  (0, t.jsxs)('div', {
    children: [
      (0, t.jsx)(l.Text, {
        variant: 'text-md/semibold',
        color: 'interactive-active',
        children: n
      }),
      a
    ]
  })
]
  });
}

function f(e) {
  let {
devices: n,
onFinished: a,
selectedDeviceId: i,
onSelectDeviceId: s,
transferring: o
  } = e, r = n.map(e => {
let {
  id: n,
  name: a,
  platform: i
} = e;
return {
  value: n,
  name: (0, t.jsx)(_, {
    name: a,
    platform: i
  })
};
  });
  return (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsxs)(l.ModalHeader, {
    separator: !1,
    className: v.modalHeaderContainer,
    children: [
      (0, t.jsx)(l.Heading, {
        className: v.modalHeader,
        color: 'header-primary',
        variant: 'heading-xl/bold',
        children: h.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
      }),
      (0, t.jsx)(l.Text, {
        variant: 'text-md/medium',
        color: 'header-secondary',
        children: h.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
      })
    ]
  }),
  (0, t.jsxs)(l.ModalContent, {
    className: v.content,
    children: [
      (0, t.jsx)(l.RadioGroup, {
        radioPosition: 'right',
        radioItemClassName: v.deviceItem,
        size: l.RadioGroup.Sizes.NOT_SET,
        value: i,
        options: r,
        onChange: e => {
          let {
            value: n
          } = e;
          return s(n);
        }
      }),
      (0, t.jsx)(m.Z, {
        children: h.Z.Messages.PLAYSTATION_DEVICES_INFOBOX
      })
    ]
  }),
  (0, t.jsx)(l.ModalFooter, {
    children: (0, t.jsx)(l.Button, {
      disabled: null == i,
      submitting: o,
      onClick: a,
      children: h.Z.Messages.CONSOLE_TRANSFER_VOICE
    })
  })
]
  });
}

function I() {
  return (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsxs)(l.ModalHeader, {
    separator: !1,
    className: v.modalHeaderContainer,
    children: [
      (0, t.jsx)(l.Heading, {
        className: v.modalHeader,
        color: 'header-primary',
        variant: 'heading-xl/bold',
        children: h.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND
      }),
      (0, t.jsx)(l.Text, {
        variant: 'text-md/medium',
        color: 'header-secondary',
        children: h.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
      })
    ]
  }),
  (0, t.jsx)(l.ModalContent, {
    className: v.emptyArt,
    children: (0, t.jsx)('img', {
      src: x,
      width: '189',
      height: '177',
      alt: ''
    })
  })
]
  });
}

function g(e) {
  let n, {
  channel: a,
  platform: s,
  transitionState: m,
  onClose: u
} = e,
x = (0, d.e7)([N.Z], () => N.Z.getDevicesForPlatform(s), [s]),
_ = (0, d.e7)([N.Z], () => N.Z.getLastSelectedDeviceByPlatform(s)),
g = i.useMemo(() => Object.values(x), [x]),
O = (0, d.e7)([N.Z], () => N.Z.getFetchingDevices(s)),
p = (0, d.e7)([N.Z], () => {
  var e;
  return null === (e = N.Z.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId;
}),
[j, E] = i.useState(!1),
[S, R] = i.useState(() => {
  var e, n;
  return null !== (n = null === (e = x[null != p ? p : '']) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null;
});
  i.useEffect(() => {
C.LO(s);
  }, [s]), i.useEffect(() => {
1 === g.length ? R(g[0].id) : null != _ && R(_);
  }, [
g,
_
  ]);
  let Z = async () => {
let e = x[null != S ? S : ''];
o()(null != e, 'Cannot transfer without selected device');
try {
  E(!0), await C.sh(s, e.id, a), u();
} catch (n) {
  E(!1), c.Z.show({
    title: h.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
    body: h.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
      deviceName: e.name
    })
  });
}
  };
  return n = O ? (0, t.jsx)('div', {
className: v.spinnerContainer,
children: (0, t.jsx)(l.Spinner, {})
  }) : 0 === g.length ? (0, t.jsx)(I, {}) : (0, t.jsx)(f, {
devices: g,
onFinished: Z,
selectedDeviceId: S,
transferring: j || null != p,
onSelectDeviceId: e => {
  R(e), (0, C.bp)(s, e);
}
  }), (0, t.jsxs)(l.ModalRoot, {
size: l.ModalSize.DYNAMIC,
className: v.modalRoot,
transitionState: m,
impression: {
  impressionName: r.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
},
children: [
  n,
  (0, t.jsx)(l.ModalCloseButton, {
    className: v.closeButton,
    onClick: u
  })
]
  });
}