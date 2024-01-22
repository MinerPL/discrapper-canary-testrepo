"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var r = n("37983"),
  a = n("884691"),
  i = n("77078"),
  l = n("390236"),
  o = n("292508"),
  u = n("383294"),
  s = n("913452"),
  d = n("533466"),
  c = n("49111"),
  p = n("268333");

function f(e) {
  let {
    windowKey: t,
    channel: n
  } = e;
  return (0, r.jsx)(o.default, {
    withTitleBar: !0,
    windowKey: t,
    title: n.name,
    channelId: n.id,
    contentClassName: p.popoutContent,
    children: (0, r.jsx)(l.default.Provider, {
      value: n.guild_id,
      children: (0, r.jsx)(d.default, {
        providedChannel: n
      })
    })
  })
}

function h(e, t) {
  let n = (0, s.useOpenInPopoutExperiment)(t),
    l = a.useCallback(() => {
      u.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, r.jsx)(f, {
        windowKey: t,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return n ? (0, r.jsx)(i.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => l()
  }) : null
}