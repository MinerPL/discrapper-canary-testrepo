n.d(t, {
    AT: function () {
        return r;
    },
    cs: function () {
        return i;
    },
    zQ: function () {
        return d;
    }
}), n(653041), n(47120);
var r, i, a, o = n(512722), s = n.n(o), l = n(570140);
function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(r || (r = {})).FORUM_CHANNEL = 'forum_channel', (a = i || (i = {}))[a.IMMEDIATE = 0] = 'IMMEDIATE', a[a.IMMEDIATE_WITH_COOLDOWN = 1] = 'IMMEDIATE_WITH_COOLDOWN', a[a.IMMEDIATE_WITH_DELAY = 2] = 'IMMEDIATE_WITH_DELAY';
class c {
    maybeMarkSeen(e) {
        let t = this.seenIntervals[this.seenIntervals.length - 1];
        return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({ startTimeMillis: e }), !0);
    }
    maybeMarkUnseen(e) {
        let t = this.seenIntervals[this.seenIntervals.length - 1];
        return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0);
    }
    isVisible() {
        let e = this.seenIntervals[this.seenIntervals.length - 1];
        return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null;
    }
    computeSeenTimeDestructive(e) {
        let t = 0, n = [];
        for (let r of this.seenIntervals) {
            if (null != r.endTimeMillis) {
                t += r.endTimeMillis - r.startTimeMillis;
                continue;
            }
            if (e) {
                let e = Date.now();
                t += e - r.startTimeMillis, n.push({ startTimeMillis: e });
                continue;
            }
            n.push(r);
        }
        return s()(n.length < 2, 'there should only be a single left over data'), this.seenIntervals = n, Math.round(t);
    }
    constructor() {
        u(this, 'seenIntervals', void 0), this.seenIntervals = [];
    }
}
class d {
    maybeFlushSeenItems(e) {
        if (null == e && Date.now() - this._lastFlushTimeMillis < 60000 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3000)
            return Promise.resolve();
        let t = this.createFlushSeenItemsFunction(e);
        return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) ? new Promise(async e => {
            await t(), e();
        }) : new Promise(e => {
            setTimeout(async () => {
                await t(), e();
            }, 100);
        });
    }
    constructor({
        id: e,
        windowId: t,
        isPaused: n
    }) {
        u(this, 'trackedFeedItems', void 0), u(this, '_lastFlushTimeMillis', void 0), u(this, '_pausedFeedItemIds', void 0), u(this, '_paused', void 0), u(this, '_windowId', void 0), u(this, '_isReactNavigationFocused', void 0), u(this, '_id', void 0), u(this, 'onInitialize', void 0), u(this, 'onTerminate', void 0), u(this, 'onFeedItemSeen', void 0), u(this, 'onFeedItemUnseen', void 0), u(this, 'initialize', () => {
            var e;
            l.Z.subscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), l.Z.subscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), l.Z.subscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), l.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), l.Z.subscribe('DRAWER_OPEN', this.handleDrawerOpen), l.Z.subscribe('DRAWER_CLOSE', this.handleDrawerClose), l.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this);
        }), u(this, 'terminate', () => {
            var e;
            l.Z.unsubscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), l.Z.unsubscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), l.Z.unsubscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), l.Z.unsubscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), l.Z.unsubscribe('DRAWER_OPEN', this.handleDrawerOpen), l.Z.unsubscribe('DRAWER_CLOSE', this.handleDrawerClose), l.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(0);
        }), u(this, 'handleFeedItemFlush', e => {
            let {
                id: t,
                force: n
            } = e;
            if (this._id === t)
                this.maybeFlushSeenItems(n);
        }), u(this, 'handleFeedItemSeen', e => {
            var t;
            let n = e.id, r = e.timestampMillis, i = e.feedItemId;
            if (n !== this._id)
                return;
            if (this._paused) {
                this._pausedFeedItemIds.add(i);
                return;
            }
            let a = this.getTrackedFeedItem(i).maybeMarkSeen(r);
            null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, i, a);
        }), u(this, 'handleFeedItemUnseen', e => {
            var t;
            let n = e.id, r = e.timestampMillis, i = e.feedItemId;
            if (n !== this._id)
                return;
            this._paused && this._pausedFeedItemIds.delete(i);
            let a = this.getTrackedFeedItem(i).maybeMarkUnseen(r);
            null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, i, a), this.maybeFlushSeenItems();
        }), u(this, 'getTrackedFeedItem', e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new c()), this.trackedFeedItems[e])), u(this, 'getVisibleFeedItemIds', () => new Set(Object.keys(this.trackedFeedItems).filter(e => {
            var t;
            return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible();
        }))), u(this, 'handleDrawerClose', () => {
            this._isReactNavigationFocused && this.resume();
        }), u(this, 'handleDrawerOpen', () => {
            this._isReactNavigationFocused && this.pause();
        }), u(this, 'handleAppStateUpdate', e => {
            let {state: t} = e;
            'active' === t && this._isReactNavigationFocused && this.resume(), 'background' === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0));
        }), u(this, 'clearPausedFeedItemIds', () => {
            this._pausedFeedItemIds = new Set(), this._paused = !1;
        }), u(this, 'pause', () => {
            if (this._paused)
                return;
            let e = this.getVisibleFeedItemIds();
            e.forEach(e => {
                this.handleFeedItemUnseen({
                    id: this._id,
                    feedItemId: e,
                    timestampMillis: Date.now(),
                    type: 'ANALYTICS_FEED_ITEM_UNSEEN'
                });
            }), this._paused = !0, this._pausedFeedItemIds = e;
        }), u(this, 'resume', () => {
            if (!!this._paused)
                this._paused = !1, this._pausedFeedItemIds.forEach(e => {
                    this.handleFeedItemSeen({
                        id: this._id,
                        feedItemId: e,
                        timestampMillis: Date.now(),
                        type: 'ANALYTICS_FEED_ITEM_SEEN'
                    });
                }), this.clearPausedFeedItemIds();
        }), u(this, 'handleReactNavigationFocus', (e, t) => {
            this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause();
        }), u(this, 'handleWindowFocus', e => {
            if (this._windowId === e.windowId)
                e.focused ? this.resume() : this.pause();
        }), this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set(), this._paused = null != n && n, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now();
    }
}
