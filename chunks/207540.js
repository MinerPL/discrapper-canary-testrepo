n.r(t), n(47120);
var l = n(735250),
  r = n(470079),
  i = n(442837),
  u = n(481060),
  d = n(933557),
  s = n(156699),
  a = n(734893),
  E = n(693196),
  o = n(66999),
  c = n(575830),
  _ = n(554747),
  N = n(434404),
  T = n(144140),
  f = n(314897),
  C = n(430824),
  g = n(496675),
  Z = n(981631),
  D = n(689938),
  h = n(719747);
t.default = e => {
  let {
channel: t,
onClose: n,
onConfirm: I,
transitionState: v
  } = e, L = (0, d.ZP)(t, !0), O = t.id, m = t.isForumPost(), M = (0, i.e7)([C.Z], () => C.Z.getGuild(t.getGuildId())), A = (0, _.u1)(O), {
isSubscriptionGated: S
  } = (0, o.Z)(t.id), P = (0, c.Z)(M, t), [G, x] = r.useState(), U = (0, i.e7)([f.default], () => t.isOwner(f.default.getId()), [t]), p = (0, i.e7)([g.Z], () => g.Z.can(t.isThread() ? Z.Plq.MANAGE_THREADS : Z.Plq.MANAGE_CHANNELS, t), [t]), H = (0, i.e7)([T.Z], () => {
var e;
return null !== (e = T.Z.getCount(t.id)) && void 0 !== e ? e : 0;
  }, [t.id]), R = m && (p || U && H < 1), B = A.length > 0 && (t.type === Z.d4z.GUILD_VOICE || t.type === Z.d4z.GUILD_STAGE_VOICE);
  if (r.useEffect(() => {
  (async () => {
    if (!await (0, s.C)(t.getGuildId(), O)) {
      x(a.j.DEFAULT);
      return;
    }
    let e = await (0, E.T)(t.getGuildId(), O);
    if (null != e) {
      x(e);
      return;
    }
  })();
}, [
  t,
  O
]), null != G) {
let e;
let t = D.Z.Messages.DELETE_DEFAULT_CHANNEL_BODY;
return e = G === a.j.TODO ? D.Z.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : G === a.j.RESOURCE ? D.Z.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : D.Z.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(u.ModalRoot, {
  transitionState: v,
  'aria-label': D.Z.Messages.CANNOT_DELETE_CHANNEL,
  children: [
    (0, l.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, l.jsx)(u.Heading, {
        variant: 'heading-lg/semibold',
        children: D.Z.Messages.CANNOT_DELETE_CHANNEL
      })
    }),
    (0, l.jsxs)(u.ModalContent, {
      className: h.modalContent,
      children: [
        (0, l.jsx)(u.Text, {
          variant: 'text-md/normal',
          children: t
        }),
        (0, l.jsx)(u.Text, {
          variant: 'text-md/normal',
          children: e.format({
            onClick: () => {
              null != M && (N.Z.open(M.id, Z.pNK.ONBOARDING), null == n || n());
            }
          })
        })
      ]
    }),
    (0, l.jsx)(u.ModalFooter, {
      children: (0, l.jsx)(u.Button, {
        onClick: n,
        children: D.Z.Messages.OKAY
      })
    })
  ]
});
  }
  if (null == M)
return null;
  if (M.hasFeature(Z.oNc.COMMUNITY) && (M.rulesChannelId === O || M.publicUpdatesChannelId === O)) {
let e = M.rulesChannelId === O,
  t = e ? D.Z.Messages.DELETE_RULES_CHANNEL_BODY : D.Z.Messages.DELETE_UPDATES_CHANNEL_BODY;
return (0, l.jsxs)(u.ModalRoot, {
  transitionState: v,
  'aria-label': D.Z.Messages.CANNOT_DELETE_CHANNEL,
  children: [
    (0, l.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, l.jsx)(u.Heading, {
        variant: 'heading-lg/semibold',
        children: D.Z.Messages.CANNOT_DELETE_CHANNEL
      })
    }),
    (0, l.jsxs)(u.ModalContent, {
      children: [
        (0, l.jsx)(u.Text, {
          variant: 'text-md/normal',
          className: h.__invalid_modalText,
          children: t
        }),
        (0, l.jsx)(u.Text, {
          variant: 'text-md/normal',
          className: h.__invalid_modalText,
          children: D.Z.Messages.DESIGNATE_OTHER_CHANNEL.format({
            onClick: () => {
              N.Z.open(M.id, Z.pNK.COMMUNITY), null == n || n();
            }
          })
        })
      ]
    }),
    (0, l.jsx)(u.ModalFooter, {
      children: (0, l.jsx)(u.Button, {
        onClick: n,
        children: D.Z.Messages.OKAY
      })
    })
  ]
});
  } {
let {
  deleteText: e,
  deleteBody: r
} = (() => {
  if (t.type === Z.d4z.GUILD_CATEGORY)
    return {
      deleteText: D.Z.Messages.DELETE_CATEGORY,
      deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({
        channelName: L
      })
    };
  if (t.isForumPost())
    return {
      deleteText: R ? D.Z.Messages.DELETE_FORUM_POST : D.Z.Messages.DELETE_MESSAGE,
      deleteBody: R && U && !p ? D.Z.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
        postName: L
      }) : R ? D.Z.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
        postName: L
      }) : D.Z.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
    };
  if (t.isThread())
    return {
      deleteText: D.Z.Messages.DELETE_THREAD,
      deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({
        channelName: L
      })
    };
  else if (S && P > 0)
    return {
      deleteText: D.Z.Messages.DELETE_CHANNEL,
      deleteBody: D.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
        channelName: L,
        numGuildRoleSubscriptionMembers: P
      })
    };
  return {
    deleteText: D.Z.Messages.DELETE_CHANNEL,
    deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({
      channelName: L
    })
  };
})();
return (0, l.jsxs)(u.ModalRoot, {
  transitionState: v,
  'aria-label': e,
  children: [
    (0, l.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, l.jsx)(u.Heading, {
        variant: 'heading-lg/semibold',
        children: e
      })
    }),
    (0, l.jsxs)(u.ModalContent, {
      className: h.modalContent,
      children: [
        (0, l.jsx)(u.Text, {
          variant: 'text-md/normal',
          color: 'header-primary',
          children: r
        }),
        B ? (0, l.jsx)(u.Text, {
          variant: 'text-md/normal',
          color: 'header-secondary',
          className: h.warningText,
          children: D.Z.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
            count: A.length
          })
        }) : null
      ]
    }),
    (0, l.jsxs)(u.ModalFooter, {
      children: [
        (0, l.jsx)(u.Button, {
          onClick: I,
          color: u.Button.Colors.RED,
          children: e
        }),
        (0, l.jsx)(u.Button, {
          onClick: n,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          children: D.Z.Messages.CANCEL
        })
      ]
    })
  ]
});
  }
};