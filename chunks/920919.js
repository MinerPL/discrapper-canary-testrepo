n.d(t, {
    p: function () {
        return c;
    }
});
var r = n(573654);
function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var u = !1,
    a = !1,
    c = (function () {
        var e, t, n;
        function c(e) {
            !(function (e, t) {
                if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
            })(this, c),
                o(this, 'internalMonitor', void 0),
                o(this, 'sourceId', null),
                (this.internalMonitor = e.getMonitor());
        }
        return (
            (e = c),
            (t = [
                {
                    key: 'receiveHandlerId',
                    value: function (e) {
                        this.sourceId = e;
                    }
                },
                {
                    key: 'getHandlerId',
                    value: function () {
                        return this.sourceId;
                    }
                },
                {
                    key: 'canDrag',
                    value: function () {
                        (0, r.k)(!u, 'You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
                        try {
                            return (u = !0), this.internalMonitor.canDragSource(this.sourceId);
                        } finally {
                            u = !1;
                        }
                    }
                },
                {
                    key: 'isDragging',
                    value: function () {
                        if (!this.sourceId) return !1;
                        (0, r.k)(!a, 'You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
                        try {
                            return (a = !0), this.internalMonitor.isDraggingSource(this.sourceId);
                        } finally {
                            a = !1;
                        }
                    }
                },
                {
                    key: 'subscribeToStateChange',
                    value: function (e, t) {
                        return this.internalMonitor.subscribeToStateChange(e, t);
                    }
                },
                {
                    key: 'isDraggingSource',
                    value: function (e) {
                        return this.internalMonitor.isDraggingSource(e);
                    }
                },
                {
                    key: 'isOverTarget',
                    value: function (e, t) {
                        return this.internalMonitor.isOverTarget(e, t);
                    }
                },
                {
                    key: 'getTargetIds',
                    value: function () {
                        return this.internalMonitor.getTargetIds();
                    }
                },
                {
                    key: 'isSourcePublic',
                    value: function () {
                        return this.internalMonitor.isSourcePublic();
                    }
                },
                {
                    key: 'getSourceId',
                    value: function () {
                        return this.internalMonitor.getSourceId();
                    }
                },
                {
                    key: 'subscribeToOffsetChange',
                    value: function (e) {
                        return this.internalMonitor.subscribeToOffsetChange(e);
                    }
                },
                {
                    key: 'canDragSource',
                    value: function (e) {
                        return this.internalMonitor.canDragSource(e);
                    }
                },
                {
                    key: 'canDropOnTarget',
                    value: function (e) {
                        return this.internalMonitor.canDropOnTarget(e);
                    }
                },
                {
                    key: 'getItemType',
                    value: function () {
                        return this.internalMonitor.getItemType();
                    }
                },
                {
                    key: 'getItem',
                    value: function () {
                        return this.internalMonitor.getItem();
                    }
                },
                {
                    key: 'getDropResult',
                    value: function () {
                        return this.internalMonitor.getDropResult();
                    }
                },
                {
                    key: 'didDrop',
                    value: function () {
                        return this.internalMonitor.didDrop();
                    }
                },
                {
                    key: 'getInitialClientOffset',
                    value: function () {
                        return this.internalMonitor.getInitialClientOffset();
                    }
                },
                {
                    key: 'getInitialSourceClientOffset',
                    value: function () {
                        return this.internalMonitor.getInitialSourceClientOffset();
                    }
                },
                {
                    key: 'getSourceClientOffset',
                    value: function () {
                        return this.internalMonitor.getSourceClientOffset();
                    }
                },
                {
                    key: 'getClientOffset',
                    value: function () {
                        return this.internalMonitor.getClientOffset();
                    }
                },
                {
                    key: 'getDifferenceFromInitialOffset',
                    value: function () {
                        return this.internalMonitor.getDifferenceFromInitialOffset();
                    }
                }
            ]),
            i(e.prototype, t),
            c
        );
    })();
