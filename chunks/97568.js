I.d(_, {
    s: function () {
        return N;
    }
});
var A = I(735250);
I(470079);
var O = I(481060), T = I(621145), S = I(689938), C = I(688690);
let N = E => {
    let {flaggedContent: _} = E;
    return 0 === _.length ? null : (0, A.jsxs)('div', {
        className: C.classificationEvidenceContainer,
        children: [
            (0, A.jsx)(O.Text, {
                variant: 'eyebrow',
                color: 'text-muted',
                children: S.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
            }),
            (0, A.jsx)(T.Z, { flaggedContent: _ })
        ]
    });
};
