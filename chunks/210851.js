t(47120);
var n = t(735250),
	a = t(470079),
	i = t(481060),
	r = t(763610),
	o = t(673105);
s.Z = function (e) {
	var s, t;
	let { assetKey: l, filters: c, initialValue: d, onFileChange: _, title: E } = e,
		[u, I] = a.useState(null),
		[T, S] = a.useState(!1);
	return (0, n.jsxs)(i.FormItem, {
		children: [
			(0, n.jsx)(i.FormTitle, {
				tag: i.FormTitleTags.H5,
				children: (0, n.jsxs)('div', {
					className: o.headingWithTooltip,
					children: [
						E,
						(0, n.jsx)(i.Tooltip, {
							text: 'Supported asset formats: '.concat(c.join(', ')),
							children: (e) =>
								(0, n.jsx)(i.CircleInformationIcon, {
									size: 'xs',
									...e
								})
						})
					]
				})
			}),
			(0, n.jsx)(r.Z, {
				filename:
					null !== (t = null !== (s = null == u ? void 0 : u.name) && void 0 !== s ? s : d) && void 0 !== t ? t : '',
				filters: [
					{
						name: E,
						extensions: c
					}
				],
				buttonText: 'Browse',
				placeholder: 'Select an asset',
				onFileSelect: function (e) {
					if ((I(null != e ? e : null), null == e)) return;
					S(!0);
					let s = new FileReader();
					(s.onload = function () {
						'string' == typeof s.result && (_(l, s.result), S(!1));
					}),
						(s.onerror = function (e) {
							console.error(e);
						}),
						s.readAsDataURL(e);
				}
			})
		]
	});
};
