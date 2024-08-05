n.d(t, {
  Z: function() {
return Q;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(913527),
  o = n.n(l),
  c = n(91192),
  u = n(722770),
  d = n(442837),
  _ = n(481060),
  E = n(607070),
  I = n(385499),
  m = n(313889),
  T = n(825829),
  h = n(226192),
  N = n(36459),
  C = n(336197),
  f = n(103575),
  p = n(496675),
  g = n(594174),
  S = n(702346),
  A = n(5192),
  R = n(51144),
  O = n(937889),
  x = n(739566),
  M = n(779125),
  v = n(890410),
  L = n(464891),
  Z = n(507418),
  P = n(348238),
  D = n(38267),
  b = n(83561),
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
setPopout: a
  } = (0, D.Z)(e.id, j.d$), {
usernameProfile: r,
avatarProfile: l
  } = n, o = (0, P.wq)(e.author.id, t.id), c = (0, P.RN)(e.author.id, t.id, e.id), u = (0, P.XO)(e, t, r, a), d = (0, P.R9)(l, a);
  return {
selected: i,
onContextMenu: o,
onContextMenuModerateUser: c,
onClickUsername: u,
onClickAvatar: d,
onPopoutRequestClose: s.useCallback(() => a({
  usernameProfile: !1,
  avatarProfile: !1,
  referencedUsernameProfile: !1
}), [a]),
renderPopout: Z.Z,
showAvatarPopout: l,
showUsernamePopout: r
  };
}

function w(e, t) {
  return s.useMemo(() => {
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
compact: s
  } = e;
  return (0, i.jsx)('div', {
className: r()(G.footerContainer, n, {
  [G.compact]: s
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
case m.d.DELETE_USER_MESSAGE:
  return (0, i.jsx)(_.TrashIcon, {
    size: 'xs',
    color: 'currentColor',
    className: G.alertActionIcon,
    ...t
  });
case m.d.SET_COMPLETED:
  return (0, i.jsx)(_.CheckmarkLargeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: r()(G.alertActionIcon, G.alertActionSetCompletedIcon),
    ...t
  });
case m.d.SUBMIT_FEEDBACK:
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
  } = e, s = (0, d.e7)([g.default], () => g.default.getUser(t.actor), [t.actor]);
  try {
let e = parseInt(t.actionType);
if (null == s)
  return Y(e, {});
let a = function(e, t, n) {
  var i;
  let s = null !== (i = A.ZP.getNickname(n, null, t)) && void 0 !== i ? i : R.ZP.getUserTag(t),
    a = o()(e.ts),
    r = ''.concat(s, ' ').concat(a.fromNow());
  try {
    switch (parseInt(e.actionType)) {
      case m.d.DELETE_USER_MESSAGE:
        return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
          userName: s,
          timestamp: a.fromNow()
        });
      case m.d.SET_COMPLETED:
        return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
          userName: s,
          timestamp: a.fromNow()
        });
      case m.d.SUBMIT_FEEDBACK:
        return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
          userName: s,
          timestamp: a.fromNow()
        });
      default:
        return r;
    }
  } catch (e) {
    return r;
  }
}(t, s, n);
return (0, i.jsx)(_.Tooltip, {
  text: a,
  children: t => Y(e, t)
});
  } catch (e) {
return null;
  }
}

function K(e) {
  let {
alertActionsExecution: t,
guildId: n
  } = e, s = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
  return (0, i.jsx)('div', {
className: G.alertActionsIconContainer,
children: s.map(e => (0, i.jsx)(W, {
  alertAction: e,
  guildId: n
}, e.actionType))
  });
}
let z = s.memo(function(e) {
  let t, {
  message: n,
  channel: s,
  embedChannel: a,
  compact: r,
  interactionUserId: l
} = e,
o = F(n, s),
c = w(s, n.author),
u = (0, x.ZP)(n),
d = (0, L.CF)({
  message: n,
  channel: s,
  author: u,
  guildId: null == s ? void 0 : s.guild_id,
  compact: r,
  ...o
}, c),
E = g.default.getUser(l),
I = F(n, s),
m = w(s, E);
  if (null != E) {
let e = (0, x.ij)(E, s),
  i = (0, L.CF)({
    message: n,
    channel: s,
    author: e,
    guildId: null == s ? void 0 : s.guild_id,
    compact: r,
    ...I
  }, m);
t = () => i;
  }
  return (0, i.jsx)(_.Text, {
variant: 'text-md/normal',
color: 'header-primary',
tag: 'span',
className: G.spanCorrection,
children: (0, T.Mq)(n, a, () => (0, i.jsx)('div', {
  className: G.channelNameContainer,
  children: (0, i.jsx)(M.Z, {
    channel: a,
    className: G.channelName,
    openChatWithoutConnecting: !0
  })
}), () => d, t)
  });
});

function Q(e) {
  let {
id: t,
compact: n,
message: a,
channel: l
  } = e, {
avatarSrc: o,
eventHandlers: {
  onMouseEnter: f,
  onMouseLeave: g
}
  } = (0, b.m)(!0), {
onFocus: A,
...R
  } = (0, c.JA)(null != t ? t : ''), {
isFocused: x,
handleFocus: M,
handleBlur: Z
  } = (0, P.bb)(A), D = (0, d.e7)([E.Z], () => E.Z.keyboardModeEnabled), j = (0, d.e7)([p.Z], () => p.Z.can(U.Plq.MANAGE_MESSAGES, l), [l]), {
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
  } = (0, T.ZP)(a), es = s.useMemo(() => (0, O.k$)(X, Q, l.id), [
X,
Q,
l
  ]), {
selected: ea,
...er
  } = F(a, l), el = s.useCallback(() => {
(0, h._s)(a.id, X, W, l);
  }, [
a.id,
X,
W,
l
  ]), eo = s.useCallback(e => {
if (null != J && null != Y)
  e.stopPropagation(), e.preventDefault(), (0, C.Z)(U.Z5c.CHANNEL(null == Y ? void 0 : Y.guild_id, null == Y ? void 0 : Y.id, J));
  }, [
Y,
J
  ]), ec = s.useCallback(() => {
(0, N.Xx)(a.id, l, m.d.DELETE_USER_MESSAGE);
  }, [
l,
a.id
  ]), eu = (0, B.L9)(Number($)), ed = null != ee, e_ = j && null != J && (null == et || !et.actions.hasOwnProperty(m.d.DELETE_USER_MESSAGE));
  return (0, i.jsx)('div', {
onMouseEnter: f,
onMouseLeave: g,
children: (0, i.jsx)(S.Z, {
  className: r()(G.mainContainer, {
    [G.compact]: n
  }),
  iconNode: n ? null : (0, i.jsx)(b.S, {
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
        message: a,
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
            (0, i.jsx)(I.Z, {
              type: y.Hb.SYSTEM_DM,
              className: G.systemTag
            }),
            (0, i.jsx)(z, {
              message: a,
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
          message: a,
          channel: Y,
          content: es,
          compact: n,
          withFooter: !0,
          hideTimestamp: !0,
          className: r()(G.embedCard, {
            [G.compact]: n,
            [G.selected]: ea || D && x,
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
                  null != eu && (0, i.jsxs)(i.Fragment, {
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
                          duration: eu
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
                          reason: (0, T.hU)(en)
                        })
                      })
                    ]
                  })
                ]
              }),
              ed ? (0, i.jsx)(H, {
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
                    color: u.Z.BLUE_345,
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
            null != et ? (0, i.jsx)(K, {
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