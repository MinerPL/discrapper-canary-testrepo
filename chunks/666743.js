n.d(t, {
	Z: function () {
		return l;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(314897);
function r(e, t, n) {
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
function l(e) {
	return class extends a.Component {
		componentDidMount() {
			s.default.addChangeListener(this.onStoreChange);
		}
		componentWillUnmount() {
			s.default.removeChangeListener(this.onStoreChange);
		}
		render() {
			return (0, i.jsx)(e, {
				...this.props,
				isAuthenticated: this.state.isAuthenticated
			});
		}
		constructor(...e) {
			super(...e),
				r(this, 'state', { isAuthenticated: s.default.isAuthenticated() }),
				r(this, 'onStoreChange', () => {
					this.setState({ isAuthenticated: s.default.isAuthenticated() });
				});
		}
	};
}
