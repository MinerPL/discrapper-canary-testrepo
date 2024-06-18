"use strict";
n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  i = n(314897),
  r = n(938475),
  o = n(499596),
  u = n(537135),
  c = n(689938),
  d = n(555066);

function m(e) {
  let {
    channel: t
  } = e, n = (0, s.e7)([i.default], () => i.default.getId()), m = (0, s.e7)([r.ZP], () => r.ZP.getVoiceStatesForChannel(t), [t]);
  return (0, l.jsx)(a.FormItem, {
    title: c.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
    className: d.modalContent,
    titleClassName: d.formItemTitle,
    children: (0, l.jsx)(u.Z, {
      children: (0, l.jsx)(o.Z, {
        channel: t,
        users: m.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== n
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