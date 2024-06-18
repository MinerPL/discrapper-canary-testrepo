"use strict";
n.d(t, {
  _: function() {
    return r
  }
});
var i = n(981631);

function r(e, t, n) {
  let r = null != t ? {
      [t]: 1
    } : {},
    {
      offset: s,
      limit: o,
      results: a,
      totalResults: l
    } = null != n ? n : {};
  return {
    search_type: i.aib.GIF,
    load_id: e,
    limit: o,
    offset: s,
    page: null != o && null != s ? Math.floor(s / o) + 1 : 1,
    total_results: l,
    page_results: null != a ? a.length : null,
    num_modifiers: Object.keys(r).length,
    modifiers: r
  }
}