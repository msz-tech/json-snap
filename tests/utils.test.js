import { describe, it, expect } from 'vitest';
import { formatJSON, minifyJSON } from '../src/utils.js';
import { isValidJSON } from '../src/utils/validateJSON.js';

describe('formatJSON', () => {
  it('should beautify valid JSON', () => {
    const input = '{"foo":1,"bar":2}';
    const output = formatJSON(input);
    expect(output).toBe(`{
  "foo": 1,
  "bar": 2
}`);
  });

  it('should return original string on invalid JSON', () => {
    const input = '{foo:1,bar:2}';
    const output = formatJSON(input);
    expect(output).toBe(input);
  });
});

describe('minifyJSON', () => {
  it('should minify valid JSON', () => {
    const input = `{
  "foo": 1,
  "bar": 2
}`;
    const output = minifyJSON(input);
    expect(output).toBe('{"foo":1,"bar":2}');
  });

  it('should return original string on invalid JSON', () => {
    const input = '{foo:1,bar:2}';
    const output = minifyJSON(input);
    expect(output).toBe(input);
  });
});

describe('isValidJSON', () => {
  it('should return true for valid JSON', () => {
    expect(isValidJSON('{"foo":1}')).toBe(true);
  });

  it('should return false for invalid JSON', () => {
    expect(isValidJSON('{foo:1}')).toBe(false);
  });
});
