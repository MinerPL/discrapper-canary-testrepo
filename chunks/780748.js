"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(470079),
  r = n(998698),
  s = n(436660),
  o = n(515270),
  a = n(417662),
  l = n(981631);

function u(e) {
  let {
    editor: t,
    channel: n,
    disableEnterToSubmit: u,
    onKeyDown: _,
    onKeyUp: d,
    onTab: c,
    onEnter: E,
    allowNewLines: I,
    submit: T,
    hideAutocomplete: h,
    moveSelection: S
  } = e, f = i.useCallback(e => {
    var i;
    switch (e.which) {
      case l.yXg.ARROW_UP:
        if (S(-1)) {
          e.preventDefault();
          return
        }
        break;
      case l.yXg.ARROW_DOWN:
        if (S(1)) {
          e.preventDefault();
          return
        }
        break;
      case l.yXg.P:
        if ((0, a.E)(e, {
            ctrl: !0
          }) && S(-1)) {
          e.preventDefault();
          return
        }
        break;
      case l.yXg.N:
        if ((0, a.E)(e, {
            ctrl: !0
          }) && S(1)) {
          e.preventDefault();
          return
        }
        break;
      case l.yXg.ESCAPE:
        null == h || h();
        break;
      case l.yXg.TAB:
        if ((0, a.E)(e, {}) && (null == c ? void 0 : c())) {
          e.preventDefault(), e.stopPropagation();
          return
        }
        if (null != r.Z.getActiveCommand(n.id)) {
          e.preventDefault(), e.stopPropagation(), e.shiftKey ? s.Q.selectPreviousCommandOption(t) : s.Q.selectNextCommandOption(t);
          return
        }
        break;
      case l.yXg.ENTER:
        if ((0, a.E)(e, {}) && (null == E ? void 0 : E(e))) {
          e.preventDefault(), e.stopPropagation();
          return
        }
    }
    if ((null === (i = t.onKeyDown) || void 0 === i ? void 0 : i.call(t, e)) === !0) {
      e.preventDefault(), e.stopPropagation();
      return
    }
    e.which === l.yXg.ENTER && (!e.altKey && !e.shiftKey && (!u || e.ctrlKey) && !(0, o.L6)(t) || !I) && (e.preventDefault(), e.stopPropagation(), T()), null == _ || _(e)
  }, [I, n.id, u, t, h, S, E, _, c, T]);
  return {
    handleKeyDown: f,
    handleKeyUp: i.useCallback(e => {
      null == d || d(e)
    }, [d])
  }
}