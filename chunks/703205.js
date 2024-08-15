r.d(t, {
	Z: function () {
		return p;
	}
});
var a = r(599295),
	n = r(521464),
	s = r(157680),
	o = r(15393),
	i = r(337309),
	c = r(774375),
	u = r(748024),
	l = r(692378),
	b = r(470079),
	f = r(639519),
	d = r.n(f),
	h = r(949179),
	p = (function (e) {
		(0, i.Z)(d, e);
		var t,
			r,
			f =
				((t = d),
				(r = (function () {
					if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
					} catch (e) {
						return !1;
					}
				})()),
				function () {
					var e,
						a = (0, u.Z)(t);
					return (
						(e = r ? Reflect.construct(a, arguments, (0, u.Z)(this).constructor) : a.apply(this, arguments)),
						(0, c.Z)(this, e)
					);
				});
		function d(e) {
			var t;
			return (
				(0, n.Z)(this, d),
				(t = f.call(this, e)),
				(0, l.Z)((0, o.Z)(t), 'handleClick', function () {
					t.setState({ expanded: !t.state.expanded });
				}),
				(t.state = { expanded: !1 }),
				t
			);
		}
		return (
			(0, s.Z)(d, [
				{
					key: 'render',
					value: function () {
						var e = this.props,
							t = e.styling,
							r = e.from,
							n = e.to,
							s = e.renderChildNodes,
							o = e.nodeType;
						return this.state.expanded
							? b.createElement('div', t('itemRange', this.state.expanded), s(this.props, r, n))
							: b.createElement(
									'div',
									(0, a.Z)({}, t('itemRange', this.state.expanded), { onClick: this.handleClick }),
									b.createElement(h.Z, {
										nodeType: o,
										styling: t,
										expanded: !1,
										onClick: this.handleClick,
										arrowStyle: 'double'
									}),
									''.concat(r, ' ... ').concat(n)
								);
					}
				}
			]),
			d
		);
	})(b.Component);
(0, l.Z)(p, 'propTypes', {
	styling: d().func.isRequired,
	from: d().number.isRequired,
	to: d().number.isRequired,
	renderChildNodes: d().func.isRequired,
	nodeType: d().string.isRequired
});
