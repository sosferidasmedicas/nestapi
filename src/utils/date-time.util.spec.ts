import { generateNewDate, toMySqlDateTime } from './date-time.util';

describe('DateTimeUtils', () => {
  const mockDate = new Date(2023, 0, 1);

  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(mockDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe('toMySqlDateTime', () => {
    it('should format a date to MySQL datetime format', () => {
      const date = new Date('2023-06-16T10:30:00');

      const formattedDateTime = toMySqlDateTime(date);

      expect(formattedDateTime).toEqual("'2023-06-16 10:30:00'");
    });
  });

  describe('generateNewDate', () => {
    it('should be able to create a new date without a arg', async () => {
      const date = generateNewDate();

      expect(date).toStrictEqual(mockDate);
    });

    it('should be able to create a new date without a arg', async () => {
      const baseDate = new Date('2023-06-16T10:30:00');
      const date = generateNewDate(baseDate);

      expect(date).toStrictEqual(baseDate);
    });
  });
});
