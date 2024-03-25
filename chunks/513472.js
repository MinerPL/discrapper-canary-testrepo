"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var l = n("866227"),
  s = n.n(l),
  i = n("446674"),
  r = n("77078"),
  o = n("519705"),
  u = n("531674"),
  d = n("319165"),
  c = n("282109"),
  f = n("34676"),
  h = n("782340");

function E(e, t) {
  let n = null == e ? void 0 : e.id,
    {
      muted: l,
      muteConfig: E
    } = (0, i.useStateFromStoresObject)([c.default], () => ({
      muted: null != n ? c.default.isMuted(n) : void 0,
      muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
    }), [n]),
    m = (0, d.useMutedUntilText)(E);
  return null == n ? null : l ? (0, a.jsx)(r.MenuItem, {
    id: "unmute-guild",
    label: h.default.Messages.UNMUTE_SERVER,
    subtext: m,
    action: () => o.default.updateGuildNotificationSettings(n, {
      muted: !1
    }, f.NotificationLabels.Unmuted)
  }) : (0, a.jsx)(r.MenuItem, {
    id: "mute-guild",
    label: h.default.Messages.MUTE_SERVER,
    action: () => o.default.updateGuildNotificationSettings(n, {
      muted: !0
    }, f.NotificationLabels.Muted),
    children: (0, u.getMuteTimes)().map(e => {
      let {
        value: l,
        label: i
      } = e;
      return (0, a.jsx)(r.MenuItem, {
        id: "".concat(l),
        label: i,
        action: () => (function(e) {
          if (null == n) return;
          let a = e > 0 ? s().add(e, "second").toISOString() : null;
          o.default.updateGuildNotificationSettings(n, {
            muted: !0,
            mute_config: {
              selected_time_window: e,
              end_time: a
            }
          }, f.NotificationLabels.Muted, t)
        })(l)
      }, l)
    })
  })
}