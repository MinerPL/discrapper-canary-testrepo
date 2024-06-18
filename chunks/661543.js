"use strict";
n.d(t, {
  j: function() {
    return r
  }
});
var i = n(570140);

function r(e) {
  let {
    imageSrc: t,
    file: n,
    uploadType: r,
    guildId: s,
    isTryItOutFlow: o = !1
  } = e;
  i.Z.dispatch({
    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
    imageSrc: t,
    file: n,
    uploadType: r,
    guildId: s,
    isTryItOutFlow: o
  })
}