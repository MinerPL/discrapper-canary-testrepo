"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("536402"),
  i = a("442837"),
  d = a("823379"),
  r = a("276438"),
  u = a("642101"),
  o = a("820324"),
  c = a("906177"),
  f = a("492792"),
  m = a("233897"),
  h = a("2046");
t.default = n.memo(function(e) {
  let {
    guildId: t,
    itemId: a,
    scrollerHeight: g,
    scrollerRef: E,
    showFeedback: _,
    setOnDismissedFeedback: I
  } = e, [x, S, v] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.getItem(t, a), u.default.getIsItemHiding(t, a), u.default.getIsItemHidden(t, a)]), C = n.useRef(null);
  if (n.useEffect(() => {
      var e;
      let l = C.current;
      if (null == l || null == g) {
        (0, r.markGuildFeedItemAsUnseen)(t, a, Date.now());
        return
      }
      let n = l.clientHeight,
        s = null === (e = E.current) || void 0 === e ? void 0 : e.getScrollerNode();
      if (null == s) return;
      let i = Math.min(.5, .5 * g / n),
        d = new IntersectionObserver(e => (function(e, t, a) {
          for (let l of a) {
            let a = l.target.dataset.itemId;
            if (null == a) return;
            let n = Date.now();
            l.intersectionRatio >= t ? (0, r.markGuildFeedItemAsSeen)(e, a, n) : (0, r.markGuildFeedItemAsUnseen)(e, a, n)
          }
        })(t, i, e), {
          root: s,
          rootMargin: "0px 100000px 0px 100000px",
          threshold: i
        });
      return d.observe(l), () => {
        d.disconnect()
      }
    }, [a, t, E, g, S, v]), null == x || v) return null;
  if (S) return (0, l.jsx)(c.default, {
    guildId: t,
    feedItem: x
  });
  switch (x.type) {
    case s.GuildFeedItemTypes.FORUM_POST:
      return (0, l.jsx)(h.default, {
        ref: C,
        guildId: t,
        postItem: x,
        showFeedback: _,
        setOnDismissedFeedback: I
      });
    case s.GuildFeedItemTypes.MESSAGE:
      return (0, l.jsx)(m.default, {
        ref: C,
        guildId: t,
        messageItem: x,
        showFeedback: _,
        setOnDismissedFeedback: I
      });
    case s.GuildFeedItemTypes.MESSAGE_BUNDLE:
      return (0, l.jsx)(f.default, {
        ref: C,
        guildId: t,
        messageBundleItem: x,
        showFeedback: _,
        setOnDismissedFeedback: I
      });
    case s.GuildFeedItemTypes.CONVERSATION:
      return (0, l.jsx)(o.default, {
        ref: C,
        guildId: t,
        conversationItem: x,
        showFeedback: _,
        setOnDismissedFeedback: I
      });
    default:
      (0, d.assertNever)(x)
  }
})