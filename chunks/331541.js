"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ee
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("722770"),
  d = n("873546"),
  c = n("442837"),
  f = n("116061"),
  E = n("481060"),
  h = n("232567"),
  _ = n("2052"),
  C = n("393238"),
  S = n("727637"),
  m = n("420660"),
  p = n("100527"),
  I = n("906732"),
  T = n("521868"),
  g = n("299206"),
  A = n("440051"),
  N = n("734934"),
  v = n("158238"),
  R = n("785717"),
  L = n("221292"),
  O = n("318661"),
  M = n("502762"),
  P = n("192133"),
  y = n("138394"),
  x = n("131640"),
  D = n("695346"),
  b = n("199902"),
  U = n("293273"),
  j = n("158776"),
  G = n("594174"),
  w = n("881201"),
  k = n("26290"),
  F = n("626135"),
  B = n("70956"),
  H = n("51144"),
  V = n("246133"),
  Y = n("474376"),
  W = n("383832"),
  K = n("981631"),
  z = n("228168"),
  q = n("689938"),
  Q = n("580701");
let Z = [{
  duration: 30 * B.default.Millis.MINUTE,
  label: () => q.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: B.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * B.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * B.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: B.default.Millis.DAY,
  label: () => q.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => q.default.Messages.DURATION_FOREVER
}];

function X(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: Z.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(E.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, V.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    className: Q.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: Q.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: Q.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: Q.status,
          children: (0, H.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: Q.description,
          children: s
        })]
      })
    },
    action: () => (0, V.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== K.StatusTypes.ONLINE ? l : void 0
  })
}

function J(e, t, n, s) {
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: Q.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: Q.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: Q.status,
          children: (0, H.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: Q.description,
          children: s
        })]
      })
    },
    action: () => (0, V.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function $(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: h,
    closePopout: b
  } = e, U = (0, _.useAnalyticsContext)(), {
    analyticsLocations: G
  } = (0, I.default)(p.default.ACCOUNT_PROFILE_POPOUT), B = (0, O.default)(t.id, l), [V, $, ee, et] = (0, c.useStateFromStoresArray)([j.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, void 0, K.StatusTypes.UNKNOWN, !1] : [null !== (e = j.default.findActivity(n, e => e.type !== K.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, j.default.findActivity(t.id, e => e.type === K.ActivityTypes.CUSTOM_STATUS), j.default.getStatus(n), j.default.isMobileOnline(n)]
  }), en = function(e, t) {
    let n = A.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = D.StatusExpiresAtSetting.useSetting(),
      l = (0, N.useFocusModeEnabled)(),
      i = v.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = D.FocusModeExpiresAtSetting.useSetting(),
      o = e === K.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? q.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(q.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case K.StatusTypes.DND:
            return i ? q.default.Messages.STATUS_DND_HELP_FOCUS_MODE : q.default.Messages.STATUS_DND_HELP;
          case K.StatusTypes.INVISIBLE:
            return q.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: Z.map(t => {
          let {
            duration: n,
            label: s
          } = t;
          return (0, a.jsx)(E.MenuItem, {
            id: "".concat(e, "-").concat(n),
            label: s(),
            action: () => {
              (0, N.setFocusMode)(!0, n)
            },
            dontCloseOnAction: !0
          }, n)
        })
      });
    return (0, a.jsxs)(a.Fragment, {
      children: [J(K.StatusTypes.ONLINE, e, t), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), n ? X(K.StatusTypes.IDLE, e, t, d(K.StatusTypes.IDLE)) : J(K.StatusTypes.IDLE, e, t, d(K.StatusTypes.IDLE)), n ? X(K.StatusTypes.DND, e, t, d(K.StatusTypes.DND)) : J(K.StatusTypes.DND, e, t, d(K.StatusTypes.DND)), n ? X(K.StatusTypes.INVISIBLE, e, t, d(K.StatusTypes.INVISIBLE)) : J(K.StatusTypes.INVISIBLE, e, t, d(K.StatusTypes.INVISIBLE)), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(E.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: Q.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: Q.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: Q.icon
          }), (0, a.jsxs)("div", {
            className: Q.focusModeTitle,
            children: [q.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(k.TextBadge, {
              text: l ? q.default.Messages.FOCUS_MODE_BADGE_ON : o ? q.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : q.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: Q.description,
            children: l && null != r && "0" !== r ? q.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(q.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : q.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, N.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }(ee, U), {
    ref: ea
  } = (0, C.default)(), es = (0, S.default)(ea);
  s.useEffect(() => {
    F.default.track(K.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != V ? V.application_id : void 0,
      is_streaming: r,
      application_name: null != V ? V.name : void 0,
      profile_has_nitro_customization: (null == B ? void 0 : B.banner) != null,
      location: U.location,
      has_profile_effect: (null == B ? void 0 : B.profileEffectId) != null
    })
  }, []);
  let el = (0, N.useFocusModeEnabled)(),
    ei = ee === K.StatusTypes.DND,
    er = (0, Y.useMultiAccountMenuItems)(),
    eo = (0, T.useCustomStatusMenuItem)(null != n ? n : void 0, Q.menuItemFocused),
    eu = (0, g.default)({
      id: t.id,
      label: q.default.Messages.COPY_ID_USER,
      showIconFirst: !0
    });
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: G,
    children: (0, a.jsx)(R.UserProfileAnalyticsProvider, {
      layout: "ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, a.jsx)("div", {
        className: Q.popoutContainer,
        children: (0, a.jsx)("div", {
          ref: ea,
          children: (0, a.jsxs)(M.default, {
            className: Q.themeContainer,
            user: t,
            displayProfile: B,
            profileType: z.UserProfileTypes.POPOUT,
            children: [(0, a.jsx)(x.default, {
              user: t,
              displayProfile: B,
              onClose: () => null == b ? void 0 : b(),
              isMobile: et,
              isStreaming: (0, m.default)(V),
              status: ee,
              disableUserProfileLink: __OVERLAY__,
              isHovering: es,
              showPremiumBadgeUpsell: !1
            }), (0, a.jsxs)(M.default.Overlay, {
              children: [(0, a.jsx)(P.default, {
                activity: V,
                customStatusActivity: $,
                displayProfile: B,
                user: t,
                onClose: o,
                setNote: !1,
                canDM: !1,
                hideNote: !0,
                showCopiableUsername: !0
              }), (0, a.jsx)(y.default, {
                className: Q.divider
              }), (0, a.jsxs)(E.Menu, {
                navId: "account",
                "aria-label": q.default.Messages.SET_STATUS,
                hideScroller: !0,
                className: Q.menu,
                onClose: o,
                onSelect: h,
                children: [(0, a.jsxs)(E.MenuGroup, {
                  children: [(0, a.jsx)(E.MenuItem, {
                    id: "status-picker",
                    label: (0, a.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      },
                      children: [(0, H.humanizeStatus)(ee), el || ei ? (0, a.jsx)(f.BellSlashIcon, {
                        width: 12,
                        height: 12
                      }) : null]
                    }),
                    focusedClassName: Q.menuItemFocused,
                    subMenuIconClassName: Q.subMenuIcon,
                    action: d.isMobile ? function() {
                      (0, L.trackUserProfileAction)({
                        action: "PRESS_SET_STATUS",
                        layout: "ACCOUNT_POPOUT",
                        userId: t.id,
                        guildId: l,
                        analyticsLocations: G
                      }), (0, E.openModalLazy)(() => new Promise(e => {
                        e(e => (0, a.jsx)(E.ModalRoot, {
                          ...e,
                          size: E.ModalSize.SMALL,
                          className: Q.modal,
                          "aria-label": q.default.Messages.SET_STATUS,
                          children: (0, a.jsx)(E.Menu, {
                            navId: "account",
                            variant: "fixed",
                            "aria-label": q.default.Messages.SET_STATUS,
                            hideScroller: !0,
                            className: Q.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: en
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
                      return (0, a.jsx)(E.Status, {
                        status: ee,
                        size: 12,
                        className: i()(t, Q.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: d.isMobile ? void 0 : en
                  }, "status-picker"), eo]
                }), (0, a.jsx)(E.MenuGroup, {
                  children: (0, a.jsx)(E.MenuItem, {
                    id: "switch-account",
                    focusedClassName: Q.menuItemFocused,
                    subMenuIconClassName: Q.subMenuIcon,
                    label: q.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: w.default,
                    showIconFirst: !0,
                    action: () => {
                      (0, L.trackUserProfileAction)({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        layout: "ACCOUNT_POPOUT",
                        userId: t.id,
                        guildId: l,
                        analyticsLocations: G
                      }), (0, W.default)()
                    },
                    children: er
                  }, "switch-account")
                }), (0, a.jsx)(E.MenuGroup, {
                  children: eu
                })]
              })]
            })]
          })
        })
      })
    })
  })
}

function ee(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([G.default], () => G.default.getUser(t), [t]), d = (0, c.useStateFromStores)([U.default], () => U.default.getCustomStatusActivity()), [f, E] = s.useState(!1), _ = null != u ? u : n, C = (0, c.useStateFromStores)([b.default], () => null != _ && null != b.default.getAnyStreamForUser(_.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, h.getUser)(t), E(!0))
    }
  }, [u, t]), null == _) ? (f && o()(null != _, "Unexpected missing user"), null) : (0, a.jsx)($, {
    closePopout: i,
    user: _,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}