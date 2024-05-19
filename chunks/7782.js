"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("873546"),
  i = n("442837"),
  r = n("481060"),
  o = n("194359"),
  u = n("333984"),
  d = n("486622"),
  c = n("922409"),
  f = n("86203"),
  h = n("6025"),
  m = n("621853"),
  p = n("171368"),
  E = n("433355"),
  C = n("699516"),
  g = n("594174"),
  S = n("806519"),
  _ = n("768581"),
  T = n("525541"),
  I = n("981631"),
  A = n("377668"),
  N = n("228168"),
  v = n("689938"),
  x = n("286560");
let M = e => {
    let {
      userId: t,
      channelId: n
    } = e, s = (0, i.useStateFromStores)([m.default], () => m.default.getMutualGuilds(t), [t]), o = l.useMemo(() => null != s ? s.slice(0, 3).map((e, t) => {
      let {
        guild: n
      } = e, l = null != n ? _.default.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: 24
      }) : null;
      if (null == l) return null;
      let i = t === (s.length > 3 ? 3 : s.length) - 1,
        r = (0, a.jsx)("img", {
          src: l,
          alt: "",
          className: x.avatar
        }, t);
      return i ? r : (0, a.jsx)(S.default, {
        className: x.avatarMask,
        mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
        width: 24,
        height: 24,
        children: r
      }, t)
    }).filter(e => null != e) : [], [s]);
    return null == s || 0 === s.length ? (0, a.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: v.default.Messages.NO_MUTUAL_GUILDS
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: x.avatarContainer,
        children: o
      }), (0, a.jsx)(r.Clickable, {
        onClick: () => {
          (0, p.openUserProfileModal)({
            userId: t,
            channelId: n,
            section: N.UserProfileSections.MUTUAL_GUILDS,
            analyticsLocation: {
              section: I.AnalyticsSections.DIRECT_MESSAGE
            }
          })
        },
        children: (0, a.jsx)(r.Text, {
          className: x.mutualGuilds,
          variant: "text-sm/normal",
          children: v.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
            count: s.length
          })
        })
      })]
    })
  },
  R = e => {
    var t;
    let {
      relationshipType: n,
      userId: l,
      showingBanner: s
    } = e, i = null === (t = g.default.getUser(l)) || void 0 === t ? void 0 : t.bot, u = () => {
      o.default.addRelationship({
        userId: l,
        context: {
          location: I.AnalyticsPages.DM_CHANNEL
        }
      })
    }, d = (0, a.jsx)(r.Button, {
      className: x.action,
      size: r.Button.Sizes.TINY,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        o.default.addRelationship({
          userId: l,
          context: {
            location: I.AnalyticsPages.DM_CHANNEL
          },
          type: I.RelationshipTypes.BLOCKED
        })
      },
      children: v.default.Messages.BLOCK
    });
    switch (n) {
      case I.RelationshipTypes.NONE:
        return (0, a.jsxs)(a.Fragment, {
          children: [!i && !s && (0, a.jsx)(r.Button, {
            className: x.action,
            size: r.Button.Sizes.TINY,
            onClick: u,
            children: v.default.Messages.ADD_FRIEND
          }), d]
        });
      case I.RelationshipTypes.FRIEND:
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Button, {
            className: x.action,
            size: r.Button.Sizes.TINY,
            onClick: () => {
              o.default.removeFriend(l, {
                location: I.AnalyticsPages.DM_CHANNEL
              })
            },
            color: r.Button.Colors.PRIMARY,
            children: v.default.Messages.REMOVE_FRIEND
          }), d]
        });
      case I.RelationshipTypes.BLOCKED:
        return (0, a.jsx)(r.Button, {
          className: x.action,
          size: r.Button.Sizes.TINY,
          onClick: () => {
            o.default.unblockUser(l, {
              location: I.AnalyticsPages.DM_CHANNEL
            })
          },
          color: r.Button.Colors.PRIMARY,
          children: v.default.Messages.UNBLOCK
        });
      case I.RelationshipTypes.PENDING_INCOMING:
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Text, {
            className: x.action,
            color: "header-secondary",
            variant: "text-sm/normal",
            children: v.default.Messages.FRIEND_REQUEST_RECEIVED
          }), (0, a.jsx)(r.Button, {
            className: x.action,
            size: r.Button.Sizes.TINY,
            onClick: u,
            children: v.default.Messages.FRIEND_REQUEST_ACCEPT
          }), (0, a.jsx)(r.Button, {
            className: x.action,
            size: r.Button.Sizes.TINY,
            color: r.Button.Colors.PRIMARY,
            onClick: () => {
              o.default.cancelFriendRequest(l, {
                location: I.AnalyticsPages.DM_CHANNEL
              })
            },
            children: v.default.Messages.FRIEND_REQUEST_IGNORE
          }), d]
        });
      case I.RelationshipTypes.PENDING_OUTGOING:
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Button, {
            className: x.action,
            size: r.Button.Sizes.TINY,
            disabled: !0,
            children: v.default.Messages.ADD_FRIEND_BUTTON_AFTER
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
    } = e, s = l.useCallback(() => {
      (0, r.showToast)((0, r.createToast)(v.default.Messages.MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE, r.ToastType.FAILURE))
    }, []), i = l.useCallback(() => {
      h.default.closeChannelSidebar(E.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
    }, []), o = l.useCallback(() => {
      h.default.closeChannelSidebar(E.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
    }, []), {
      acceptMessageRequest: u,
      rejectMessageRequest: c,
      isAcceptLoading: f,
      isRejectLoading: m,
      isOptimisticAccepted: p,
      isOptimisticRejected: C
    } = (0, d.useMessageRequestActions)({
      user: g.default.getUser(n),
      onError: s,
      onAcceptSuccess: o,
      onRejectSuccess: i
    }), S = f || m || p || C;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.Button, {
        className: x.action,
        size: r.Button.Sizes.TINY,
        onClick: () => u(t),
        disabled: S,
        submitting: f,
        children: v.default.Messages.MESSAGE_REQUEST_ACCEPT
      }), (0, a.jsx)(r.Button, {
        className: x.action,
        size: r.Button.Sizes.TINY,
        onClick: () => c(t),
        color: r.Button.Colors.PRIMARY,
        disabled: S,
        submitting: m,
        children: v.default.Messages.MESSAGE_REQUEST_IGNORE
      })]
    })
  };
t.default = e => {
  let {
    userId: t,
    channel: n,
    showingBanner: l
  } = e, {
    channelId: r
  } = (0, c.useMessageRequestSidebarState)(), o = (0, i.useStateFromStores)([u.default], () => null != r && u.default.isSpam(r), [r]), d = (0, i.useStateFromStores)([C.default], () => C.default.getRelationshipType(t), [t]), h = n.id === r;
  return t === A.CLYDE_AI_USER_ID ? null : o || h ? (0, a.jsxs)("div", {
    className: x.mobileContainer,
    children: [(0, a.jsx)("div", {
      className: x.mobileMutualGuilds,
      children: (0, a.jsx)(M, {
        userId: t,
        channelId: n.id
      })
    }), (0, a.jsxs)("div", {
      className: x.mobileButtons,
      children: [(0, a.jsx)(y, {
        channelId: n.id,
        otherUserId: t
      }), (0, a.jsx)(f.default, {
        channel: n
      })]
    })]
  }) : !0 === s.isMobile || h ? (0, a.jsxs)("div", {
    className: x.mobileContainer,
    children: [(0, a.jsx)("div", {
      className: x.mobileMutualGuilds,
      children: (0, a.jsx)(M, {
        userId: t,
        channelId: n.id
      })
    }), (0, a.jsxs)("div", {
      className: x.mobileButtons,
      children: [(0, a.jsx)(R, {
        relationshipType: d,
        userId: t,
        showingBanner: l
      }), !l && (0, a.jsx)(T.default, {
        otherUserId: t,
        channel: n,
        navigateAwayOnReportSuccess: !1
      })]
    })]
  }) : (0, a.jsxs)("div", {
    className: x.container,
    children: [(0, a.jsx)(M, {
      userId: t,
      channelId: n.id
    }), (0, a.jsx)("div", {
      className: x.divider
    }), (0, a.jsx)(R, {
      relationshipType: d,
      userId: t,
      showingBanner: l
    }), !l && (0, a.jsx)(T.default, {
      otherUserId: t,
      channel: n
    })]
  })
}