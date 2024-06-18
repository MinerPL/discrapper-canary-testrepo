"use strict";
n.d(t, {
  Z: function() {
    return C
  }
}), n(724458), n(47120);
var l = n(735250),
  s = n(470079),
  a = n(512722),
  i = n.n(a),
  r = n(392711),
  o = n.n(r),
  u = n(856901),
  c = n(442837),
  d = n(481060),
  m = n(131951),
  E = n(537135),
  _ = n(176940),
  S = n(689938),
  h = n(378873),
  g = n(555066),
  Z = n(611273);

function C(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: n,
    onChangeAudioDevice: a
  } = e;
  i()(null != t, "Camera capture device cannot be null");
  let r = (0, _.Z)(),
    C = (0, c.e7)([m.Z], () => m.Z.getInputDevices()),
    [f, N] = s.useState(function(e, t, n) {
      if (null != t && null != n) {
        let l = t.find(t => t.id === e);
        if (null == l) return;
        let s = o().reduce(n, (e, t) => (0, u.stringSimilarity)(l.name, t.name) > (0, u.stringSimilarity)(l.name, e.name) ? t : e);
        if (null != s) return s.id
      }
    }(t.id, r, C));
  return null != f && a(f), (0, l.jsx)(s.Fragment, {
    children: (0, l.jsxs)(d.FormItem, {
      title: "Capture Device",
      className: g.modalContent,
      children: [(0, l.jsx)(d.FormItem, {
        className: Z.marginTop8,
        children: (0, l.jsxs)(E.Z, {
          children: [(0, l.jsx)("span", {
            className: h.ellipsisText,
            children: t.name
          }), (0, l.jsx)(d.Button, {
            className: h.changeButton,
            color: d.Button.Colors.PRIMARY,
            size: d.Button.Sizes.SMALL,
            onClick: n,
            children: S.Z.Messages.CHANGE
          })]
        })
      }), (0, l.jsx)(d.FormItem, {
        className: Z.marginTop8,
        title: S.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
        children: (0, l.jsx)(d.SingleSelect, {
          value: f,
          className: Z.__invalid_marginaTop8,
          onChange: e => {
            N(e), a(e)
          },
          options: o().map(C, e => {
            let {
              id: t,
              name: n
            } = e;
            return {
              value: t,
              label: n
            }
          })
        })
      })]
    })
  })
}