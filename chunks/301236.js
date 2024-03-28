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
var o = r("460883"),
  a = r("203827"),
  u = r("470079"),
  s = r("606166"),
  c = r("679785"),
  l = r("467159"),
  f = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    var r, n, f = e.prototype;
    return f.shouldComponentUpdate = function(t) {
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
    }, f.render = function() {
      for (var t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, f = t.customStyleMap, p = t.customStyleFn, h = t.editorState, d = t.editorKey, g = t.preventScroll, y = t.textDirectionality, v = h.getCurrentContent(), m = h.getSelection(), _ = h.mustForceSelection(), b = h.getDecorator(), S = l(h.getDirectionMap()), w = v.getBlocksAsArray(), k = [], x = null, C = null, E = 0; E < w.length; E++) {
        var D = w[E],
          O = D.getKey(),
          K = D.getType(),
          T = r(D),
          M = void 0,
          A = void 0,
          I = void 0;
        T && (M = T.component, A = T.props, I = T.editable);
        var B = y || S.get(O),
          L = a.encode(O, 0, 0),
          R = {
            contentState: v,
            block: D,
            blockProps: A,
            blockStyleFn: n,
            customStyleMap: f,
            customStyleFn: p,
            decorator: b,
            direction: B,
            forceSelection: _,
            offsetKey: L,
            preventScroll: g,
            selection: m,
            tree: h.getBlockTree(O)
          },
          N = e.get(K) || e.get("unstyled"),
          F = N.wrapper,
          z = N.element || e.get("unstyled").element,
          P = D.getDepth(),
          j = "";
        if (n && (j = n(D)), "li" === z) {
          var U, q, H, W = C !== F || null === x || P > x;
          j = c(j, s({
            "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === (U = K),
            "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === U,
            "public/DraftStyleDefault/reset": W,
            "public/DraftStyleDefault/depth0": 0 === (q = P),
            "public/DraftStyleDefault/depth1": 1 === q,
            "public/DraftStyleDefault/depth2": 2 === q,
            "public/DraftStyleDefault/depth3": 3 === q,
            "public/DraftStyleDefault/depth4": q >= 4,
            "public/DraftStyleDefault/listLTR": "LTR" === (H = B),
            "public/DraftStyleDefault/listRTL": "RTL" === H
          }))
        }
        var V = M || o,
          G = {
            className: j,
            "data-block": !0,
            "data-editor": d,
            "data-offset-key": L,
            key: O
          };
        void 0 !== I && (G = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
              return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), n.forEach(function(e) {
              (function(t, e, r) {
                e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = r
              })(t, e, r[e])
            })
          }
          return t
        }({}, G, {
          contentEditable: I,
          suppressContentEditableWarning: !0
        }));
        var J = u.createElement(z, G, u.createElement(V, i({}, R, {
          key: O
        })));
        k.push({
          block: J,
          wrapperTemplate: F,
          key: O,
          offsetKey: L
        }), x = F ? D.getDepth() : null, C = F
      }
      for (var X = [], Y = 0; Y < k.length;) {
        var Z = k[Y];
        if (Z.wrapperTemplate) {
          var $ = [];
          do $.push(k[Y].block), Y++; while (Y < k.length && k[Y].wrapperTemplate === Z.wrapperTemplate);
          var Q = u.cloneElement(Z.wrapperTemplate, {
            key: Z.key + "-wrap",
            "data-offset-key": Z.offsetKey
          }, $);
          X.push(Q)
        } else X.push(Z.block), Y++
      }
      return u.createElement("div", {
        "data-contents": "true"
      }, X)
    }, e
  }(u.Component);
t.exports = f