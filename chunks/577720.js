t.d(s, {
	Z: function () {
		return c;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(981631),
	l = t(946304);
class c extends a.Component {
	render() {
		let { className: e, videoID: s, videoClassName: t } = this.props;
		return (0, n.jsx)('div', {
			className: r()(e, l.videoWrapper),
			children: (0, n.jsx)('iframe', {
				className: r()(t, l.video),
				src: 'https://www.youtube.com/embed/'.concat(s, '?rel=0&showinfo=0&controls=1&origin=https://').concat(o.$R1),
				allowFullScreen: !0,
				sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
			})
		});
	}
}
