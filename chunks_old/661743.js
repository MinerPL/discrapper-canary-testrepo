"use strict";
n.r(t), n.d(t, {
  HangStatusPopout: function() {
    return R
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n.n(r),
  o = n("446674"),
  d = n("151426"),
  c = n("77078"),
  f = n("943722"),
  h = n("10641"),
  m = n("697218"),
  p = n("468759"),
  E = n("987772"),
  g = n("956089"),
  S = n("315102"),
  C = n("233965"),
  _ = n("32346"),
  I = n("808742"),
  T = n("342845"),
  v = n("49111"),
  x = n("843455"),
  N = n("782340"),
  A = n("45450");
let M = e => {
    let {
      style: t,
      className: n,
      name: l,
      icon: s
    } = e;
    return (0, a.jsx)(c.Tooltip, {
      text: l,
      children: e => (0, a.jsx)("div", {
        className: i(n, A.iconWidget),
        style: t,
        ...e,
        children: null != s && s
      })
    })
  },
  R = e => {
    let {
      currentStatus: t
    } = e, s = l.useRef(_.default.getRecentCustomStatuses()), r = l.useRef((0, h.isDismissibleContentDismissed)(d.DismissibleContent.HANG_STATUS_NEW_BADGE)).current, R = (0, I.getHangStatusOptions)(), [j, L] = l.useState(null != t ? t : null), y = (0, o.useStateFromStores)([m.default], () => m.default.getCurrentUser()), O = () => {
      !r && (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.HANG_STATUS_NEW_BADGE)
    }, P = (e, t) => {
      e.stopPropagation(), (0, C.updateHangStatus)(t, !0), O()
    }, D = (e, t) => {
      e.stopPropagation(), (0, C.updateCustomHangStatus)(t.status, t.emoji, !0), O()
    }, b = l.useCallback(e => {
      e.stopPropagation(), (0, C.clearHangStatus)(!0)
    }, []), U = e => {
      e.stopPropagation(), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("579371").then(n.bind(n, "579371"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }), O()
    }, w = l.useCallback(e => {
      L({
        type: v.ActivityTypes.HANG_STATUS,
        name: "Hang Status",
        state: e
      })
    }, []), F = l.useCallback(e => {
      L({
        type: v.ActivityTypes.HANG_STATUS,
        name: "Hang Status",
        state: x.HangStatusTypes.CUSTOM,
        details: e.status,
        emoji: e.emoji
      })
    }, []);
    return (0, a.jsxs)("div", {
      className: A.popout,
      children: [!r && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: A.popoutBackground
        }), (0, a.jsxs)("div", {
          className: A.onboarding,
          children: [(0, a.jsxs)("div", {
            className: A.title,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: N.default.Messages.ACTIVITY_STATUS
            }), (0, a.jsx)(g.TextBadge, {
              text: N.default.Messages.BETA,
              disableColor: !0,
              className: A.newBadge
            })]
          }), (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: A.helpText,
            children: N.default.Messages.HANG_STATUS_HELP
          }), (0, a.jsxs)("div", {
            className: A.iconGroup,
            children: [null != y && (0, a.jsxs)("div", {
              className: A.avatarWrapper,
              children: [(0, a.jsx)(c.Avatar, {
                className: A.avatar,
                size: c.AvatarSizes.SIZE_40,
                src: (0, S.getUserAvatarURL)(y),
                "aria-hidden": !0
              }), (0, a.jsx)("div", {
                className: A.outline
              })]
            }), (0, a.jsx)(T.default, {
              className: A.statusIcon,
              hangStatusActivity: j
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: A.options,
        children: [(0, a.jsxs)("div", {
          className: A.iconsContainer,
          children: [Object.entries(R).map(e => {
            let [n, l] = e;
            return (0, a.jsx)(c.Clickable, {
              "aria-label": l.title,
              onMouseEnter: () => w(n),
              onClick: e => P(e, n),
              children: (0, a.jsx)(M, {
                className: i(A.iconWidget, {
                  [A.selectedWidget]: n === (null == t ? void 0 : t.state)
                }),
                name: l.title,
                icon: (0, a.jsx)("img", {
                  src: l.icon,
                  alt: "",
                  className: A.icon
                }),
                style: n === (null == t ? void 0 : t.state) ? {
                  backgroundColor: null != l.color ? l.color : void 0
                } : {}
              })
            }, n)
          }), (0, a.jsx)(c.Clickable, {
            "aria-label": N.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
            onClick: b,
            onMouseEnter: () => L(null),
            children: (0, a.jsx)(M, {
              className: A.optionButton,
              name: N.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
              icon: (0, a.jsx)(p.default, {
                className: A.editIcon,
                foreground: A.editIconColor
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: A.divider
        }), (0, a.jsxs)("div", {
          className: A.iconsContainer,
          children: [s.current.map((e, n) => {
            let l = e.status === (null == t ? void 0 : t.details) && u.isEqual(e.emoji, null == t ? void 0 : t.emoji);
            return (0, a.jsx)(c.Clickable, {
              "aria-label": e.status,
              onMouseEnter: () => F(e),
              onClick: t => D(t, e),
              children: (0, a.jsx)(M, {
                className: i(A.iconWidget, {
                  [A.selectedWidget]: l
                }),
                name: e.status,
                icon: null != e.emoji ? (0, a.jsx)(f.ActivityEmoji, {
                  className: A.customIcon,
                  emoji: e.emoji,
                  hideTooltip: !0
                }) : null,
                style: l ? {
                  backgroundColor: "#7174B7B3"
                } : {
                  backgroundColor: "#6466914D"
                }
              })
            }, "custom-status-".concat(n))
          }), s.current.length > 0 ? (0, a.jsx)(c.Clickable, {
            "aria-label": null != t ? N.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : N.default.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: U,
            children: (0, a.jsx)(M, {
              className: A.optionButton,
              name: null != t ? N.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : N.default.Messages.STATUS_POPOUT_SET_CUSTOM,
              icon: (0, a.jsx)(E.default, {
                width: 20,
                height: 20,
                foreground: A.editIconColor
              })
            })
          }, "custom-status-edit") : (0, a.jsxs)(c.Clickable, {
            "aria-label": N.default.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: U,
            className: A.setCustomButton,
            children: [(0, a.jsx)(E.default, {
              className: A.editIcon,
              foreground: A.editIconColor
            }), (0, a.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "interactive-active",
              children: N.default.Messages.STATUS_POPOUT_SET_CUSTOM
            })]
          }, "custom-status-edit-full")]
        })]
      })]
    })
  }