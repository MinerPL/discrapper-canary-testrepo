"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Q
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("866227"),
  o = n.n(r),
  u = n("974667"),
  d = n("733724"),
  c = n("446674"),
  E = n("77078"),
  f = n("206230"),
  _ = n("228944"),
  T = n("201131"),
  I = n("928098"),
  m = n("702873"),
  N = n("537325"),
  p = n("95045"),
  S = n("909917"),
  C = n("380986"),
  A = n("969706"),
  h = n("957255"),
  g = n("697218"),
  M = n("79798"),
  O = n("36694"),
  R = n("907566"),
  L = n("561359"),
  v = n("228220"),
  P = n("759885"),
  D = n("843194"),
  x = n("93332"),
  y = n("304198"),
  U = n("387111"),
  j = n("158998"),
  b = n("250375"),
  G = n("49111"),
  B = n("988268"),
  k = n("903639"),
  F = n("894488"),
  w = n("782340"),
  H = n("864994");

function V(e) {
  let {
    children: t,
    className: n,
    compact: a
  } = e;
  return (0, s.jsx)("div", {
    className: i(H.footerContainer, n, {
      [H.compact]: a
    }),
    children: t
  })
}

function Y(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, s.jsx)("div", {
    className: i(H.annotationRow, n),
    children: t
  })
}

function K(e, t) {
  switch (e) {
    case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
      return (0, s.jsx)(v.default, {
        width: 16,
        height: 16,
        className: H.alertActionIcon,
        ...t
      });
    case _.AutomodAlertActionType.SET_COMPLETED:
      return (0, s.jsx)(O.default, {
        width: 16,
        height: 16,
        className: i(H.alertActionIcon, H.alertActionSetCompletedIcon),
        ...t
      });
    case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
      return (0, s.jsx)(R.default, {
        width: 16,
        height: 16,
        className: i(H.alertActionIcon),
        ...t
      });
    default:
      return null
  }
}

function W(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, a = (0, c.useStateFromStores)([g.default], () => g.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == a) return K(e, {});
    let l = function(e, t, n) {
      var s;
      let a = null !== (s = U.default.getNickname(n, null, t)) && void 0 !== s ? s : j.default.getUserTag(t),
        l = o(e.ts),
        i = "".concat(a, " ").concat(l.fromNow());
      try {
        let t = parseInt(e.actionType);
        switch (t) {
          case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
            return w.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
              userName: a,
              timestamp: l.fromNow()
            });
          case _.AutomodAlertActionType.SET_COMPLETED:
            return w.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
              userName: a,
              timestamp: l.fromNow()
            });
          case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
            return w.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
              userName: a,
              timestamp: l.fromNow()
            });
          default:
            return i
        }
      } catch (e) {
        return i
      }
    }(t, a, n);
    return (0, s.jsx)(E.Tooltip, {
      text: l,
      children: t => K(e, t)
    })
  } catch (e) {
    return null
  }
}

function z(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, a = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
  return (0, s.jsx)("div", {
    className: H.alertActionsIconContainer,
    children: a.map(e => (0, s.jsx)(W, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}

function Q(e) {
  let {
    id: t,
    compact: n,
    message: l,
    channel: r
  } = e, {
    avatarSrc: o,
    eventHandlers: {
      onMouseEnter: g,
      onMouseLeave: O
    }
  } = (0, b.useAutomodAvatar)(!0), {
    onFocus: R,
    ...v
  } = (0, u.useListItem)(null != t ? t : ""), {
    isFocused: U,
    handleFocus: j,
    handleBlur: K
  } = (0, C.useFocusInside)(R), W = (0, c.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), Q = (0, c.useStateFromStores)([h.default], () => h.default.can(G.Permissions.MANAGE_MESSAGES, r), [r]), {
    ruleName: Z,
    embedChannel: J,
    decisionId: q,
    keywordMatchedContent: X,
    keyword: $,
    content: ee,
    flaggedMessageId: et,
    timeoutDuration: en,
    decisionReason: es,
    alertActionsExecution: ea,
    quarantineType: el
  } = (0, T.default)(l), ei = a.useMemo(() => (0, p.renderAutomodMessageMarkup)(ee, X, r.id), [ee, X, r]), {
    selected: er,
    ...eo
  } = function(e, t) {
    let {
      popouts: n,
      selected: s,
      setPopout: l
    } = (0, A.default)(e.id, F.DEFAULT_POPOUTS), {
      usernameProfile: i,
      avatarProfile: r
    } = n, o = (0, C.useContextMenuUser)(e.author.id, t.id), u = (0, C.useContextMenuModerateUser)(e.author.id, t.id, e.id), d = (0, C.useClickMessageAuthorUsername)(e, t, i, l), c = (0, C.useClickMessageAuthorAvatar)(r, l), E = a.useCallback(() => l({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [l]);
    return {
      selected: s,
      onContextMenu: o,
      onContextMenuModerateUser: u,
      onClickUsername: d,
      onClickAvatar: c,
      onPopoutRequestClose: E,
      renderPopout: S.default,
      showAvatarPopout: r,
      showUsernamePopout: i
    }
  }(l, r), eu = a.useCallback(() => {
    (0, I.openSubmitFeedback)(l.id, ee, q, r)
  }, [l.id, ee, q, r]), ed = a.useCallback(e => {
    null != et && null != J && (e.stopPropagation(), e.preventDefault(), (0, N.default)(G.Routes.CHANNEL(null == J ? void 0 : J.guild_id, null == J ? void 0 : J.id, et)))
  }, [J, et]), ec = a.useCallback(() => {
    (0, m.executeAlertAction)(l.id, r, _.AutomodAlertActionType.DELETE_USER_MESSAGE)
  }, [r, l.id]), eE = a.useMemo(() => (0, T.getActionHeaderText)(l, J, () => (0, s.jsx)("div", {
    className: H.channelNameContainer,
    children: (0, s.jsx)(P.default, {
      channel: J,
      className: H.channelName,
      openChatWithoutConnecting: !0
    })
  })), [l, J]), ef = (0, k.getFriendlyDurationString)(Number(en)), e_ = null != es, eT = Q && null != et && (null == ea || !ea.actions.hasOwnProperty(_.AutomodAlertActionType.DELETE_USER_MESSAGE));
  return (0, s.jsx)("div", {
    onMouseEnter: g,
    onMouseLeave: O,
    children: (0, s.jsx)(y.default, {
      className: i(H.mainContainer, {
        [H.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(b.AutomodAvatar, {
        src: o
      }),
      iconContainerClassName: H.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: i(H.content, {
          [H.compact]: n
        }),
        children: [(0, s.jsx)(x.BaseMessageHeader, {
          message: l,
          messageClassname: H.spanCorrection,
          className: i(H.usernameContainer, H.spanCorrection, {
            [H.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: H.spanCorrection,
            children: [(0, s.jsx)(E.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: H.username,
              children: w.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(M.default, {
              type: B.BotTagTypes.SYSTEM_DM,
              className: H.systemTag
            }), (0, s.jsx)(E.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: H.spanCorrection,
              children: eE
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: i(H.messageContent, {
            [H.compact]: n
          }),
          children: (0, s.jsx)(D.default, {
            ...v,
            message: l,
            channel: J,
            content: ei,
            compact: n,
            withFooter: !0,
            hideTimestamp: !0,
            className: i(H.embedCard, {
              [H.compact]: n,
              [H.selected]: er || W && U,
              [H.isClickable]: null != et && null != J
            }),
            childrenAccessories: (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("div", {
                className: H.centeredRowContainer,
                children: [null != $ && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({
                      keyword: $
                    })
                  }), (0, s.jsx)("div", {
                    className: i(H.dot, H.dotMargin)
                  })]
                }), null != Z && (0, s.jsx)(E.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({
                    ruleName: Z
                  })
                }), null != ef && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i(H.dot, H.dotMargin)
                  }), (0, s.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: H.footerText,
                    children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({
                      duration: ef
                    })
                  })]
                }), null != el && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i(H.dot, H.dotMargin)
                  }), (0, s.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: H.titleCase,
                    children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({
                      reason: (0, T.getQuarantineReasonString)(el)
                    })
                  })]
                })]
              }), e_ ? (0, s.jsx)(Y, {
                children: (0, s.jsx)(E.Text, {
                  variant: "text-xs/medium",
                  color: "text-normal",
                  tag: "span",
                  children: es
                })
              }) : null]
            }),
            popoutProps: eo,
            zalgo: !0,
            onFocus: j,
            onBlur: K,
            onClick: ed
          })
        }), (0, s.jsx)(V, {
          compact: n,
          children: (0, s.jsxs)("div", {
            className: i(H.centeredRowContainer, H.buttonContainer, {
              [H.compact]: n
            }),
            children: [(0, s.jsx)(E.Button, {
              onClick: e => {
                var t;
                null === (t = eo.onContextMenuModerateUser) || void 0 === t || t.call(eo, e)
              },
              color: E.Button.Colors.LINK,
              look: E.Button.Looks.LINK,
              size: E.Button.Sizes.SMALL,
              className: H.buttonStyle,
              children: (0, s.jsxs)("div", {
                className: H.footerAction,
                children: [(0, s.jsx)(L.default, {
                  width: 16,
                  height: 16,
                  color: d.default.BLUE_345,
                  className: H.footerIcon
                }), (0, s.jsx)(E.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: w.default.Messages.ACTIONS
                })]
              })
            }), (0, s.jsx)("div", {
              className: H.dot
            }), (0, s.jsx)(E.Button, {
              onClick: eu,
              color: E.Button.Colors.LINK,
              look: E.Button.Looks.LINK,
              size: E.Button.Sizes.SMALL,
              className: H.buttonStyle,
              children: (0, s.jsx)("div", {
                className: H.footerAction,
                children: (0, s.jsx)(E.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: w.default.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                })
              })
            }), eT ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", {
                className: H.dot
              }), (0, s.jsx)(E.Button, {
                onClick: ec,
                color: E.Button.Colors.LINK,
                look: E.Button.Looks.LINK,
                size: E.Button.Sizes.SMALL,
                className: H.buttonStyle,
                children: (0, s.jsx)("div", {
                  className: H.footerAction,
                  children: (0, s.jsx)(E.Text, {
                    variant: "text-xs/normal",
                    color: "text-link",
                    children: w.default.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                  })
                })
              })]
            }) : null, null != ea ? (0, s.jsx)(z, {
              alertActionsExecution: ea,
              guildId: r.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}