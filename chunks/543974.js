"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("512722"),
  i = a.n(l),
  r = a("990547"),
  d = a("442837"),
  o = a("481060"),
  c = a("668781"),
  u = a("494620"),
  f = a("961842"),
  m = a("254238"),
  C = a("258609"),
  h = a("689938"),
  N = a("805282"),
  v = a("505913");

function x(e) {
  let {
    name: t,
    subText: a
  } = e;
  return (0, s.jsxs)("div", {
    className: N.deviceItemName,
    children: [(0, s.jsx)(f.default, {
      className: N.deviceItemIcon
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: t
      }), a]
    })]
  })
}

function S(e) {
  let {
    devices: t,
    onFinished: a,
    selectedDeviceId: n,
    onSelectDeviceId: l,
    transferring: i
  } = e, r = t.map(e => {
    let {
      id: t,
      name: a,
      platform: n
    } = e;
    return {
      value: t,
      name: (0, s.jsx)(x, {
        name: a,
        platform: n
      })
    }
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.ModalHeader, {
      separator: !1,
      className: N.modalHeaderContainer,
      children: [(0, s.jsx)(o.Heading, {
        className: N.modalHeader,
        color: "header-primary",
        variant: "heading-xl/bold",
        children: h.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
      }), (0, s.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: h.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
      })]
    }), (0, s.jsxs)(o.ModalContent, {
      className: N.content,
      children: [(0, s.jsx)(o.RadioGroup, {
        radioPosition: "right",
        radioItemClassName: N.deviceItem,
        size: o.RadioGroup.Sizes.NOT_SET,
        value: n,
        options: r,
        onChange: e => {
          let {
            value: t
          } = e;
          return l(t)
        }
      }), (0, s.jsx)(u.default, {
        children: h.default.Messages.PLAYSTATION_DEVICES_INFOBOX
      })]
    }), (0, s.jsx)(o.ModalFooter, {
      children: (0, s.jsx)(o.Button, {
        disabled: null == n,
        submitting: i,
        onClick: a,
        children: h.default.Messages.CONSOLE_TRANSFER_VOICE
      })
    })]
  })
}

function O() {
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.ModalHeader, {
      separator: !1,
      className: N.modalHeaderContainer,
      children: [(0, s.jsx)(o.Heading, {
        className: N.modalHeader,
        color: "header-primary",
        variant: "heading-xl/bold",
        children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND
      }), (0, s.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: h.default.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
      })]
    }), (0, s.jsx)(o.ModalContent, {
      className: N.emptyArt,
      children: (0, s.jsx)("img", {
        src: v,
        width: "189",
        height: "177",
        alt: ""
      })
    })]
  })
}

function g(e) {
  let t, {
      channel: a,
      platform: l,
      transitionState: u,
      onClose: f
    } = e,
    v = (0, d.useStateFromStores)([C.default], () => C.default.getDevicesForPlatform(l), [l]),
    x = (0, d.useStateFromStores)([C.default], () => C.default.getLastSelectedDeviceByPlatform(l)),
    g = n.useMemo(() => Object.values(v), [v]),
    j = (0, d.useStateFromStores)([C.default], () => C.default.getFetchingDevices(l)),
    _ = (0, d.useStateFromStores)([C.default], () => {
      var e;
      return null === (e = C.default.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId
    }),
    [E, I] = n.useState(!1),
    [p, R] = n.useState(() => {
      var e, t;
      return null !== (t = null === (e = v[null != _ ? _ : ""]) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : null
    });
  n.useEffect(() => {
    m.fetchDevices(l)
  }, [l]), n.useEffect(() => {
    1 === g.length ? R(g[0].id) : null != x && R(x)
  }, [g, x]);
  let M = async () => {
    let e = v[null != p ? p : ""];
    i()(null != e, "Cannot transfer without selected device");
    try {
      I(!0), await m.transferToPlayStation(l, e.id, a), f()
    } catch (t) {
      I(!1), c.default.show({
        title: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
        body: h.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
          deviceName: e.name
        })
      })
    }
  };
  return t = j ? (0, s.jsx)("div", {
    className: N.spinnerContainer,
    children: (0, s.jsx)(o.Spinner, {})
  }) : 0 === g.length ? (0, s.jsx)(O, {}) : (0, s.jsx)(S, {
    devices: g,
    onFinished: M,
    selectedDeviceId: p,
    transferring: E || null != _,
    onSelectDeviceId: e => {
      R(e), (0, m.persistSelectedDeviceId)(l, e)
    }
  }), (0, s.jsxs)(o.ModalRoot, {
    size: o.ModalSize.DYNAMIC,
    className: N.modalRoot,
    transitionState: u,
    impression: {
      impressionName: r.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
    },
    children: [t, (0, s.jsx)(o.ModalCloseButton, {
      className: N.closeButton,
      onClick: f
    })]
  })
}