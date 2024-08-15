var r = n(470079);
let i = (e) => {
	e.effects.forEach((e) => {
		let { src: t } = e,
			n = document.createElement('link');
		(n.rel = 'prefetch'),
			(n.href = t),
			(n.onload = () => {
				document.body.removeChild(n);
			}),
			document.body.appendChild(n);
	});
};
t.Z = (e) => {
	r.useEffect(() => {
		i(e);
	}, [e]);
};
