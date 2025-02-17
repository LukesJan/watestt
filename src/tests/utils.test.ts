import { describe, it, expect } from 'vitest';
import { calcAge } from '../utils';

describe('calcAge', () => {
    it('should correctly calculate age for a given birth year', () => {
        const currentYear = new Date().getFullYear();
        const birthYear = 2000;
        const expectedAge = currentYear - birthYear;
        expect(calcAge(birthYear)).toBe(expectedAge);
    });
});