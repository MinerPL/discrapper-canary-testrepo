r.d(e, {
  u: function() {
return _;
  }
});
var n = r(607190);
let _ = (t, e) => {
  let r = _ => {
('pagehide' === _.type || 'hidden' === n.m.document.visibilityState) && (t(_), e && (removeEventListener('visibilitychange', r, !0), removeEventListener('pagehide', r, !0)));
  };
  addEventListener('visibilitychange', r, !0), addEventListener('pagehide', r, !0);
};