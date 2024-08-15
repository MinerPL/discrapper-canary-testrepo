n.d(t, {
	S: function () {
		return l;
	}
});
var r = n(573654),
	i = n(778010),
	a = n(112457),
	s = n(603565);
function o(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(e, r.key, r);
	}
}
var l = (function () {
	var e, t, n;
	function l(e, t) {
		!(function (e, t) {
			if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
		})(this, l),
			(this.store = e),
			(this.registry = t);
	}
	return (
		(e = l),
		(t = [
			{
				key: 'subscribeToStateChange',
				value: function (e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { handlerIds: void 0 },
						i = n.handlerIds;
					(0, r.k)('function' == typeof e, 'listener must be a function.'),
						(0, r.k)(void 0 === i || Array.isArray(i), 'handlerIds, when specified, must be an array of strings.');
					var a = this.store.getState().stateId;
					return this.store.subscribe(function () {
						var n = t.store.getState(),
							r = n.stateId;
						try {
							!(r === a || (r === a + 1 && !(0, s.co)(n.dirtyHandlerIds, i))) && e();
						} finally {
							a = r;
						}
					});
				}
			},
			{
				key: 'subscribeToOffsetChange',
				value: function (e) {
					var t = this;
					(0, r.k)('function' == typeof e, 'listener must be a function.');
					var n = this.store.getState().dragOffset;
					return this.store.subscribe(function () {
						var r = t.store.getState().dragOffset;
						if (r !== n) (n = r), e();
					});
				}
			},
			{
				key: 'canDragSource',
				value: function (e) {
					if (!e) return !1;
					var t = this.registry.getSource(e);
					return (
						(0, r.k)(t, 'Expected to find a valid source. sourceId='.concat(e)),
						!this.isDragging() && t.canDrag(this, e)
					);
				}
			},
			{
				key: 'canDropOnTarget',
				value: function (e) {
					if (!e) return !1;
					var t = this.registry.getTarget(e);
					if (
						((0, r.k)(t, 'Expected to find a valid target. targetId='.concat(e)), !this.isDragging() || this.didDrop())
					)
						return !1;
					var n = this.registry.getTargetType(e),
						a = this.getItemType();
					return (0, i.s)(n, a) && t.canDrop(this, e);
				}
			},
			{
				key: 'isDragging',
				value: function () {
					return !!this.getItemType();
				}
			},
			{
				key: 'isDraggingSource',
				value: function (e) {
					if (!e) return !1;
					var t = this.registry.getSource(e, !0);
					return (
						(0, r.k)(t, 'Expected to find a valid source. sourceId='.concat(e)),
						!!(this.isDragging() && this.isSourcePublic()) &&
							this.registry.getSourceType(e) === this.getItemType() &&
							t.isDragging(this, e)
					);
				}
			},
			{
				key: 'isOverTarget',
				value: function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shallow: !1 };
					if (!e) return !1;
					var n = t.shallow;
					if (!this.isDragging()) return !1;
					var r = this.registry.getTargetType(e),
						a = this.getItemType();
					if (a && !(0, i.s)(r, a)) return !1;
					var s = this.getTargetIds();
					if (!s.length) return !1;
					var o = s.indexOf(e);
					return n ? o === s.length - 1 : o > -1;
				}
			},
			{
				key: 'getItemType',
				value: function () {
					return this.store.getState().dragOperation.itemType;
				}
			},
			{
				key: 'getItem',
				value: function () {
					return this.store.getState().dragOperation.item;
				}
			},
			{
				key: 'getSourceId',
				value: function () {
					return this.store.getState().dragOperation.sourceId;
				}
			},
			{
				key: 'getTargetIds',
				value: function () {
					return this.store.getState().dragOperation.targetIds;
				}
			},
			{
				key: 'getDropResult',
				value: function () {
					return this.store.getState().dragOperation.dropResult;
				}
			},
			{
				key: 'didDrop',
				value: function () {
					return this.store.getState().dragOperation.didDrop;
				}
			},
			{
				key: 'isSourcePublic',
				value: function () {
					return !!this.store.getState().dragOperation.isSourcePublic;
				}
			},
			{
				key: 'getInitialClientOffset',
				value: function () {
					return this.store.getState().dragOffset.initialClientOffset;
				}
			},
			{
				key: 'getInitialSourceClientOffset',
				value: function () {
					return this.store.getState().dragOffset.initialSourceClientOffset;
				}
			},
			{
				key: 'getClientOffset',
				value: function () {
					return this.store.getState().dragOffset.clientOffset;
				}
			},
			{
				key: 'getSourceClientOffset',
				value: function () {
					return (0, a.YY)(this.store.getState().dragOffset);
				}
			},
			{
				key: 'getDifferenceFromInitialOffset',
				value: function () {
					return (0, a.ar)(this.store.getState().dragOffset);
				}
			}
		]),
		o(e.prototype, t),
		l
	);
})();
