"use strict";
t.r(n), t.d(n, {
  PlayStationLinkSuccess: function() {
    return r
  }
});
var i = t("735250");
t("470079");
var o = t("376340"),
  s = t("689938"),
  a = t("290661");

function r(e) {
  let {
    onClose: n
  } = e;
  return (0, i.jsx)(o.TwoWayLinkSuccess, {
    img: (0, i.jsx)("img", {
      src: a,
      width: "241 ",
      height: "118",
      alt: ""
    }),
    title: s.default.Messages.PS_LINK_SUCCESS_TITLE,
    body: s.default.Messages.PS_LINK_SUCCESS_BODY,
    onClose: n
  })
}