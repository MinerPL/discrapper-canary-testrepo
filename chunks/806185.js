n.d(t, {
  Z: function() {
return a;
  }
});
var r = n(264181);

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class a {
  static fromServer(e) {
return new a({
  ...e,
  dismissibleContent: e.dismissible_content,
  refTargetBackground: e.ref_target_background
});
  }
  constructor(e) {
i(this, 'title', void 0), i(this, 'body', void 0), i(this, 'avatar', void 0), i(this, 'decorations', void 0), i(this, 'dismissibleContent', void 0), i(this, 'version', void 0), i(this, 'refTargetBackground', void 0), this.type = r.Z.COACHTIP, this.title = e.title, this.body = e.body, this.avatar = e.avatar, this.decorations = e.decorations, this.dismissibleContent = e.dismissibleContent, this.version = e.version, this.refTargetBackground = e.refTargetBackground;
  }
}