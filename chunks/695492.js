"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("607187"),
  i = n("112560"),
  r = n("981631"),
  o = n("689938"),
  u = n("616981"),
  d = n("800350");

function c(e) {
  let {
    channel: t,
    guild: c,
    width: f,
    inPopout: h
  } = e;
  return (0, a.jsx)(s.default, {
    className: u.root,
    children: (0, a.jsx)(i.default, {
      artURL: d,
      size: (0, i.getSizeForWidth)(f),
      header: o.default.Messages.STREAM_SINGLE_PERSON_BODY,
      onCTAClick: () => (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: c,
          channel: t,
          source: r.InstantInviteSources.CHANNEL_CALL
        })
      }, {
        contextKey: h ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
      }),
      callToAction: o.default.Messages.INSTANT_INVITE
    })
  })
}