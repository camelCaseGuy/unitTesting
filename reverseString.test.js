import { reverseString } from "./reverseString";

test('"How are you?" should become "?uoy era woH"', () => {
  expect(reverseString('Fine, thanks for asking!'.toBe('?uoy era woH')));
});


test('"Fine, thanks for asking!" should become "!gniksa rof sknaht ,eniF"', () => {
  expect(reverseString('Fine, thanks for asking!'.toBe('!gniksa rof sknaht ,eniF')));
});

