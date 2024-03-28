"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("481060"),
  r = s("208049"),
  o = s("242291"),
  d = s("153124"),
  u = s("63063"),
  c = s("36703"),
  S = s("981631"),
  E = s("689938"),
  T = s("792677");
let _ = (0, d.uid)();

function f() {
  let e = (0, o.getAmplitudinalSoundboardVolume)();
  return (0, a.jsxs)("div", {
    className: l()(T.soundboardRow),
    children: [(0, a.jsxs)("div", {
      className: l()(T.soundboardColumn, T.leftColumn),
      children: [(0, a.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H5,
        className: T.soundboardTitle,
        children: E.default.Messages.USER_SETTINGS_SOUNDBOARD
      }), (0, a.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: E.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME_DESCRIPTION_WITH_LINK.format({
          helpCenterArticle: u.default.getArticleURL(S.HelpdeskArticles.SOUNDBOARD)
        })
      })]
    }), (0, a.jsxs)("div", {
      className: l()(T.soundboardColumn, T.__invalid_rightColumn),
      children: [(0, a.jsx)(i.FormTitle, {
        id: _,
        tag: i.FormTitleTags.H5,
        className: T.soundboardSubtitle,
        children: E.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
      }), (0, a.jsx)(i.Slider, {
        initialValue: (0, c.amplitudeToPerceptual)(e),
        maxValue: 100,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        asValueChanges: function(t) {
          e = (0, c.perceptualToAmplitude)(t), (0, r.updateUserSoundboardVolume)(e)
        },
        "aria-labelledby": _
      })]
    })]
  })
}