"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("146606"),
  i = n("446674"),
  r = n("413197"),
  u = n("84339"),
  o = n("485328"),
  d = n("982108"),
  c = n("561744"),
  f = n("994906"),
  h = n("249957"),
  m = n("598263"),
  p = n("276867"),
  E = n("789150"),
  g = n("49111");

function S(e, t) {
  return n => {
    if (0 === n) return "auto";
    let a = "forwards" === t.current,
      l = n > 0,
      s = !1;
    return l && a && "left" === e && (s = !0), l && !a && "right" === e && (s = !0), !l && a && "right" === e && (s = !0), !l && !a && "left" === e && (s = !0), s ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function C(e) {
  var t, n;
  let {
    userId: C,
    guildId: _,
    onClose: I,
    analyticsLocation: T,
    className: v
  } = e, x = (0, i.useStateFromStores)([d.default], () => d.default.getGuildSidebarState(_), [_]), N = null !== (t = null == x ? void 0 : x.details.modViewPanel) && void 0 !== t ? t : E.ModViewPanel.INFO, A = (0, u.default)(C);
  let M = null == (n = N) ? null : n === E.ModViewPanel.INFO ? "backwards" : "forwards",
    R = (0, c.default)(M),
    {
      reducedMotion: j
    } = l.useContext(r.AccessibilityPreferencesContext),
    L = l.useCallback(e => {
      null != x && (0, f.openGuildMemberModViewSidebar)(_, C, x.baseChannelId, {
        modViewPanel: e
      })
    }, [x, _, C]),
    y = l.useMemo(() => ({
      [g.KeybindActions.CLOSE_MODAL]: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
          if (N === E.ModViewPanel.INFO) return I();
          return L(E.ModViewPanel.INFO)
        }
      }
    }), [I, N, L]);
  l.useEffect(() => (o.default.enable(), o.default.enableTemp(y), () => o.default.disableTemp()), [y]);
  let O = (0, s.useTransition)(N, {
    immediate: A !== C,
    value: 0,
    from: {
      value: 1
    },
    enter: {
      value: 0
    },
    leave: {
      value: -1
    }
  });
  return (0, a.jsx)(s.animated.div, {
    style: {
      position: "relative",
      height: "100%",
      flex: 1,
      overflow: "hidden"
    },
    children: O((e, t, n) => {
      var l, i, r;
      let {
        key: u
      } = n;
      return (0, a.jsx)(s.animated.div, {
        style: {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: "100%",
          height: "100%",
          ...j.enabled ? {
            opacity: null === (l = e.value) || void 0 === l ? void 0 : l.to(e => 1 - Math.abs(e))
          } : {
            left: null === (i = e.value) || void 0 === i ? void 0 : i.to(S("left", R)),
            right: null === (r = e.value) || void 0 === r ? void 0 : r.to(S("right", R))
          }
        },
        children: function(e) {
          switch (e) {
            case E.ModViewPanel.INFO:
              return (0, a.jsx)(h.default, {
                userId: C,
                guildId: _,
                onNavigate: L,
                className: v
              });
            case E.ModViewPanel.MESSAGE_HISTORY:
              return (0, a.jsx)(m.default, {
                userId: C,
                guildId: _,
                onNavigate: () => L(E.ModViewPanel.INFO),
                className: v
              });
            case E.ModViewPanel.PERMISSIONS:
              return (0, a.jsx)(p.default, {
                userId: C,
                guildId: _,
                onNavigate: () => L(E.ModViewPanel.INFO),
                className: v
              });
            default:
              return null
          }
        }(t)
      }, u)
    })
  })
}