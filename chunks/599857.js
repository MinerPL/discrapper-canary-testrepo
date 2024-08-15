var i = n(735250);
n(470079);
var a = n(14199),
	s = n(780384),
	r = n(981631);
let l = (e) => {
	let { theme: t, ...n } = e,
		l = (0, s.wj)(t) ? 'dark' : 'light';
	return (0, i.jsx)(a.Z, {
		sitekey: r.OL7,
		...n,
		theme: l
	});
};
(l.Themes = {
	LIGHT: 'light',
	DARK: 'dark'
}),
	(l.Sizes = {
		COMPACT: 'compact',
		NORMAL: 'normal',
		INVISIBLE: 'invisible'
	}),
	(t.Z = l);
