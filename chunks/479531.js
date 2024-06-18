"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(544891),
  r = n(981631),
  s = n(689938);
class o extends i.sX {
  constructor(e, t) {
    super(e, t, null != t ? s.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
      statusPageURL: r.yXt.STATUS,
      details: "".concat(t)
    }) : s.Z.Messages.FORM_ERROR_GENERIC.format({
      statusPageURL: r.yXt.STATUS
    }))
  }
}