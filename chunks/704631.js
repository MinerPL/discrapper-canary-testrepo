"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("82950"),
  i = n("981631"),
  r = n("921944"),
  o = n("689938"),
  u = n("524094");

function d(e) {
  let {
    guild: t,
    markAsDismissed: d
  } = e;
  return (0, a.jsx)(l.default, {
    guild: t,
    onDismissed: () => d(r.ContentDismissActionType.UNKNOWN),
    onClick: function() {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "650233"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    },
    message: o.default.Messages.HUB_LINK_CHANNEL_NOTICE_BODY,
    cta: o.default.Messages.LEARN_MORE,
    trackingSource: i.ChannelNoticeCtaSources.HUB_LINK_NOTICE,
    type: i.ChannelNoticeTypes.HUB_LINK,
    image: u
  })
}