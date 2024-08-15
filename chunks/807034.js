
function r() {
  return {
get: (e, t, n = {
  miss: () => Promise.resolve()
}) => t().then(e => Promise.all([
  e,
  n.miss(e)
])).then(([e]) => e),
set: (e, t) => Promise.resolve(t),
delete: e => Promise.resolve(),
clear: () => Promise.resolve()
  };
}
n.d(t, {
  A: function() {
return r;
  }
});