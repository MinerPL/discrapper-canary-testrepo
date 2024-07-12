n.d(t, {
  Z: function() {
return Q;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(913527),
  o = n.n(l),
  c = n(91192),
  d = n(722770),
  u = n(442837),
  _ = n(481060),
  E = n(607070),
  I = n(313889),
  m = n(825829),
  T = n(226192),
  h = n(36459),
  N = n(336197),
  f = n(103575),
  p = n(496675),
  C = n(594174),
  g = n(467679),
  S = n(702346),
  A = n(5192),
  R = n(51144),
  x = n(937889),
  O = n(739566),
  M = n(779125),
  v = n(890410),
  L = n(464891),
  Z = n(507418),
  P = n(348238),
  b = n(38267),
  D = n(83561),
  j = n(959517),
  U = n(981631),
  y = n(674563),
  B = n(590433),
  k = n(689938),
  G = n(117414);

function F(e, t) {
  let {
popouts: n,
selected: i,
setPopout: s
  } = (0, b.Z)(e.id, j.d$), {
usernameProfile: r,
avatarProfile: l
  } = n, o = (0, P.wq)(e.author.id, t.id), c = (0, P.RN)(e.author.id, t.id, e.id), d = (0, P.XO)(e, t, r, s), u = (0, P.R9)(l, s);
  return {
selected: i,
onContextMenu: o,
onContextMenuModerateUser: c,
onClickUsername: d,
onClickAvatar: u,
onPopoutRequestClose: a.useCallback(() => s({
  usernameProfile: !1,
  avatarProfile: !1,
  referencedUsernameProfile: !1
}), [s]),
renderPopout: Z.Z,
showAvatarPopout: l,
showUsernamePopout: r
  };
}

function w(e, t) {
  return a.useMemo(() => {
if (null != t)
  return n => (0, i.jsx)(f.Z, {
    ...n,
    location: 'AutomodFlagToChannel',
    userId: t.id,
    user: t,
    channelId: e.id,
    guildId: e.guild_id
  });
  }, [
e,
t
  ]);
}

function V(e) {
  let {
children: t,
className: n,
compact: a
  } = e;
  return (0, i.jsx)('div', {
className: r()(G.footerContainer, n, {
  [G.compact]: a
}),
children: t
  });
}

function H(e) {
  let {
children: t,
className: n
  } = e;
  return (0, i.jsx)('div', {
className: r()(G.annotationRow, n),
children: t
  });
}

function Y(e, t) {
  switch (e) {
case I.d.DELETE_USER_MESSAGE:
  return (0, i.jsx)(_.TrashIcon, {
    size: 'xs',
    color: 'currentColor',
    className: G.alertActionIcon,
    ...t
  });
case I.d.SET_COMPLETED:
  return (0, i.jsx)(_.CheckmarkLargeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: r()(G.alertActionIcon, G.alertActionSetCompletedIcon),
    ...t
  });
case I.d.SUBMIT_FEEDBACK:
  return (0, i.jsx)(_.FlagIcon, {
    size: 'xs',
    color: 'currentColor',
    className: r()(G.alertActionIcon),
    ...t
  });
default:
  return null;
  }
}

function W(e) {
  let {
alertAction: t,
guildId: n
  } = e, a = (0, u.e7)([C.default], () => C.default.getUser(t.actor), [t.actor]);
  try {
let e = parseInt(t.actionType);
if (null == a)
  return Y(e, {});
let s = function(e, t, n) {
  var i;
  let a = null !== (i = A.ZP.getNickname(n, null, t)) && void 0 !== i ? i : R.ZP.getUserTag(t),
    s = o()(e.ts),
    r = ''.concat(a, ' ').concat(s.fromNow());
  try {
    switch (parseInt(e.actionType)) {
      case I.d.DELETE_USER_MESSAGE:
        return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
          userName: a,
          timestamp: s.fromNow()
        });
      case I.d.SET_COMPLETED:
        return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
          userName: a,
          timestamp: s.fromNow()
        });
      case I.d.SUBMIT_FEEDBACK:
        return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
          userName: a,
          timestamp: s.fromNow()
        });
      default:
        return r;
    }
  } catch (e) {
    return r;
  }
}(t, a, n);
return (0, i.jsx)(_.Tooltip, {
  text: s,
  children: t => Y(e, t)
});
  } catch (e) {
return null;
  }
}

function z(e) {
  let {
alertActionsExecution: t,
guildId: n
  } = e, a = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
  return (0, i.jsx)('div', {
className: G.alertActionsIconContainer,
children: a.map(e => (0, i.jsx)(W, {
  alertAction: e,
  guildId: n
}, e.actionType))
  });
}
let K = a.memo(function(e) {
  let t, {
  message: n,
  channel: a,
  embedChannel: s,
  compact: r,
  interactionUserId: l
} = e,
o = F(n, a),
c = w(a, n.author),
d = (0, O.ZP)(n),
u = (0, L.CF)({
  message: n,
  channel: a,
  author: d,
  guildId: null == a ? void 0 : a.guild_id,
  compact: r,
  ...o
}, c),
E = C.default.getUser(l),
I = F(n, a),
T = w(a, E);
  if (null != E) {
let e = (0, O.ij)(E, a),
  i = (0, L.CF)({
    message: n,
    channel: a,
    author: e,
    guildId: null == a ? void 0 : a.guild_id,
    compact: r,
    ...I
  }, T);
t = () => i;
  }
  return (0, i.jsx)(_.Text, {
variant: 'text-md/normal',
color: 'header-primary',
tag: 'span',
className: G.spanCorrection,
children: (0, m.Mq)(n, s, () => (0, i.jsx)('div', {
  className: G.channelNameContainer,
  children: (0, i.jsx)(M.Z, {
    channel: s,
    className: G.channelName,
    openChatWithoutConnecting: !0
  })
}), () => u, t)
  });
});

function Q(e) {
  let {
id: t,
compact: n,
message: s,
channel: l
  } = e, {
avatarSrc: o,
eventHandlers: {
  onMouseEnter: f,
  onMouseLeave: C
}
  } = (0, D.m)(!0), {
onFocus: A,
...R
  } = (0, c.JA)(null != t ? t : ''), {
isFocused: O,
handleFocus: M,
handleBlur: Z
  } = (0, P.bb)(A), b = (0, u.e7)([E.Z], () => E.Z.keyboardModeEnabled), j = (0, u.e7)([p.Z], () => p.Z.can(U.Plq.MANAGE_MESSAGES, l), [l]), {
ruleName: w,
embedChannel: Y,
decisionId: W,
keywordMatchedContent: Q,
keyword: q,
content: X,
flaggedMessageId: J,
timeoutDuration: $,
decisionReason: ee,
alertActionsExecution: et,
quarantineType: en,
interactionUserId: ei
  } = (0, m.ZP)(s), ea = a.useMemo(() => (0, x.k$)(X, Q, l.id), [
X,
Q,
l
  ]), {
selected: es,
...er
  } = F(s, l), el = a.useCallback(() => {
(0, T._s)(s.id, X, W, l);
  }, [
s.id,
X,
W,
l
  ]), eo = a.useCallback(e => {
if (null != J && null != Y)
  e.stopPropagation(), e.preventDefault(), (0, N.Z)(U.Z5c.CHANNEL(null == Y ? void 0 : Y.guild_id, null == Y ? void 0 : Y.id, J));
  }, [
Y,
J
  ]), ec = a.useCallback(() => {
(0, h.Xx)(s.id, l, I.d.DELETE_USER_MESSAGE);
  }, [
l,
s.id
  ]), ed = (0, B.L9)(Number($)), eu = null != ee, e_ = j && null != J && (null == et || !et.actions.hasOwnProperty(I.d.DELETE_USER_MESSAGE));
  return (0, i.jsx)('div', {
onMouseEnter: f,
onMouseLeave: C,
children: (0, i.jsx)(S.Z, {
  className: r()(G.mainContainer, {
    [G.compact]: n
  }),
  iconNode: n ? null : (0, i.jsx)(D.S, {
    src: o
  }),
  iconContainerClassName: G.iconContainer,
  compact: n,
  children: (0, i.jsxs)('div', {
    className: r()(G.content, {
      [G.compact]: n
    }),
    children: [
      (0, i.jsx)(L.nD, {
        message: s,
        messageClassname: G.spanCorrection,
        className: r()(G.usernameContainer, G.spanCorrection, {
          [G.compact]: n
        }),
        username: (0, i.jsxs)('div', {
          className: G.spanCorrection,
          children: [
            (0, i.jsx)(_.Text, {
              variant: 'text-md/normal',
              color: 'text-brand',
              tag: 'span',
              className: G.username,
              children: k.Z.Messages.GUILD_AUTOMOD_USERNAME
            }),
            (0, i.jsx)(g.Z, {
              type: y.Hb.SYSTEM_DM,
              className: G.systemTag
            }),
            (0, i.jsx)(K, {
              message: s,
              channel: l,
              embedChannel: Y,
              compact: n,
              interactionUserId: ei
            })
          ]
        }),
        compact: n,
        showTimestamp: !0
      }),
      (0, i.jsx)('div', {
        className: r()(G.messageContent, {
          [G.compact]: n
        }),
        children: (0, i.jsx)(v.Z, {
          ...R,
          message: s,
          channel: Y,
          content: ea,
          compact: n,
          withFooter: !0,
          hideTimestamp: !0,
          className: r()(G.embedCard, {
            [G.compact]: n,
            [G.selected]: es || b && O,
            [G.isClickable]: null != J && null != Y
          }),
          childrenAccessories: (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)('div', {
                className: G.centeredRowContainer,
                children: [
                  null != q && (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(_.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        tag: 'span',
                        children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({
                          keyword: q
                        })
                      }),
                      (0, i.jsx)('div', {
                        className: r()(G.dot, G.dotMargin)
                      })
                    ]
                  }),
                  null != w && (0, i.jsx)(_.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    tag: 'span',
                    children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({
                      ruleName: w
                    })
                  }),
                  null != ed && (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)('div', {
                        className: r()(G.dot, G.dotMargin)
                      }),
                      (0, i.jsx)(_.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        tag: 'span',
                        className: G.__invalid_footerText,
                        children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({
                          duration: ed
                        })
                      })
                    ]
                  }),
                  null != en && (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)('div', {
                        className: r()(G.dot, G.dotMargin)
                      }),
                      (0, i.jsx)(_.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        tag: 'span',
                        className: G.titleCase,
                        children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({
                          reason: (0, m.hU)(en)
                        })
                      })
                    ]
                  })
                ]
              }),
              eu ? (0, i.jsx)(H, {
                children: (0, i.jsx)(_.Text, {
                  variant: 'text-xs/medium',
                  color: 'text-normal',
                  tag: 'span',
                  children: ee
                })
              }) : null
            ]
          }),
          popoutProps: er,
          zalgo: !0,
          onFocus: M,
          onBlur: Z,
          onClick: eo
        })
      }),
      (0, i.jsx)(V, {
        compact: n,
        children: (0, i.jsxs)('div', {
          className: r()(G.centeredRowContainer, G.buttonContainer, {
            [G.compact]: n
          }),
          children: [
            (0, i.jsx)(_.Button, {
              onClick: e => {
                var t;
                null === (t = er.onContextMenuModerateUser) || void 0 === t || t.call(er, e);
              },
              color: _.Button.Colors.LINK,
              look: _.Button.Looks.LINK,
              size: _.Button.Sizes.SMALL,
              className: G.buttonStyle,
              children: (0, i.jsxs)('div', {
                className: G.footerAction,
                children: [
                  (0, i.jsx)(_.ShieldIcon, {
                    size: 'xs',
                    color: d.Z.BLUE_345,
                    className: G.footerIcon
                  }),
                  (0, i.jsx)(_.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-link',
                    children: k.Z.Messages.ACTIONS
                  })
                ]
              })
            }),
            (0, i.jsx)('div', {
              className: G.dot
            }),
            (0, i.jsx)(_.Button, {
              onClick: el,
              color: _.Button.Colors.LINK,
              look: _.Button.Looks.LINK,
              size: _.Button.Sizes.SMALL,
              className: G.buttonStyle,
              children: (0, i.jsx)('div', {
                className: G.footerAction,
                children: (0, i.jsx)(_.Text, {
                  variant: 'text-xs/normal',
                  color: 'text-link',
                  children: k.Z.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                })
              })
            }),
            e_ ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)('div', {
                  className: G.dot
                }),
                (0, i.jsx)(_.Button, {
                  onClick: ec,
                  color: _.Button.Colors.LINK,
                  look: _.Button.Looks.LINK,
                  size: _.Button.Sizes.SMALL,
                  className: G.buttonStyle,
                  children: (0, i.jsx)('div', {
                    className: G.footerAction,
                    children: (0, i.jsx)(_.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-link',
                      children: k.Z.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                    })
                  })
                })
              ]
            }) : null,
            null != et ? (0, i.jsx)(z, {
              alertActionsExecution: et,
              guildId: l.guild_id
            }) : null
          ]
        })
      })
    ]
  })
})
  });
}