"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("739566"),
  r = n("998951"),
  o = n("113039"),
  u = n("778947"),
  d = n("655155");

function c(e) {
  let {
    message: t,
    channel: n,
    content: a,
    className: c,
    compact: f,
    popoutProps: E,
    hideTimestamp: _ = !1,
    withFooter: T = !1,
    ...m
  } = e, I = (0, i.default)(t);
  return (0, s.jsx)("div", {
    className: l()({
      [d.withFooter]: T
    }, d.embedCard, {
      [d.compact]: f
    }, c),
    children: (0, s.jsx)(r.default, {
      ...m,
      className: l()(d.messageContainer, {
        [d.compact]: f
      }),
      childrenMessageContent: (0, s.jsx)(o.default, {
        className: l()(d.__invalid_messageContent, {
          [d.compact]: f
        }),
        message: t,
        content: a
      }),
      childrenHeader: (0, s.jsx)(u.default, {
        message: t,
        channel: n,
        author: I,
        guildId: null == n ? void 0 : n.guild_id,
        compact: f,
        hideTimestamp: _,
        className: l()(d.header, {
          [d.compact]: f
        }),
        ...null != E ? E : {}
      }),
      compact: f
    })
  })
}