t.d(n, {
	n: function () {
		return s;
	}
});
var r = t(735250);
t(470079);
var i = t(187753),
	l = t(596454),
	a = t(73346);
function s(e, n) {
	if (null != n)
		switch (n.type) {
			case i.T.STORE_ASSET:
				let t = (0, a._W)(e, n.store_asset_id);
				return (0, r.jsx)('img', {
					src: t,
					alt: '',
					className: 'emoji'
				});
			case i.T.EMOJI:
				return (0, r.jsx)(l.Z, { emojiName: n.emoji });
		}
}
