"use strict";
n.r(t), n.d(t, {
  HangStatusPopout: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("524437"),
  c = n("481060"),
  f = n("788307"),
  h = n("605236"),
  m = n("594174"),
  p = n("783014"),
  E = n("185403"),
  C = n("26290"),
  g = n("768581"),
  S = n("906605"),
  _ = n("106301"),
  T = n("833858"),
  I = n("223135"),
  A = n("981631"),
  v = n("231338"),
  N = n("689938"),
  x = n("690959");
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
        className: i()(n, x.iconWidget),
        style: t,
        ...e,
        children: null != s && s
      })
    })
  },
  R = e => {
    let {
      currentStatus: t
    } = e, s = l.useRef(_.default.getRecentCustomStatuses()), r = l.useRef((0, h.isDismissibleContentDismissed)(d.DismissibleContent.HANG_STATUS_NEW_BADGE)).current, R = (0, T.getHangStatusOptions)(), [L, y] = l.useState(null != t ? t : null), O = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()), j = () => {
      !r && (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.HANG_STATUS_NEW_BADGE)
    }, P = (e, t) => {
      e.stopPropagation(), (0, S.updateHangStatus)(t, !0), j()
    }, D = (e, t) => {
      e.stopPropagation(), (0, S.updateCustomHangStatus)(t.status, t.emoji, !0), j()
    }, b = l.useCallback(e => {
      e.stopPropagation(), (0, S.clearHangStatus)(!0)
    }, []), U = e => {
      e.stopPropagation(), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("1631")]).then(n.bind(n, "333541"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }), j()
    }, F = l.useCallback(e => {
      y({
        type: A.ActivityTypes.HANG_STATUS,
        name: "Hang Status",
        state: e
      })
    }, []), w = l.useCallback(e => {
      y({
        type: A.ActivityTypes.HANG_STATUS,
        name: "Hang Status",
        state: v.HangStatusTypes.CUSTOM,
        details: e.status,
        emoji: e.emoji
      })
    }, []);
    return (0, a.jsxs)("div", {
      className: x.popout,
      children: [!r && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: x.popoutBackground
        }), (0, a.jsxs)("div", {
          className: x.onboarding,
          children: [(0, a.jsxs)("div", {
            className: x.title,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: N.default.Messages.ACTIVITY_STATUS
            }), (0, a.jsx)(C.TextBadge, {
              text: N.default.Messages.BETA,
              disableColor: !0,
              className: x.newBadge
            })]
          }), (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: x.helpText,
            children: N.default.Messages.HANG_STATUS_HELP
          }), (0, a.jsxs)("div", {
            className: x.iconGroup,
            children: [null != O && (0, a.jsxs)("div", {
              className: x.avatarWrapper,
              children: [(0, a.jsx)(c.Avatar, {
                className: x.avatar,
                size: c.AvatarSizes.SIZE_40,
                src: (0, g.getUserAvatarURL)(O),
                "aria-hidden": !0
              }), (0, a.jsx)("div", {
                className: x.outline
              })]
            }), (0, a.jsx)(I.default, {
              className: x.statusIcon,
              hangStatusActivity: L
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: x.options,
        children: [(0, a.jsxs)("div", {
          className: x.iconsContainer,
          children: [Object.entries(R).map(e => {
            let [n, l] = e;
            return (0, a.jsx)(c.Clickable, {
              "aria-label": l.title,
              onMouseEnter: () => F(n),
              onClick: e => P(e, n),
              children: (0, a.jsx)(M, {
                className: i()(x.iconWidget, {
                  [x.selectedWidget]: n === (null == t ? void 0 : t.state)
                }),
                name: l.title,
                icon: (0, a.jsx)("img", {
                  src: l.icon,
                  alt: "",
                  className: x.icon
                }),
                style: n === (null == t ? void 0 : t.state) ? {
                  backgroundColor: null != l.color ? l.color : void 0
                } : {}
              })
            }, n)
          }), (0, a.jsx)(c.Clickable, {
            "aria-label": N.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
            onClick: b,
            onMouseEnter: () => y(null),
            children: (0, a.jsx)(M, {
              className: x.optionButton,
              name: N.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
              icon: (0, a.jsx)(p.default, {
                className: x.editIcon,
                foreground: x.editIconColor
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: x.divider
        }), (0, a.jsxs)("div", {
          className: x.iconsContainer,
          children: [s.current.map((e, n) => {
            let l = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji);
            return (0, a.jsx)(c.Clickable, {
              "aria-label": e.status,
              onMouseEnter: () => w(e),
              onClick: t => D(t, e),
              children: (0, a.jsx)(M, {
                className: i()(x.iconWidget, {
                  [x.selectedWidget]: l
                }),
                name: e.status,
                icon: null != e.emoji ? (0, a.jsx)(f.ActivityEmoji, {
                  className: x.customIcon,
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
              className: x.optionButton,
              name: null != t ? N.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : N.default.Messages.STATUS_POPOUT_SET_CUSTOM,
              icon: (0, a.jsx)(E.default, {
                width: 20,
                height: 20,
                foreground: x.editIconColor
              })
            })
          }, "custom-status-edit") : (0, a.jsxs)(c.Clickable, {
            "aria-label": N.default.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: U,
            className: x.setCustomButton,
            children: [(0, a.jsx)(E.default, {
              className: x.editIcon,
              foreground: x.editIconColor
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