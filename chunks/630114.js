"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(653041), n(47120), n(789020), n(724458);
var i = n(392711),
  r = n.n(i),
  s = n(131704),
  o = n(680089),
  a = n(592125),
  l = n(480294),
  u = n(580005),
  _ = n(496675),
  d = n(9156),
  c = n(70956),
  E = n(630388),
  I = n(823379),
  T = n(789662),
  h = n(981631),
  S = n(526761);

function f(e, t, n, i, E) {
  if (t !== T.AR.UseGreyDot) return [{
    label: "Setting the guild to a white dot unread",
    apply: (e, t) => {
      N(e, t, !0)
    }
  }];
  let S = [],
    f = Object.values(a.Z.getMutableGuildChannelsForGuild(e.id)).filter(e => _.Z.can(h.Plq.VIEW_CHANNEL, e));
  return S.push(... function(e, t) {
    if (!(d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id))) return [];
    let n = [{
        label: "Unmuting the guild and marking it as read",
        apply: e => {
          e.muted = !1, e.mute_config = null
        },
        needsMarkedAsRead: !0
      }],
      i = t.filter(t => d.ZP.getChannelMessageNotifications(e.id, t.id) === h.bL.ALL_MESSAGES);
    return i.length > 0 && n.push({
      label: "Setting ".concat(i.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
      debug: i.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of i) A(e, t, n.id, e => {
          e.message_notifications = h.bL.ONLY_MENTIONS
        })
      }
    }), n
  }(e, f)), S.push(function(e) {
    if (d.ZP.getMessageNotifications(e.id) === h.bL.ALL_MESSAGES) return {
      label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
      apply: e => {
        e.message_notifications = h.bL.ONLY_MENTIONS
      }
    }
  }(e)), S.push(function() {
    return {
      label: "Setting the guild to a grey dot unread",
      apply: (e, t) => {
        N(e, t, !1)
      }
    }
  }()), S.push(... function(e) {
    let t = [],
      [n, i] = r()(e).filter(e => e.type === h.d4z.GUILD_ANNOUNCEMENT).partition(e => d.ZP.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && d.ZP.isChannelMuted(e.guild_id, e.parent_id)).value();
    return n.length > 0 && t.push({
      label: "Not touching ".concat(n.length, " announcement channels since they are muted"),
      debug: n.map(e => "\n    - #".concat(e.name)).join("")
    }), i.length > 0 && t.push({
      label: "Setting ".concat(i.length, " announcement channels to white-dot"),
      debug: i.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of i) m(e, t, n.id, !0)
      }
    }), t
  }(f)), S.push(... function(e) {
    let t = [],
      n = [];
    for (let t of e) d.ZP.isChannelMuted(t.guild_id, t.id) && t.isCategory() && !o.Z.isCollapsed(t.id) && n.push(t);
    return n.length > 0 && t.push({
      label: "Unmuting ".concat(n.length, " categories and setting to grey-dot"),
      debug: n.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let i of n) m(e, t, i.id, !1), A(e, t, i.id, e => {
          e.muted = !1, e.mute_config = null
        })
      }
    }), t
  }(f)), S.push(... function(e) {
    let t = [],
      n = [],
      i = [];
    return e.forEach(e => {
      if (d.ZP.isChannelMuted(e.guild_id, e.id)) return;
      let t = d.ZP.getChannelMessageNotifications(e.guild_id, e.id);
      t === h.bL.ALL_MESSAGES ? n.push(e) : t === h.bL.ONLY_MENTIONS && i.push(e)
    }), n.length > 0 && t.push({
      label: "Setting ".concat(n.length, " channels to white-dot since they were explicitly All Messages"),
      debug: n.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let i of n) m(e, t, i.id, !0)
      }
    }), i.length > 0 && t.push({
      label: "Setting ".concat(i.length, " channels to grey-dot since they were explicitly Mentions Only"),
      debug: i.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of i) m(e, t, n.id, !1)
      }
    }), t
  }(f)), l.Z.hasConsented(h.pjP.PERSONALIZATION) ? S.push(... function(e, t, n, i, s) {
    if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id)) return [];
    let o = new Set(t.map(e => e.id)),
      a = i.filter(e => o.has(e.channel_id)),
      l = r().keyBy(a, "channel_id"),
      u = Math.max(n.messages === T.XR.High ? s.frecency.yearMinOpensLargeServer : s.frecency.yearMinOpensSmallServer, a.reduce((e, t) => {
        var n;
        return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
      }, 0) * s.frecency.totalOpensPercent),
      _ = Math.max(s.frecency.monthMinOpens, a.reduce((e, t) => {
        var n;
        return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
      }, 0) * s.frecency.totalOpensPercent),
      c = [],
      E = [];
    t.forEach(e => {
      var t, n, i, r;
      let s = null !== (t = l[e.id]) && void 0 !== t ? t : {};
      Number(null !== (n = s.num_year_opens) && void 0 !== n ? n : 0) > u || Number(null !== (i = s.num_month_opens) && void 0 !== i ? i : 0) > _ ? c.push(e) : Number(null !== (r = s.num_three_month_opens) && void 0 !== r ? r : 0) > 2 && E.push(e)
    });
    let I = [];
    return c.length > 0 && I.push({
      label: "Setting ".concat(c.length, " channels to white-dot since they are recent and frequently viewed"),
      debug: c.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(l[e.id]), ")")).join(""),
      apply: (e, t) => {
        for (let n of c) m(e, t, n.id, !0)
      }
    }), E.length > 0 && I.push({
      label: "NOT setting ".concat(E.length, " channels to white-dot because they were only viewed a little."),
      debug: E.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(l[e.id]), ")")).join("")
    }), I
  }(e, f, n, i, E)) : S.push(... function(e, t) {
    if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id)) return [];
    let n = [],
      i = new Set(t.map(e => e.id)),
      r = Date.now() - c.Z.Millis.DAYS_30,
      o = u.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof s.Sf && i.has(e.id)).filter(e => {
        var t, n;
        let i = null !== (n = null === (t = u.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
        return 0 !== i.length && i[i.length - 1] >= r
      });
    return o.length > 0 && n.push({
      label: "Setting ".concat(o.length, " channels to white-dot since they are recent and frequently viewed"),
      debug: o.map(e => "\n    - #".concat(e.name)).join(""),
      apply: (e, t) => {
        for (let n of o) m(e, t, n.id, !0)
      }
    }), n
  }(e, f)), S.filter(I.lm)
}

function N(e, t, n) {
  var i, r;
  e.flags = (0, E.mB)(null !== (r = null !== (i = e.flags) && void 0 !== i ? i : t.flags) && void 0 !== r ? r : 0, S.vc.UNREADS_ALL_MESSAGES, n), e.flags = (0, E.mB)(e.flags, S.vc.UNREADS_ONLY_MENTIONS, !n)
}

function A(e, t, n, i) {
  var s, o, a, l;
  let u = null !== (a = null === (s = e.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== a ? a : {};
  i(u, null !== (l = null === (o = t.channel_overrides) || void 0 === o ? void 0 : o[n]) && void 0 !== l ? l : {}), !r().isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = u)
}

function m(e, t, n, i) {
  A(e, t, n, (e, t) => {
    var n, r;
    e.flags = (0, E.mB)(null !== (r = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== r ? r : 0, S.ic.UNREADS_ALL_MESSAGES, i), e.flags = (0, E.mB)(e.flags, S.ic.UNREADS_ONLY_MENTIONS, !i)
  })
}