n.d(t, {
    ZP: function () {
        return v;
    }
}), n(47120), n(653041);
var i = n(470079), a = n(392711), l = n.n(a), s = n(374470), r = n(925549), o = n(904245), c = n(45114), u = n(40851), d = n(607070), h = n(703656), p = n(479313), m = n(796974), _ = n(709054), f = n(534469), E = n(173033), C = n(959517), g = n(981631);
function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function x(e) {
    var t, n;
    if (null == e.jumpTargetId || !e.ready)
        return null;
    let {
        jumpTargetId: i,
        jumpTargetOffset: a
    } = e;
    if (e.has(i) || !e.hasMoreBefore && i === _.default.castChannelIdAsMessageId(e.channelId)) {
        if (0 === a)
            return i;
        let n = e.getByIndex(e.indexOf(i) + a);
        return null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : i;
    }
    let l = [
            i,
            ...e.map(e => {
                let {id: t} = e;
                return t;
            })
        ].sort(_.default.compare), s = l.indexOf(i), r = null !== (n = l[s + (Math.abs(a) > 0 ? a : 1)]) && void 0 !== n ? n : l[s - 1];
    return null != r ? r : null;
}
let T = {
    scrollTop: 0,
    scrollHeight: 0,
    offsetHeight: 0
};
class N {
    isReady() {
        return this.props.messages.ready;
    }
    isLoading() {
        return this.loading || this.props.messages.loadingMore;
    }
    isPinned() {
        return this.pinned;
    }
    isJumping() {
        return this.jumping;
    }
    isDragging() {
        return this.dragging;
    }
    isInitialized() {
        return void 0 === this.initialScrollTop;
    }
    isScrollLoadingDisabled() {
        return this.isLoading() || !this.isInitialized() || this.isJumping() || this.isDragging() || !this.props.canLoadMore;
    }
    isActivelyScrolling() {
        return this.scrollCounter >= 5;
    }
    getDocument() {
        var e, t;
        return null === (t = this.ref.current) || void 0 === t ? void 0 : null === (e = t.getScrollerNode()) || void 0 === e ? void 0 : e.ownerDocument;
    }
    getElementFromMessageId(e) {
        let t = this.getDocument(), {
                channel: {id: n}
            } = this.props;
        return null == t ? null : (0, f.AP)(t, n, e);
    }
    isScrolledToBottom() {
        let {
            scrollTop: e,
            scrollHeight: t,
            offsetHeight: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
        return e >= t - n - C.kQ && !this.props.messages.hasMoreAfter;
    }
    mergePropsAndUpdate(e) {
        this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck();
    }
    mergePropsAndUpdate_(e) {
        let t = this.props.messages, n = this.props.focusId;
        this.props = { ...e };
        let {
                offsetHeight: i,
                scrollHeight: a
            } = this.getScrollerState(), l = this.isHeightChange(i, a);
        if (this.offsetHeightCache = i, this.scrollHeightCache = a, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
            if (!this.isInitialized()) {
                this.restoreScroll();
                return;
            }
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading())
                return;
            let n = x(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping()) {
                    null != n ? this.scrollToMessage(n, !0) : this.jumping = !1;
                    return;
                }
            } else {
                let i;
                let a = t.first();
                null != a && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (i = _.default.extractTimestamp(a.id)), this.scrollToMessage(n, !0, i);
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            this.jumping = !0, this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let s = e.messages.last(), r = t.last();
        if (null != s && s.state === g.yb.SENDING && (null == r ? void 0 : r.id) !== s.id) {
            this.setScrollToBottom();
            return;
        }
        let {focusId: o} = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e) {
                var c;
                null === (c = this.ref.current) || void 0 === c || c.scrollIntoViewNode({
                    node: e,
                    padding: C.kQ,
                    callback: this.handleScroll
                });
                return;
            }
        }
        l && this.fixScrollPosition(i, a);
    }
    getAnchorData(e, t, n) {
        var i;
        let a = this.getElementFromMessageId(e), l = null === (i = this.ref.current) || void 0 === i ? void 0 : i.getScrollerNode();
        if (!(0, s.k)(a) || null == l)
            return null;
        let {offsetHeight: r} = a, o = (0, E.Z)(a, l), c = o - t;
        return null != n && (c = Math.max(-r, Math.min(n, c))), {
            id: e,
            offsetFromTop: c,
            offsetTop: o,
            offsetHeight: r,
            clamped: null != c
        };
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? C.R4 : C.Eo;
    }
    findAnchor() {
        let {
                messages: e,
                hasUnreads: t,
                channel: n
            } = this.props, i = this.getScrollerState(), {scrollTop: a} = i, l = t && a >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, s = null, r = t => {
                var i;
                return -1 === t ? _.default.castChannelIdAsMessageId(n.id) : null === (i = e._array[t]) || void 0 === i ? void 0 : i.id;
            }, o = -1, c = !1;
        for (;;) {
            let t = r(o);
            if (null == t)
                break;
            let n = this.getAnchorData(t, a);
            if (this._bottomAnchor = n, c && null != n && n.offsetTop > a + l + i.offsetHeight)
                break;
            if (c) {
                o++;
                continue;
            }
            null != n && (n.offsetTop >= a + l || o === e.length - 1) && (s = n, c = !0), o++;
        }
        return s;
    }
    findFetchAnchor(e) {
        let {messages: t} = this.props, {scrollTop: n} = this.getScrollerState(), i = e ? -1 : 1, a = null, l = t._array.length - 1;
        for (let s = e ? l : 0; null != t._array[s]; s += i) {
            let e = t._array[s], i = this.getAnchorData(e.id, n);
            if (null != i) {
                a = i;
                break;
            }
        }
        return a;
    }
    getAnchorFixData() {
        for (let e of [
                this.focusAnchor,
                this.isLoading() ? null : this.messageFetchAnchor,
                this.automaticAnchor
            ]) {
            if (null == e)
                continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, s.k)(t))
                continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return {
                node: t,
                fixedScrollTop: t.offsetTop - (e.offsetFromTop + n)
            };
        }
        return null;
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) {
            this.handleScroll();
            return;
        }
        let {
            node: t,
            fixedScrollTop: n
        } = e;
        if (null != this.focusAnchor) {
            var i;
            this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll), null === (i = this.ref.current) || void 0 === i || i.scrollIntoViewNode({
                node: t,
                padding: C.kQ,
                callback: this.handleScroll
            });
        } else
            this.mergeTo(n, this.handleScroll);
        this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), !this.isLoading() && (this.messageFetchAnchor = null);
    }
    hasAnchor() {
        return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor;
    }
    updateFocusAnchor(e, t, n) {
        let i = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
        null != i && (i.offsetFromTop >= n || t > i.offsetTop + i.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        var n;
        this.updateFocusAnchor(null === (n = this.focusAnchor) || void 0 === n ? void 0 : n.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        var i;
        let a = null === (i = this.ref.current) || void 0 === i ? void 0 : i.getScrollerNode();
        null != this.messageFetchAnchor && null != a && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
            scrollTop: e,
            offsetHeight: t,
            scrollHeight: n
        }) > 0 ? t : void 0));
    }
    updateAutomaticAnchor(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode();
        if (null == this.automaticAnchor || null == i)
            return;
        let a = this.getAnchorData(this.automaticAnchor.id, e);
        n && null != a && null != this.automaticAnchor && (a.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(a);
    }
    setAutomaticAnchor(e) {
        var t, n;
        this.automaticAnchor = e, null === (t = this._automaticAnchorCallbacks) || void 0 === t || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null === (n = this._bottomAnchor) || void 0 === n ? void 0 : n.id);
    }
    getScrollerState() {
        var e, t;
        return null !== (t = null === (e = this.ref.current) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : T;
    }
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let {
                scrollTop: t,
                offsetHeight: n,
                scrollHeight: i
            } = e, {
                messages: a,
                placeholderHeight: l
            } = this.props;
        return a.hasMoreBefore && t < l && i > n ? 1 : a.hasMoreAfter && t >= i - n - l ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let {
                scrollTop: t,
                offsetHeight: n,
                scrollHeight: i
            } = e, {messages: a} = this.props;
        return a.hasMoreBefore && t <= this.getOffsetToTriggerLoading('top', e) && i > n ? 1 : a.hasMoreAfter && t >= this.getOffsetToTriggerLoading('bottom', e) ? 2 : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore)
            return;
        let {
                scrollTop: t,
                offsetHeight: n,
                scrollHeight: i
            } = e, {
                prevScrollTop: a,
                props: {placeholderHeight: l}
            } = this;
        if (this.prevScrollTop = t, null == a)
            return;
        let s = this.isInPlaceholderRegion(e), r = t - a;
        0 !== s && (1 === s && t + r <= 0 ? (this.mergeTo(l - n), this.prevScrollTop = l - n) : 2 === s && t + r >= i - n && (this.mergeTo(i - l), this.prevScrollTop = i - l));
    }
    enableAutomaticAck() {
        this.isInitialized() && !this.acking && (this.acking = !0, this.updateStoreDimensions(() => {
            (0, c.CZ)(this.props.channel.id, this.props.windowId);
        }));
    }
    fixScrollPosition(e, t) {
        this.offsetHeightCache = e, this.scrollHeightCache = t, this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.fixAnchorScrollPosition();
    }
    fixJumpTarget() {
        if (!this.isJumping())
            return;
        let {
            messages: e,
            hasUnreads: t
        } = this.props;
        if (null != e.jumpTargetId) {
            let n = x(e);
            if (null == n)
                return;
            let i = this.getElementFromMessageId(n);
            (0, s.k)(i) ? this.scrollTo(this.getOffsetOrientationFromNode(i, 'middle', t ? this.newMessageBarBuffer() : C.kQ), !0) : this.scrollToNewMessages(!0, 'middle');
        } else
            this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top', i = arguments.length > 2 ? arguments[2] : void 0, a = null === (e = this.getDocument()) || void 0 === e ? void 0 : e.getElementById(C.j1), l = () => {
                this.jumping = !1, this.setAutomaticAnchor(this.findAnchor()), null != i && i(), this.handleScroll();
            };
        this.pinned = !1, this.jumping = t, null != a ? this.scrollTo(this.getOffsetOrientationFromNode(a, n, this.newMessageBarBuffer()), t, l) : this.scrollTo(this.getOffsetToPreventLoading('top'), t, l);
    }
    getOffsetOrientationFromNode(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = null === (n = this.ref.current) || void 0 === n ? void 0 : n.getScrollerNode();
        if (null == a)
            return 0;
        let l = this.getScrollerState(), s = (0, E.Z)(e, a);
        return 'middle' === t ? Math.min(s - 0.5 * l.offsetHeight + 0.5 * e.offsetHeight + -8, s - i) : s - i;
    }
    restoreScroll() {
        if (this.isInitialized())
            return;
        let {initialScrollTop: e} = this;
        this.initialScrollTop = void 0;
        let t = x(this.props.messages);
        null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== g.d4z.GUILD_VOICE && this.props.channel.type !== g.d4z.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom();
    }
    scrollTo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = arguments.length > 2 ? arguments[2] : void 0;
        null === (t = this.ref.current) || void 0 === t || t.scrollTo({
            to: e,
            animate: !d.Z.useReducedMotion && n,
            callback: i
        }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    mergeTo(e, t) {
        var n;
        null === (n = this.ref.current) || void 0 === n || n.mergeTo({
            to: e,
            callback: t
        }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], {
                messages: t,
                channel: n
            } = this.props;
        if (t.hasMoreAfter) {
            var i, a;
            i = n, o.Z.jumpToPresent(i.id, g.AQB), (0, h.XU)(null !== (a = i.getGuildId()) && void 0 !== a ? a : g.ME, i.id);
        } else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                this.jumping = !1, this.handleScroll();
            });
    }
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized())
            return;
        let {channel: t} = this.props;
        if (this.isPinned())
            r.Z.clearChannelDimensions(t.id, e);
        else {
            let {placeholderHeight: n} = this.props, {
                    scrollTop: i,
                    scrollHeight: a,
                    offsetHeight: l
                } = this.getScrollerState();
            r.Z.updateChannelDimensions(t.id, i - n, a - n, l, e);
        }
    }
    scrollIntoViewRect() {
    }
    scrollPageUp() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null === (e = this.ref.current) || void 0 === e || e.scrollPageUp({ animate: t });
    }
    scrollPageDown() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null === (e = this.ref.current) || void 0 === e || e.scrollPageDown({ animate: t });
    }
    scrollToMessage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.ref.current)
            return;
        if (e === this.props.channel.id) {
            this.scrollTo(0);
            return;
        }
        let i = this.getElementFromMessageId(e);
        !this.isJumping() && t && null != n && !d.Z.useReducedMotion && (_.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), this.pinned = !1, this.jumping = !0;
        let a = () => {
            this.jumping = !1, (0, s.k)(i) && d.Z.keyboardModeEnabled && i.focus({ preventScroll: !0 }), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e());
        };
        (0, s.k)(i) ? this.scrollTo(this.getOffsetOrientationFromNode(i, 'middle', this.props.hasUnreads ? this.newMessageBarBuffer() : C.kQ), t, a) : this.scrollToNewMessages(t, 'middle', a);
    }
    getOffsetToTriggerLoading(e, t) {
        let {
                scrollHeight: n,
                offsetHeight: i
            } = t, {
                messages: a,
                hasUnreads: l,
                placeholderHeight: s
            } = this.props;
        if ('top' === e)
            return a.hasMoreBefore ? l ? s - C.D4 - 2 : s + 500 : 0;
        return a.hasMoreAfter ? n - i - s - 500 : n - i;
    }
    getOffsetToPreventLoading(e) {
        let {messages: t} = this.props, n = 0;
        return 'top' === e && t.hasMoreBefore ? n = 2 : 'bottom' === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n;
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let {
                scrollTop: t,
                offsetHeight: n,
                scrollHeight: i
            } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, i), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e), this._automaticAnchorCallbacks = l().uniq(this._automaticAnchorCallbacks), !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = l().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e), this._scrollCompleteCallbacks = l().uniq(this._scrollCompleteCallbacks);
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = l().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        this.acking = !1, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, c.jT)(this.props.channel.id, this.props.windowId);
    }
    constructor(e) {
        var t, n = this;
        I(this, 'props', void 0), I(this, 'ref', i.createRef()), I(this, 'automaticAnchor', null), I(this, 'messageFetchAnchor', null), I(this, 'focusAnchor', null), I(this, 'loading', void 0), I(this, 'jumping', !1), I(this, 'pinned', void 0), I(this, 'dragging', !1), I(this, 'isAtBottom', !1), I(this, 'prevScrollTop', null), I(this, 'anchorTimeout', null), I(this, 'initialScrollTop', null), I(this, 'acking', !1), I(this, 'scrollCounter', 0), I(this, 'offsetHeightCache', 0), I(this, 'scrollHeightCache', 0), I(this, 'scrollTopCache', -1), I(this, '_bottomAnchor', null), I(this, '_automaticAnchorCallbacks', []), I(this, '_scrollCompleteCallbacks', []), I(this, 'updateVisibleMessagesDebounced', l().debounce(p.JR, 300)), I(this, 'handleScroll', e => {
            var t;
            if (!this.isInitialized())
                return;
            let n = this.getScrollerState(), i = this.isScrolledToBottom(n);
            if (i !== this.isAtBottom && (i ? (this.isAtBottom = !0, this.props.handleScrollToBottom()) : (this.isAtBottom = !1, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache)
                this.scrollCounter = 0, clearTimeout(this.anchorTimeout), !this.isPinned() && (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
            else {
                if (null != e && e.target !== (null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode()))
                    return;
                this.scrollTopCache !== n.scrollTop && (this.pinned = i, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
                    this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
                    let {
                        scrollHeight: e,
                        offsetHeight: t
                    } = this.getScrollerState();
                    this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), !this.isPinned() && this.setAutomaticAnchor(this.findAnchor()));
                }, 35));
            }
            if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled())
                return !this.props.canLoadMore && this.enableAutomaticAck(), this.handleScrollSpeed(n);
            let a = this.isInScrollTriggerLoadingRegion(n);
            1 === a ? this.loadMore() : 2 === a ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n);
        }), I(this, 'handleResize', (e, t) => {
            let {
                offsetHeightCache: n,
                scrollHeightCache: i
            } = this;
            'container' === t ? n = e.contentRect.height : 'content' === t && (i = e.contentRect.height), this.isHeightChange(n, i) && this.fixScrollPosition(n, i);
        }), I(this, 'handleMouseDown', e => {
            e.target === e.currentTarget && (this.dragging = !0);
        }), I(this, 'handleMouseUp', () => {
            this.dragging = !1, this.handleScroll();
        }), I(this, 'loadMore', function () {
            let e, t, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], {messages: a} = n.props;
            if (i) {
                let e = a.last();
                null != e && (t = e.id);
            } else {
                let t = a.first();
                null != t && (e = t.id);
            }
            n.messageFetchAnchor = n.findFetchAnchor(i), n.loading = !0, o.Z.fetchMessages({
                channelId: n.props.channel.id,
                before: e,
                after: t,
                limit: g.AQB,
                truncate: !0
            });
        }), I(this, 'updateStoreDimensionsDebounced', l().debounce(this.updateStoreDimensions, 200)), this.props = e, this.loading = e.messages.loadingMore;
        let a = m.Z.getChannelDimensions(e.channel.id);
        null != e.messages.jumpTargetId ? this.pinned = !1 : (this.initialScrollTop = null !== (t = null == a ? void 0 : a.scrollTop) && void 0 !== t ? t : null, this.pinned = null == a);
    }
}
function v(e) {
    let {
            messages: t,
            channel: n,
            compact: a,
            hasUnreads: l,
            focusId: s,
            placeholderHeight: r,
            canLoadMore: o = !0,
            handleScrollToBottom: c,
            handleScrollFromBottom: d
        } = e, {windowId: h} = i.useContext(u.ZP), [p] = i.useState(() => new N({
            messages: t,
            channel: n,
            compact: a,
            hasUnreads: l,
            focusId: s,
            placeholderHeight: r,
            canLoadMore: o,
            windowId: h,
            handleScrollToBottom: c,
            handleScrollFromBottom: d
        }));
    return p.getSnapshotBeforeUpdate(s), i.useLayoutEffect(() => p.mergePropsAndUpdate({
        messages: t,
        channel: n,
        compact: a,
        hasUnreads: l,
        focusId: s,
        placeholderHeight: r,
        canLoadMore: o,
        windowId: h,
        handleScrollToBottom: c,
        handleScrollFromBottom: d
    })), i.useLayoutEffect(() => () => p.cleanup(), [p]), p;
}
