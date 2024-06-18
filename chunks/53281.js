"use strict";
n(653041);
var i = n(735250),
  r = n(470079),
  s = n(834427),
  o = n(579806),
  a = n(403182),
  l = n(358085),
  u = n(861990);

function _(e) {
  let t = ["openFile"];
  e.multiple && t.push("multiSelections");
  let n = e.filters;
  o.Z.fileManager.openFiles({
    properties: t,
    filters: n
  }, u.zz).then(t => {
    let n = t.map(e => a.qF(e));
    null != n && e.onChange({
      stopPropagation: () => null,
      preventDefault: () => null,
      currentTarget: {
        files: n
      }
    })
  }).catch(t => {
    e.onChange({
      stopPropagation: () => null,
      preventDefault: () => null,
      currentTarget: {
        files: null,
        err: t
      }
    })
  })
}
class d extends r.Component {
  activateUploadDialogue() {
    if (null != this._ref) return this._ref.activateUploadDialogue()
  }
  setRef(e) {
    this._ref = e
  }
  render() {
    return (0, i.jsx)(s.S, {
      ref: this.setRef,
      handleNativeClick: _,
      embedded: (0, l.isDesktop)(),
      ...this.props
    })
  }
  constructor(e) {
    var t, n, i;
    super(e), t = this, n = "_ref", i = r.createRef(), n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i, this.setRef = this.setRef.bind(this)
  }
}
t.Z = d