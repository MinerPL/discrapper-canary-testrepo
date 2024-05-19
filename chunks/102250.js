"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("722770"),
  d = n("320285"),
  c = n("688813"),
  f = n("442837"),
  E = n("692547"),
  _ = n("408600"),
  m = n("952826"),
  T = n("481060"),
  I = n("256638"),
  p = n("528011"),
  h = n("666657"),
  N = n("533244"),
  S = n("825829"),
  C = n("226192"),
  A = n("36459"),
  g = n("434404"),
  M = n("348238"),
  R = n("103575"),
  v = n("204197"),
  O = n("592125"),
  x = n("271383"),
  L = n("594174"),
  D = n("467679"),
  P = n("630641"),
  y = n("288176"),
  U = n("759231"),
  j = n("778947"),
  b = n("702346"),
  B = n("787374"),
  F = n("981631"),
  G = n("674563"),
  k = n("689938"),
  w = n("807850");

function H() {
  return (0, s.jsx)("div", {
    className: w.dot
  })
}

function V(e) {
  let {
    message: t,
    compact: n
  } = e, {
    notificationType: a
  } = (0, S.extractAutomodNotificationFields)(t);
  switch (a) {
    case S.IS_BACKWARDS_COMPAT_RAID_TYPE:
    case d.AutomodNotificationEmbedTypeKeys.RAID:
      return (0, s.jsx)(z, {
        message: t,
        compact: n
      });
    case d.AutomodNotificationEmbedTypeKeys.MENTION_RAID:
      return (0, s.jsx)(Q, {
        message: t,
        compact: n
      });
    case d.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED:
      return (0, s.jsx)(W, {
        message: t,
        compact: n
      });
    case d.AutomodNotificationEmbedTypeKeys.INTERACTION_BLOCKED:
      return (0, s.jsx)(K, {
        compact: n
      });
    default:
      return (0, s.jsx)(Y, {
        compact: n
      })
  }
}

function Y(e) {
  let {
    compact: t
  } = e;
  return (0, s.jsx)(q, {
    compact: t,
    header: (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)(U.default, {
        width: 16,
        height: 16,
        color: E.default.colors.HEADER_SECONDARY.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "header-secondary",
        children: k.default.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_TITLE
      })]
    }),
    content: (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_DESCRIPTION
    })
  })
}

function K(e) {
  let {
    compact: t
  } = e;
  return (0, s.jsx)(q, {
    compact: t,
    header: (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)(U.default, {
        width: 16,
        height: 16,
        color: E.default.colors.HEADER_SECONDARY.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "header-secondary",
        children: k.default.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_TITLE
      })]
    }),
    content: (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_DESCRIPTION
    })
  })
}

function W(e) {
  var t;
  let {
    message: n,
    compact: l
  } = e, i = L.default.getUser((0, S.getUserIdOfAutomodAction)(n)), r = null === (t = O.default.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, u = null != r && null != i ? x.default.getMember(r, i.id) : null, {
    avatarSrc: d,
    avatarDecorationSrc: c,
    eventHandlers: f
  } = (0, v.default)({
    user: i,
    guildId: r,
    size: 12
  });
  return (0, s.jsx)(q, {
    compact: l,
    header: (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)(m.SettingsInfoIcon, {
        width: 16,
        height: 16,
        color: E.default.colors.TEXT_POSITIVE.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "text-positive",
        children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_TITLE
      })]
    }),
    subheader: (0, s.jsxs)("div", {
      className: w.dotSeparatedRow,
      children: [(0, s.jsx)("div", {
        className: w.alertsEnabledSubHeader,
        children: null != u && null != i && (0, s.jsxs)(a.Fragment, {
          children: [(0, s.jsx)(T.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_BY_PREFIX
          }), (0, s.jsx)(T.Popout, {
            renderPopout: function(e) {
              return null == i ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsx)(R.default, {
                ...e,
                location: "AutomodNotification",
                userId: i.id,
                user: i,
                guildId: r,
                channelId: n.channel_id,
                messageId: n.id
              })
            },
            children: e => (0, s.jsxs)(T.Clickable, {
              className: w.alertsEnabledSubHeaderAvatarUsername,
              ...e,
              children: [(0, s.jsx)("div", {
                ...f,
                children: (0, s.jsx)(T.Avatar, {
                  src: d,
                  avatarDecoration: c,
                  size: T.AvatarSizes.SIZE_16,
                  "aria-label": "TODO"
                })
              }), (0, s.jsxs)(T.Text, {
                variant: "text-xs/medium",
                style: {
                  color: null != u.colorString ? u.colorString : E.default.colors.TEXT_NORMAL.css
                },
                children: [" ", "@", i.username]
              })]
            })
          })]
        })
      }), (0, s.jsx)(H, {}), (0, s.jsx)(T.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: o()(n.timestamp).fromNow()
      })]
    }),
    content: (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_DESCRIPTION
    })
  })
}

function z(e) {
  var t;
  let {
    message: l,
    compact: i
  } = e, {
    joinAttempts: r,
    raidDatetime: d,
    dmsSent: m,
    raidType: I,
    resolvedReason: A
  } = (0, S.extractAutomodNotificationFields)(l), g = (0, f.useStateFromStores)([O.default], () => O.default.getChannel(l.channel_id), [l.channel_id]), R = null !== (t = null == g ? void 0 : g.guild_id) && void 0 !== t ? t : null, {
    incidentData: v,
    shouldShowIncidentActions: x
  } = (0, p.useGuildIncidentsState)(R), L = (0, M.useContextMenuRaidAlert)(l.author.id, l.channel_id), D = a.useCallback(() => {
    let e = null == g ? void 0 : g.guild_id;
    null != e && (0, C.openRaidResolveModal)(l.id, e)
  }, [l.id, g]), j = I === c.AutomodRaidAlertTypes.DM_RAID, b = j ? U.default : _.ChatAlertIcon;
  return (0, s.jsx)(q, {
    compact: i,
    header: (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)(b, {
        width: 16,
        height: 16,
        color: E.default.colors.TEXT_DANGER.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: j ? k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_DM_RAID_TITLE : k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_TITLE
      })]
    }),
    subheader: (0, s.jsxs)("div", {
      className: w.dotSeparatedRow,
      children: [null != r && (0, s.jsx)(T.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_JOINS.format({
          joinCount: r
        })
      }), null != m && (0, s.jsx)(T.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_DMS.format({
          dmsSent: m
        })
      }), null != d && (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(H, {}), (0, s.jsx)(T.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: o()(d).fromNow()
        })]
      })]
    }),
    content: null != d ? (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
        dateTime: d.toLocaleString(k.default.getLocale(), N.DATE_CONFIG)
      })
    }) : null,
    footerButtons: (0, s.jsxs)("div", {
      className: w.dotSeparatedRow,
      children: [(0, s.jsx)(T.Button, {
        onClick: e => {
          if (null != R && x) {
            let e = {
              source: h.GuildIncidentActionSources.MESSAGE,
              messageId: l.id,
              alertType: (0, N.getIncidentAlertType)(v)
            };
            (0, T.openModalLazy)(async () => {
              let {
                default: t
              } = await Promise.all([n.e("99387"), n.e("89582")]).then(n.bind(n, "664452"));
              return n => (0, s.jsx)(t, {
                ...n,
                guildId: R,
                analyticsData: e
              })
            })
          } else L(e)
        },
        color: T.Button.Colors.LINK,
        look: T.Button.Looks.LINK,
        size: T.Button.Sizes.SMALL,
        className: w.buttonStyle,
        children: (0, s.jsx)("div", {
          className: w.footerAction,
          children: x ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(P.default, {
              width: 16,
              height: 16,
              color: u.default.BLUE_345,
              className: w.footerIcon
            }), (0, s.jsx)(T.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: k.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
            })]
          }) : (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(y.default, {
              width: 16,
              height: 16,
              color: u.default.BLUE_345,
              className: w.footerIcon
            }), (0, s.jsx)(T.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: k.default.Messages.ACTIONS
            })]
          })
        })
      }), (0, s.jsx)(H, {}), (0, s.jsx)(T.Button, {
        onClick: D,
        color: T.Button.Colors.LINK,
        look: T.Button.Looks.LINK,
        size: T.Button.Sizes.SMALL,
        className: w.buttonStyle,
        children: (0, s.jsx)("div", {
          className: w.footerAction,
          children: (0, s.jsx)(T.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: (0, S.getRaidAlertResolveCTAText)(A)
          })
        })
      })]
    })
  })
}

function Q(e) {
  var t;
  let {
    message: n,
    compact: l
  } = e, i = null === (t = O.default.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, {
    raidDatetime: r,
    decisionId: u,
    suspiciousMentionActivityUntil: d
  } = (0, S.extractAutomodNotificationFields)(n);
  return (0, s.jsx)(q, {
    compact: l,
    header: (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)(U.default, {
        width: 16,
        height: 16,
        color: E.default.colors.TEXT_DANGER.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_TITLE
      })]
    }),
    subheader: (0, s.jsx)("div", {
      className: w.dotSeparatedRow,
      children: null != r && (0, s.jsx)(T.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: o()(r).fromNow()
      })
    }),
    content: (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_DESCRIPTION
    }),
    footerButtons: (0, s.jsxs)("div", {
      className: w.dotSeparatedRow,
      children: [(0, s.jsx)(T.Button, {
        onClick: function() {
          null != i && null != u && (0, A.removeMentionRaidRestrictionWithFeedback)(i, u, () => {
            (0, I.dismissCurrentNotice)(d), (0, A.clearMentionRaidDetected)(i)
          })
        },
        color: T.Button.Colors.LINK,
        look: T.Button.Looks.LINK,
        size: T.Button.Sizes.SMALL,
        className: w.buttonStyle,
        children: (0, s.jsx)("div", {
          className: w.footerAction,
          children: (0, s.jsx)(T.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: k.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
          })
        })
      }), (0, s.jsx)(H, {}), (0, s.jsx)(T.Button, {
        onClick: function() {
          null != i && g.default.open(i, F.GuildSettingsSections.GUILD_AUTOMOD, void 0, F.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM)
        },
        color: T.Button.Colors.LINK,
        look: T.Button.Looks.LINK,
        size: T.Button.Sizes.SMALL,
        className: w.buttonStyle,
        children: (0, s.jsx)("div", {
          className: w.footerAction,
          children: (0, s.jsx)(T.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: k.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
          })
        })
      })]
    })
  })
}

function q(e) {
  let {
    compact: t,
    header: n,
    subheader: a,
    content: l,
    footerButtons: r
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: i()(w.embedCard, {
        [w.compact]: t
      }),
      children: [(0, s.jsxs)("div", {
        className: w.cardContent,
        children: [(0, s.jsxs)("div", {
          className: w.cardHeaderContianer,
          children: [(0, s.jsx)("div", {
            className: w.cardHeader,
            children: n
          }), null != a && (0, s.jsx)("div", {
            className: w.subheader,
            children: a
          })]
        }), l]
      }), null != r && (0, s.jsx)("div", {
        className: i()(w.centeredRowContainer, w.cardFooter, {
          [w.compact]: t
        }),
        children: r
      })]
    })
  })
}

function X(e) {
  let {
    id: t,
    compact: n,
    message: a,
    channel: l
  } = e, {
    avatarSrc: r,
    eventHandlers: {
      onMouseEnter: o,
      onMouseLeave: u
    }
  } = (0, B.useAutomodAvatar)(!0), {
    notificationType: c
  } = (0, S.extractAutomodNotificationFields)(a), f = null == c || c === d.AutomodNotificationEmbedTypeKeys.RAID;
  return (0, s.jsx)("div", {
    onMouseEnter: o,
    onMouseLeave: u,
    children: (0, s.jsx)(b.default, {
      className: i()(w.mainContainer, {
        [w.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(B.AutomodAvatar, {
        src: r
      }),
      iconContainerClassName: w.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: i()(w.content, {
          [w.compact]: n
        }),
        children: [(0, s.jsx)(j.BaseMessageHeader, {
          message: a,
          messageClassname: w.spanCorrection,
          className: i()(w.usernameContainer, w.spanCorrection, {
            [w.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: w.spanCorrection,
            children: [(0, s.jsx)(T.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: w.username,
              children: k.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(D.default, {
              type: G.BotTagTypes.SYSTEM_DM,
              className: w.systemTag
            }), f && (0, s.jsx)(T.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: w.spanCorrection,
              children: k.default.Messages.GUILD_AUTOMOD_NOTFICATION_ALERT_TITLE
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: w.flexLineBreak
        }), (0, s.jsx)(V, {
          message: a,
          compact: n
        })]
      })
    })
  })
}