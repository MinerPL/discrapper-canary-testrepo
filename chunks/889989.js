"use strict";
n.d(t, {
  n: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(187753),
  s = n(596454),
  o = n(73346);

function a(e, t) {
  if (null != t) switch (t.type) {
    case r.T.STORE_ASSET:
      let n = (0, o._W)(e, t.store_asset_id);
      return (0, i.jsx)("img", {
        src: n,
        alt: "",
        className: "emoji"
      });
    case r.T.EMOJI:
      return (0, i.jsx)(s.Z, {
        emojiName: t.emoji
      })
  }
}