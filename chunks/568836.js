n.d(t, {
	$G: function () {
		return c;
	},
	OR: function () {
		return u;
	},
	aL: function () {
		return o;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(345898),
	l = n(236809);
let o = 660,
	c = (e) =>
		(0, i.jsx)(r.Z, {
			...e,
			className: s()(e.className, {
				[l.embedVertical]: !e.isHorizontal,
				[l.embedHorizontal]: e.isHorizontal
			})
		}),
	u = (e) => {
		let { isHorizontal: t } = e;
		return (0, i.jsx)(c, {
			...e,
			media: () =>
				(0, i.jsx)('div', {
					className: s()(l.loadingDescription),
					children: (0, i.jsx)('div', {
						className: s()(l.loadingBackgroundWrapper, { [l.loadingBackgroundWrapperHorizontal]: t }),
						children: (0, i.jsx)('div', { className: l.loadingBackground })
					})
				}),
			title: () => (0, i.jsx)('div', { className: s()(l.loadingImage, { [l.loadingImageHorizontal]: t }) })
		});
	};
