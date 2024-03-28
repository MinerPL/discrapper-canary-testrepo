"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("846027"),
  r = s("131951"),
  o = s("285952"),
  d = s("153124"),
  u = s("36703"),
  c = s("689938"),
  S = s("794711");
let E = (0, d.uid)(),
  T = (0, d.uid)();

function _() {
  let {
    inputVolume: e,
    outputVolume: t
  } = (0, n.useStateFromStoresObject)([r.default], () => ({
    inputVolume: r.default.getInputVolume(),
    outputVolume: r.default.getOutputVolume()
  }));
  return (0, a.jsxs)(o.default, {
    className: "volume",
    children: [(0, a.jsxs)(o.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(l.FormTitle, {
        id: E,
        tag: l.FormTitleTags.H5,
        className: S.marginBottom4,
        children: c.default.Messages.FORM_LABEL_INPUT_VOLUME
      }), (0, a.jsx)(l.Slider, {
        initialValue: (0, u.amplitudeToPerceptual)(e),
        asValueChanges: e => i.default.setInputVolume((0, u.perceptualToAmplitude)(e)),
        "aria-labelledby": E
      })]
    }), (0, a.jsxs)(o.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(l.FormTitle, {
        id: T,
        tag: l.FormTitleTags.H5,
        className: S.marginBottom4,
        children: c.default.Messages.FORM_LABEL_OUTPUT_VOLUME
      }), (0, a.jsx)(l.Slider, {
        initialValue: (0, u.amplitudeToPerceptual)(t),
        maxValue: 200,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        asValueChanges: e => i.default.setOutputVolume((0, u.perceptualToAmplitude)(e)),
        "aria-labelledby": T
      })]
    })]
  })
}