var r = n(570140),
	i = n(188785);
t.Z = {
	openNativeAppModal(e, t) {
		let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		if (!i.a)
			r.Z.dispatch({
				type: 'NATIVE_APP_MODAL_OPENING',
				code: e
			}),
				Promise.resolve()
					.then(n.bind(n, 536285))
					.then((n) => {
						let { default: r } = n;
						r.request(t, {
							code: e,
							...a
						})
							.then((t) => {
								var n;
								this.nativeModalOpened(null !== (n = null == t ? void 0 : t.code) && void 0 !== n ? n : e);
							})
							.catch(() => this.nativeModalOpenFailed(e))
							.then(() => r.disconnect());
					});
	},
	nativeModalOpened(e) {
		r.Z.dispatch({
			type: 'NATIVE_APP_MODAL_OPENED',
			code: e
		});
	},
	nativeModalOpenFailed(e) {
		r.Z.dispatch({
			type: 'NATIVE_APP_MODAL_OPEN_FAILED',
			code: e
		});
	}
};
