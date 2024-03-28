"use strict";
s.r(t);
var E = s("735250"),
  _ = s("470079"),
  a = s("803997"),
  n = s.n(a),
  T = s("628238"),
  i = s("998951"),
  u = s("25015"),
  A = s("963550"),
  l = s("845080"),
  I = s("264558");
t.default = _.memo(function(e) {
  var t;
  let {
    message: s,
    channel: _,
    compact: a,
    className: r,
    isGroupStart: o,
    hideSimpleEmbedContent: L = !0,
    disableInteraction: d
  } = e, N = (0, T.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), {
    content: S
  } = (0, u.default)(s, {
    hideSimpleEmbedContent: L,
    allowList: N,
    allowHeading: N,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, E.jsx)(i.default, {
    compact: a,
    className: n()(r, {
      [I.message]: !0,
      [I.cozyMessage]: !a,
      [I.groupStart]: o
    }),
    childrenHeader: (0, l.default)({
      ...e,
      channel: _,
      guildId: void 0
    }),
    childrenMessageContent: (0, A.default)(e, S),
    disableInteraction: d
  })
})