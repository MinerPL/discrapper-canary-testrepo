t.d(n, {
  T: function() {
return E;
  }
});
var i = t(132871),
  l = t(147890),
  o = t(914010);
let E = {
  binds: ['mod+ctrl+a'],
  comboKeysBindGlobal: !0,
  action() {
var e;
let n = null !== (e = o.Z.getGuildId()) && void 0 !== e ? e : void 0;
(0, l.goToAppDirectory)({
  guildId: n,
  entrypoint: {
    name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT
  }
});
  }
};