"use strict";
s.r(t), s("47120");
var l = s("735250"),
  a = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("933557"),
  o = s("156699"),
  d = s("526120"),
  u = s("66999"),
  c = s("575830"),
  h = s("554747"),
  m = s("434404"),
  E = s("144140"),
  f = s("314897"),
  g = s("430824"),
  S = s("496675"),
  T = s("981631"),
  N = s("689938"),
  _ = s("228200");
t.default = e => {
  let {
    channel: t,
    onClose: s,
    onConfirm: p,
    transitionState: C
  } = e, x = (0, r.default)(t, !0), M = t.id, I = t.isForumPost(), R = (0, n.useStateFromStores)([g.default], () => g.default.getGuild(t.getGuildId())), A = (0, h.useGuildChannelScheduledEvents)(M), {
    isSubscriptionGated: O
  } = (0, u.default)(t.id), L = (0, c.default)(R, t), [v, j] = a.useState(null), D = (0, n.useStateFromStores)([f.default], () => t.isOwner(f.default.getId()), [t]), y = (0, n.useStateFromStores)([S.default], () => S.default.can(t.isThread() ? T.Permissions.MANAGE_THREADS : T.Permissions.MANAGE_CHANNELS, t), [t]), F = (0, n.useStateFromStores)([E.default], () => {
    var e;
    return null !== (e = E.default.getCount(t.id)) && void 0 !== e ? e : 0
  }, [t.id]), b = I && (y || D && F < 1), P = A.length > 0 && (t.type === T.ChannelTypes.GUILD_VOICE || t.type === T.ChannelTypes.GUILD_STAGE_VOICE);
  if (a.useEffect(() => {
      (async () => {
        if (!await (0, o.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), M)) {
          j("default");
          return
        }
        let e = await (0, d.getBlockForChannelDeletion)(t.getGuildId(), M);
        if (!1 !== e) {
          j(e);
          return
        }
      })()
    }, [t, M]), null != v) {
    let e;
    let t = N.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
    return e = "todo" === v ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === v ? N.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : N.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(i.ModalRoot, {
      transitionState: C,
      "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
      children: [(0, l.jsx)(i.ModalHeader, {
        separator: !1,
        children: (0, l.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: N.default.Messages.CANNOT_DELETE_CHANNEL
        })
      }), (0, l.jsxs)(i.ModalContent, {
        className: _.modalContent,
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: t
        }), (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: e.format({
            onClick: () => {
              null != R && (m.default.open(R.id, T.GuildSettingsSections.ONBOARDING), null == s || s())
            }
          })
        })]
      }), (0, l.jsx)(i.ModalFooter, {
        children: (0, l.jsx)(i.Button, {
          onClick: s,
          children: N.default.Messages.OKAY
        })
      })]
    })
  }
  if (null == R) return null;
  if (R.hasFeature(T.GuildFeatures.COMMUNITY) && (R.rulesChannelId === M || R.publicUpdatesChannelId === M)) {
    let e = R.rulesChannelId === M,
      t = e ? N.default.Messages.DELETE_RULES_CHANNEL_BODY : N.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
    return (0, l.jsxs)(i.ModalRoot, {
      transitionState: C,
      "aria-label": N.default.Messages.CANNOT_DELETE_CHANNEL,
      children: [(0, l.jsx)(i.ModalHeader, {
        separator: !1,
        children: (0, l.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: N.default.Messages.CANNOT_DELETE_CHANNEL
        })
      }), (0, l.jsxs)(i.ModalContent, {
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          className: _.__invalid_modalText,
          children: t
        }), (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          className: _.__invalid_modalText,
          children: N.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
            onClick: () => {
              m.default.open(R.id, T.GuildSettingsSections.COMMUNITY), null == s || s()
            }
          })
        })]
      }), (0, l.jsx)(i.ModalFooter, {
        children: (0, l.jsx)(i.Button, {
          onClick: s,
          children: N.default.Messages.OKAY
        })
      })]
    })
  } {
    let {
      deleteText: e,
      deleteBody: a
    } = (() => {
      if (t.type === T.ChannelTypes.GUILD_CATEGORY) return {
        deleteText: N.default.Messages.DELETE_CATEGORY,
        deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: x
        })
      };
      if (t.isForumPost()) return {
        deleteText: b ? N.default.Messages.DELETE_FORUM_POST : N.default.Messages.DELETE_MESSAGE,
        deleteBody: b && D && !y ? N.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
          postName: x
        }) : b ? N.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
          postName: x
        }) : N.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
      };
      if (t.isThread()) return {
        deleteText: N.default.Messages.DELETE_THREAD,
        deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: x
        })
      };
      else if (O && L > 0) return {
        deleteText: N.default.Messages.DELETE_CHANNEL,
        deleteBody: N.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
          channelName: x,
          numGuildRoleSubscriptionMembers: L
        })
      };
      return {
        deleteText: N.default.Messages.DELETE_CHANNEL,
        deleteBody: N.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: x
        })
      }
    })();
    return (0, l.jsxs)(i.ModalRoot, {
      transitionState: C,
      "aria-label": e,
      children: [(0, l.jsx)(i.ModalHeader, {
        separator: !1,
        children: (0, l.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: e
        })
      }), (0, l.jsxs)(i.ModalContent, {
        className: _.modalContent,
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: a
        }), P ? (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: _.warningText,
          children: N.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
            count: A.length
          })
        }) : null]
      }), (0, l.jsxs)(i.ModalFooter, {
        children: [(0, l.jsx)(i.Button, {
          onClick: p,
          color: i.Button.Colors.RED,
          children: e
        }), (0, l.jsx)(i.Button, {
          onClick: s,
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          children: N.default.Messages.CANCEL
        })]
      })]
    })
  }
}