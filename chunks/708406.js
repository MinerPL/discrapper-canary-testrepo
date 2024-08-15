n.d(t, {
  _: function() {
return i;
  }
});
var r = n(981631);

function i(e, t, n) {
  let i = null != t ? {
  [t]: 1
} : {},
{
  offset: a,
  limit: s,
  results: o,
  totalResults: l
} = null != n ? n : {};
  return {
search_type: r.aib.GIF,
load_id: e,
limit: s,
offset: a,
page: null != s && null != a ? Math.floor(a / s) + 1 : 1,
total_results: l,
page_results: null != o ? o.length : null,
num_modifiers: Object.keys(i).length,
modifiers: i
  };
}