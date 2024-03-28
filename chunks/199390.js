"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("481060"),
  i = a("978139"),
  d = a("422871"),
  r = a("689938"),
  u = a("833790");
t.default = n.memo(function(e) {
  let {
    guildId: t,
    feedItemId: a,
    messages: o
  } = e, c = n.useRef([]), f = o.some(e => e.attachments.length > 0) ? 4 : 8, [m, h] = n.useState(), [g, E] = n.useState(), [_, I] = (0, i.default)(t, a);
  if (n.useLayoutEffect(() => {
      let e = 0;
      for (let [a, l] of c.current.entries()) {
        var t;
        if (null == l) continue;
        let n = parseFloat(null !== (t = window.getComputedStyle(l).getPropertyValue("line-height")) && void 0 !== t ? t : "0"),
          s = l.scrollHeight / n;
        if ((e += s) > f) {
          h(a), E(s - (e - f));
          break
        }
      }
    }, [o, f]), 0 === o.length) return null;
  let x = o[0].id;
  return (0, l.jsx)(l.Fragment, {
    children: o.map((t, a) => {
      if (null != m && a > m && !_) return null;
      let n = m === a,
        i = n && null != g ? function(e) {
          if (e >= 10) return u.clampLarge;
          if (e >= 4 && e < 10) return u.clampMed;
          if (e < 4) return u.clampSmall
        }(g) : null,
        f = n && null != i && !_;
      return (0, l.jsx)(d.GuildFeedMessage, {
        message: t,
        groupId: x,
        ...e,
        contentClassName: f ? i : void 0,
        children: f ? (0, l.jsx)(s.Clickable, {
          className: u.showMore,
          onClick: e => I(e, t),
          "aria-hidden": !0,
          children: r.default.Messages.GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE
        }) : null,
        ref: e => c.current[a] = e,
        hideHeader: 0 !== a,
        forceAddReactions: a === o.length - 1
      }, t.id)
    })
  })
})