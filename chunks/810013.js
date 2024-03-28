"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("735250");
l("470079");
var s = l("442837"),
  n = l("481060"),
  i = l("314897"),
  r = l("938475"),
  u = l("499596"),
  o = l("537135"),
  d = l("689938"),
  c = l("223318");

function f(e) {
  let {
    channel: t
  } = e, l = (0, s.useStateFromStores)([i.default], () => i.default.getId()), f = (0, s.useStateFromStores)([r.default], () => r.default.getVoiceStatesForChannel(t), [t]);
  return (0, a.jsx)(n.FormItem, {
    title: d.default.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
    className: c.modalContent,
    titleClassName: c.formItemTitle,
    children: (0, a.jsx)(o.default, {
      children: (0, a.jsx)(u.default, {
        channel: t,
        users: f.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== l
        }).map(e => {
          let {
            user: t
          } = e;
          return t
        })
      })
    })
  })
}