"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("574073"),
  r = n("780571"),
  o = n("497880"),
  u = n("93332"),
  d = n("93792");

function c(e) {
  let {
    message: t,
    channel: n,
    content: a,
    className: c,
    compact: E,
    popoutProps: f,
    hideTimestamp: _ = !1,
    withFooter: T = !1,
    ...I
  } = e, m = (0, i.default)(t);
  return (0, s.jsx)("div", {
    className: l({
      [d.withFooter]: T
    }, d.embedCard, {
      [d.compact]: E
    }, c),
    children: (0, s.jsx)(r.default, {
      ...I,
      className: l(d.messageContainer, {
        [d.compact]: E
      }),
      childrenMessageContent: (0, s.jsx)(o.default, {
        className: l(d.messageContent, {
          [d.compact]: E
        }),
        message: t,
        content: a
      }),
      childrenHeader: (0, s.jsx)(u.default, {
        message: t,
        channel: n,
        author: m,
        guildId: null == n ? void 0 : n.guild_id,
        compact: E,
        hideTimestamp: _,
        className: l(d.header, {
          [d.compact]: E
        }),
        ...null != f ? f : {}
      }),
      compact: E
    })
  })
}