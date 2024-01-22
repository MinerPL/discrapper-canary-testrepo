"use strict";
let i, s;
n.r(t), n.d(t, {
  updateIsInTabsUI: function() {
    return u
  }
});
var r = n("411916"),
  a = n("827032"),
  o = n("599110"),
  l = n("286235");

function u(e) {
  i !== e && (i = e, s = e, ! function() {
    let e = i ? s ? r.DesignIds.DESIGN_TABS_IA : r.DesignIds.DESIGN_IA : r.DesignIds.CLASSIC_IA;
    o.default.extendSuperProperties({
      design_id: e
    }), a.addGlobalTag("design_id", e), l.default.setTags({
      design_id: "".concat(e)
    })
  }())
}