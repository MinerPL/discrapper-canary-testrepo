"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("222007");
var a = s("95410"),
  n = s("689988");
let l = "formGuidelinesStorageKey";
class r extends n.default {
  _initialize() {
    let e = a.default.get(l);
    null != e && (this.seenForumGuidelines = new Set(e))
  }
  _terminate() {
    a.default.set(l, this.seenForumGuidelines)
  }
  markAsSeen(e) {
    this.seenForumGuidelines.add(e), a.default.set(l, this.seenForumGuidelines)
  }
  hasSeen(e) {
    return this.seenForumGuidelines.has(e)
  }
  constructor(...e) {
    super(...e), this.seenForumGuidelines = new Set
  }
}
var i = new r