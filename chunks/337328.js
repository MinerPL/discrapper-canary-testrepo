"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("627445"),
  o = n.n(r),
  u = n("394846"),
  d = n("446674"),
  c = n("47115"),
  f = n("77078"),
  E = n("327037"),
  _ = n("79112"),
  h = n("997289"),
  C = n("731898"),
  I = n("252744"),
  T = n("502651"),
  S = n("812204"),
  p = n("685665"),
  m = n("106803"),
  A = n("861370"),
  g = n("91639"),
  N = n("128887"),
  R = n("217513"),
  O = n("430312"),
  L = n("763866"),
  v = n("10532"),
  M = n("935409"),
  P = n("845579"),
  D = n("373469"),
  y = n("52028"),
  x = n("824563"),
  b = n("697218"),
  U = n("660279"),
  G = n("304121"),
  j = n("599110"),
  w = n("718517"),
  k = n("158998"),
  F = n("583232"),
  H = n("644091"),
  B = n("891964"),
  V = n("49111"),
  Y = n("590456"),
  W = n("782340"),
  K = n("135231");
let z = [{
  duration: 30 * w.default.Millis.MINUTE,
  label: () => W.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: w.default.Millis.HOUR,
  label: () => W.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * w.default.Millis.HOUR,
  label: () => W.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * w.default.Millis.HOUR,
  label: () => W.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: w.default.Millis.DAY,
  label: () => W.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => W.default.Messages.DURATION_FOREVER
}];

function q(e, t, n, s) {
  let i = (0, a.jsx)(a.Fragment, {
    children: z.map(s => {
      let {
        duration: i,
        label: l
      } = s;
      return (0, a.jsx)(f.MenuItem, {
        id: "".concat(e, "-").concat(i),
        label: l(),
        action: () => (0, F.default)(e, t, n, i)
      }, i)
    })
  });
  return (0, a.jsx)(f.MenuItem, {
    id: e,
    className: K.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: K.statusItem,
        children: [(0, a.jsx)(f.Status, {
          status: e,
          className: K.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: K.status,
          children: (0, k.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: K.description,
          children: s
        })]
      })
    },
    action: () => (0, F.default)(e, t, n),
    children: e !== V.StatusTypes.ONLINE ? i : void 0
  })
}

function Q(e, t, n, s) {
  return (0, a.jsx)(f.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: K.statusItem,
        children: [(0, a.jsx)(f.Status, {
          status: e,
          className: K.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: K.status,
          children: (0, k.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: K.description,
          children: s
        })]
      })
    },
    action: () => (0, F.default)(e, t, n)
  })
}

function Z(e) {
  let {
    user: t,
    customStatus: n,
    guildId: i,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: E,
    closePopout: D
  } = e, y = (0, h.useAnalyticsContext)(), {
    AnalyticsLocationProvider: b
  } = (0, p.default)(S.default.ACCOUNT_PROFILE_POPOUT), w = (0, R.default)(t.id, i), [F, z, Z, X] = (0, d.useStateFromStoresArray)([x.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, void 0, V.StatusTypes.UNKNOWN, !1] : [null !== (e = x.default.findActivity(n, e => e.type !== V.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, x.default.findActivity(t.id, e => e.type === V.ActivityTypes.CUSTOM_STATUS), x.default.getStatus(n), x.default.isMobileOnline(n)]
  }), J = function(e, t) {
    let n = g.ExpiringStatusExperiment.useExperiment({
      location: "account popout"
    }).expiringStatus;
    return (0, a.jsxs)(a.Fragment, {
      children: [Q(V.StatusTypes.ONLINE, e, t), (0, a.jsx)(f.MenuSeparator, {}, "menu-separator-statuses"), n ? q(V.StatusTypes.IDLE, e, t) : Q(V.StatusTypes.IDLE, e, t), n ? q(V.StatusTypes.DND, e, t, W.default.Messages.STATUS_DND_HELP) : Q(V.StatusTypes.DND, e, t, W.default.Messages.STATUS_DND_HELP), n ? q(V.StatusTypes.INVISIBLE, e, t, W.default.Messages.STATUS_INVISIBLE_HELPER) : Q(V.StatusTypes.INVISIBLE, e, t, W.default.Messages.STATUS_INVISIBLE_HELPER)]
    })
  }(Z, y), {
    ref: $
  } = (0, C.default)(), ee = (0, I.default)($);
  s.useEffect(() => {
    j.default.track(V.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != F ? F.application_id : void 0,
      is_streaming: r,
      application_name: null != F ? F.name : void 0,
      profile_has_nitro_customization: (null == w ? void 0 : w.banner) != null,
      location: y.location,
      has_profile_effect: (null == w ? void 0 : w.profileEffectId) != null
    })
  }, []);
  let et = (0, H.useMultiAccountMenuItems)(),
    en = (0, m.useCustomStatusMenuItem)(null != n ? n : void 0, K.menuItemFocused),
    ea = (0, A.default)({
      id: t.id,
      label: W.default.Messages.COPY_ID_USER,
      showIconFirst: !0
    }),
    es = N.QuietModeExperiment.useExperiment({
      location: "account popout"
    }).allowQuietMode,
    ei = P.QuietMode.useSetting(),
    el = Z === V.StatusTypes.DND;
  return (0, a.jsx)(b, {
    children: (0, a.jsx)("div", {
      className: K.popoutContainer,
      children: (0, a.jsx)("div", {
        ref: $,
        children: (0, a.jsxs)(O.default, {
          user: t,
          profileType: Y.UserProfileTypes.POPOUT,
          children: [(0, a.jsx)(M.default, {
            user: t,
            displayProfile: w,
            onClose: () => null == D ? void 0 : D(),
            isMobile: X,
            isStreaming: (0, T.default)(F),
            status: Z,
            disableUserProfileLink: __OVERLAY__,
            isHovering: ee,
            showPremiumBadgeUpsell: !1
          }), (0, a.jsxs)(O.default.Inner, {
            children: [(0, a.jsx)(L.default, {
              activity: F,
              customStatusActivity: z,
              displayProfile: w,
              user: t,
              onClose: o,
              setNote: !1,
              canDM: !1,
              hideNote: !0,
              showCopiableUsername: !0
            }), (0, a.jsx)(v.default, {
              className: K.divider
            }), (0, a.jsxs)(f.Menu, {
              navId: "account",
              "aria-label": W.default.Messages.SET_STATUS,
              hideScroller: !0,
              className: K.menu,
              onClose: o,
              onSelect: E,
              children: [(0, a.jsxs)(f.MenuGroup, {
                children: [(0, a.jsx)(f.MenuItem, {
                  id: "status-picker",
                  label: (0, k.humanizeStatus)(Z),
                  focusedClassName: K.menuItemFocused,
                  subMenuIconClassName: K.subMenuIcon,
                  action: u.isMobile ? function() {
                    (0, f.openModalLazy)(() => new Promise(e => {
                      e(e => (0, a.jsx)(f.ModalRoot, {
                        ...e,
                        size: f.ModalSize.SMALL,
                        className: K.modal,
                        "aria-label": W.default.Messages.SET_STATUS,
                        children: (0, a.jsx)(f.Menu, {
                          navId: "account",
                          variant: "fixed",
                          "aria-label": W.default.Messages.SET_STATUS,
                          hideScroller: !0,
                          className: K.statusPickerModalMenu,
                          onClose: e.onClose,
                          onSelect: e.onClose,
                          children: J
                        })
                      }))
                    }))
                  } : void 0,
                  showIconFirst: !0,
                  icon: e => {
                    let {
                      className: t,
                      isFocused: n
                    } = e;
                    return (0, a.jsx)(f.Status, {
                      status: Z,
                      size: 12,
                      className: l(t, K.mainStatusIcon),
                      color: n ? "currentColor" : void 0
                    })
                  },
                  children: u.isMobile ? void 0 : J
                }, "status-picker"), en, es ? (0, a.jsx)(f.MenuItem, {
                  id: "quiet-mode",
                  "aria-label": "quiet mode",
                  focusedClassName: K.menuItemFocused,
                  showIconFirst: !0,
                  label: ei ? W.default.Messages.QUIET_MODE_ENABLED : el ? W.default.Messages.QUIET_MODE_DND : W.default.Messages.QUIET_MODE_DISABLED,
                  icon: e => {
                    let {
                      className: t
                    } = e;
                    return ei || el ? (0, a.jsx)(c.BellSlashIcon, {
                      width: 18,
                      height: 18,
                      className: l(t, K.quietModeIcon)
                    }) : (0, a.jsx)(U.default, {
                      width: 18,
                      height: 18,
                      className: l(t, K.quietModeIcon)
                    })
                  },
                  action: () => {
                    _.default.open(V.UserSettingsSections.NOTIFICATIONS)
                  }
                }, "quiet-mode") : null]
              }), (0, a.jsx)(f.MenuGroup, {
                children: (0, a.jsx)(f.MenuItem, {
                  id: "switch-account",
                  focusedClassName: K.menuItemFocused,
                  subMenuIconClassName: K.subMenuIcon,
                  label: W.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                  icon: G.default,
                  showIconFirst: !0,
                  action: B.default,
                  children: et
                }, "switch-account")
              }), (0, a.jsx)(f.MenuGroup, {
                children: ea
              })]
            })]
          })]
        })
      })
    })
  })
}

function X(e) {
  let {
    userId: t,
    user: n,
    guildId: i,
    onClose: l,
    onSelect: r
  } = e, u = (0, d.useStateFromStores)([b.default], () => b.default.getUser(t), [t]), c = (0, d.useStateFromStores)([y.default], () => y.default.getCustomStatusActivity()), [f, _] = s.useState(!1), h = null != u ? u : n, C = (0, d.useStateFromStores)([D.default], () => null != h && null != D.default.getAnyStreamForUser(h.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, E.getUser)(t), _(!0))
    }
  }, [u, t]), null == h) ? (f && o(null != h, "Unexpected missing user"), null) : (0, a.jsx)(Z, {
    closePopout: l,
    user: h,
    customStatus: c,
    guildId: i,
    isApplicationStreaming: C,
    onClose: l,
    onSelect: r
  })
}