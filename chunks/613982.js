"use strict";
var n = r("381538");

function i() {
  return (i = n || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    return t
  }).apply(this, arguments)
}
var o = r("281735"),
  a = r("203827"),
  u = r("470079"),
  s = r("467159"),
  c = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    var r, n, c = e.prototype;
    return c.shouldComponentUpdate = function(t) {
      var e = this.props.editorState,
        r = t.editorState;
      if (e.getDirectionMap() !== r.getDirectionMap() || e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) return !0;
      var n = r.getNativelyRenderedContent(),
        i = e.isInCompositionMode(),
        o = r.isInCompositionMode();
      if (e === r || null !== n && r.getCurrentContent() === n || i && o) return !1;
      var a = e.getCurrentContent(),
        u = r.getCurrentContent(),
        s = e.getDecorator(),
        c = r.getDecorator();
      return i !== o || a !== u || s !== c || r.mustForceSelection()
    }, c.render = function() {
      for (var t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, c = t.customStyleMap, l = t.customStyleFn, f = t.editorState, p = t.editorKey, h = t.textDirectionality, d = f.getCurrentContent(), g = f.getSelection(), y = f.mustForceSelection(), v = f.getDecorator(), m = s(f.getDirectionMap()), _ = d.getBlocksAsArray()[0], b = [], S = _; S;) {
        var w = S.getKey(),
          k = {
            blockRenderMap: e,
            blockRendererFn: r,
            blockStyleFn: n,
            contentState: d,
            customStyleFn: l,
            customStyleMap: c,
            decorator: v,
            editorKey: p,
            editorState: f,
            forceSelection: y,
            selection: g,
            block: S,
            direction: h || m.get(w),
            tree: f.getBlockTree(w)
          },
          x = (e.get(S.getType()) || e.get("unstyled")).wrapper;
        b.push({
          block: u.createElement(o, i({
            key: w
          }, k)),
          wrapperTemplate: x,
          key: w,
          offsetKey: a.encode(w, 0, 0)
        });
        var C = S.getNextSiblingKey();
        S = C ? d.getBlockForKey(C) : null
      }
      for (var E = [], D = 0; D < b.length;) {
        var O = b[D];
        if (O.wrapperTemplate) {
          var K = [];
          do K.push(b[D].block), D++; while (D < b.length && b[D].wrapperTemplate === O.wrapperTemplate);
          var T = u.cloneElement(O.wrapperTemplate, {
            key: O.key + "-wrap",
            "data-offset-key": O.offsetKey
          }, K);
          E.push(T)
        } else E.push(O.block), D++
      }
      return u.createElement("div", {
        "data-contents": "true"
      }, E)
    }, e
  }(u.Component);
t.exports = c