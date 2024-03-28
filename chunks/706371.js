"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  },
  useChannelRows: function() {
    return d
  }
}), s("47120"), s("653041"), s("724458");
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("447003"),
  i = s("984933"),
  r = s("512508"),
  o = s("981631");

function d(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return (0, l.useStateFromStoresArray)([i.default], () => {
    let l = i.default.getChannels(e)[o.ChannelTypes.GUILD_CATEGORY],
      d = [...i.default.getChannels(e)[i.GUILD_SELECTABLE_CHANNELS_KEY], ...i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY]],
      u = [],
      c = {};
    return l.forEach(e => {
      let {
        channel: t,
        comparator: s
      } = e;
      "null" !== t.id && (c[t.id] = [], u.push({
        channel: t,
        comparator: s
      }))
    }), d.forEach(e => {
      let {
        channel: l,
        comparator: i
      } = e;
      if (!(l.isThread() || t.has(l.id) || l.isGuildStageVoice() && !a)) !(!s && (0, n.default)(l)) && (null == l.parent_id ? u.push({
        channel: l,
        comparator: i
      }) : (null == c[l.parent_id] && (c[l.parent_id] = []), c[l.parent_id].push({
        channel: l,
        comparator: i
      })))
    }), u.sort((e, t) => {
      let {
        comparator: s,
        channel: a
      } = e, {
        comparator: l,
        channel: n
      } = t;
      return a.isCategory() && !n.isCategory() ? 1 : !a.isCategory() && n.isCategory() ? -1 : l - s
    }).reduce((e, s) => {
      let {
        channel: a
      } = s;
      if (a.isGuildStageVoice() || a.isThread() || t.has(a.id)) return e;
      e.push((0, r.channelToPendingAddition)(a).row);
      let l = c[a.id];
      return null != l && l.length > 0 && l.forEach(t => {
        let {
          channel: s
        } = t;
        e.push((0, r.channelToPendingAddition)(s).row)
      }), e
    }, [])
  }, [e, s, a, t])
}

function u(e) {
  let {
    guildId: t,
    selectedChannelIds: s,
    onChange: l,
    placeholder: n,
    includeRoleRestrictedPrivateChannels: i = !1,
    includeStageVoiceChannels: o = !1,
    helperText: u,
    className: c
  } = e, E = d(t, s, i, o);
  return (0, a.jsx)(r.default, {
    channelRows: E,
    guildId: t,
    selectedChannelIds: s,
    onChange: (e, t) => l(e),
    placeholder: n,
    helperText: u,
    className: c
  })
}