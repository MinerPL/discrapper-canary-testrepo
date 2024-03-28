"use strict";
var n = r("812762"),
  i = r("122526"),
  o = r("342835"),
  a = r("574369"),
  u = r("952650"),
  s = r("118658"),
  c = r("585398"),
  l = r("601310"),
  f = r("597605"),
  p = r("83550"),
  h = r("125760"),
  d = r("65492"),
  g = r("405141"),
  y = r("960973"),
  v = r("93874"),
  m = r("295985"),
  _ = r("634356"),
  b = o.isOptionKeyCommand,
  S = s.isBrowser("Chrome");
t.exports = function(t, e) {
  var r = e.which,
    o = t._latestEditorState;

  function s(r) {
    var n = t.props[r];
    return !!n && (n(e), !0)
  }
  switch (r) {
    case a.RETURN:
      if (e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o))) return;
      break;
    case a.ESC:
      if (e.preventDefault(), s("onEscape")) return;
      break;
    case a.TAB:
      if (s("onTab")) return;
      break;
    case a.UP:
      if (s("onUpArrow")) return;
      break;
    case a.RIGHT:
      if (s("onRightArrow")) return;
      break;
    case a.DOWN:
      if (s("onDownArrow")) return;
      break;
    case a.LEFT:
      if (s("onLeftArrow")) return;
      break;
    case a.SPACE:
      S && b(e) && e.preventDefault()
  }
  var w = t.props.keyBindingFn(e);
  if (null == w || "" === w) {
    if (r === a.SPACE && S && b(e)) {
      var k = n.replaceText(o.getCurrentContent(), o.getSelection(), "\xa0");
      t.update(i.push(o, k, "insert-characters"))
    }
    return
  }
  if ("undo" === w) {
    _(e, o, t.update);
    return
  }
  if (e.preventDefault(), !(t.props.handleKeyCommand && c(t.props.handleKeyCommand(w, o, e.timeStamp)))) {
    var x = function(t, e, r) {
      switch (t) {
        case "redo":
          return i.redo(e);
        case "delete":
          return v(e);
        case "delete-word":
          return p(e);
        case "backspace":
          return y(e);
        case "backspace-word":
          return f(e);
        case "backspace-to-start-of-line":
          return l(e, r);
        case "split-block":
          return h(e);
        case "transpose-characters":
          return m(e);
        case "move-selection-to-start-of-block":
          return g(e);
        case "move-selection-to-end-of-block":
          return d(e);
        case "secondary-cut":
          return u.cut(e);
        case "secondary-paste":
          return u.paste(e);
        default:
          return e
      }
    }(w, o, e);
    x !== o && t.update(x)
  }
}