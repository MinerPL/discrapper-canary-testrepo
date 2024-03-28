"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("32750"),
  d = n("109764"),
  c = n("323597"),
  f = n("438536"),
  h = n("251746"),
  m = n("193987"),
  p = n("933793"),
  E = n("13736"),
  C = n("732393"),
  g = n("137591"),
  S = n("299206"),
  _ = n("695346"),
  T = n("979651"),
  I = n("808268"),
  A = n("502568"),
  v = n("488131"),
  N = n("689938");

function x(e) {
  let {
    channel: t
  } = e, [n, s] = l.useState(!1);

  function i() {
    s(e => !e)
  }
  let r = N.default.Messages.MORE;
  return (0, a.jsx)(o.Popout, {
    shouldShow: n,
    animation: o.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => s(!1),
    renderPopout: function(e) {
      return (0, a.jsx)(M, {
        ...e,
        channel: t
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.jsx)(A.default.Icon, {
        ...e,
        onClick: i,
        tooltip: n ? null : r,
        icon: I.default,
        "aria-label": r,
        selected: n
      })
    }
  })
}

function M(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: l
  } = e, s = (0, u.default)(t), I = (0, m.default)(t), A = (0, C.default)(t.id), x = (0, E.default)(t), M = (0, S.default)({
    id: t.id,
    label: N.default.Messages.COPY_ID_THREAD
  }), R = (0, d.default)(t), L = (0, c.default)(t), y = (0, f.default)(t, "Toolbar Overflow"), O = (0, p.default)(t), j = (0, h.default)(t), P = (0, g.default)(t), D = _.UseThreadSidebar.useSetting(), b = (0, r.useStateFromStores)([T.default], () => !i().isEmpty(T.default.getVoiceStatesForChannel(t.id)));
  return (0, a.jsxs)(o.Menu, {
    navId: "thread-context",
    onClose: n,
    "aria-label": N.default.Messages.THREAD_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, a.jsxs)(o.MenuGroup, {
      children: [y, j]
    }), (0, a.jsxs)(o.MenuGroup, {
      children: [x, O, A, D && !b ? (0, a.jsx)(o.MenuItem, {
        id: "open",
        label: N.default.Messages.OPEN_IN_SPLIT_VIEW,
        action: function() {
          (0, v.openThreadSidebarForViewing)(t)
        }
      }) : null]
    }), (0, a.jsxs)(o.MenuGroup, {
      children: [P, s, I, L]
    }), (0, a.jsxs)(o.MenuGroup, {
      children: [R, M]
    })]
  })
}