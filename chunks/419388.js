"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120"), n("653041");
var a = n("470079"),
  l = n("392711"),
  s = n.n(l),
  i = n("374470"),
  r = n("925549"),
  o = n("904245"),
  u = n("45114"),
  d = n("40851"),
  c = n("607070"),
  f = n("703656"),
  h = n("479313"),
  m = n("796974"),
  p = n("709054"),
  E = n("534469"),
  C = n("173033"),
  g = n("959517"),
  S = n("981631");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
  var t, n;
  if (null == e.jumpTargetId || !e.ready) return null;
  let {
    jumpTargetId: a,
    jumpTargetOffset: l
  } = e;
  if (e.has(a) || !e.hasMoreBefore && a === p.default.castChannelIdAsMessageId(e.channelId)) {
    if (0 === l) return a;
    let n = e.getByIndex(e.indexOf(a) + l);
    return null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : a
  }
  let s = [a, ...e.map(e => {
      let {
        id: t
      } = e;
      return t
    })].sort(p.default.compare),
    i = s.indexOf(a),
    r = null !== (n = s[i + (Math.abs(l) > 0 ? l : 1)]) && void 0 !== n ? n : s[i - 1];
  return null != r ? r : null
}
let I = {
  scrollTop: 0,
  scrollHeight: 0,
  offsetHeight: 0
};
class A {
  isReady() {
    return this.props.messages.ready
  }
  isLoading() {
    return this.loading || this.props.messages.loadingMore
  }
  isPinned() {
    return this.pinned
  }
  isJumping() {
    return this.jumping
  }
  isDragging() {
    return this.dragging
  }
  isInitialized() {
    return void 0 === this.initialScrollTop
  }
  isScrollLoadingDisabled() {
    return this.isLoading() || !this.isInitialized() || this.isJumping() || this.isDragging() || !this.props.canLoadMore
  }
  isActivelyScrolling() {
    return this.scrollCounter >= 5
  }
  getDocument() {
    var e, t;
    return null === (t = this.ref.current) || void 0 === t ? void 0 : null === (e = t.getScrollerNode()) || void 0 === e ? void 0 : e.ownerDocument
  }
  getElementFromMessageId(e) {
    let t = this.getDocument(),
      {
        channel: {
          id: n
        }
      } = this.props;
    return null == t ? null : (0, E.getElementFromMessage)(t, n, e)
  }
  isScrolledToBottom() {
    let {
      scrollTop: e,
      scrollHeight: t,
      offsetHeight: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
    return e >= t - n - g.MESSAGE_PADDING && !this.props.messages.hasMoreAfter
  }
  mergePropsAndUpdate(e) {
    this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck()
  }
  mergePropsAndUpdate_(e) {
    let t = this.props.messages,
      n = this.props.focusId;
    this.props = {
      ...e
    };
    let {
      offsetHeight: a,
      scrollHeight: l
    } = this.getScrollerState(), s = this.isHeightChange(a, l);
    if (this.offsetHeightCache = a, this.scrollHeightCache = l, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
      if (!this.isInitialized()) {
        this.restoreScroll();
        return
      }
    } else {
      null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
      return
    }
    if (null != e.messages.jumpTargetId) {
      if (this.isLoading()) return;
      let n = T(e.messages);
      if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
        if (this.isJumping()) {
          null != n ? this.scrollToMessage(n, !0) : this.jumping = !1;
          return
        }
      } else {
        let a;
        let l = t.first();
        null != l && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (a = p.default.extractTimestamp(l.id)), this.scrollToMessage(n, !0, a);
        return
      }
    }
    if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
      this.jumping = !0, this.scrollTo(0), this.setScrollToBottom(!0);
      return
    }
    let i = e.messages.last(),
      r = t.last();
    if (null != i && i.state === S.MessageStates.SENDING && (null == r ? void 0 : r.id) !== i.id) {
      this.setScrollToBottom();
      return
    }
    let {
      focusId: o
    } = this.props;
    if (null != o && n !== o) {
      let e = this.getElementFromMessageId(o);
      if (null != e) {
        var u;
        null === (u = this.ref.current) || void 0 === u || u.scrollIntoViewNode({
          node: e,
          padding: g.MESSAGE_PADDING,
          callback: this.handleScroll
        });
        return
      }
    }
    s && this.fixScrollPosition(a, l)
  }
  getAnchorData(e, t, n) {
    var a;
    let l = this.getElementFromMessageId(e),
      s = null === (a = this.ref.current) || void 0 === a ? void 0 : a.getScrollerNode();
    if (!(0, i.isElement)(l) || null == s) return null;
    let {
      offsetHeight: r
    } = l, o = (0, C.default)(l, s), u = o - t;
    return null != n && (u = Math.max(-r, Math.min(n, u))), {
      id: e,
      offsetFromTop: u,
      offsetTop: o,
      offsetHeight: r,
      clamped: null != u
    }
  }
  cleanAutomaticAnchor() {
    this.setAutomaticAnchor(null)
  }
  newMessageBarBuffer() {
    return this.props.channel.isForumPost() ? g.NEW_MESSAGE_BAR_BUFFER_LARGE : g.NEW_MESSAGE_BAR_BUFFER
  }
  findAnchor() {
    let {
      messages: e,
      hasUnreads: t,
      channel: n
    } = this.props, a = this.getScrollerState(), {
      scrollTop: l
    } = a, s = t && l >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, i = null, r = t => {
      var a;
      return -1 === t ? p.default.castChannelIdAsMessageId(n.id) : null === (a = e._array[t]) || void 0 === a ? void 0 : a.id
    }, o = -1, u = !1;
    for (;;) {
      let t = r(o);
      if (null == t) break;
      let n = this.getAnchorData(t, l);
      if (this._bottomAnchor = n, u && null != n && n.offsetTop > l + s + a.offsetHeight) break;
      if (u) {
        o++;
        continue
      }
      null != n && (n.offsetTop >= l + s || o === e.length - 1) && (i = n, u = !0), o++
    }
    return i
  }
  findFetchAnchor(e) {
    let {
      messages: t
    } = this.props, {
      scrollTop: n
    } = this.getScrollerState(), a = e ? -1 : 1, l = null, s = t._array.length - 1;
    for (let i = e ? s : 0; null != t._array[i]; i += a) {
      let e = t._array[i],
        a = this.getAnchorData(e.id, n);
      if (null != a) {
        l = a;
        break
      }
    }
    return l
  }
  getAnchorFixData() {
    for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
      if (null == e) continue;
      let t = this.getElementFromMessageId(e.id);
      if (!(0, i.isElement)(t)) continue;
      let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
      return {
        node: t,
        fixedScrollTop: t.offsetTop - (e.offsetFromTop + n)
      }
    }
    return null
  }
  fixAnchorScrollPosition() {
    let e = this.getAnchorFixData();
    if (null == e) {
      this.handleScroll();
      return
    }
    let {
      node: t,
      fixedScrollTop: n
    } = e;
    if (null != this.focusAnchor) {
      var a;
      this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll), null === (a = this.ref.current) || void 0 === a || a.scrollIntoViewNode({
        node: t,
        padding: g.MESSAGE_PADDING,
        callback: this.handleScroll
      })
    } else this.mergeTo(n, this.handleScroll);
    this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), !this.isLoading() && (this.messageFetchAnchor = null)
  }
  hasAnchor() {
    return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor
  }
  updateFocusAnchor(e, t, n) {
    let a = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
    null != a && (a.offsetFromTop >= n || t > a.offsetTop + a.offsetHeight) && (this.focusAnchor = null)
  }
  handleFocusAnchorScroll(e, t) {
    var n;
    this.updateFocusAnchor(null === (n = this.focusAnchor) || void 0 === n ? void 0 : n.id, e, t)
  }
  updateFetchAnchor(e, t, n) {
    var a;
    let l = null === (a = this.ref.current) || void 0 === a ? void 0 : a.getScrollerNode();
    null != this.messageFetchAnchor && null != l && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
      scrollTop: e,
      offsetHeight: t,
      scrollHeight: n
    }) > 0 ? t : void 0))
  }
  updateAutomaticAnchor(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      a = null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode();
    if (null == this.automaticAnchor || null == a) return;
    let l = this.getAnchorData(this.automaticAnchor.id, e);
    n && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(l)
  }
  setAutomaticAnchor(e) {
    var t, n;
    this.automaticAnchor = e, null === (t = this._automaticAnchorCallbacks) || void 0 === t || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null === (n = this._bottomAnchor) || void 0 === n ? void 0 : n.id)
  }
  getScrollerState() {
    var e, t;
    return null !== (t = null === (e = this.ref.current) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : I
  }
  isHeightChange(e, t) {
    return e !== this.offsetHeightCache || t !== this.scrollHeightCache
  }
  isInPlaceholderRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: a
    } = e, {
      messages: l,
      placeholderHeight: s
    } = this.props;
    return l.hasMoreBefore && t < s && a > n ? 1 : l.hasMoreAfter && t >= a - n - s ? 2 : 0
  }
  isInScrollTriggerLoadingRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: a
    } = e, {
      messages: l
    } = this.props;
    return l.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && a > n ? 1 : l.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
  }
  handleScrollSpeed(e) {
    if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: a
    } = e, {
      prevScrollTop: l,
      props: {
        placeholderHeight: s
      }
    } = this;
    if (this.prevScrollTop = t, null == l) return;
    let i = this.isInPlaceholderRegion(e),
      r = t - l;
    0 !== i && (1 === i && t + r <= 0 ? (this.mergeTo(s - n), this.prevScrollTop = s - n) : 2 === i && t + r >= a - n && (this.mergeTo(a - s), this.prevScrollTop = a - s))
  }
  enableAutomaticAck() {
    this.isInitialized() && !this.acking && (this.acking = !0, this.updateStoreDimensions(() => {
      (0, u.enableAutomaticAck)(this.props.channel.id, this.props.windowId)
    }))
  }
  fixScrollPosition(e, t) {
    this.offsetHeightCache = e, this.scrollHeightCache = t, this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.fixAnchorScrollPosition()
  }
  fixJumpTarget() {
    if (!this.isJumping()) return;
    let {
      messages: e,
      hasUnreads: t
    } = this.props;
    if (null != e.jumpTargetId) {
      let n = T(e);
      if (null == n) return;
      let a = this.getElementFromMessageId(n);
      (0, i.isElement)(a) ? this.scrollTo(this.getOffsetOrientationFromNode(a, "middle", t ? this.newMessageBarBuffer() : g.MESSAGE_PADDING), !0): this.scrollToNewMessages(!0, "middle")
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0)
  }
  scrollToNewMessages() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      a = arguments.length > 2 ? arguments[2] : void 0,
      l = null === (e = this.getDocument()) || void 0 === e ? void 0 : e.getElementById(g.NEW_MESSAGE_BAR_ID),
      s = () => {
        this.jumping = !1, this.setAutomaticAnchor(this.findAnchor()), null != a && a(), this.handleScroll()
      };
    this.pinned = !1, this.jumping = t, null != l ? this.scrollTo(this.getOffsetOrientationFromNode(l, n, this.newMessageBarBuffer()), t, s) : this.scrollTo(this.getOffsetToPreventLoading("top"), t, s)
  }
  getOffsetOrientationFromNode(e, t) {
    var n;
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      l = null === (n = this.ref.current) || void 0 === n ? void 0 : n.getScrollerNode();
    if (null == l) return 0;
    let s = this.getScrollerState(),
      i = (0, C.default)(e, l);
    return "middle" === t ? Math.min(i - .5 * s.offsetHeight + .5 * e.offsetHeight + -8, i - a) : i - a
  }
  restoreScroll() {
    if (this.isInitialized()) return;
    let {
      initialScrollTop: e
    } = this;
    this.initialScrollTop = void 0;
    let t = T(this.props.messages);
    null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== S.ChannelTypes.GUILD_VOICE && this.props.channel.type !== S.ChannelTypes.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom()
  }
  scrollTo(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      a = arguments.length > 2 ? arguments[2] : void 0;
    null === (t = this.ref.current) || void 0 === t || t.scrollTo({
      to: e,
      animate: !c.default.useReducedMotion && n,
      callback: a
    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
  }
  mergeTo(e, t) {
    var n;
    null === (n = this.ref.current) || void 0 === n || n.mergeTo({
      to: e,
      callback: t
    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
  }
  setScrollToBottom() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        messages: t,
        channel: n
      } = this.props;
    if (t.hasMoreAfter) {
      var a, l;
      a = n, o.default.jumpToPresent(a.id, S.MAX_MESSAGES_PER_CHANNEL), (0, f.transitionToGuild)(null !== (l = a.getGuildId()) && void 0 !== l ? l : S.ME, a.id)
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
      this.jumping = !1, this.handleScroll()
    })
  }
  updateStoreDimensions(e) {
    if (this.isJumping() || !this.isInitialized()) return;
    let {
      channel: t
    } = this.props;
    if (this.isPinned()) r.default.clearChannelDimensions(t.id, e);
    else {
      let {
        placeholderHeight: n
      } = this.props, {
        scrollTop: a,
        scrollHeight: l,
        offsetHeight: s
      } = this.getScrollerState();
      r.default.updateChannelDimensions(t.id, a - n, l - n, s, e)
    }
  }
  scrollIntoViewRect() {}
  scrollPageUp() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    null === (e = this.ref.current) || void 0 === e || e.scrollPageUp({
      animate: t
    })
  }
  scrollPageDown() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    null === (e = this.ref.current) || void 0 === e || e.scrollPageDown({
      animate: t
    })
  }
  scrollToMessage(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null == this.ref.current) return;
    if (e === this.props.channel.id) {
      this.scrollTo(0);
      return
    }
    let a = this.getElementFromMessageId(e);
    !this.isJumping() && t && null != n && !c.default.useReducedMotion && (p.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), this.pinned = !1, this.jumping = !0;
    let l = () => {
      this.jumping = !1, (0, i.isElement)(a) && c.default.keyboardModeEnabled && a.focus({
        preventScroll: !0
      }), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
    };
    (0, i.isElement)(a) ? this.scrollTo(this.getOffsetOrientationFromNode(a, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : g.MESSAGE_PADDING), t, l): this.scrollToNewMessages(t, "middle", l)
  }
  getOffsetToTriggerLoading(e, t) {
    let {
      scrollHeight: n,
      offsetHeight: a
    } = t, {
      messages: l,
      hasUnreads: s,
      placeholderHeight: i
    } = this.props;
    if ("top" === e) return l.hasMoreBefore ? s ? i - g.PLACEHOLDER_BUFFER - 2 : i + 500 : 0;
    return l.hasMoreAfter ? n - a - i - 500 : n - a
  }
  getOffsetToPreventLoading(e) {
    let {
      messages: t
    } = this.props, n = 0;
    return "top" === e && t.hasMoreBefore ? n = 2 : "bottom" === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
  }
  getSnapshotBeforeUpdate(e) {
    if (this.hasAnchor() || null != e) {
      let {
        scrollTop: t,
        offsetHeight: n,
        scrollHeight: a
      } = this.getScrollerState();
      this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, a), this.updateAutomaticAnchor(t)
    }
  }
  addAutomaticAnchorCallback(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    this._automaticAnchorCallbacks.push(e), this._automaticAnchorCallbacks = s().uniq(this._automaticAnchorCallbacks), !0 === t && this.setAutomaticAnchor(this.findAnchor())
  }
  removeAutomaticAnchorCallback(e) {
    this._automaticAnchorCallbacks = s().without(this._automaticAnchorCallbacks, e)
  }
  addScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks.push(e), this._scrollCompleteCallbacks = s().uniq(this._scrollCompleteCallbacks)
  }
  removeScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks = s().without(this._scrollCompleteCallbacks, e)
  }
  cleanup() {
    this.acking = !1, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, u.disableAutomaticAck)(this.props.channel.id, this.props.windowId)
  }
  constructor(e) {
    var t, n = this;
    _(this, "props", void 0), _(this, "ref", a.createRef()), _(this, "automaticAnchor", null), _(this, "messageFetchAnchor", null), _(this, "focusAnchor", null), _(this, "loading", void 0), _(this, "jumping", !1), _(this, "pinned", void 0), _(this, "dragging", !1), _(this, "isAtBottom", !1), _(this, "prevScrollTop", null), _(this, "anchorTimeout", null), _(this, "initialScrollTop", null), _(this, "acking", !1), _(this, "scrollCounter", 0), _(this, "offsetHeightCache", 0), _(this, "scrollHeightCache", 0), _(this, "scrollTopCache", -1), _(this, "_bottomAnchor", null), _(this, "_automaticAnchorCallbacks", []), _(this, "_scrollCompleteCallbacks", []), _(this, "updateVisibleMessagesDebounced", s().debounce(h.updateVisibleMessages, 300)), _(this, "handleScroll", e => {
      var t;
      if (!this.isInitialized()) return;
      let n = this.getScrollerState(),
        a = this.isScrolledToBottom(n);
      if (a !== this.isAtBottom && (a ? (this.isAtBottom = !0, this.props.handleScrollToBottom()) : (this.isAtBottom = !1, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), !this.isPinned() && (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
      else {
        if (null != e && e.target !== (null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode())) return;
        this.scrollTopCache !== n.scrollTop && (this.pinned = a, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
          this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
          let {
            scrollHeight: e,
            offsetHeight: t
          } = this.getScrollerState();
          this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), !this.isPinned() && this.setAutomaticAnchor(this.findAnchor()))
        }, 35))
      }
      if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled()) return !this.props.canLoadMore && this.enableAutomaticAck(), this.handleScrollSpeed(n);
      let l = this.isInScrollTriggerLoadingRegion(n);
      1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n)
    }), _(this, "handleResize", (e, t) => {
      let {
        offsetHeightCache: n,
        scrollHeightCache: a
      } = this;
      "container" === t ? n = e.contentRect.height : "content" === t && (a = e.contentRect.height), this.isHeightChange(n, a) && this.fixScrollPosition(n, a)
    }), _(this, "handleMouseDown", e => {
      e.target === e.currentTarget && (this.dragging = !0)
    }), _(this, "handleMouseUp", () => {
      this.dragging = !1, this.handleScroll()
    }), _(this, "loadMore", function() {
      let e, t, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          messages: l
        } = n.props;
      if (a) {
        let e = l.last();
        null != e && (t = e.id)
      } else {
        let t = l.first();
        null != t && (e = t.id)
      }
      n.messageFetchAnchor = n.findFetchAnchor(a), n.loading = !0, o.default.fetchMessages({
        channelId: n.props.channel.id,
        before: e,
        after: t,
        limit: S.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }), _(this, "updateStoreDimensionsDebounced", s().debounce(this.updateStoreDimensions, 200)), this.props = e, this.loading = e.messages.loadingMore;
    let l = m.default.getChannelDimensions(e.channel.id);
    null != e.messages.jumpTargetId ? this.pinned = !1 : (this.initialScrollTop = null !== (t = null == l ? void 0 : l.scrollTop) && void 0 !== t ? t : null, this.pinned = null == l)
  }
}

function v(e) {
  let {
    messages: t,
    channel: n,
    compact: l,
    hasUnreads: s,
    focusId: i,
    placeholderHeight: r,
    canLoadMore: o = !0,
    handleScrollToBottom: u,
    handleScrollFromBottom: c
  } = e, {
    windowId: f
  } = a.useContext(d.default), [h] = a.useState(() => new A({
    messages: t,
    channel: n,
    compact: l,
    hasUnreads: s,
    focusId: i,
    placeholderHeight: r,
    canLoadMore: o,
    windowId: f,
    handleScrollToBottom: u,
    handleScrollFromBottom: c
  }));
  return h.getSnapshotBeforeUpdate(i), a.useLayoutEffect(() => h.mergePropsAndUpdate({
    messages: t,
    channel: n,
    compact: l,
    hasUnreads: s,
    focusId: i,
    placeholderHeight: r,
    canLoadMore: o,
    windowId: f,
    handleScrollToBottom: u,
    handleScrollFromBottom: c
  })), a.useLayoutEffect(() => () => h.cleanup(), [h]), h
}