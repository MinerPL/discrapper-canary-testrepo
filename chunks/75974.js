"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("808653"), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("627445"),
  r = l.n(s),
  i = l("917351"),
  u = l.n(i),
  o = l("268258"),
  d = l("446674"),
  c = l("77078"),
  f = l("42887"),
  m = l("326620"),
  S = l("32649"),
  C = l("782340"),
  E = l("809213"),
  h = l("961523"),
  N = l("890957");

function g(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: l,
    onChangeAudioDevice: s
  } = e;
  r(null != t, "Camera capture device cannot be null");
  let i = (0, S.default)(),
    g = (0, d.useStateFromStores)([f.default], () => f.default.getInputDevices()),
    [_, p] = a.useState(function(e, t, l) {
      if (null != t && null != l) {
        let n = t.find(t => t.id === e);
        if (null == n) return;
        let a = u.reduce(l, (e, t) => (0, o.stringSimilarity)(n.name, t.name) > (0, o.stringSimilarity)(n.name, e.name) ? t : e);
        if (null != a) return a.id
      }
    }(t.id, i, g));
  return null != _ && s(_), (0, n.jsx)(a.Fragment, {
    children: (0, n.jsxs)(c.FormItem, {
      title: "Capture Device",
      className: h.modalContent,
      children: [(0, n.jsx)(c.FormItem, {
        className: N.marginTop8,
        children: (0, n.jsxs)(m.default, {
          children: [(0, n.jsx)("span", {
            className: E.ellipsisText,
            children: t.name
          }), (0, n.jsx)(c.Button, {
            className: E.changeButton,
            color: c.Button.Colors.PRIMARY,
            size: c.Button.Sizes.SMALL,
            onClick: l,
            children: C.default.Messages.CHANGE
          })]
        })
      }), (0, n.jsx)(c.FormItem, {
        className: N.marginTop8,
        title: C.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
        children: (0, n.jsx)(c.SingleSelect, {
          value: _,
          className: N.marginaTop8,
          onChange: e => {
            p(e), s(e)
          },
          options: u.map(g, e => {
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