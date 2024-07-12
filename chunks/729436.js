n.d(t, {
  H: function() {
return r;
  },
  Q: function() {
return i;
  }
});
let r = e => e.sort((e, t) => {
var n, r;
return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (r = t.zIndex) && void 0 !== r ? r : 0);
  }),
  i = e => {
if ('1228233381897179137' === e.id || '1228234629429985300' === e.id) {
  var t;
  (null === (t = e.config.effects) || void 0 === t ? void 0 : t.length) >= 2 && (e.config.effects[1].start = 2832);
}
return e;
  };