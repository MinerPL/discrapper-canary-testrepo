"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("924826"),
  d = n("722770"),
  c = n("442837"),
  f = n("481060"),
  E = n("607070"),
  _ = n("313889"),
  m = n("825829"),
  T = n("226192"),
  I = n("36459"),
  p = n("336197"),
  h = n("937889"),
  N = n("739566"),
  S = n("507418"),
  C = n("348238"),
  A = n("38267"),
  g = n("496675"),
  M = n("594174"),
  R = n("467679"),
  v = n("263704"),
  O = n("795295"),
  x = n("288176"),
  L = n("740727"),
  D = n("622116"),
  P = n("289565"),
  y = n("778947"),
  U = n("702346"),
  j = n("5192"),
  b = n("51144"),
  B = n("787374"),
  F = n("981631"),
  G = n("674563"),
  k = n("590433"),
  w = n("959517"),
  H = n("689938"),
  V = n("344576");

function Y(e, t) {
  let {
    popouts: n,
    selected: s,
    setPopout: l
  } = (0, A.default)(e.id, w.DEFAULT_POPOUTS), {
    usernameProfile: i,
    avatarProfile: r
  } = n, o = (0, C.useContextMenuUser)(e.author.id, t.id), u = (0, C.useContextMenuModerateUser)(e.author.id, t.id, e.id), d = (0, C.useClickMessageAuthorUsername)(e, t, i, l), c = (0, C.useClickMessageAuthorAvatar)(r, l);
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
    renderPopout: S.default,
    showAvatarPopout: r,
    showUsernamePopout: i
  }
}

function K(e) {
  let {
    children: t,
    className: n,
    compact: a
  } = e;
  return (0, s.jsx)("div", {
    className: i()(V.footerContainer, n, {
      [V.compact]: a
    }),
    children: t
  })
}

function W(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, s.jsx)("div", {
    className: i()(V.annotationRow, n),
    children: t
  })
}

function z(e, t) {
  switch (e) {
    case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
      return (0, s.jsx)(L.default, {
        width: 16,
        height: 16,
        className: V.alertActionIcon,
        ...t
      });
    case _.AutomodAlertActionType.SET_COMPLETED:
      return (0, s.jsx)(v.default, {
        width: 16,
        height: 16,
        className: i()(V.alertActionIcon, V.alertActionSetCompletedIcon),
        ...t
      });
    case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
      return (0, s.jsx)(O.default, {
        width: 16,
        height: 16,
        className: i()(V.alertActionIcon),
        ...t
      });
    default:
      return null
  }
}

function Q(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, a = (0, c.useStateFromStores)([M.default], () => M.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == a) return z(e, {});
    let l = function(e, t, n) {
      var s;
      let a = null !== (s = j.default.getNickname(n, null, t)) && void 0 !== s ? s : b.default.getUserTag(t),
        l = o()(e.ts),
        i = "".concat(a, " ").concat(l.fromNow());
      try {
        switch (parseInt(e.actionType)) {
          case _.AutomodAlertActionType.DELETE_USER_MESSAGE:
            return H.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
              userName: a,
              timestamp: l.fromNow()
            });
          case _.AutomodAlertActionType.SET_COMPLETED:
            return H.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
              userName: a,
              timestamp: l.fromNow()
            });
          case _.AutomodAlertActionType.SUBMIT_FEEDBACK:
            return H.default.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
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
      children: t => z(e, t)
    })
  } catch (e) {
    return null
  }
}

function q(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, a = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
  return (0, s.jsx)("div", {
    className: V.alertActionsIconContainer,
    children: a.map(e => (0, s.jsx)(Q, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}
let X = a.memo(function(e) {
  let {
    message: t,
    channel: n,
    embedChannel: l,
    compact: i
  } = e, r = Y(t, n), o = r.renderPopout, u = (0, N.default)(t), d = a.useMemo(() => null != o ? e => o(e, t) : void 0, [o, t]), c = (0, y.useUsername)({
    message: t,
    channel: n,
    author: u,
    guildId: null == n ? void 0 : n.guild_id,
    compact: i,
    ...r
  }, d);
  return (0, s.jsx)(f.Text, {
    variant: "text-md/normal",
    color: "header-primary",
    tag: "span",
    className: V.spanCorrection,
    children: (0, m.getActionHeaderText)(t, l, () => (0, s.jsx)("div", {
      className: V.channelNameContainer,
      children: (0, s.jsx)(D.default, {
        channel: l,
        className: V.channelName,
        openChatWithoutConnecting: !0
      })
    }), () => c)
  })
});

function Z(e) {
  let {
    id: t,
    compact: n,
    message: l,
    channel: r
  } = e, {
    avatarSrc: o,
    eventHandlers: {
      onMouseEnter: N,
      onMouseLeave: S
    }
  } = (0, B.useAutomodAvatar)(!0), {
    onFocus: A,
    ...M
  } = (0, u.useListItem)(null != t ? t : ""), {
    isFocused: v,
    handleFocus: O,
    handleBlur: L
  } = (0, C.useFocusInside)(A), D = (0, c.useStateFromStores)([E.default], () => E.default.keyboardModeEnabled), j = (0, c.useStateFromStores)([g.default], () => g.default.can(F.Permissions.MANAGE_MESSAGES, r), [r]), {
    ruleName: b,
    embedChannel: w,
    decisionId: z,
    keywordMatchedContent: Q,
    keyword: Z,
    content: J,
    flaggedMessageId: $,
    timeoutDuration: ee,
    decisionReason: et,
    alertActionsExecution: en,
    quarantineType: es
  } = (0, m.default)(l), ea = a.useMemo(() => (0, h.renderAutomodMessageMarkup)(J, Q, r.id), [J, Q, r]), {
    selected: el,
    ...ei
  } = Y(l, r), er = a.useCallback(() => {
    (0, T.openSubmitFeedback)(l.id, J, z, r)
  }, [l.id, J, z, r]), eo = a.useCallback(e => {
    null != $ && null != w && (e.stopPropagation(), e.preventDefault(), (0, p.default)(F.Routes.CHANNEL(null == w ? void 0 : w.guild_id, null == w ? void 0 : w.id, $)))
  }, [w, $]), eu = a.useCallback(() => {
    (0, I.executeAlertAction)(l.id, r, _.AutomodAlertActionType.DELETE_USER_MESSAGE)
  }, [r, l.id]), ed = (0, k.getFriendlyDurationString)(Number(ee)), ec = null != et, ef = j && null != $ && (null == en || !en.actions.hasOwnProperty(_.AutomodAlertActionType.DELETE_USER_MESSAGE));
  return (0, s.jsx)("div", {
    onMouseEnter: N,
    onMouseLeave: S,
    children: (0, s.jsx)(U.default, {
      className: i()(V.mainContainer, {
        [V.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(B.AutomodAvatar, {
        src: o
      }),
      iconContainerClassName: V.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: i()(V.content, {
          [V.compact]: n
        }),
        children: [(0, s.jsx)(y.BaseMessageHeader, {
          message: l,
          messageClassname: V.spanCorrection,
          className: i()(V.usernameContainer, V.spanCorrection, {
            [V.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: V.spanCorrection,
            children: [(0, s.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: V.username,
              children: H.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(R.default, {
              type: G.BotTagTypes.SYSTEM_DM,
              className: V.systemTag
            }), (0, s.jsx)(X, {
              message: l,
              channel: r,
              embedChannel: w,
              compact: n
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: i()(V.messageContent, {
            [V.compact]: n
          }),
          children: (0, s.jsx)(P.default, {
            ...M,
            message: l,
            channel: w,
            content: ea,
            compact: n,
            withFooter: !0,
            hideTimestamp: !0,
            className: i()(V.embedCard, {
              [V.compact]: n,
              [V.selected]: el || D && v,
              [V.isClickable]: null != $ && null != w
            }),
            childrenAccessories: (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("div", {
                className: V.centeredRowContainer,
                children: [null != Z && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: H.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({
                      keyword: Z
                    })
                  }), (0, s.jsx)("div", {
                    className: i()(V.dot, V.dotMargin)
                  })]
                }), null != b && (0, s.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: H.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({
                    ruleName: b
                  })
                }), null != ed && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i()(V.dot, V.dotMargin)
                  }), (0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: V.__invalid_footerText,
                    children: H.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({
                      duration: ed
                    })
                  })]
                }), null != es && (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("div", {
                    className: i()(V.dot, V.dotMargin)
                  }), (0, s.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: V.titleCase,
                    children: H.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({
                      reason: (0, m.getQuarantineReasonString)(es)
                    })
                  })]
                })]
              }), ec ? (0, s.jsx)(W, {
                children: (0, s.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-normal",
                  tag: "span",
                  children: et
                })
              }) : null]
            }),
            popoutProps: ei,
            zalgo: !0,
            onFocus: O,
            onBlur: L,
            onClick: eo
          })
        }), (0, s.jsx)(K, {
          compact: n,
          children: (0, s.jsxs)("div", {
            className: i()(V.centeredRowContainer, V.buttonContainer, {
              [V.compact]: n
            }),
            children: [(0, s.jsx)(f.Button, {
              onClick: e => {
                var t;
                null === (t = ei.onContextMenuModerateUser) || void 0 === t || t.call(ei, e)
              },
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: V.buttonStyle,
              children: (0, s.jsxs)("div", {
                className: V.footerAction,
                children: [(0, s.jsx)(x.default, {
                  width: 16,
                  height: 16,
                  color: d.default.BLUE_345,
                  className: V.footerIcon
                }), (0, s.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: H.default.Messages.ACTIONS
                })]
              })
            }), (0, s.jsx)("div", {
              className: V.dot
            }), (0, s.jsx)(f.Button, {
              onClick: er,
              color: f.Button.Colors.LINK,
              look: f.Button.Looks.LINK,
              size: f.Button.Sizes.SMALL,
              className: V.buttonStyle,
              children: (0, s.jsx)("div", {
                className: V.footerAction,
                children: (0, s.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  children: H.default.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                })
              })
            }), ef ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", {
                className: V.dot
              }), (0, s.jsx)(f.Button, {
                onClick: eu,
                color: f.Button.Colors.LINK,
                look: f.Button.Looks.LINK,
                size: f.Button.Sizes.SMALL,
                className: V.buttonStyle,
                children: (0, s.jsx)("div", {
                  className: V.footerAction,
                  children: (0, s.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: "text-link",
                    children: H.default.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                  })
                })
              })]
            }) : null, null != en ? (0, s.jsx)(q, {
              alertActionsExecution: en,
              guildId: r.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}