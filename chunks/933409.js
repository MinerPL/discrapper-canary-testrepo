"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("47120"), l("789020");
var a = l("735250"),
  n = l("470079"),
  u = l("442837"),
  i = l("481060"),
  s = l("91176"),
  d = l("749210"),
  r = l("58540"),
  o = l("251794"),
  c = l("386696"),
  f = l("71619"),
  m = l("910693"),
  M = l("592125"),
  E = l("271383"),
  S = l("430824"),
  g = l("496675"),
  I = l("594174"),
  C = l("979651"),
  _ = l("630388"),
  R = l("5192"),
  O = l("813872"),
  v = l("981631"),
  A = l("590433"),
  N = l("372897"),
  b = l("689938");

function h(e, t, h, T) {
  let F = n.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    L = null != T ? [T] : [];
  (0, r.useSubscribeGuildMembers)(F), (0, u.useStateFromStores)([g.default], () => g.default.getGuildVersion(t), [t]);
  let U = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]),
    p = (0, u.useStateFromStores)([I.default], () => {
      var t;
      return (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
    }, [e.id]),
    x = (0, u.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(t, e.id), [t, e.id]),
    P = (0, u.useStateFromStores)([M.default], () => M.default.getChannel(h), [h]),
    [, D] = (0, f.default)(e.id, t),
    G = null == P ? void 0 : P.isGuildStageVoice(),
    {
      muted: y,
      deafened: j,
      suppressed: V,
      voiceChannelId: B
    } = (0, u.useStateFromStoresObject)([C.default], () => {
      var l, a, n;
      let u = C.default.getVoiceState(t, e.id);
      return {
        muted: null !== (l = null == u ? void 0 : u.mute) && void 0 !== l && l,
        deafened: null !== (a = null == u ? void 0 : u.deaf) && void 0 !== a && a,
        suppressed: null !== (n = null == u ? void 0 : u.suppress) && void 0 !== n && n,
        voiceChannelId: null == u ? void 0 : u.channelId
      }
    }),
    k = (0, u.useStateFromStores)([E.default], () => E.default.getMember(t, e.id)),
    w = (0, O.default)(e.id, t, h, T),
    K = (0, m.useTrackModerationAction)(t, {
      location: T,
      targetUserId: e.id
    }),
    H = (0, c.default)(t, e.id),
    Y = null != B && null != h && g.default.canWithPartialContext(v.Permissions.VIEW_CHANNEL, {
      channelId: B
    }) && !x ? [(!G || G && !V) && g.default.canWithPartialContext(v.Permissions.MUTE_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(i.MenuCheckboxItem, {
      id: "voice-mute",
      label: b.default.Messages.SERVER_VOICE_MUTE,
      checked: y,
      color: "danger",
      action: () => {
        !1 === y && K(m.ModerationActionType.MUTE), d.default.setServerMute(t, e.id, !y)
      }
    }, "voice-mute") : null, (!G || G && !V) && g.default.canWithPartialContext(v.Permissions.DEAFEN_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(i.MenuCheckboxItem, {
      id: "voice-deafen",
      label: b.default.Messages.SERVER_DEAFEN,
      checked: j,
      color: "danger",
      action: () => d.default.setServerDeaf(t, e.id, !j)
    }, "voice-deafen") : null, !p && null != U && g.default.canWithPartialContext(v.Permissions.MOVE_MEMBERS, {
      channelId: h
    }) ? (0, a.jsx)(i.MenuItem, {
      id: "voice-disconnect",
      label: p ? b.default.Messages.DISCONNECT_SELF : b.default.Messages.DISCONNECT_OTHER,
      color: "danger",
      action: () => d.default.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    W = async (t, l, a) => {
      if (t.ctrlKey || t.metaKey) try {
        var n;
        await s.default.setCommunicationDisabledDuration(l, a, A.DisableCommunicationDuration.DURATION_60_SEC, null, T), K(m.ModerationActionType.TIMEOUT), (0, i.showToast)((0, i.createToast)(b.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: null !== (n = R.default.getName(l, null, e)) && void 0 !== n ? n : ""
        }), i.ToastType.SUCCESS))
      } catch (e) {
        (0, i.showToast)((0, i.createToast)(b.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, i.ToastType.FAILURE))
      }
    }, z = null;
  if (!p && null != U && null != k && null != k.joinedAt && (g.default.canManageUser(v.Permissions.MODERATE_MEMBERS, e, U) || g.default.canManageUser(v.Permissions.MANAGE_ROLES, e, U)) && U.hasFeature(v.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var q;
    z = (0, _.hasFlag)(null !== (q = k.flags) && void 0 !== q ? q : 0, N.GuildMemberFlags.BYPASSES_VERIFICATION) ? (0, a.jsx)(i.MenuItem, {
      id: "verify",
      label: b.default.Messages.MANUALLY_UNVERIFY_MEMBER,
      action: () => {
        var t;
        return d.default.setMemberFlags(U.id, e.id, (0, _.setFlag)(null !== (t = k.flags) && void 0 !== t ? t : 0, N.GuildMemberFlags.BYPASSES_VERIFICATION, !1))
      }
    }, "verify") : (0, a.jsx)(i.MenuItem, {
      id: "verify",
      label: b.default.Messages.MANUALLY_VERIFY_MEMBER,
      action: () => {
        var t;
        return d.default.setMemberFlags(U.id, e.id, (0, _.setFlag)(null !== (t = k.flags) && void 0 !== t ? t : 0, N.GuildMemberFlags.BYPASSES_VERIFICATION, !0))
      }
    }, "verify")
  }
  return [...Y, ...p || null == U ? [] : [w, z, H && !x ? D ? (0, a.jsx)(i.MenuItem, {
    id: "removetimeout",
    label: b.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, o.openEnableCommunication)(t, e.id, L)
    }
  }, "removetimeout") : (0, a.jsx)(i.MenuItem, {
    id: "timeout",
    label: b.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: l => {
      if (l.ctrlKey || l.metaKey) return W(l, t, e.id);
      (0, o.openDisableCommunication)(t, e.id, L)
    }
  }, "timeout") : null, g.default.canManageUser(v.Permissions.KICK_MEMBERS, e, U) && !e.isClyde() ? (0, a.jsx)(i.MenuItem, {
    id: "kick",
    label: b.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([l.e("99387"), l.e("5454")]).then(l.bind(l, "854360"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: T,
        guildId: t,
        user: e
      })
    })
  }, "kick") : null, g.default.canManageUser(v.Permissions.BAN_MEMBERS, e, U) ? (0, a.jsx)(i.MenuItem, {
    id: "ban",
    label: b.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([l.e("99387"), l.e("43350")]).then(l.bind(l, "98746"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: T,
        guildId: t,
        user: e
      })
    })
  }, "ban") : null]]
}