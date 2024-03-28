"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("570140"),
  i = n("317770"),
  r = n("175281"),
  o = n("285371");
class u extends i.default {
  _initialize() {
    s.default.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), s.default.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  _terminate() {
    s.default.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), s.default.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  showKeyboardShortcuts() {
    (0, a.openModal)(e => (0, l.jsx)(r.default, {
      ...e
    }), {
      modalKey: o.KEYBOARD_SHORTCUT_MODAL_KEY
    })
  }
  hideKeyboardShortcuts() {
    (0, a.closeModal)(o.KEYBOARD_SHORTCUT_MODAL_KEY)
  }
}
t.default = new u