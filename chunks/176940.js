t.d(n, {
  Z: function() {
return s;
  }
}), t(47120);
var l = t(131951);

function s() {
  return Object.entries(l.Z.getVideoDevices()).map(e => {
let [n, t] = e;
return {
  id: 'camera:' + t.id,
  name: t.name,
  url: ''
};
  });
}