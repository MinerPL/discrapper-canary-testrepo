var i = n(735250);
n(470079);
var a = n(792766),
	s = n(955415);
t.Z = (e) => {
	let { stageInstance: t, guild: n, isMember: r, onTransitionToInviteChannel: l, onAcceptInstantInvite: o } = e;
	return (0, i.jsx)(s.Z, {
		children: (0, i.jsx)(a.Z, {
			isEmbed: !0,
			stageInstance: t,
			guild: n,
			onClick: r ? l : o
		})
	});
};
