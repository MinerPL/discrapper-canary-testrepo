n.d(t, {
	j: function () {
		return s;
	}
});
var i = n(406432),
	a = n(981631);
function s(e, t) {
	let { targetKind: n, embedIndex: s } = t;
	if ('media' === n) {
		var r, l;
		let t = e;
		return (
			(null === (r = e.messageReference) || void 0 === r ? void 0 : r.type) === a.Uvt.FORWARD &&
				(t = null === (l = e.messageSnapshots[0]) || void 0 === l ? void 0 : l.message),
			{
				onlyAttachmentIds:
					null == t
						? void 0
						: t.attachments
								.filter((e) => {
									let { filename: t } = e;
									return (0, i.CO)(t) || (0, i.NU)(t);
								})
								.map((e) => e.id)
			}
		);
	}
	if ('embed' === n && null != s) return { onlyEmbedIndices: [s] };
}
