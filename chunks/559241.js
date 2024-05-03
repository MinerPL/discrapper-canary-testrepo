"use strict";
n.r(t);
var i = n("592125");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
t.default = new class e {
  constructor() {
    r(this, "filterTagIds", null), r(this, "sortOrder", null), r(this, "layout", null), r(this, "setFilterTagIds", e => {
      this.filterTagIds = e
    }), r(this, "setSortOrder", e => {
      this.sortOrder = e
    }), r(this, "setLayout", e => {
      this.layout = e
    }), r(this, "getFilterTagIdsAnalytics", () => null != this.filterTagIds ? Array.from(this.filterTagIds) : []), r(this, "getSortOrderAnalytics", e => {
      var t, n;
      return null !== (n = this.sortOrder) && void 0 !== n ? n : null === (t = i.default.getChannel(e)) || void 0 === t ? void 0 : t.getDefaultSortOrder()
    }), r(this, "getLayoutAnalytics", e => {
      var t;
      let n = i.default.getChannel(e);
      return null !== (t = this.layout) && void 0 !== t ? t : null == n ? void 0 : n.getDefaultLayout()
    })
  }
}