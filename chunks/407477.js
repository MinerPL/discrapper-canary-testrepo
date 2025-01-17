let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_reaction_frecency_algorithms',
    label: 'Reaction Frecency Algorithms',
    defaultConfig: { frecencyAlgorithm: 'original' },
    treatments: [
        {
            id: 1,
            label: 'Change frecency algorithm',
            config: { frecencyAlgorithm: 'safe' }
        },
        {
            id: 2,
            label: 'Change frecency algorithm and day weights',
            config: { frecencyAlgorithm: 'recency_max' }
        },
        {
            id: 3,
            label: 'Change frecency algorithm to be faster and day weights',
            config: { frecencyAlgorithm: 'fast_turnover' }
        },
        {
            id: 4,
            label: 'Change frecency algorithm to be faster and day weights faster',
            config: { frecencyAlgorithm: 'day_recency' }
        }
    ]
});
t.Z = r;
