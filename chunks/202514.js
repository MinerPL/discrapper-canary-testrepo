n.d(t, {
    Z: function () {
        return r;
    }
});
var r = {};
r = {
    focusAnnouncement: (e, t) =>
        `${t.select(
            {
                true: () =>
                    `Entered group ${e.groupTitle}, with ${t.plural(e.groupCount, {
                        one: () => `${t.number(e.groupCount)} option`,
                        other: () => `${t.number(e.groupCount)} options`
                    })}. `,
                other: ''
            },
            e.isGroupChange
        )}${e.optionText}${t.select(
            {
                true: ', selected',
                other: ''
            },
            e.isSelected
        )}`,
    countAnnouncement: (e, t) =>
        `${t.plural(e.optionCount, {
            one: () => `${t.number(e.optionCount)} option`,
            other: () => `${t.number(e.optionCount)} options`
        })} available.`,
    selectedAnnouncement: (e) => `${e.optionText}, selected`,
    buttonLabel: 'Show suggestions',
    listboxLabel: 'Suggestions'
};
