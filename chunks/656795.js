"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(735250);
n(470079);
var r = n(650886);

function s(e) {
  let {
    disabled: t,
    deviceId: n,
    width: s,
    height: o
  } = e;
  return t ? (0, i.jsx)("div", {
    className: "media-engine-video",
    style: {
      width: s,
      height: o
    }
  }) : (0, i.jsx)(r.Z, {
    streamId: n,
    style: {
      width: s,
      height: o
    }
  })
}
s.defaultProps = {
  disabled: !1,
  width: 320,
  height: 180
}