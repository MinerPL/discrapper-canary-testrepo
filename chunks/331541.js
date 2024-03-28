"use strict";
n.r(t), n.d(t, {
  default: function() {
    return J
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
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
  m = n("727637"),
  S = n("420660"),
  I = n("100527"),
  p = n("521868"),
  T = n("299206"),
  g = n("440051"),
  A = n("734934"),
  N = n("158238"),
  v = n("785717"),
  O = n("318661"),
  R = n("747074"),
  L = n("192133"),
  P = n("138394"),
  M = n("131640"),
  y = n("695346"),
  D = n("199902"),
  b = n("293273"),
  x = n("158776"),
  U = n("594174"),
  j = n("881201"),
  G = n("26290"),
  w = n("626135"),
  k = n("70956"),
  F = n("51144"),
  B = n("246133"),
  H = n("474376"),
  V = n("383832"),
  Y = n("981631"),
  W = n("228168"),
  K = n("689938"),
  z = n("66449");
let q = [{
  duration: 30 * k.default.Millis.MINUTE,
  label: () => K.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: k.default.Millis.HOUR,
  label: () => K.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * k.default.Millis.HOUR,
  label: () => K.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * k.default.Millis.HOUR,
  label: () => K.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: k.default.Millis.DAY,
  label: () => K.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => K.default.Messages.DURATION_FOREVER
}];

function Q(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: q.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(E.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, B.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    className: z.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: z.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: z.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: z.status,
          children: (0, F.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: z.description,
          children: s
        })]
      })
    },
    action: () => (0, B.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== Y.StatusTypes.ONLINE ? l : void 0
  })
}

function Z(e, t, n, s) {
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: z.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: z.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: z.status,
          children: (0, F.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: z.description,
          children: s
        })]
      })
    },
    action: () => (0, B.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function X(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: h,
    closePopout: D
  } = e, b = (0, _.useAnalyticsContext)(), U = (0, O.default)(t.id, l), {
    UserProfileAnalyticsProvider: k,
    trackUserProfileAction: B
  } = (0, v.useUserProfileAnalyticsProvider)({
    layout: "ACCOUNT_POPOUT",
    newAnalyticsLocations: [I.default.ACCOUNT_PROFILE_POPOUT],
    userId: t.id,
    guildId: l
  }), [X, J, $, ee] = (0, c.useStateFromStoresArray)([x.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, void 0, Y.StatusTypes.UNKNOWN, !1] : [null !== (e = x.default.findActivity(n, e => e.type !== Y.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, x.default.findActivity(t.id, e => e.type === Y.ActivityTypes.CUSTOM_STATUS), x.default.getStatus(n), x.default.isMobileOnline(n)]
  }), et = function(e, t) {
    let n = g.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = y.StatusExpiresAtSetting.useSetting(),
      l = (0, A.useFocusModeEnabled)(),
      i = N.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = y.FocusModeExpiresAtSetting.useSetting(),
      o = e === Y.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? K.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(K.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case Y.StatusTypes.DND:
            return i ? K.default.Messages.STATUS_DND_HELP_FOCUS_MODE : K.default.Messages.STATUS_DND_HELP;
          case Y.StatusTypes.INVISIBLE:
            return K.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: q.map(t => {
          let {
            duration: n,
            label: s
          } = t;
          return (0, a.jsx)(E.MenuItem, {
            id: "".concat(e, "-").concat(n),
            label: s(),
            action: () => {
              (0, A.setFocusMode)(!0, n)
            },
            dontCloseOnAction: !0
          }, n)
        })
      });
    return (0, a.jsxs)(a.Fragment, {
      children: [Z(Y.StatusTypes.ONLINE, e, t), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), n ? Q(Y.StatusTypes.IDLE, e, t, d(Y.StatusTypes.IDLE)) : Z(Y.StatusTypes.IDLE, e, t, d(Y.StatusTypes.IDLE)), n ? Q(Y.StatusTypes.DND, e, t, d(Y.StatusTypes.DND)) : Z(Y.StatusTypes.DND, e, t, d(Y.StatusTypes.DND)), n ? Q(Y.StatusTypes.INVISIBLE, e, t, d(Y.StatusTypes.INVISIBLE)) : Z(Y.StatusTypes.INVISIBLE, e, t, d(Y.StatusTypes.INVISIBLE)), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(E.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: z.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: z.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: z.icon
          }), (0, a.jsxs)("div", {
            className: z.focusModeTitle,
            children: [K.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(G.TextBadge, {
              text: l ? K.default.Messages.FOCUS_MODE_BADGE_ON : o ? K.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : K.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: z.description,
            children: l && null != r && "0" !== r ? K.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(K.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : K.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, A.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }($, b), {
    ref: en
  } = (0, C.default)(), ea = (0, m.default)(en);
  s.useEffect(() => {
    w.default.track(Y.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != X ? X.application_id : void 0,
      is_streaming: r,
      application_name: null != X ? X.name : void 0,
      profile_has_nitro_customization: (null == U ? void 0 : U.banner) != null,
      location: b.location,
      has_profile_effect: (null == U ? void 0 : U.profileEffectId) != null
    })
  }, []);
  let es = (0, A.useFocusModeEnabled)(),
    el = $ === Y.StatusTypes.DND,
    ei = (0, H.useMultiAccountMenuItems)(),
    er = (0, p.useCustomStatusMenuItem)(null != n ? n : void 0, z.menuItemFocused),
    eo = (0, T.default)({
      id: t.id,
      label: K.default.Messages.COPY_ID_USER,
      showIconFirst: !0
    });
  return (0, a.jsx)(k, {
    children: (0, a.jsx)("div", {
      className: z.popoutContainer,
      children: (0, a.jsx)("div", {
        ref: en,
        children: (0, a.jsxs)(R.default, {
          user: t,
          profileType: W.UserProfileTypes.POPOUT,
          children: [(0, a.jsx)(M.default, {
            user: t,
            displayProfile: U,
            onClose: () => null == D ? void 0 : D(),
            isMobile: ee,
            isStreaming: (0, S.default)(X),
            status: $,
            disableUserProfileLink: __OVERLAY__,
            isHovering: ea,
            showPremiumBadgeUpsell: !1
          }), (0, a.jsxs)(R.default.Inner, {
            children: [(0, a.jsx)(L.default, {
              activity: X,
              customStatusActivity: J,
              displayProfile: U,
              user: t,
              onClose: o,
              setNote: !1,
              canDM: !1,
              hideNote: !0,
              showCopiableUsername: !0
            }), (0, a.jsx)(P.default, {
              className: z.divider
            }), (0, a.jsxs)(E.Menu, {
              navId: "account",
              "aria-label": K.default.Messages.SET_STATUS,
              hideScroller: !0,
              className: z.menu,
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
                    children: [(0, F.humanizeStatus)($), es || el ? (0, a.jsx)(f.BellSlashIcon, {
                      width: 12,
                      height: 12
                    }) : null]
                  }),
                  focusedClassName: z.menuItemFocused,
                  subMenuIconClassName: z.subMenuIcon,
                  action: d.isMobile ? function() {
                    B({
                      action: "PRESS_SET_STATUS"
                    }), (0, E.openModalLazy)(() => new Promise(e => {
                      e(e => (0, a.jsx)(E.ModalRoot, {
                        ...e,
                        size: E.ModalSize.SMALL,
                        className: z.modal,
                        "aria-label": K.default.Messages.SET_STATUS,
                        children: (0, a.jsx)(E.Menu, {
                          navId: "account",
                          variant: "fixed",
                          "aria-label": K.default.Messages.SET_STATUS,
                          hideScroller: !0,
                          className: z.statusPickerModalMenu,
                          onClose: e.onClose,
                          onSelect: e.onClose,
                          children: et
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
                      status: $,
                      size: 12,
                      className: i()(t, z.mainStatusIcon),
                      color: n ? "currentColor" : void 0
                    })
                  },
                  children: d.isMobile ? void 0 : et
                }, "status-picker"), er]
              }), (0, a.jsx)(E.MenuGroup, {
                children: (0, a.jsx)(E.MenuItem, {
                  id: "switch-account",
                  focusedClassName: z.menuItemFocused,
                  subMenuIconClassName: z.subMenuIcon,
                  label: K.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                  icon: j.default,
                  showIconFirst: !0,
                  action: () => {
                    B({
                      action: "PRESS_SWITCH_ACCOUNTS"
                    }), (0, V.default)()
                  },
                  children: ei
                }, "switch-account")
              }), (0, a.jsx)(E.MenuGroup, {
                children: eo
              })]
            })]
          })]
        })
      })
    })
  })
}

function J(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([U.default], () => U.default.getUser(t), [t]), d = (0, c.useStateFromStores)([b.default], () => b.default.getCustomStatusActivity()), [f, E] = s.useState(!1), _ = null != u ? u : n, C = (0, c.useStateFromStores)([D.default], () => null != _ && null != D.default.getAnyStreamForUser(_.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, h.getUser)(t), E(!0))
    }
  }, [u, t]), null == _) ? (f && o()(null != _, "Unexpected missing user"), null) : (0, a.jsx)(X, {
    closePopout: i,
    user: _,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}