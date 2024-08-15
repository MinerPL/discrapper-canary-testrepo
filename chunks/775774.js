t.d(n, {
  p: function() {
return l;
  }
});
var i = t(358085);
let l = {
  binds: ['mod+alt+i'],
  comboKeysBindGlobal: !0,
  action(e) {
if ((0, i.isWeb)() && 'discord.com' === location.host)
  return e.preventDefault(), e.stopPropagation(), !1;
  }
};