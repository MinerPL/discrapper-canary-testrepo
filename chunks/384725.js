var A = I(735250);
I(470079);
var O = I(481060),
	T = I(570140);
_.Z = {
	open(E) {
		T.Z.dispatch({
			type: 'SAFETY_HUB_APPEAL_OPEN',
			classificationId: E
		}),
			(0, O.openModalLazy)(async () => {
				let { default: _ } = await I.e('65652').then(I.bind(I, 208265));
				return (I) =>
					(0, A.jsx)(_, {
						classificationId: E,
						...I
					});
			});
	},
	close() {
		T.Z.dispatch({ type: 'SAFETY_HUB_APPEAL_CLOSE' });
	}
};
