"use strict";
t.d(s, {
  Z: function() {
    return d
  },
  r: function() {
    return c
  }
}), t(47120), t(653041), t(724458);
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(447003),
  a = t(984933),
  r = t(512508),
  o = t(981631);

function c(e, s) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return (0, i.Wu)([a.ZP], () => {
    let i = a.ZP.getChannels(e)[o.d4z.GUILD_CATEGORY],
      c = [...a.ZP.getChannels(e)[a.sH], ...a.ZP.getChannels(e)[a.Zb]],
      d = [],
      u = {};
    return i.forEach(e => {
      let {
        channel: s,
        comparator: t
      } = e;
      "null" !== s.id && (u[s.id] = [], d.push({
        channel: s,
        comparator: t
      }))
    }), c.forEach(e => {
      let {
        channel: i,
        comparator: a
      } = e;
      if (!(i.isThread() || s.has(i.id) || i.isGuildStageVoice() && !n || !t && (0, l.Z)(i))) null == i.parent_id ? d.push({
        channel: i,
        comparator: a
      }) : (null == u[i.parent_id] && (u[i.parent_id] = []), u[i.parent_id].push({
        channel: i,
        comparator: a
      }))
    }), d.sort((e, s) => {
      let {
        comparator: t,
        channel: n
      } = e, {
        comparator: i,
        channel: l
      } = s;
      return n.isCategory() && !l.isCategory() ? 1 : !n.isCategory() && l.isCategory() ? -1 : i - t
    }).reduce((e, t) => {
      let {
        channel: n
      } = t;
      if (n.isGuildStageVoice() || n.isThread() || s.has(n.id)) return e;
      e.push((0, r.PM)(n).row);
      let i = u[n.id];
      return null != i && i.length > 0 && i.forEach(s => {
        let {
          channel: t
        } = s;
        e.push((0, r.PM)(t).row)
      }), e
    }, [])
  }, [e, t, n, s])
}

function d(e) {
  let {
    guildId: s,
    selectedChannelIds: t,
    onChange: i,
    placeholder: l,
    includeRoleRestrictedPrivateChannels: a = !1,
    includeStageVoiceChannels: o = !1,
    helperText: d,
    className: u
  } = e, E = c(s, t, a, o);
  return (0, n.jsx)(r.ZP, {
    channelRows: E,
    guildId: s,
    selectedChannelIds: t,
    onChange: (e, s) => i(e),
    placeholder: l,
    helperText: d,
    className: u
  })
}