n.d(t, {
  Z: function() {
return a;
  }
});
var i = n(470079),
  s = n(10718);

function a(e, t) {
  let n = i.useRef(null),
a = i.useCallback((e, t) => {
  var i, s, a;
  e.preventDefault(), e.clipboardData.setData('application/x-discord-interaction-data', JSON.stringify(t)), e.clipboardData.setData('text/plain', null !== (a = null === (s = n.current) || void 0 === s ? void 0 : null === (i = s.textContent) || void 0 === i ? void 0 : i.trim()) && void 0 !== a ? a : '');
}, []);
  return s.YZ(e, t), {
onCopy: a,
copyRef: n
  };
}