s.d(l, {
	Z: function () {
		return d;
	}
});
var t = s(735250),
	n = s(470079),
	i = s(120356),
	a = s.n(i),
	o = s(481060),
	r = s(53281),
	u = s(899044);
function d(e) {
	let { filename: l, className: s, filters: i, buttonText: d, placeholder: c, onFileSelect: I } = e,
		m = n.useRef(null);
	return (0, t.jsxs)('div', {
		className: a()(s, u.fileUpload),
		children: [
			(0, t.jsx)('input', {
				className: u.fileUploadInput,
				tabIndex: -1,
				readOnly: !0,
				placeholder: c,
				type: 'text',
				value: l
			}),
			(0, t.jsxs)(o.Button, {
				size: o.Button.Sizes.MIN,
				className: u.fileUploadButton,
				children: [
					d,
					(0, t.jsx)(r.Z, {
						ref: m,
						tabIndex: -1,
						onChange: (e) => {
							var l;
							I(null === (l = e.currentTarget.files) || void 0 === l ? void 0 : l[0]);
						},
						multiple: !1,
						filters: i
					})
				]
			})
		]
	});
}
