n.d(t, {
    D: function () {
        return r;
    },
    E: function () {
        return i;
    }
});
var a,
    r,
    s = n(818083);
((a = r || (r = {}))[(a.CONTROL = 0)] = 'CONTROL'), (a[(a.TRANSFORMATION = 1)] = 'TRANSFORMATION'), (a[(a.NO_MOVEMENT = 2)] = 'NO_MOVEMENT');
let o = (0, s.B)({
        kind: 'user',
        id: '2024-03_shop_card_hover_animation',
        label: 'Shop card hover animation experiment',
        defaultConfig: { hoverVariant: 0 },
        treatments: [
            {
                id: 1,
                label: 'Use CSS Transformation',
                config: { hoverVariant: 1 }
            },
            {
                id: 2,
                label: 'No hover movement',
                config: { hoverVariant: 2 }
            }
        ]
    }),
    i = (e) => o.useExperiment({ location: e });
