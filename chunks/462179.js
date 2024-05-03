"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("735250");
n("470079");
var i = n("442837"),
  a = n("481060"),
  r = n("239091"),
  s = n("749210"),
  u = n("305325"),
  d = n("281956"),
  o = n("889161"),
  c = n("703656"),
  f = n("922482"),
  v = n("984933"),
  E = n("430824"),
  h = n("496675"),
  m = n("626135"),
  g = n("572004"),
  _ = n("482241"),
  I = n("951539"),
  S = n("894017"),
  N = n("274311"),
  x = n("854698"),
  T = n("118998"),
  p = n("139712"),
  C = n("765305"),
  j = n("981631"),
  L = n("689938");

function R(e) {
  let {
    guild: t,
    channel: R,
    guildScheduledEvent: y,
    isActive: M,
    recurrenceId: A,
    onActionTaken: D
  } = e, {
    scheduled_start_time: b,
    id: G,
    entity_type: U,
    guild_id: k
  } = y, {
    canManageGuildEvent: P
  } = (0, o.useManageResourcePermissions)(null != R ? R : t), V = P(y), F = (0, I.default)(y), O = (0, N.useIsChannelPublic)(null == R ? void 0 : R.id, y.id), {
    withinStartWindow: w
  } = (0, x.getEventTimeData)(b), B = (0, i.useStateFromStores)([h.default], () => (null == R ? !void 0 : !R.isGuildVocal()) || h.default.can(j.Permissions.CONNECT, R), [R]), H = (0, d.useShowMemberVerificationGate)(k), z = (0, S.default)(A, G);

  function X(e) {
    e.stopPropagation(), (0, p.default)(G, A, k)
  }
  async function Y(e) {
    e.stopPropagation(), await s.default.joinGuild(k), E.default.addConditionalChangeListener(() => null == E.default.getGuild(k) || (!M && X(e), K(e), !1))
  }

  function K(e) {
    e.stopPropagation();
    let t = v.default.getDefaultChannel(k);
    (0, a.closeAllModals)(), (0, c.transitionToGuild)(k, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: V ? function(e) {
      e.stopPropagation(), V && !M && (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
        ...e,
        header: L.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: L.default.Messages.DELETE,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: () => _.default.deleteGuildEvent(G, k),
        children: (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: L.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("54668"), n.e("62364")]).then(n.bind(n, "215269"));
        return n => (0, l.jsx)(e, {
          guildEventId: G,
          recurrenceId: A,
          channel: R,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: B || H ? function(e) {
      if (e.stopPropagation(), H) {
        null == D || D(), (0, u.openMemberVerificationModal)(k);
        return
      }(null == R ? void 0 : R.isGuildStageVoice()) ? ((0, f.connectAndOpen)(R), null == D || D()) : (null == R ? void 0 : R.isGuildVoice()) && (_.default.joinVoiceEvent(R.guild_id, R.id), null == D || D())
    } : void 0,
    onRsvpClick: X,
    onStartClick: V && w && !(null == z ? void 0 : z.is_canceled) ? function(e) {
      e.stopPropagation(), (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("84722"), n.e("11992")]).then(n.bind(n, "296864"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: y,
          onSuccess: D
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!F || !O) {
          let e = (0, T.SHARE_EVENT_DETAILS_LINK)({
            guildId: k,
            guildEventId: G
          });
          (0, g.copy)(e), m.default.track(j.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: k,
            guild_scheduled_event_id: G
          });
          return
        }(0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("43643"), n.e("7654"), n.e("96626")]).then(n.bind(n, "560114"));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t,
            channel: R,
            guildScheduledEvent: y,
            source: j.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: V && U === C.GuildScheduledEventEntityTypes.EXTERNAL && M ? function(e) {
      if (e.stopPropagation(), !V) return;
      let t = () => {
        _.default.endEvent(G, k), (0, a.closeAllModals)()
      };
      (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
        ...e,
        header: L.default.Messages.END_EVENT,
        confirmText: L.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: t,
        children: (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: L.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: Y,
    onGoToGuildClick: K
  }
}