"use strict";
n.d(t, {
  A: function() {
    return E
  },
  q: function() {
    return d
  }
}), n(724458);
var i = n(392711),
  r = n.n(i),
  s = n(131704),
  o = n(592125),
  a = n(580005),
  l = n(650774),
  u = n(70956),
  _ = n(789662);

function d(e, t, n, i, r) {
  var s, a, u, d;
  let E = o.Z.getMutableGuildChannelsForGuild(e.id),
    I = i.filter(e => e.channel_id in E),
    T = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {},
    h = l.Z.getMemberCount(e.id),
    S = c("year", i, I, e => {
      var t;
      return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
    }),
    f = c("one month", i, I, e => {
      var t;
      return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
    }),
    N = c("three month", i, I, e => {
      var t;
      return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
    }),
    A = [f, N, c("six month", i, I, e => {
      var t;
      return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
    }), S],
    m = 0,
    O = 0;
  I.forEach(e => {
    var t;
    m++, O += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
  });
  let R = "\n**Pain**:\n- Everyones: ".concat(_.XR[null !== (a = T.everyones) && void 0 !== a ? a : 0], "\n- Messages: ").concat(_.XR[null !== (u = T.messages) && void 0 !== u ? u : 0], "\n- Size: ").concat(h, "\n**Remote**:\n- Channels: ").concat(m, "\n- AllVisits: ").concat(A.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(A.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(A.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(A.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(O, "\n"),
    C = N.guildOpens >= .02 * N.totalOpensAcrossAllServers,
    p = (null !== (d = S.guildOpens) && void 0 !== d ? d : 0) > 0;
  if (T.messages === _.XR.High) {
    if (!r) return [_.AR.UseGreyDot, C, "UseGreyDot" + R];
    if (!C && p) return [_.AR.UseGreyDot, C, "UseGreyDot" + R]
  }
  return [_.AR.KeepAsIs, C, "KeepAsIs" + R]
}

function c(e, t, n, i) {
  let s = t.reduce((e, t) => e + i(t), 0),
    o = n.reduce((e, t) => e + i(t), 0),
    a = r().sortBy(n, i).reverse()[0],
    l = null == a ? 0 : i(a),
    u = (l / o * 100).toFixed(1);
  return {
    label: e,
    totalOpensAcrossAllServers: s,
    guildOpens: o,
    biggestChannel: l,
    biggestChannelFormatted: u
  }
}

function E(e, t) {
  var n, i;
  let r = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
    o = null !== (i = l.Z.getMemberCount(e.id)) && void 0 !== i ? i : 0,
    d = Date.now() - u.Z.Millis.DAYS_30,
    c = a.Z.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof s.Sf && t.guild_id === e.id),
    E = c.filter(e => {
      var t, n;
      let i = null !== (n = null === (t = a.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
      return 0 !== i.length && i[i.length - 1] >= d
    }),
    I = E.length >= 5,
    T = c.reduce((e, t) => {
      var n, i;
      return e + (null !== (i = null === (n = a.Z.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== i ? i : 0)
    }, 0),
    h = "\n- **Local**:\n    - Guild Visits: ".concat(T, "\n    - Channels: ").concat(c.length, "\n    - Recent Channels: ").concat(E.length, "\n");
  return r.messages === _.XR.High || o > 1e3 ? [_.AR.UseGreyDot, I, "SuggestGreyDot" + h] : [_.AR.KeepAsIs, I, "KeepAsIs" + h]
}