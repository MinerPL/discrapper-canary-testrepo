"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("592125"),
  u = n("938475"),
  d = n("823379"),
  c = n("734190"),
  f = n("689938"),
  h = n("52645");
t.default = a.memo(function(e) {
  let {
    channel: t,
    selectedChannel: n,
    selectedVoiceChannelId: a,
    sortedThreadIds: s,
    withGuildIcon: m
  } = e, C = (0, r.useStateFromStoresArray)([o.default], () => s.map(e => o.default.getChannel(e)).filter(d.isNotNullish), [s]), p = (0, r.useStateFromStores)([u.default], () => {
    let e = C[C.length - 1];
    if (null == e) return 0;
    let t = u.default.getVoiceStates(e.guild_id)[e.id];
    return null == t || 0 === t.length ? 0 : a !== e.id ? 40 : 32 * t.length + 8
  });
  return (0, l.jsx)("li", {
    className: h.container,
    children: (0, l.jsxs)("ul", {
      role: "group",
      "aria-label": f.default.Messages.THREAD_GROUP_A11Y_LABEL.format({
        channelName: t.name
      }),
      children: [(0, l.jsx)("div", {
        className: i()(h.spineBorder, {
          [h.spineBorderWithGuildIcon]: m
        }),
        style: {
          bottom: 24 + p
        }
      }), C.map((e, t) => (0, l.jsx)(c.default, {
        thread: e,
        isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
        isSelectedVoice: a === e.id,
        isLast: t === C.length - 1,
        withGuildIcon: m
      }, e.id))]
    })
  })
})