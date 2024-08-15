n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(735250);
n(470079);
var i = n(302454),
	a = n.n(i),
	s = n(481060);
function o(e) {
	return (
		(e.paragraph = {
			...e.paragraph,
			react: function (e, t, n) {
				return (0, r.jsx)('p', { children: t(e.content, n) }, n.key);
			}
		}),
		(e.link = {
			...e.link,
			react: function (e, t, n) {
				let i = {};
				if (null != e.context) {
					let t = e.context[e.target];
					t && t.onClick ? ((i.onClick = t.onClick), (i.onContextMenu = t.onContextMenu)) : (i.onClick = t);
				}
				return (
					null == i.onClick && (i.href = a().sanitizeUrl(e.target)),
					(0, r.jsx)(
						s.Anchor,
						{
							title: e.title,
							...i,
							children: t(e.content, n)
						},
						n.key
					)
				);
			}
		}),
		e
	);
}
