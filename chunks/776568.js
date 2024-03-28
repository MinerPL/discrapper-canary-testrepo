"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  },
  getMuteTimes: function() {
    return E
  }
}), n("47120");
var i = n("735250");
n("470079");
var a = n("913527"),
  s = n.n(a),
  l = n("442837"),
  u = n("481060"),
  o = n("211739"),
  d = n("92114"),
  r = n("777861"),
  S = n("9156"),
  _ = n("621600"),
  g = n("933557"),
  c = n("981631"),
  f = n("969943"),
  N = n("689938");
let E = () => [{
    value: f.MuteUntilSeconds.MINUTES_15,
    label: N.default.Messages.MUTE_DURATION_15_MINUTES
  }, {
    value: f.MuteUntilSeconds.HOURS_1,
    label: N.default.Messages.MUTE_DURATION_1_HOUR
  }, {
    value: f.MuteUntilSeconds.HOURS_3,
    label: N.default.Messages.MUTE_DURATION_3_HOURS
  }, {
    value: f.MuteUntilSeconds.HOURS_8,
    label: N.default.Messages.MUTE_DURATION_8_HOURS
  }, {
    value: f.MuteUntilSeconds.HOURS_24,
    label: N.default.Messages.MUTE_DURATION_24_HOURS
  }, {
    value: f.MuteUntilSeconds.ALWAYS,
    label: N.default.Messages.MUTE_DURATION_ALWAYS
  }],
  M = e => {
    let t = e > 0 ? s()().add(e, "second").toISOString() : null;
    return {
      muted: !0,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function L(e, t) {
  let [n, a] = (0, l.useStateFromStoresArray)([S.default], () => [S.default.isChannelMuted(e.guild_id, e.id), S.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, r.useMutedUntilText)(a), f = (0, g.default)(e, !0);

  function L(t) {
    t && e.type === c.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, _.NotificationLabel.muted(t))
  }
  let O = N.default.Messages.MUTE_CHANNEL_GENERIC,
    A = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
    case c.ChannelTypes.GUILD_CATEGORY:
      O = N.default.Messages.MUTE_CATEGORY, A = N.default.Messages.UNMUTE_CATEGORY;
      break;
    case c.ChannelTypes.GROUP_DM:
      O = N.default.Messages.MUTE_CONVERSATION, A = N.default.Messages.UNMUTE_CONVERSATION;
      break;
    case c.ChannelTypes.DM:
      O = N.default.Messages.MUTE_CHANNEL.format({
        name: f
      }), A = N.default.Messages.UNMUTE_CHANNEL.format({
        name: f
      });
      break;
    default:
      O = N.default.Messages.MUTE_CHANNEL_GENERIC, A = N.default.Messages.UNMUTE_CHANNEL_GENERIC
  }
  return n ? (0, i.jsx)(u.MenuItem, {
    id: "unmute-channel",
    label: A,
    subtext: s,
    action: () => L(!1)
  }) : (0, i.jsx)(u.MenuItem, {
    id: "mute-channel",
    label: O,
    action: () => L(!0),
    children: E().map(n => {
      let {
        value: a,
        label: s
      } = n;
      return (0, i.jsx)(u.MenuItem, {
        id: "".concat(a),
        label: s,
        action: () => (function(n) {
          e.type === c.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
          let i = M(n);
          d.default.updateChannelOverrideSettings(e.guild_id, e.id, i, _.NotificationLabels.Muted, t)
        })(a)
      }, a)
    })
  })
}