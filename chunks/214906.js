"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var s = n("735250");
n("470079");
var a = n("913527"),
  l = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("777861"),
  u = n("569471"),
  d = n("346479"),
  c = n("776568"),
  f = n("689938");

function E(e) {
  let [t, n, a] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.isMuted(e.id), u.default.getMuteConfig(e.id), u.default.hasJoined(e.id)]), E = (0, o.useMutedUntilText)(n);

  function _(t) {
    d.default.setNotificationSettings(e, {
      muted: t
    })
  }
  return a ? t ? (0, s.jsx)(r.MenuItem, {
    id: "unmute-channel",
    label: e.isForumPost() ? f.default.Messages.UNMUTE_FORUM_POST : f.default.Messages.UNMUTE_THREAD,
    subtext: E,
    action: () => _(!1)
  }) : (0, s.jsx)(r.MenuItem, {
    id: "mute-channel",
    label: e.isForumPost() ? f.default.Messages.MUTE_FORUM_POST : f.default.Messages.MUTE_THREAD,
    action: () => _(!0),
    children: (0, c.getMuteTimes)().map(t => {
      let {
        value: n,
        label: a
      } = t;
      return (0, s.jsx)(r.MenuItem, {
        id: "".concat(n),
        label: a,
        action: () => (function(t) {
          let n = t > 0 ? l()().add(t, "second").toISOString() : null;
          d.default.setNotificationSettings(e, {
            muted: !0,
            mute_config: {
              selected_time_window: t,
              end_time: n
            }
          })
        })(n)
      }, n)
    })
  }) : (0, s.jsx)(r.MenuItem, {
    id: "mute-disabled",
    label: e.isForumPost() ? f.default.Messages.MUTE_FORUM_POST : f.default.Messages.MUTE_THREAD,
    disabled: !0
  })
}