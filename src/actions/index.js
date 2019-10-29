let counter = 0;

export const getValue = () => {
    return 5;
};

export const addCounter = () => ({
    type: 'ADD_COUNTER',
    id: counter++,
        num : 0,
    payload: { value: getValue() }
}
);