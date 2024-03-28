"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("869765"),
  r = n("699516"),
  o = n("512665"),
  u = n("937889"),
  d = n("739566"),
  c = n("981631");
let f = a.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: c,
    compact: f = !1
  } = e, E = c.state === i.ReferencedMessageState.LOADED ? c.message : void 0, _ = a.useMemo(() => (null == E ? void 0 : E.content) != null && "" !== E.content ? (0, u.default)(E, {
    formatInline: !0
  }).content : null, [E]), T = (0, l.useStateFromStores)([r.default], () => null != E && r.default.isBlocked(E.author.id), [E]), m = (0, d.useNullableMessageAuthor)(E), I = (0, d.useNullableMessageAuthor)(t);
  return (0, s.jsx)(o.default, {
    repliedAuthor: m,
    baseAuthor: I,
    baseMessage: t,
    channel: n,
    referencedMessage: c,
    content: _,
    compact: f,
    isReplyAuthorBlocked: T
  })
});

function E(e, t, n, a, l) {
  return e.type !== c.MessageTypes.REPLY || null == n ? null : (0, s.jsx)(f, {
    baseMessage: e,
    channel: t,
    referencedMessage: a,
    compact: l
  })
}