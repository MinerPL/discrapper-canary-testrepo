"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983"),
  r = n("884691"),
  a = n("77078"),
  l = n("390236"),
  u = n("292508"),
  o = n("383294"),
  s = n("913452"),
  d = n("533466"),
  c = n("49111"),
  f = n("765479");

function h(e) {
  let {
    windowKey: t,
    channel: n
  } = e;
  return (0, i.jsx)(u.default, {
    withTitleBar: !0,
    windowKey: t,
    title: n.name,
    channelId: n.id,
    contentClassName: f.popoutContent,
    children: (0, i.jsx)(l.default.Provider, {
      value: n.guild_id,
      children: (0, i.jsx)(d.default, {
        providedChannel: n
      })
    })
  })
}

function p(e, t) {
  let n = (0, s.useOpenInPopoutExperiment)(t),
    l = r.useCallback(() => {
      o.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, i.jsx)(h, {
        windowKey: t,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return n ? (0, i.jsx)(a.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => l()
  }) : null
}