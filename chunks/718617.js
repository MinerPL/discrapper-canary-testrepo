"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("718017"),
  i = n("442837"),
  r = n("186325"),
  o = n("110924"),
  u = n("714338"),
  d = n("433355"),
  c = n("863840"),
  f = n("189432"),
  h = n("727381"),
  m = n("313692"),
  p = n("596443"),
  E = n("50493"),
  C = n("981631");

function g(e, t) {
  return n => {
    if (0 === n) return "auto";
    let a = "forwards" === t.current,
      l = n > 0,
      s = !1;
    return l && a && "left" === e && (s = !0), l && !a && "right" === e && (s = !0), !l && a && "right" === e && (s = !0), !l && !a && "left" === e && (s = !0), s ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function S(e) {
  var t, n;
  let {
    userId: S,
    guildId: _,
    onClose: T,
    analyticsLocation: I,
    className: A
  } = e, v = (0, i.useStateFromStores)([d.default], () => d.default.getGuildSidebarState(_), [_]), N = null !== (t = null == v ? void 0 : v.details.modViewPanel) && void 0 !== t ? t : E.ModViewPanel.INFO, x = (0, o.default)(S);
  let M = null == (n = N) ? null : n === E.ModViewPanel.INFO ? "backwards" : "forwards",
    R = (0, c.default)(M),
    {
      reducedMotion: L
    } = l.useContext(r.AccessibilityPreferencesContext),
    y = l.useCallback(e => {
      null != v && (0, f.openGuildMemberModViewSidebar)(_, S, v.baseChannelId, {
        modViewPanel: e
      })
    }, [v, _, S]),
    O = l.useMemo(() => ({
      [C.KeybindActions.CLOSE_MODAL]: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
          if (N === E.ModViewPanel.INFO) return T();
          return y(E.ModViewPanel.INFO)
        }
      }
    }), [T, N, y]);
  l.useEffect(() => (u.default.enable(), u.default.enableTemp(O), () => u.default.disableTemp()), [O]);
  let j = (0, s.useTransition)(N, {
    immediate: x !== S,
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
    children: j((e, t, n) => {
      var l, i, r;
      let {
        key: o
      } = n;
      return (0, a.jsx)(s.animated.div, {
        style: {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: "100%",
          height: "100%",
          ...L.enabled ? {
            opacity: null === (l = e.value) || void 0 === l ? void 0 : l.to(e => 1 - Math.abs(e))
          } : {
            left: null === (i = e.value) || void 0 === i ? void 0 : i.to(g("left", R)),
            right: null === (r = e.value) || void 0 === r ? void 0 : r.to(g("right", R))
          }
        },
        children: function(e) {
          switch (e) {
            case E.ModViewPanel.INFO:
              return (0, a.jsx)(h.default, {
                userId: S,
                guildId: _,
                onNavigate: y,
                className: A
              });
            case E.ModViewPanel.MESSAGE_HISTORY:
              return (0, a.jsx)(m.default, {
                userId: S,
                guildId: _,
                onNavigate: () => y(E.ModViewPanel.INFO),
                className: A
              });
            case E.ModViewPanel.PERMISSIONS:
              return (0, a.jsx)(p.default, {
                userId: S,
                guildId: _,
                onNavigate: () => y(E.ModViewPanel.INFO),
                className: A
              });
            default:
              return null
          }
        }(t)
      }, o)
    })
  })
}