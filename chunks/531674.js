"use strict";
n.r(t), n.d(t, {
  getMuteTimes: function() {
    return T
  },
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983");
n("884691");
var i = n("866227"),
  l = n.n(i),
  u = n("446674"),
  s = n("77078"),
  o = n("820542"),
  r = n("519705"),
  d = n("319165"),
  c = n("282109"),
  f = n("34676"),
  E = n("679653"),
  _ = n("49111"),
  S = n("468200"),
  N = n("782340");
let T = () => [{
    value: S.MuteUntilSeconds.MINUTES_15,
    label: N.default.Messages.MUTE_DURATION_15_MINUTES
  }, {
    value: S.MuteUntilSeconds.HOURS_1,
    label: N.default.Messages.MUTE_DURATION_1_HOUR
  }, {
    value: S.MuteUntilSeconds.HOURS_3,
    label: N.default.Messages.MUTE_DURATION_3_HOURS
  }, {
    value: S.MuteUntilSeconds.HOURS_8,
    label: N.default.Messages.MUTE_DURATION_8_HOURS
  }, {
    value: S.MuteUntilSeconds.HOURS_24,
    label: N.default.Messages.MUTE_DURATION_24_HOURS
  }, {
    value: S.MuteUntilSeconds.ALWAYS,
    label: N.default.Messages.MUTE_DURATION_ALWAYS
  }],
  g = e => {
    let t = e > 0 ? l().add(e, "second").toISOString() : null;
    return {
      muted: !0,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function C(e, t) {
  let [n, i] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, d.useMutedUntilText)(i), S = (0, E.default)(e, !0);

  function C(t) {
    t && e.type === _.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, f.NotificationLabel.muted(t))
  }
  let A = N.default.Messages.MUTE_CHANNEL_GENERIC,
    M = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
    case _.ChannelTypes.GUILD_CATEGORY:
      A = N.default.Messages.MUTE_CATEGORY, M = N.default.Messages.UNMUTE_CATEGORY;
      break;
    case _.ChannelTypes.GROUP_DM:
      A = N.default.Messages.MUTE_CONVERSATION, M = N.default.Messages.UNMUTE_CONVERSATION;
      break;
    case _.ChannelTypes.DM:
      A = N.default.Messages.MUTE_CHANNEL.format({
        name: S
      }), M = N.default.Messages.UNMUTE_CHANNEL.format({
        name: S
      });
      break;
    default:
      A = N.default.Messages.MUTE_CHANNEL_GENERIC, M = N.default.Messages.UNMUTE_CHANNEL_GENERIC
  }
  return n ? (0, a.jsx)(s.MenuItem, {
    id: "unmute-channel",
    label: M,
    subtext: l,
    action: () => C(!1)
  }) : (0, a.jsx)(s.MenuItem, {
    id: "mute-channel",
    label: A,
    action: () => C(!0),
    children: T().map(n => {
      let {
        value: i,
        label: l
      } = n;
      return (0, a.jsx)(s.MenuItem, {
        id: "".concat(i),
        label: l,
        action: () => (function(n) {
          e.type === _.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
          let a = g(n);
          r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, f.NotificationLabels.Muted, t)
        })(i)
      }, i)
    })
  })
}