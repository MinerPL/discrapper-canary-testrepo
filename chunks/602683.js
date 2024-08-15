t(47120);
var n = t(735250),
	a = t(470079),
	i = t(481060);
s.Z = function (e) {
	let { assetKey: s, initialValue: t, onMessageChange: r, title: o } = e,
		[l, c] = a.useState('');
	return (
		a.useEffect(() => {
			c(null != t ? t : '');
		}, [t]),
		(0, n.jsxs)(i.FormItem, {
			children: [
				(0, n.jsx)(i.FormTitle, {
					tag: i.FormTitleTags.H5,
					children: o
				}),
				(0, n.jsx)(i.FormText, {
					children: (0, n.jsx)(i.TextInput, {
						value: l,
						onChange: function (e) {
							c(e), r(s, e);
						}
					})
				})
			]
		})
	);
};
