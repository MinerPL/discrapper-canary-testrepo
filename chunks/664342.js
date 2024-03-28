"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("32750"),
  r = n("323597"),
  o = n("438536"),
  u = n("193987"),
  d = n("933793"),
  c = n("13736"),
  f = n("732393"),
  h = n("214906"),
  m = n("612856"),
  p = n("137591"),
  E = n("299206"),
  C = n("727429"),
  g = n("359110"),
  S = n("465670"),
  _ = n("441957"),
  T = n("808268"),
  I = n("502568"),
  A = n("585483"),
  v = n("739830"),
  N = n("488131"),
  x = n("981631"),
  M = n("689938");

function R(e) {
  let {
    channel: t
  } = e, [n, i] = l.useState(!1);

  function r() {
    i(e => !e)
  }
  let o = M.default.Messages.MORE;
  return (0, a.jsx)(s.Popout, {
    shouldShow: n,
    animation: s.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => i(!1),
    renderPopout: function(e) {
      return (0, a.jsx)(L, {
        ...e,
        channel: t
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.jsx)(I.default.Icon, {
        ...e,
        onClick: r,
        tooltip: n ? null : o,
        icon: T.default,
        "aria-label": o,
        selected: n
      })
    }
  })
}

function L(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: l
  } = e, C = (0, o.default)(t, "Sidebar Overflow"), S = (0, d.default)(t), T = (0, h.default)(t), I = (0, m.default)(t), v = (0, i.default)(t), N = (0, u.default)(t), R = (0, f.default)(t.id), L = (0, c.default)(t), y = (0, r.default)(t), O = (0, E.default)({
    id: t.id,
    label: M.default.Messages.COPY_ID_THREAD
  }), j = (0, p.default)(t);

  function P() {
    (0, g.transitionToChannel)(t.id)
  }
  return (0, a.jsxs)(s.Menu, {
    navId: "thread-context",
    onClose: n,
    "aria-label": M.default.Messages.THREAD_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, a.jsxs)(s.MenuGroup, {
      children: [C, (0, a.jsx)(s.MenuItem, {
        id: "open",
        label: M.default.Messages.OPEN_IN_FULL_VIEW,
        action: P
      })]
    }), (0, a.jsxs)(s.MenuGroup, {
      children: [T, I]
    }), (0, a.jsxs)(s.MenuGroup, {
      children: [L, S, R]
    }), (0, a.jsxs)(s.MenuGroup, {
      children: [(0, a.jsx)(s.MenuItem, {
        id: "search",
        label: M.default.Messages.SEARCH,
        icon: _.default,
        action: function() {
          P(), setTimeout(() => {
            A.ComponentDispatch.dispatch(x.ComponentActions.FOCUS_SEARCH, {
              prefillCurrentChannel: !1
            })
          }, 2e3)
        }
      }), (0, a.jsx)(s.MenuItem, {
        id: "pins",
        label: M.default.Messages.PINS,
        icon: _.default,
        action: function() {
          P(), A.ComponentDispatch.dispatch(x.ComponentActions.TOGGLE_CHANNEL_PINS)
        }
      })]
    }), (0, a.jsxs)(s.MenuGroup, {
      children: [j, v, N, y]
    }), (0, a.jsx)(s.MenuGroup, {
      children: O
    })]
  })
}

function y(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [t.isForumPost() ? null : (0, a.jsx)(v.default, {
      channel: t
    }), (0, a.jsx)(R, {
      channel: t
    }), (0, a.jsx)(I.default.Icon, {
      icon: S.default,
      tooltip: M.default.Messages.CLOSE,
      onClick: () => (0, N.closeThreadSidebar)((0, C.getGuildIdForGenericRedirect)(t), null != n ? n : t.parent_id)
    })]
  })
}