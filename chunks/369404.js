"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  i = n("77078"),
  a = n("272030"),
  r = n("851387"),
  d = n("233322"),
  s = n("157186"),
  o = n("817963"),
  c = n("393414"),
  f = n("716214"),
  E = n("923959"),
  v = n("305961"),
  g = n("957255"),
  S = n("599110"),
  h = n("306160"),
  N = n("322224"),
  _ = n("152475"),
  C = n("397680"),
  I = n("613767"),
  T = n("822516"),
  m = n("669195"),
  p = n("936965"),
  x = n("745049"),
  G = n("49111"),
  D = n("782340");

function L(e) {
  let {
    guild: t,
    channel: L,
    guildScheduledEvent: R,
    isActive: M,
    recurrenceId: y,
    onActionTaken: A
  } = e, {
    scheduled_start_time: U,
    id: V,
    entity_type: O,
    guild_id: P
  } = R, {
    canManageGuildEvent: j
  } = (0, o.useManageResourcePermissions)(null != L ? L : t), F = j(R), k = (0, _.default)(R), H = (0, I.useIsChannelPublic)(null == L ? void 0 : L.id, R.id), {
    withinStartWindow: b
  } = (0, T.getEventTimeData)(U), w = (0, u.useStateFromStores)([g.default], () => (null == L ? !void 0 : !L.isGuildVocal()) || g.default.can(G.Permissions.CONNECT, L), [L]), B = (0, s.useShowMemberVerificationGate)(P), Y = (0, C.default)(y, V);

  function z(e) {
    e.stopPropagation(), (0, p.default)(V, y, P)
  }
  async function W(e) {
    e.stopPropagation(), await r.default.joinGuild(P), v.default.addConditionalChangeListener(() => {
      let t = v.default.getGuild(P);
      return null == t || (!M && z(e), K(e), !1)
    })
  }

  function K(e) {
    e.stopPropagation();
    let t = E.default.getDefaultChannel(P);
    (0, i.closeAllModals)(), (0, c.transitionToGuild)(P, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: F ? function(e) {
      e.stopPropagation(), F && !M && (0, i.openModal)(e => (0, l.jsx)(i.ConfirmModal, {
        ...e,
        header: D.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: D.default.Messages.DELETE,
        cancelText: D.default.Messages.CANCEL,
        onConfirm: () => N.default.deleteGuildEvent(V, P),
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: D.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, a.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("110374").then(n.bind(n, "110374"));
        return n => (0, l.jsx)(e, {
          guildEventId: V,
          recurrenceId: y,
          channel: L,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: w || B ? function(e) {
      if (e.stopPropagation(), B) {
        null == A || A(), (0, d.openMemberVerificationModal)(P);
        return
      }(null == L ? void 0 : L.isGuildStageVoice()) ? ((0, f.connectAndOpen)(L), null == A || A()) : (null == L ? void 0 : L.isGuildVoice()) && (N.default.joinVoiceEvent(L.guild_id, L.id), null == A || A())
    } : void 0,
    onRsvpClick: z,
    onStartClick: F && b && !(null == Y ? void 0 : Y.is_canceled) ? function(e) {
      e.stopPropagation(), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: R,
          onSuccess: A
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!k || !H) {
          let e = (0, m.SHARE_EVENT_DETAILS_LINK)({
            guildId: P,
            guildEventId: V
          });
          (0, h.copy)(e), S.default.track(G.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: P,
            guild_scheduled_event_id: V
          });
          return
        }(0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t,
            channel: L,
            guildScheduledEvent: R,
            source: G.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: F && O === x.GuildScheduledEventEntityTypes.EXTERNAL && M ? function(e) {
      if (e.stopPropagation(), !F) return;
      let t = () => {
        N.default.endEvent(V, P), (0, i.closeAllModals)()
      };
      (0, i.openModal)(e => (0, l.jsx)(i.ConfirmModal, {
        ...e,
        header: D.default.Messages.END_EVENT,
        confirmText: D.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: D.default.Messages.CANCEL,
        onConfirm: t,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: D.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: W,
    onGoToGuildClick: K
  }
}