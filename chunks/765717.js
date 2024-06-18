"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(266067),
  s = n(990547),
  o = n(213609);

function a(e) {
  var t;
  let {
    impressionName: n,
    impressionProperties: a,
    disableTrack: l,
    ...u
  } = e, _ = a;
  return "function" == typeof _ && (_ = _(u)), (0, o.Z)({
    type: s.ImpressionTypes.PAGE,
    name: n,
    properties: _
  }, {
    disableTrack: l
  }, [null === (t = u.location) || void 0 === t ? void 0 : t.pathname]), (0, i.jsx)(r.AW, {
    ...u
  })
}