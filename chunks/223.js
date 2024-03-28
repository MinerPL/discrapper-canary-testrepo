"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Q
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("924826"),
  d = n("722770"),
  c = n("442837"),
  f = n("481060"),
  E = n("607070"),
  _ = n("313889"),
  T = n("825829"),
  m = n("226192"),
  I = n("36459"),
  p = n("336197"),
  h = n("937889"),
  N = n("507418"),
  S = n("348238"),
  C = n("38267"),
  A = n("496675"),
  g = n("594174"),
  M = n("467679"),
  R = n("263704"),
  O = n("795295"),
  v = n("288176"),
  L = n("740727"),
  x = n("622116"),
  D = n("289565"),
  P = n("778947"),
  y = n("702346"),
  U = n("5192"),
  b = n("51144"),
  j = n("787374"),
  G = n("981631"),
  B = n("674563"),
  F = n("590433"),
  k = n("959517"),
  w = n("689938"),
  H = n("250259");

function V(e) {
  let {
    children: t,
    className: n,
    compact: a
  } = e;
  return (0, s.jsx)("div", {
    className: i()(H.footerContainer, n, {
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
    className: i()(H.annotationRow, n),
    children: t
  })
}

function K(e, t) {
  switch (e) {
    case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
      return (0, s.jsx)(L.default, {
        width: 16,
        height: 16,
        className: H.alertActionIcon,
        ...t
      });
    case _.AutomodAlertActionType.SET_COMPLETED:
      return (0, s.jsx)(R.default, {
        width: 16,
        height: 16,
        className: i()(H.alertActionIcon, H.alertActionSetCompletedIcon),
        ...t
      });
    case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
      return (0, s.jsx)(O.default, {
        width: 16,
        height: 16,
        className: i()(H.alertActionIcon),
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
      let a = null !== (s = U.default.getNickname(n, null, t)) && void 0 !== s ? s : b.default.getUserTag(t),
        l = o()(e.ts),
        i = "".concat(a, " ").concat(l.fromNow());
      try {
        switch (parseInt(e.actionType)) {
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
    return (0, s.jsx)(f.Tooltip, {
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
      onMouseLeave: R
    }
  } = (0, j.useAutomodAvatar)(!0), {
    onFocus: O,
    ...L
  } = (0, u.useListItem)(null != t ? t : ""), {
    isFocused: U,
    handleFocus: b,
    handleBlur: K
  } = (0, S.useFocusInside)(O), W = (0, c.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), Q = (0, c.useStateFromStores)([A.default], () => A.default.can(G.Permissions.MANAGE_MESSAGES, r), [r]), {
    ruleName: q,
    embedChannel: J,
    decisionId: X,
    keywordMatchedContent: Z,
    keyword: $,
    content: ee,
    flaggedMessageId: et,
    timeoutDuration: en,
    decisionReason: es,
    alertActionsExecution: ea,
    quarantineType: el
  } = (0, T.default)(l), ei = a.useMemo(() => (0, h.renderAutomodMessageMarkup)(ee, Z, r.id), [ee, Z, r]), {
    selected: er,
    ...eo
  } = function(e, t) {
    let {
      popouts: n,
      selected: s,
      setPopout: l
    } = (0, C.default)(e.id, k.DEFAULT_POPOUTS), {
      usernameProfile: i,
      avatarProfile: r
    } = n, o = (0, S.useContextMenuUser)(e.author.id, t.id), u = (0, S.useContextMenuModerateUser)(e.author.id, t.id, e.id), d = (0, S.useClickMessageAuthorUsername)(e, t, i, l), c = (0, S.useClickMessageAuthorAvatar)(r, l);
    return {
      selected: s,
      onContextMenu: o,
      onContextMenuModerateUser: u,
      onClickUsername: d,
      onClickAvatar: c,
      onPopoutRequestClose: a.useCallback(() => l({
        usernameProfile: !1,
        avatarProfile: !1,
        referencedUsernameProfile: !1
      }), [l]),
      renderPopout: N.default,
      showAvatarPopout: r,
      showUsernamePopout: i
    }
  }(l, r), eu = a.useCallback(() => {
    (0, m.openSubmitFeedback)(l.id, ee, X, r)
  }, [l.id, ee, X, r]), ed = a.useCallback(e => {
    null != et && null != J && (e.stopPropagation(), e.preventDefault(), (0, p.default)(G.Routes.CHANNEL(null == J ? void 0 : J.guild_id, null == J ? void 0 : J.id, et)))
  }, [J, et]), ec = a.useCallback(() => {
    (0, I.executeAlertAction)(l.id, r, _.AutomodAlertActionType.DELETE_USER_MESSAGE)
  }, [r, l.id]), ef = a.useMemo(() => (0, T.getActionHeaderText)(l, J, () => (0, s.jsx)("div", {
    className: H.channelNameContainer,
    children: (0, s.jsx)(x.default, {
      channel: J,
      className: H.channelName,
      openChatWithoutConnecting: !0
    })
  })), [l, J]), eE = (0, F.getFriendlyDurationString)(Number(en)), e_ = null != es, eT = Q && null != et && (null == ea || !ea.actions.hasOwnProperty(_.AutomodAlertActionType.DELETE_USER_MESSAGE));
  return (0, s.jsx)("div", {
    onMouseEnter: g,
    onMouseLeave: R,
    children: (0, s.jsx)(y.default, {
      className: i()(H.mainContainer, {
        [H.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(j.AutomodAvatar, {
        src: o
      }),
      iconContainerClassName: H.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: i()(H.content, {
          [H.compact]: n
        }),
        children: [(0, s.jsx)(P.BaseMessageHeader, {
          message: l,
          messageClassname: H.spanCorrection,
          className: i()(H.usernameContainer, H.spanCorrection, {
            [H.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: H.spanCorrection,
            children: [(0, s.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: H.username,
              children: w.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(M.default, {
              type: B.BotTagTypes.SYSTEM_DM,
              className: H.systemTag
            }), (0, s.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: H.spanCorrection,
              children: ef
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: i()(H.messageContent, {
            [H.compact]: n
          }),
          children: (0, s.jsx)(D.default, {
            ...L,
            message: l,
            channel: J,
            content: ei,
            compact: n,
            withFooter: !0,
            hideTimestamp: !0,
            className: i()(H.embedCard, {
              [H.compact]: n,
              [H.selected]: er || W && U,
              [H.isClickable]: null != et && null != J
            }),
            childrenAccessories: (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("div", {
                className: H.centeredRowContainer,
                children: [null != $ && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({
                      keyword: $
                    })
                  }), (0, s.jsx)("div", {
                    className: i()(H.dot, H.dotMargin)
                  })]
                }), null != q && (0, s.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({
                    ruleName: q
                  })
                }), null != eE && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i()(H.dot, H.dotMargin)
                  }), (0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: H.__invalid_footerText,
                    children: w.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({
                      duration: eE
                    })
                  })]
                }), null != el && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i()(H.dot, H.dotMargin)
                  }), (0, s.jsx)(f.Text, {
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
                children: (0, s.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-normal",
                  tag: "span",
                  children: es
                })
              }) : null]
            }),
            popoutProps: eo,
            zalgo: !0,
            onFocus: b,
            onBlur: K,
            onClick: ed
          })
        }), (0, s.jsx)(V, {
          compact: n,
          children: (0, s.jsxs)("div", {
            className: i()(H.centeredRowContainer, H.buttonContainer, {
              [H.compact]: n
            }),
            children: [(0, s.jsx)(f.Button, {
              onClick: e => {
                var t;
                null === (t = eo.onContextMenuModerateUser) || void 0 === t || t.call(eo, e)
              },
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: H.buttonStyle,
              children: (0, s.jsxs)("div", {
                className: H.footerAction,
                children: [(0, s.jsx)(v.default, {
                  width: 16,
                  height: 16,
                  color: d.default.BLUE_345,
                  className: H.footerIcon
                }), (0, s.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: w.default.Messages.ACTIONS
                })]
              })
            }), (0, s.jsx)("div", {
              className: H.dot
            }), (0, s.jsx)(f.Button, {
              onClick: eu,
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: H.buttonStyle,
              children: (0, s.jsx)("div", {
                className: H.footerAction,
                children: (0, s.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: w.default.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                })
              })
            }), eT ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", {
                className: H.dot
              }), (0, s.jsx)(f.Button, {
                onClick: ec,
                color: f.Button.Colors.LINK,
                look: f.Button.Looks.LINK,
                size: f.Button.Sizes.SMALL,
                className: H.buttonStyle,
                children: (0, s.jsx)("div", {
                  className: H.footerAction,
                  children: (0, s.jsx)(f.Text, {
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