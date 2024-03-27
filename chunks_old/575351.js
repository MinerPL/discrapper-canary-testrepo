"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983"),
  u = n("884691"),
  i = n("446674"),
  r = n("77078"),
  d = n("679653"),
  a = n("929278"),
  s = n("347895"),
  o = n("848848"),
  E = n("735251"),
  c = n("534222"),
  _ = n("592407"),
  f = n("610730"),
  N = n("271938"),
  T = n("305961"),
  h = n("957255"),
  S = n("49111"),
  C = n("782340"),
  m = n("221640"),
  v = e => {
    let {
      channel: t,
      onClose: n,
      onConfirm: v,
      transitionState: I
    } = e, g = (0, d.default)(t, !0), M = t.id, D = t.isForumPost(), L = (0, i.useStateFromStores)([T.default], () => T.default.getGuild(t.getGuildId())), A = (0, c.useGuildChannelScheduledEvents)(M), {
      isSubscriptionGated: p
    } = (0, o.default)(t.id), G = (0, E.default)(L, t), [O, y] = u.useState(null), R = (0, i.useStateFromStores)([N.default], () => t.isOwner(N.default.getId()), [t]), U = (0, i.useStateFromStores)([h.default], () => h.default.can(t.isThread() ? S.Permissions.MANAGE_THREADS : S.Permissions.MANAGE_CHANNELS, t), [t]), H = (0, i.useStateFromStores)([f.default], () => {
      var e;
      return null !== (e = f.default.getCount(t.id)) && void 0 !== e ? e : 0
    }, [t.id]), F = D && (U || R && H < 1), x = A.length > 0 && (t.type === S.ChannelTypes.GUILD_VOICE || t.type === S.ChannelTypes.GUILD_STAGE_VOICE);
    if (u.useEffect(() => {
        (async () => {
          let e = await (0, a.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), M);
          if (!e) {
            y("default");
            return
          }
          let n = await (0, s.getBlockForChannelDeletion)(t.getGuildId(), M);
          if (!1 !== n) {
            y(n);
            return
          }
        })()
      }, [t, M]), null != O) {
      let e;
      let t = C.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
      return e = "todo" === O ? C.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === O ? C.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : C.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(r.ModalRoot, {
        transitionState: I,
        "aria-label": C.default.Messages.CANNOT_DELETE_CHANNEL,
        children: [(0, l.jsx)(r.ModalHeader, {
          separator: !1,
          children: (0, l.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            children: C.default.Messages.CANNOT_DELETE_CHANNEL
          })
        }), (0, l.jsxs)(r.ModalContent, {
          className: m.modalContent,
          children: [(0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            children: t
          }), (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            children: e.format({
              onClick: () => {
                null != L && (_.default.open(L.id, S.GuildSettingsSections.ONBOARDING), null == n || n())
              }
            })
          })]
        }), (0, l.jsx)(r.ModalFooter, {
          children: (0, l.jsx)(r.Button, {
            onClick: n,
            children: C.default.Messages.OKAY
          })
        })]
      })
    }
    if (null == L) return null;
    if (L.hasFeature(S.GuildFeatures.COMMUNITY) && (L.rulesChannelId === M || L.publicUpdatesChannelId === M)) {
      let e = L.rulesChannelId === M,
        t = e ? C.default.Messages.DELETE_RULES_CHANNEL_BODY : C.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
      return (0, l.jsxs)(r.ModalRoot, {
        transitionState: I,
        "aria-label": C.default.Messages.CANNOT_DELETE_CHANNEL,
        children: [(0, l.jsx)(r.ModalHeader, {
          separator: !1,
          children: (0, l.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            children: C.default.Messages.CANNOT_DELETE_CHANNEL
          })
        }), (0, l.jsxs)(r.ModalContent, {
          children: [(0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            className: m.modalText,
            children: t
          }), (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            className: m.modalText,
            children: C.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
              onClick: () => {
                _.default.open(L.id, S.GuildSettingsSections.COMMUNITY), null == n || n()
              }
            })
          })]
        }), (0, l.jsx)(r.ModalFooter, {
          children: (0, l.jsx)(r.Button, {
            onClick: n,
            children: C.default.Messages.OKAY
          })
        })]
      })
    } {
      let {
        deleteText: e,
        deleteBody: u
      } = (() => {
        if (t.type === S.ChannelTypes.GUILD_CATEGORY) return {
          deleteText: C.default.Messages.DELETE_CATEGORY,
          deleteBody: C.default.Messages.DELETE_CHANNEL_BODY.format({
            channelName: g
          })
        };
        if (t.isForumPost()) return {
          deleteText: F ? C.default.Messages.DELETE_FORUM_POST : C.default.Messages.DELETE_MESSAGE,
          deleteBody: F && R && !U ? C.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
            postName: g
          }) : F ? C.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
            postName: g
          }) : C.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
        };
        if (t.isThread()) return {
          deleteText: C.default.Messages.DELETE_THREAD,
          deleteBody: C.default.Messages.DELETE_CHANNEL_BODY.format({
            channelName: g
          })
        };
        else if (p && G > 0) return {
          deleteText: C.default.Messages.DELETE_CHANNEL,
          deleteBody: C.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
            channelName: g,
            numGuildRoleSubscriptionMembers: G
          })
        };
        return {
          deleteText: C.default.Messages.DELETE_CHANNEL,
          deleteBody: C.default.Messages.DELETE_CHANNEL_BODY.format({
            channelName: g
          })
        }
      })();
      return (0, l.jsxs)(r.ModalRoot, {
        transitionState: I,
        "aria-label": e,
        children: [(0, l.jsx)(r.ModalHeader, {
          separator: !1,
          children: (0, l.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            children: e
          })
        }), (0, l.jsxs)(r.ModalContent, {
          className: m.modalContent,
          children: [(0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-primary",
            children: u
          }), x ? (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: m.warningText,
            children: C.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
              count: A.length
            })
          }) : null]
        }), (0, l.jsxs)(r.ModalFooter, {
          children: [(0, l.jsx)(r.Button, {
            onClick: v,
            color: r.Button.Colors.RED,
            children: e
          }), (0, l.jsx)(r.Button, {
            onClick: n,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            children: C.default.Messages.CANCEL
          })]
        })]
      })
    }
  }