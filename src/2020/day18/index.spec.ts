import { calc1, calc2 } from '.';

describe('2020 day 18', () => {
  describe('calc1', () => {
    it('should calculate the mathimatical expression, case 1', () => {
      expect(calc1('2 * 3 + (4 * 5)')).toEqual(26);
    });
    it('should calculate the mathimatical expression, case 2', () => {
      expect(calc1('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toEqual(437);
    });
    it('should calculate the mathimatical expression, case 3', () => {
      expect(calc1('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')).toEqual(12240);
    });
    it('should calculate the mathimatical expression, case 4', () => {
      expect(calc1('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')).toEqual(13632);
    });
  });
  describe('calc2', () => {
    it('should calculate the mathimatical expression, case 1', () => {
      expect(calc2('2 * 3 + (4 * 5)')).toEqual(46);
    });
    it('should calculate the mathimatical expression, case 2', () => {
      expect(calc2('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toEqual(1445);
    });
    it('should calculate the mathimatical expression, case 3', () => {
      expect(calc2('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')).toEqual(669060);
    });
    it('should calculate the mathimatical expression, case 4', () => {
      expect(calc2('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')).toEqual(23340);
    });
  });
});
