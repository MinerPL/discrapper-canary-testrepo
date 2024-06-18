"use strict";
n.d(t, {
  F6: function() {
    return b
  },
  _Y: function() {
    return F
  },
  cG: function() {
    return G
  },
  ly: function() {
    return w
  },
  oL: function() {
    return H
  },
  vo: function() {
    return k
  }
}), n(47120), n(789020), n(724458), n(411104);
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(433517),
  l = n(570140),
  u = n(668781),
  _ = n(92114),
  d = n(181945),
  c = n(149071),
  E = n(516373),
  I = n(480294),
  T = n(650774),
  h = n(888369),
  S = n(430824),
  f = n(771845),
  N = n(9156),
  A = n(626135),
  m = n(630388),
  O = n(823379),
  R = n(960048),
  C = n(709054),
  p = n(223683),
  g = n(630114),
  L = n(506712),
  v = n(468788),
  D = n(789662),
  M = n(981631),
  P = n(490897),
  y = n(526761),
  U = n(689938);

function b(e, t) {
  let [n, r] = i.useState(D.nf), [a, l] = i.useState({});
  (0, E.D)();
  let u = (0, o.Wu)([S.Z], () => Object.values(S.Z.getGuilds())),
    _ = i.useCallback(() => {
      let i = {};
      for (let r of u) i[r.id] = function(e, t, n, i, r) {
        var s;
        let [o, a, l] = I.Z.hasConsented(M.pjP.PERSONALIZATION) ? (0, L.q)(e, t, n, i, !0) : (0, L.A)(e, n), u = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {}, _ = (0, g.Z)(e, null != r ? r : o, u, i, t);
        return {
          guildId: e.id,
          mode: o,
          debugReason: l,
          actions: _,
          overrideMode: r,
          messagePain: u.messages === D.XR.High,
          visitsALot: a,
          muted: N.ZP.isMuted(e.id) && !N.ZP.isTemporarilyMuted(e.id)
        }
      }(r, n, e, t, a[r.id]);
      return i
    }, [u, n, e, t, a]),
    [d, c] = i.useState(() => _());
  return i.useEffect(() => c(_()), [_]), {
    guildPlans: d,
    overrideGuild: i.useCallback((e, t) => {
      l(n => ({
        ...n,
        [e]: t
      }))
    }, []),
    setThresholds: r,
    getDebug: () => (function(e, t) {
      let n = t.reduce((e, t) => {
          var n;
          return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
        }, 0),
        i = t.reduce((e, t) => {
          var n;
          return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
        }, 0),
        r = f.ZP.getFlattenedGuildIds(),
        o = s().sortBy(Object.values(e), e => {
          let t = r.indexOf(e.guildId);
          return -1 === t ? r.length : t
        }),
        a = [
          ["Use Grey Dot", new Set([D.AR.UseGreyDot])],
          ["Keep As Is", new Set([D.AR.KeepAsIs])]
        ].map(e => {
          let [t, n] = e, i = o.filter(e => {
            var t;
            return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
          }).map(e => {
            let t = S.Z.getGuild(e.guildId),
              n = e.actions.map(e => {
                var t;
                return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
              }).join("\n");
            return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
          });
          return "# ".concat(t, "\n\n").concat(i.join("\n\n"))
        });
      return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(i, "\n\n").concat(a.join("\n\n"))
    })(Object.values(d), t)
  }
}

function G(e, t) {
  return Object.values(S.Z.getGuilds()).some(n => {
    let [i] = I.Z.hasConsented(M.pjP.PERSONALIZATION) ? (0, L.q)(n, D.nf, e, t, !1) : (0, L.A)(n, e);
    return i === D.AR.UseGreyDot
  })
}

function w() {
  let e = Object.values(S.Z.getGuilds()),
    t = {};
  for (let r of e) {
    var n, i;
    let e = null !== (i = (null !== (n = N.ZP.getAllSettings().userGuildSettings[r.id]) && void 0 !== n ? n : {}).flags) && void 0 !== i ? i : 0;
    e = (0, m.mB)(e, y.vc.UNREADS_ALL_MESSAGES, !0), e = (0, m.mB)(e, y.vc.UNREADS_ONLY_MENTIONS, !1), t[r.id] = {
      flags: e
    }
  }
  x(t), A.default.track(M.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
    auto_migrated: !0,
    num_unread_guids_after: e.filter(e => h.default.hasUnread(e.id)).length
  })
}

function k(e) {
  let [t, n] = i.useState(!1), [r, s] = i.useState(!1), o = i.useCallback(async t => {
    if (r) throw Error("Already submitted notifications migration");
    n(!0);
    try {
      await B(t, e), s(!0)
    } finally {
      n(!1)
    }
  }, [r, e]);
  return {
    submitting: t,
    submitted: r,
    saveSettings: o
  }
}
async function B(e, t) {
  if (N.ZP.useNewNotifications) {
    u.Z.show({
      title: "Info",
      body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
    });
    return
  }
  let n = function(e) {
    let t = Object.values(e).filter(e => {
        var t;
        return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === D.AR.UseGreyDot
      }).map(e => {
        var t;
        return {
          plan: e,
          memberCount: null !== (t = T.Z.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
        }
      }),
      n = {
        num_unread_guilds_before: C.default.keys(e).filter(e => h.default.hasUnread(e)).length,
        unmuted_server_ids: t.filter(e => N.ZP.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
      };
    return () => {
      A.default.track(M.rMx.NOTIFICATION_MIGRATION_COMPLETED, {
        ...n,
        auto_migrated: !0,
        pre_selected_server_ids: Object.values(e).filter(e => e.mode === D.AR.UseGreyDot).map(e => e.guildId),
        final_selected_server_ids: t.map(e => e.plan.guildId),
        num_unread_guids_after: C.default.keys(e).filter(e => h.default.hasUnread(e)).length,
        num_tiny_servers_selected: t.filter(e => e.memberCount <= 20).length,
        num_small_servers_selected: t.filter(e => e.memberCount > 20 && e.memberCount <= 200).length,
        num_medium_servers_selected: t.filter(e => e.memberCount > 200 && e.memberCount <= 1e3).length,
        num_large_servers_selected: t.filter(e => e.memberCount > 1e3).length,
        num_quiet_servers_selected: t.filter(e => !e.plan.messagePain).length,
        num_busy_servers_selected: t.filter(e => e.plan.messagePain).length,
        num_frequent_visited_servers_selected: t.filter(e => e.plan.visitsALot).length,
        num_infrequent_visited_servers_selected: t.filter(e => !e.plan.visitsALot).length
      })
    }
  }(e);
  try {
    let t = {};
    for (let n of Object.values(e)) {
      var i, r;
      let e = null !== (i = N.ZP.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== i ? i : {},
        s = {};
      for (let t of n.actions) null === (r = t.apply) || void 0 === r || r.call(t, s, e);
      t[n.guildId] = s
    }
    await x(t);
    let s = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
    if (s.length > 0) {
      let e = setTimeout(n, 5e3);
      (0, d.Z)(s, void 0, () => {
        l.Z.dispatch({
          type: "RECOMPUTE_READ_STATES"
        }), clearTimeout(e), n()
      })
    } else n()
  } catch (e) {
    R.Z.captureException(e), u.Z.show({
      title: U.Z.Messages.ERROR,
      body: U.Z.Messages.NOTIF_MIGRATION_ERROR,
      onConfirm: t
    })
  }
}
async function x(e) {
  await V(() => Z()), await V(() => _.Z.setAccountFlag(v.c.USE_NEW_NOTIFICATIONS, !0));
  let t = await V(() => c.Z.saveUserGuildSettingsBulk(e));
  l.Z.dispatch({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: t
  }), l.Z.dispatch({
    type: "RECOMPUTE_READ_STATES"
  })
}
async function V(e) {
  for (let t = 0; t < 3; t++) try {
    return await e()
  } catch (e) {
    await new Promise(e => setTimeout(e, 1e3 * (t + 1)))
  }
  return await e()
}
async function Z() {
  let e = await (0, p.Tn)();
  e.length > 0 ? await

  function() {
    return new Promise(e => {
      u.Z.show({
        title: "Create new Backup?",
        body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
        confirmText: "Take New Backup",
        cancelText: "Skip Backup",
        onConfirm: () => e(!0),
        onCancel: () => e(!1)
      })
    })
  }() && (0, p.dt)(e): (0, p.$U)("Backup from ".concat(new Date().toLocaleDateString()))
}
async function H() {
  a.K.set("turnedOffNewNotifications", !0), A.default.track(M.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
    num_guilds_with_new_setting: Object.values(S.Z.getGuilds()).filter(e => N.ZP.resolveGuildUnreadSetting(e) === P.i.ONLY_MENTIONS).length
  });
  let e = await (0, p.Tn)(),
    t = s().sortBy(e, e => new Date(e.recorded_at).getTime());
  if (t.length > 0) {
    let e = t[t.length - 1];
    await new Promise(t => u.Z.show({
      title: "Please Confirm",
      body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
      onConfirm: t,
      cancelText: "Cancel",
      onCancel: () => {}
    })), await (0, p.xx)(e.id), await _.Z.setAccountFlag(v.c.USE_NEW_NOTIFICATIONS, !1)
  } else await _.Z.setAccountFlag(v.c.USE_NEW_NOTIFICATIONS, !1)
}

function F(e) {
  var t, n, i;
  if (null == e) return [];
  let r = s().keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
    o = s().keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
  return (null !== (i = e.channel_opens) && void 0 !== i ? i : []).map(e => {
    var t, n, i, s, a, l, u, _, d, c, E;
    let I = null !== (t = r[e.channel_id]) && void 0 !== t ? t : {},
      T = null !== (n = o[e.channel_id]) && void 0 !== n ? n : {};
    return {
      channel_id: e.channel_id,
      num_year_opens: Number(null !== (i = e.year_opens) && void 0 !== i ? i : 0),
      num_month_opens: Number(null !== (s = e.one_month_opens) && void 0 !== s ? s : 0),
      num_three_month_opens: Number(null !== (a = e.three_month_opens) && void 0 !== a ? a : 0),
      num_six_month_opens: Number(null !== (l = e.six_month_opens) && void 0 !== l ? l : 0),
      num_messages: Number(null !== (u = null == T ? void 0 : T.num_messages) && void 0 !== u ? u : 0),
      num_year_voice_joins: Number(null !== (_ = null == I ? void 0 : I.year_opens) && void 0 !== _ ? _ : 0),
      num_month_voice_joins: Number(null !== (d = null == I ? void 0 : I.one_month_opens) && void 0 !== d ? d : 0),
      num_three_month_voice_joins: Number(null !== (c = null == I ? void 0 : I.three_month_opens) && void 0 !== c ? c : 0),
      num_six_month_voice_joins: Number(null !== (E = null == I ? void 0 : I.six_month_opens) && void 0 !== E ? E : 0)
    }
  }).filter(O.lm)
}