"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("724458"), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("512722"),
  i = l.n(n),
  r = l("392711"),
  u = l.n(r),
  o = l("856901"),
  d = l("442837"),
  c = l("481060"),
  f = l("131951"),
  m = l("537135"),
  S = l("176940"),
  E = l("689938"),
  C = l("981213"),
  _ = l("223318"),
  g = l("794711");

function N(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: l,
    onChangeAudioDevice: n
  } = e;
  i()(null != t, "Camera capture device cannot be null");
  let r = (0, S.default)(),
    N = (0, d.useStateFromStores)([f.default], () => f.default.getInputDevices()),
    [h, x] = s.useState(function(e, t, l) {
      if (null != t && null != l) {
        let a = t.find(t => t.id === e);
        if (null == a) return;
        let s = u().reduce(l, (e, t) => (0, o.stringSimilarity)(a.name, t.name) > (0, o.stringSimilarity)(a.name, e.name) ? t : e);
        if (null != s) return s.id
      }
    }(t.id, r, N));
  return null != h && n(h), (0, a.jsx)(s.Fragment, {
    children: (0, a.jsxs)(c.FormItem, {
      title: "Capture Device",
      className: _.modalContent,
      children: [(0, a.jsx)(c.FormItem, {
        className: g.marginTop8,
        children: (0, a.jsxs)(m.default, {
          children: [(0, a.jsx)("span", {
            className: C.ellipsisText,
            children: t.name
          }), (0, a.jsx)(c.Button, {
            className: C.changeButton,
            color: c.Button.Colors.PRIMARY,
            size: c.Button.Sizes.SMALL,
            onClick: l,
            children: E.default.Messages.CHANGE
          })]
        })
      }), (0, a.jsx)(c.FormItem, {
        className: g.marginTop8,
        title: E.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
        children: (0, a.jsx)(c.SingleSelect, {
          value: h,
          className: g.__invalid_marginaTop8,
          onChange: e => {
            x(e), n(e)
          },
          options: u().map(N, e => {
            let {
              id: t,
              name: l
            } = e;
            return {
              value: t,
              label: l
            }
          })
        })
      })]
    })
  })
}