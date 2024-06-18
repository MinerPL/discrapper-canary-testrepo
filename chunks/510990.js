"use strict";
n.d(t, {
  J: function() {
    return a
  },
  V: function() {
    return l
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(476326),
  o = n(861990);

function a(e, t) {
  var n;
  r()(e.item.platform === s.ow.WEB, "Upload must be in the Web format");
  let i = (0, o.B)(e, t);
  return Promise.resolve({
    file: e.item.file,
    name: null !== (n = i.filename) && void 0 !== n ? n : ""
  })
}
async function l(e) {}