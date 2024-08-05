n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(470079),
  i = n(509172);
let a = [];

function s(e, t) {
  let n = (0, r.useRef)(),
s = (0, r.useRef)(a);
  return s.current === a ? (n.current = e(), s.current = t) : !(0, i.Z)(t, s.current) && (n.current = e(), s.current = t), n.current;
}