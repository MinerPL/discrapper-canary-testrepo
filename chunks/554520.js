n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    buttonLabel: 'Afficher les suggestions',
    countAnnouncement: (e, t) =>
        `${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} option`,
            other: () => `${t.number(e.optionCount)} options`
        })} disponible(s).`,
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `Groupe ${e.groupTitle} saisi, avec ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} option`,
                        other: () => `${t.number(e.groupCount)} options`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: `, s\xe9lectionn\xe9(s)`,
                other: ''
            },
            e.isSelected
        )}`,
    listboxLabel: 'Suggestions',
    selectedAnnouncement: (e) => `${e.optionText}, s\xe9lectionn\xe9`
};
