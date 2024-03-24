"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("394846"),
  i = n("446674"),
  r = n("77078"),
  o = n("736964"),
  u = n("486503"),
  d = n("7643"),
  c = n("785770"),
  f = n("28424"),
  h = n("208021"),
  C = n("713135"),
  p = n("401642"),
  m = n("982108"),
  E = n("27618"),
  g = n("697218"),
  S = n("587974"),
  T = n("315102"),
  A = n("841397"),
  _ = n("49111"),
  M = n("680894"),
  I = n("590456"),
  N = n("782340"),
  v = n("817302");
let x = e => {
    let {
      userId: t,
      channelId: n
    } = e, l = (0, i.useStateFromStores)([C.default], () => C.default.getMutualGuilds(t), [t]), o = a.useMemo(() => null != l ? l.slice(0, 3).map((e, t) => {
      let {
        guild: n
      } = e, a = null != n ? T.default.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: 24
      }) : null;
      if (null == a) return null;
      let i = t === (l.length > 3 ? 3 : l.length) - 1,
        r = (0, s.jsx)("img", {
          src: a,
          alt: "",
          className: v.avatar
        }, t);
      return i ? r : (0, s.jsx)(S.default, {
        className: v.avatarMask,
        mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
        width: 24,
        height: 24,
        children: r
      }, t)
    }).filter(e => null != e) : [], [l]);
    return null == l || 0 === l.length ? (0, s.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N.default.Messages.NO_MUTUAL_GUILDS
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: v.avatarContainer,
        children: o
      }), (0, s.jsx)(r.Clickable, {
        onClick: () => {
          (0, p.openUserProfileModal)({
            userId: t,
            channelId: n,
            section: I.UserProfileSections.MUTUAL_GUILDS,
            analyticsLocation: {
              section: _.AnalyticsSections.DIRECT_MESSAGE
            }
          })
        },
        children: (0, s.jsx)(r.Text, {
          className: v.mutualGuilds,
          variant: "text-sm/normal",
          children: N.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
            count: l.length
          })
        })
      })]
    })
  },
  L = e => {
    var t;
    let {
      relationshipType: n,
      userId: a,
      showingBanner: l
    } = e, i = null === (t = g.default.getUser(a)) || void 0 === t ? void 0 : t.bot, u = () => {
      o.default.addRelationship({
        userId: a,
        context: {
          location: _.AnalyticsPages.DM_CHANNEL
        }
      })
    }, d = (0, s.jsx)(r.Button, {
      className: v.action,
      size: r.Button.Sizes.TINY,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        o.default.addRelationship({
          userId: a,
          context: {
            location: _.AnalyticsPages.DM_CHANNEL
          },
          type: _.RelationshipTypes.BLOCKED
        })
      },
      children: N.default.Messages.BLOCK
    });
    switch (n) {
      case _.RelationshipTypes.NONE:
        return (0, s.jsxs)(s.Fragment, {
          children: [!i && !l && (0, s.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            onClick: u,
            children: N.default.Messages.ADD_FRIEND
          }), d]
        });
      case _.RelationshipTypes.FRIEND:
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            onClick: () => {
              o.default.removeFriend(a, {
                location: _.AnalyticsPages.DM_CHANNEL
              })
            },
            color: r.Button.Colors.PRIMARY,
            children: N.default.Messages.REMOVE_FRIEND
          }), d]
        });
      case _.RelationshipTypes.BLOCKED:
        return (0, s.jsx)(r.Button, {
          className: v.action,
          size: r.Button.Sizes.TINY,
          onClick: () => {
            o.default.unblockUser(a, {
              location: _.AnalyticsPages.DM_CHANNEL
            })
          },
          color: r.Button.Colors.PRIMARY,
          children: N.default.Messages.UNBLOCK
        });
      case _.RelationshipTypes.PENDING_INCOMING:
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(r.Text, {
            className: v.action,
            color: "header-secondary",
            variant: "text-sm/normal",
            children: N.default.Messages.FRIEND_REQUEST_RECEIVED
          }), (0, s.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            onClick: u,
            children: N.default.Messages.FRIEND_REQUEST_ACCEPT
          }), (0, s.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            color: r.Button.Colors.PRIMARY,
            onClick: () => {
              o.default.cancelFriendRequest(a, {
                location: _.AnalyticsPages.DM_CHANNEL
              })
            },
            children: N.default.Messages.FRIEND_REQUEST_IGNORE
          }), d]
        });
      case _.RelationshipTypes.PENDING_OUTGOING:
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(r.Button, {
            className: v.action,
            size: r.Button.Sizes.TINY,
            disabled: !0,
            children: N.default.Messages.ADD_FRIEND_BUTTON_AFTER
          }), d]
        });
      default:
        return null
    }
  },
  y = e => {
    let {
      channelId: t,
      otherUserId: n
    } = e, l = a.useCallback(() => {
      (0, r.showToast)((0, r.createToast)(N.default.Messages.MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE, r.ToastType.FAILURE))
    }, []), i = a.useCallback(() => {
      h.default.closeChannelSidebar(m.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
    }, []), o = a.useCallback(() => {
      h.default.closeChannelSidebar(m.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
    }, []), {
      acceptMessageRequest: u,
      rejectMessageRequest: c,
      isAcceptLoading: f,
      isRejectLoading: C,
      isOptimisticAccepted: p,
      isOptimisticRejected: E
    } = (0, d.useMessageRequestActions)({
      user: g.default.getUser(n),
      onError: l,
      onAcceptSuccess: o,
      onRejectSuccess: i
    }), S = f || C || p || E;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(r.Button, {
        className: v.action,
        size: r.Button.Sizes.TINY,
        onClick: () => u(t),
        disabled: S,
        submitting: f,
        children: N.default.Messages.MESSAGE_REQUEST_ACCEPT
      }), (0, s.jsx)(r.Button, {
        className: v.action,
        size: r.Button.Sizes.TINY,
        onClick: () => c(t),
        color: r.Button.Colors.PRIMARY,
        disabled: S,
        submitting: C,
        children: N.default.Messages.MESSAGE_REQUEST_IGNORE
      })]
    })
  };
var R = e => {
  let {
    userId: t,
    channel: n,
    showingBanner: a
  } = e, {
    channelId: r
  } = (0, c.useMessageRequestSidebarState)(), o = (0, i.useStateFromStores)([u.default], () => null != r && u.default.isSpam(r), [r]), d = (0, i.useStateFromStores)([E.default], () => E.default.getRelationshipType(t), [t]), h = n.id === r;
  return t === M.CLYDE_AI_USER_ID ? null : o || h ? (0, s.jsxs)("div", {
    className: v.mobileContainer,
    children: [(0, s.jsx)("div", {
      className: v.mobileMutualGuilds,
      children: (0, s.jsx)(x, {
        userId: t,
        channelId: n.id
      })
    }), (0, s.jsxs)("div", {
      className: v.mobileButtons,
      children: [(0, s.jsx)(y, {
        channelId: n.id,
        otherUserId: t
      }), (0, s.jsx)(f.default, {
        channel: n
      })]
    })]
  }) : !0 === l.isMobile || h ? (0, s.jsxs)("div", {
    className: v.mobileContainer,
    children: [(0, s.jsx)("div", {
      className: v.mobileMutualGuilds,
      children: (0, s.jsx)(x, {
        userId: t,
        channelId: n.id
      })
    }), (0, s.jsxs)("div", {
      className: v.mobileButtons,
      children: [(0, s.jsx)(L, {
        relationshipType: d,
        userId: t,
        showingBanner: a
      }), !a && (0, s.jsx)(A.default, {
        otherUserId: t,
        channel: n,
        navigateAwayOnReportSuccess: !1
      })]
    })]
  }) : (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsx)(x, {
      userId: t,
      channelId: n.id
    }), (0, s.jsx)("div", {
      className: v.divider
    }), (0, s.jsx)(L, {
      relationshipType: d,
      userId: t,
      showingBanner: a
    }), !a && (0, s.jsx)(A.default, {
      otherUserId: t,
      channel: n
    })]
  })
}