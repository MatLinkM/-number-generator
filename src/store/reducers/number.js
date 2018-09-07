const INITIAL_STATE = [
  { id: 1, number: 555000000 },
  { id: 2, number: 555000001 },
  { id: 3, number: 555000002 }
];

export default function number(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
