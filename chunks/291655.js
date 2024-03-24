"use strict";
E.r(t), E.d(t, {
  default: function() {
    return L
  }
});
var _ = E("37983"),
  s = E("884691"),
  T = E("414456"),
  a = E.n(T),
  n = E("634807"),
  A = E("780571"),
  u = E("39331"),
  I = E("596368"),
  i = E("227439"),
  l = E("5762"),
  L = s.memo(function(e) {
    var t;
    let {
      message: E,
      channel: s,
      compact: T,
      className: L,
      isGroupStart: o,
      hideSimpleEmbedContent: r = !0,
      disableInteraction: d
    } = e, N = (0, n.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = E.editedTimestamp) && void 0 !== t ? t : E.timestamp).valueOf()), {
      content: S
    } = (0, u.default)(E, {
      hideSimpleEmbedContent: r,
      allowList: N,
      allowHeading: N,
      allowLinks: !0,
      previewLinkTarget: !0
    });
    return (0, _.jsx)(A.default, {
      compact: T,
      className: a(L, {
        [l.message]: !0,
        [l.cozyMessage]: !T,
        [l.groupStart]: o
      }),
      childrenHeader: (0, i.default)({
        ...e,
        channel: s,
        guildId: void 0
      }),
      childrenMessageContent: (0, I.default)(e, S),
      disableInteraction: d
    })
  })