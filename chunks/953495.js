"use strict";
var n = r("889106"),
  i = r("502143"),
  o = r("198392"),
  a = r("812762"),
  u = r("513681"),
  s = r("122526"),
  c = r("654811"),
  l = r("294006"),
  f = r("630790"),
  p = r("585398"),
  h = r("507223");

function d(t, e, r) {
  var n = a.replaceWithFragment(t.getCurrentContent(), t.getSelection(), e);
  return s.push(t, n.set("entityMap", r), "insert-fragment")
}
t.exports = function(t, e) {
  e.preventDefault();
  var r = new o(e.clipboardData);
  if (!r.isRichText()) {
    var g = r.getFiles(),
      y = r.getText();
    if (g.length > 0) {
      if (t.props.handlePastedFiles && p(t.props.handlePastedFiles(g))) return;
      f(g, function(e) {
        if (e = e || y) {
          var r = t._latestEditorState,
            o = h(e),
            f = i.create({
              style: r.getCurrentInlineStyle(),
              entity: l(r.getCurrentContent(), r.getSelection())
            }),
            p = c.getCurrentBlockType(r),
            d = u.processText(o, f, p),
            g = n.createFromArray(d),
            v = a.replaceWithFragment(r.getCurrentContent(), r.getSelection(), g);
          t.update(s.push(r, v, "insert-fragment"))
        }
      });
      return
    }
  }
  var v = [],
    m = r.getText(),
    _ = r.getHTML(),
    b = t._latestEditorState;
  if (!(t.props.handlePastedText && p(t.props.handlePastedText(m, _, b)))) {
    if (m && (v = h(m)), !t.props.stripPastedStyles) {
      var S = t.getClipboard();
      if (r.isRichText() && S) {
        if (-1 !== _.indexOf(t.getEditorKey()) || 1 === v.length && 1 === S.size && S.first().getText() === m) {
          t.update(d(t._latestEditorState, S));
          return
        }
      } else if (S && r.types.includes("com.apple.webarchive") && !r.types.includes("text/html") && function(t, e) {
          return t.length === e.size && e.valueSeq().every(function(e, r) {
            return e.getText() === t[r]
          })
        }(v, S)) {
        t.update(d(t._latestEditorState, S));
        return
      }
      if (_) {
        var w = u.processHTML(_, t.props.blockRenderMap);
        if (w) {
          var k = w.contentBlocks,
            x = w.entityMap;
          if (k) {
            var C = n.createFromArray(k);
            t.update(d(t._latestEditorState, C, x));
            return
          }
        }
      }
      t.setClipboard(null)
    }
    if (v.length) {
      var E = i.create({
          style: b.getCurrentInlineStyle(),
          entity: l(b.getCurrentContent(), b.getSelection())
        }),
        D = c.getCurrentBlockType(b),
        O = u.processText(v, E, D),
        K = n.createFromArray(O);
      t.update(d(t._latestEditorState, K))
    }
  }
}