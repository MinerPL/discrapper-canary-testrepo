"use strict";
t.r(n), t.d(n, {
  default: function() {
    return h
  }
});
var u = t("735250"),
  l = t("470079"),
  a = t("481060"),
  o = t("372900"),
  d = t("238246"),
  i = t("788983"),
  s = t("207035"),
  r = t("823748"),
  c = t("981631"),
  f = t("96319");

function p(e) {
  let {
    windowKey: n,
    channel: t
  } = e;
  return (0, u.jsx)(d.default, {
    withTitleBar: !0,
    windowKey: n,
    title: t.name,
    channelId: t.id,
    contentClassName: f.popoutContent,
    children: (0, u.jsx)(o.default.Provider, {
      value: t.guild_id,
      children: (0, u.jsx)(r.default, {
        providedChannel: t
      })
    })
  })
}

function h(e, n) {
  let t = (0, s.useOpenInPopoutExperiment)(n),
    o = l.useCallback(() => {
      i.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), n => (0, u.jsx)(p, {
        windowKey: n,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return t ? (0, u.jsx)(a.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => o()
  }) : null
}