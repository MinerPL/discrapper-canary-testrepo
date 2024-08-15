n.d(t, {
	Fq: function () {
		return d;
	},
	Zj: function () {
		return c;
	}
}),
	n(47120);
var r,
	i = n(735250),
	a = n(470079),
	s = n(53281),
	o = n(869783),
	l = n(689938);
function u(e, t, n) {
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
function c() {
	return [
		{
			name: l.Z.Messages.IMAGES,
			extensions: ['jpg', 'jpeg', 'png', 'gif']
		}
	];
}
function d(e, t, n) {
	!(function (e, t) {
		if (null != e) {
			let n = new FileReader();
			(n.onload = (n) => {
				var r;
				'string' == typeof (null === (r = n.target) || void 0 === r ? void 0 : r.result) && t(n.target.result, e);
			}),
				n.readAsDataURL(e);
		}
	})(e, (r) => {
		if (e.type === o.m.MP4) return t(r, e);
		let i = new Image();
		(i.src = r),
			(i.onload = () => {
				t(r, e);
			}),
			(i.onerror = () => {
				n();
			});
	});
}
class _ extends (r = a.PureComponent) {
	componentDidMount() {
		this._isMounted = !0;
	}
	activateUploadDialogue() {
		var e;
		null === (e = this._ref.current) || void 0 === e || e.activateUploadDialogue();
	}
	render() {
		let { multiple: e, disabled: t, className: n, tabIndex: r, 'aria-label': a, filters: o } = this.props;
		return (0, i.jsx)(s.Z, {
			ref: this._ref,
			onChange: this.handleFileChange,
			filters: null != o ? o : c(),
			multiple: e,
			disabled: t,
			className: n,
			tabIndex: r,
			'aria-label': a
		});
	}
	constructor(...e) {
		super(...e),
			u(this, '_ref', a.createRef()),
			u(this, '_isMounted', !1),
			u(this, 'handleFileChange', (e) => {
				let { onFileSizeError: t, maxFileSizeBytes: n } = this.props;
				if ((e.stopPropagation(), e.preventDefault(), null != e.currentTarget.files))
					for (let r = 0; r < e.currentTarget.files.length; r++) {
						let i = e.currentTarget.files[r];
						if (i.size > n) {
							null == t || t(n, i.size);
							continue;
						}
						d(i, this.handleFileRead, this.handleFileError);
					}
			}),
			u(this, 'handleFileRead', (e, t) => {
				let { onChange: n } = this.props;
				this._isMounted && n(e, t);
			}),
			u(this, 'handleFileError', async () => {
				let { openUploadError: e } = await Promise.resolve().then(n.bind(n, 531643));
				e({
					title: l.Z.Messages.PREMIUM_ALERT_ERROR_TITLE,
					help: l.Z.Messages.UNABLE_TO_PROCESS_IMAGE
				});
			});
	}
}
u(_, 'defaultProps', {
	multiple: !0,
	tabIndex: -1,
	maxFileSizeBytes: 1 / 0
}),
	(t.ZP = _);
