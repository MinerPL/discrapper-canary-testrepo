"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("222007"), l("702976");
var a = l("37983"),
  n = l("884691"),
  u = l("446674"),
  i = l("77078"),
  d = l("158574"),
  s = l("851387"),
  r = l("750560"),
  o = l("278483"),
  c = l("700179"),
  f = l("406043"),
  E = l("130037"),
  M = l("42203"),
  S = l("26989"),
  m = l("305961"),
  I = l("957255"),
  g = l("697218"),
  _ = l("800762"),
  h = l("568734"),
  A = l("387111"),
  C = l("359433"),
  p = l("49111"),
  N = l("903639"),
  T = l("657944"),
  R = l("782340");

function O(e, t, O, b) {
  let L = n.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    v = null != b ? [b] : [];
  (0, r.useSubscribeGuildMembers)(L), (0, u.useStateFromStores)([I.default], () => I.default.getGuildVersion(t), [t]);
  let D = (0, u.useStateFromStores)([m.default], () => m.default.getGuild(t), [t]),
    y = (0, u.useStateFromStores)([g.default], () => {
      var t;
      return (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
    }, [e.id]),
    G = (0, u.useStateFromStores)([S.default], () => S.default.isGuestOrLurker(t, e.id), [t, e.id]),
    P = (0, u.useStateFromStores)([M.default], () => M.default.getChannel(O), [O]),
    [, U] = (0, f.default)(e.id, t),
    F = null == P ? void 0 : P.isGuildStageVoice(),
    {
      muted: V,
      deafened: x,
      suppressed: j,
      voiceChannelId: w
    } = (0, u.useStateFromStoresObject)([_.default], () => {
      var l, a, n;
      let u = _.default.getVoiceState(t, e.id);
      return {
        muted: null !== (l = null == u ? void 0 : u.mute) && void 0 !== l && l,
        deafened: null !== (a = null == u ? void 0 : u.deaf) && void 0 !== a && a,
        suppressed: null !== (n = null == u ? void 0 : u.suppress) && void 0 !== n && n,
        voiceChannelId: null == u ? void 0 : u.channelId
      }
    }),
    H = (0, u.useStateFromStores)([S.default], () => S.default.getMember(t, e.id)),
    k = (0, C.default)(e.id, t, O, b),
    B = (0, E.useTrackModerationAction)(t, {
      location: b,
      targetUserId: e.id
    }),
    W = (0, c.default)(t, e.id),
    Y = null != w && null != O && I.default.canWithPartialContext(p.Permissions.VIEW_CHANNEL, {
      channelId: w
    }) && !G ? [(!F || F && !j) && I.default.canWithPartialContext(p.Permissions.MUTE_MEMBERS, {
      channelId: O
    }) ? (0, a.jsx)(i.MenuCheckboxItem, {
      id: "voice-mute",
      label: R.default.Messages.SERVER_VOICE_MUTE,
      checked: V,
      color: "danger",
      action: () => {
        !1 === V && B(E.ModerationActionType.MUTE), s.default.setServerMute(t, e.id, !V)
      }
    }, "voice-mute") : null, (!F || F && !j) && I.default.canWithPartialContext(p.Permissions.DEAFEN_MEMBERS, {
      channelId: O
    }) ? (0, a.jsx)(i.MenuCheckboxItem, {
      id: "voice-deafen",
      label: R.default.Messages.SERVER_DEAFEN,
      checked: x,
      color: "danger",
      action: () => s.default.setServerDeaf(t, e.id, !x)
    }, "voice-deafen") : null, !y && null != D && I.default.canWithPartialContext(p.Permissions.MOVE_MEMBERS, {
      channelId: O
    }) ? (0, a.jsx)(i.MenuItem, {
      id: "voice-disconnect",
      label: y ? R.default.Messages.DISCONNECT_SELF : R.default.Messages.DISCONNECT_OTHER,
      color: "danger",
      action: () => s.default.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    K = async (t, l, a) => {
      if (t.ctrlKey || t.metaKey) try {
        var n;
        await d.default.setCommunicationDisabledDuration(l, a, N.DisableCommunicationDuration.DURATION_60_SEC, null, b), B(E.ModerationActionType.TIMEOUT), (0, i.showToast)((0, i.createToast)(R.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: null !== (n = A.default.getName(l, null, e)) && void 0 !== n ? n : ""
        }), i.ToastType.SUCCESS))
      } catch (e) {
        (0, i.showToast)((0, i.createToast)(R.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, i.ToastType.FAILURE))
      }
    }, X = null;
  if (!y && null != D && null != H && null != H.joinedAt && (I.default.canManageUser(p.Permissions.MODERATE_MEMBERS, e, D) || I.default.canManageUser(p.Permissions.MANAGE_ROLES, e, D)) && D.hasFeature(p.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var z;
    X = (0, h.hasFlag)(null !== (z = H.flags) && void 0 !== z ? z : 0, T.GuildMemberFlags.BYPASSES_VERIFICATION) ? (0, a.jsx)(i.MenuItem, {
      id: "verify",
      label: R.default.Messages.MANUALLY_UNVERIFY_MEMBER,
      action: () => {
        var t;
        return s.default.setMemberFlags(D.id, e.id, (0, h.setFlag)(null !== (t = H.flags) && void 0 !== t ? t : 0, T.GuildMemberFlags.BYPASSES_VERIFICATION, !1))
      }
    }, "verify") : (0, a.jsx)(i.MenuItem, {
      id: "verify",
      label: R.default.Messages.MANUALLY_VERIFY_MEMBER,
      action: () => {
        var t;
        return s.default.setMemberFlags(D.id, e.id, (0, h.setFlag)(null !== (t = H.flags) && void 0 !== t ? t : 0, T.GuildMemberFlags.BYPASSES_VERIFICATION, !0))
      }
    }, "verify")
  }
  let J = y || null == D ? [] : [k, X, W && !G ? U ? (0, a.jsx)(i.MenuItem, {
    id: "removetimeout",
    label: R.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, o.openEnableCommunication)(t, e.id, v)
    }
  }, "removetimeout") : (0, a.jsx)(i.MenuItem, {
    id: "timeout",
    label: R.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: l => {
      if (l.ctrlKey || l.metaKey) return K(l, t, e.id);
      (0, o.openDisableCommunication)(t, e.id, v)
    }
  }, "timeout") : null, I.default.canManageUser(p.Permissions.KICK_MEMBERS, e, D) && !e.isClyde() ? (0, a.jsx)(i.MenuItem, {
    id: "kick",
    label: R.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await l.el("125104").then(l.bind(l, "125104"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: b,
        guildId: t,
        user: e
      })
    })
  }, "kick") : null, I.default.canManageUser(p.Permissions.BAN_MEMBERS, e, D) ? (0, a.jsx)(i.MenuItem, {
    id: "ban",
    label: R.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await l.el("743506").then(l.bind(l, "743506"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: b,
        guildId: t,
        user: e
      })
    })
  }, "ban") : null];
  return [...Y, ...J]
}