"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("481060"),
  l = n("372900"),
  u = n("238246"),
  o = n("788983"),
  s = n("207035"),
  d = n("823748"),
  c = n("981631"),
  f = n("775559");

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