n.d(t, {
    z: function () {
        return _;
    }
});
var r = n(440359), i = n(652756), a = n(928968), o = n(778882), s = n(215857);
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? l(Object(n), !0).forEach(function (t) {
            d(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}
function c(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
var _ = function () {
    var e, t, n;
    function l(e, t, n) {
        var o = this;
        !function (e, t) {
            if (!(e instanceof t))
                throw TypeError('Cannot call a class as a function');
        }(this, l), d(this, 'options', void 0), d(this, 'actions', void 0), d(this, 'monitor', void 0), d(this, 'registry', void 0), d(this, 'enterLeaveCounter', void 0), d(this, 'sourcePreviewNodes', new Map()), d(this, 'sourcePreviewNodeOptions', new Map()), d(this, 'sourceNodes', new Map()), d(this, 'sourceNodeOptions', new Map()), d(this, 'dragStartSourceIds', null), d(this, 'dropTargetIds', []), d(this, 'dragEnterTargetIds', []), d(this, 'currentNativeSource', null), d(this, 'currentNativeHandle', null), d(this, 'currentDragSourceNode', null), d(this, 'altKeyPressed', !1), d(this, 'mouseMoveTimeoutTimer', null), d(this, 'asyncEndDragFrameId', null), d(this, 'dragOverTargetIds', null), d(this, 'getSourceClientOffset', function (e) {
            var t = o.sourceNodes.get(e);
            return t && (0, i.g2)(t) || null;
        }), d(this, 'endDragNativeItem', function () {
            if (!!o.isDraggingNativeItem())
                o.actions.endDrag(), o.currentNativeHandle && o.registry.removeSource(o.currentNativeHandle), o.currentNativeHandle = null, o.currentNativeSource = null;
        }), d(this, 'isNodeInDocument', function (e) {
            return !!(e && o.document && o.document.body && o.document.body.contains(e));
        }), d(this, 'endDragIfSourceWasRemovedFromDOM', function () {
            var e = o.currentDragSourceNode;
            if (!(null == e || o.isNodeInDocument(e)))
                o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag();
        }), d(this, 'handleTopDragStartCapture', function () {
            o.clearCurrentDragSourceNode(), o.dragStartSourceIds = [];
        }), d(this, 'handleTopDragStart', function (e) {
            if (!e.defaultPrevented) {
                var t = o.dragStartSourceIds;
                o.dragStartSourceIds = null;
                var n = (0, i.K5)(e);
                o.monitor.isDragging() && o.actions.endDrag(), o.actions.beginDrag(t || [], {
                    publishSource: !1,
                    getSourceClientOffset: o.getSourceClientOffset,
                    clientOffset: n
                });
                var r = e.dataTransfer, s = (0, a.w)(r);
                if (o.monitor.isDragging()) {
                    if (r && 'function' == typeof r.setDragImage) {
                        var l = o.monitor.getSourceId(), u = o.sourceNodes.get(l), c = o.sourcePreviewNodes.get(l) || u;
                        if (c) {
                            var d = o.getCurrentSourcePreviewNodeOptions(), _ = d.anchorX, E = d.anchorY, f = d.offsetX, h = d.offsetY, p = (0, i.rK)(u, c, n, {
                                    anchorX: _,
                                    anchorY: E
                                }, {
                                    offsetX: f,
                                    offsetY: h
                                });
                            r.setDragImage(c, p.x, p.y);
                        }
                    }
                    try {
                        null == r || r.setData('application/json', {});
                    } catch (e) {
                    }
                    o.setCurrentDragSourceNode(e.target), o.getCurrentSourcePreviewNodeOptions().captureDraggingState ? o.actions.publishDragSource() : setTimeout(function () {
                        return o.actions.publishDragSource();
                    }, 0);
                } else if (s)
                    o.beginDragNativeItem(s);
                else {
                    if (r && !r.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable')))
                        return;
                    e.preventDefault();
                }
            }
        }), d(this, 'handleTopDragEndCapture', function () {
            o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag();
        }), d(this, 'handleTopDragEnterCapture', function (e) {
            if (o.dragEnterTargetIds = [], !(!o.enterLeaveCounter.enter(e.target) || o.monitor.isDragging())) {
                var t = e.dataTransfer, n = (0, a.w)(t);
                n && o.beginDragNativeItem(n, t);
            }
        }), d(this, 'handleTopDragEnter', function (e) {
            var t = o.dragEnterTargetIds;
            if (o.dragEnterTargetIds = [], !!o.monitor.isDragging())
                o.altKeyPressed = e.altKey, t.length > 0 && o.actions.hover(t, { clientOffset: (0, i.K5)(e) }), t.some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                }) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = o.getCurrentDropEffect()));
        }), d(this, 'handleTopDragOverCapture', function () {
            o.dragOverTargetIds = [];
        }), d(this, 'handleTopDragOver', function (e) {
            var t = o.dragOverTargetIds;
            if (o.dragOverTargetIds = [], !o.monitor.isDragging()) {
                e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = 'none');
                return;
            }
            o.altKeyPressed = e.altKey, o.actions.hover(t || [], { clientOffset: (0, i.K5)(e) }), (t || []).some(function (e) {
                return o.monitor.canDropOnTarget(e);
            }) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = o.getCurrentDropEffect())) : o.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
        }), d(this, 'handleTopDragLeaveCapture', function (e) {
            if (o.isDraggingNativeItem() && e.preventDefault(), !!o.enterLeaveCounter.leave(e.target))
                o.isDraggingNativeItem() && setTimeout(function () {
                    return o.endDragNativeItem();
                }, 0);
        }), d(this, 'handleTopDropCapture', function (e) {
            if (o.dropTargetIds = [], o.isDraggingNativeItem()) {
                var t;
                e.preventDefault(), null === (t = o.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer);
            } else
                (0, a.w)(e.dataTransfer) && e.preventDefault();
            o.enterLeaveCounter.reset();
        }), d(this, 'handleTopDrop', function (e) {
            var t = o.dropTargetIds;
            o.dropTargetIds = [], o.actions.hover(t, { clientOffset: (0, i.K5)(e) }), o.actions.drop({ dropEffect: o.getCurrentDropEffect() }), o.isDraggingNativeItem() ? o.endDragNativeItem() : o.monitor.isDragging() && o.actions.endDrag();
        }), d(this, 'handleSelectStart', function (e) {
            var t = e.target;
            if ('function' == typeof t.dragDrop && 'INPUT' !== t.tagName && 'SELECT' !== t.tagName && 'TEXTAREA' !== t.tagName && !t.isContentEditable)
                e.preventDefault(), t.dragDrop();
        }), this.options = new s.r(t, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new r.e(this.isNodeInDocument);
    }
    return e = l, t = [
        {
            key: 'profile',
            value: function () {
                var e, t;
                return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds: (null === (e = this.dragStartSourceIds) || void 0 === e ? void 0 : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds: (null === (t = this.dragOverTargetIds) || void 0 === t ? void 0 : t.length) || 0
                };
            }
        },
        {
            key: 'window',
            get: function () {
                return this.options.window;
            }
        },
        {
            key: 'document',
            get: function () {
                return this.options.document;
            }
        },
        {
            key: 'rootElement',
            get: function () {
                return this.options.rootElement;
            }
        },
        {
            key: 'setup',
            value: function () {
                var e = this.rootElement;
                if (void 0 !== e) {
                    if (e.__isReactDndBackendSetUp)
                        throw Error('Cannot have two HTML5 backends at the same time.');
                    e.__isReactDndBackendSetUp = !0, this.addEventListeners(e);
                }
            }
        },
        {
            key: 'teardown',
            value: function () {
                var e, t = this.rootElement;
                if (void 0 !== t)
                    t.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null === (e = this.window) || void 0 === e || e.cancelAnimationFrame(this.asyncEndDragFrameId));
            }
        },
        {
            key: 'connectDragPreview',
            value: function (e, t, n) {
                var r = this;
                return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t), function () {
                    r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e);
                };
            }
        },
        {
            key: 'connectDragSource',
            value: function (e, t, n) {
                var r = this;
                this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                var i = function (t) {
                        return r.handleDragStart(t, e);
                    }, a = function (e) {
                        return r.handleSelectStart(e);
                    };
                return t.setAttribute('draggable', 'true'), t.addEventListener('dragstart', i), t.addEventListener('selectstart', a), function () {
                    r.sourceNodes.delete(e), r.sourceNodeOptions.delete(e), t.removeEventListener('dragstart', i), t.removeEventListener('selectstart', a), t.setAttribute('draggable', 'false');
                };
            }
        },
        {
            key: 'connectDropTarget',
            value: function (e, t) {
                var n = this, r = function (t) {
                        return n.handleDragEnter(t, e);
                    }, i = function (t) {
                        return n.handleDragOver(t, e);
                    }, a = function (t) {
                        return n.handleDrop(t, e);
                    };
                return t.addEventListener('dragenter', r), t.addEventListener('dragover', i), t.addEventListener('drop', a), function () {
                    t.removeEventListener('dragenter', r), t.removeEventListener('dragover', i), t.removeEventListener('drop', a);
                };
            }
        },
        {
            key: 'addEventListeners',
            value: function (e) {
                if (!!e.addEventListener)
                    e.addEventListener('dragstart', this.handleTopDragStart), e.addEventListener('dragstart', this.handleTopDragStartCapture, !0), e.addEventListener('dragend', this.handleTopDragEndCapture, !0), e.addEventListener('dragenter', this.handleTopDragEnter), e.addEventListener('dragenter', this.handleTopDragEnterCapture, !0), e.addEventListener('dragleave', this.handleTopDragLeaveCapture, !0), e.addEventListener('dragover', this.handleTopDragOver), e.addEventListener('dragover', this.handleTopDragOverCapture, !0), e.addEventListener('drop', this.handleTopDrop), e.addEventListener('drop', this.handleTopDropCapture, !0);
            }
        },
        {
            key: 'removeEventListeners',
            value: function (e) {
                if (!!e.removeEventListener)
                    e.removeEventListener('dragstart', this.handleTopDragStart), e.removeEventListener('dragstart', this.handleTopDragStartCapture, !0), e.removeEventListener('dragend', this.handleTopDragEndCapture, !0), e.removeEventListener('dragenter', this.handleTopDragEnter), e.removeEventListener('dragenter', this.handleTopDragEnterCapture, !0), e.removeEventListener('dragleave', this.handleTopDragLeaveCapture, !0), e.removeEventListener('dragover', this.handleTopDragOver), e.removeEventListener('dragover', this.handleTopDragOverCapture, !0), e.removeEventListener('drop', this.handleTopDrop), e.removeEventListener('drop', this.handleTopDropCapture, !0);
            }
        },
        {
            key: 'getCurrentSourceNodeOptions',
            value: function () {
                var e = this.monitor.getSourceId(), t = this.sourceNodeOptions.get(e);
                return u({ dropEffect: this.altKeyPressed ? 'copy' : 'move' }, t || {});
            }
        },
        {
            key: 'getCurrentDropEffect',
            value: function () {
                return this.isDraggingNativeItem() ? 'copy' : this.getCurrentSourceNodeOptions().dropEffect;
            }
        },
        {
            key: 'getCurrentSourcePreviewNodeOptions',
            value: function () {
                var e = this.monitor.getSourceId();
                return u({
                    anchorX: 0.5,
                    anchorY: 0.5,
                    captureDraggingState: !1
                }, this.sourcePreviewNodeOptions.get(e) || {});
            }
        },
        {
            key: 'isDraggingNativeItem',
            value: function () {
                var e = this.monitor.getItemType();
                return Object.keys(o).some(function (t) {
                    return o[t] === e;
                });
            }
        },
        {
            key: 'beginDragNativeItem',
            value: function (e, t) {
                this.clearCurrentDragSourceNode(), this.currentNativeSource = (0, a.f)(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
            }
        },
        {
            key: 'setCurrentDragSourceNode',
            value: function (e) {
                var t = this;
                this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
                this.mouseMoveTimeoutTimer = setTimeout(function () {
                    var e;
                    return null === (e = t.rootElement) || void 0 === e ? void 0 : e.addEventListener('mousemove', t.endDragIfSourceWasRemovedFromDOM, !0);
                }, 1000);
            }
        },
        {
            key: 'clearCurrentDragSourceNode',
            value: function () {
                if (this.currentDragSourceNode) {
                    if (this.currentDragSourceNode = null, this.rootElement) {
                        var e;
                        null === (e = this.window) || void 0 === e || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, !0);
                    }
                    return this.mouseMoveTimeoutTimer = null, !0;
                }
                return !1;
            }
        },
        {
            key: 'handleDragStart',
            value: function (e, t) {
                if (!e.defaultPrevented)
                    !this.dragStartSourceIds && (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(t);
            }
        },
        {
            key: 'handleDragEnter',
            value: function (e, t) {
                this.dragEnterTargetIds.unshift(t);
            }
        },
        {
            key: 'handleDragOver',
            value: function (e, t) {
                null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t);
            }
        },
        {
            key: 'handleDrop',
            value: function (e, t) {
                this.dropTargetIds.unshift(t);
            }
        }
    ], c(e.prototype, t), l;
}();
