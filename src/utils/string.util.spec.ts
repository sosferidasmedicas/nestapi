import { isUUID } from 'class-validator';
import { generateUuid } from './string.util';

describe('StringUtil', () => {
  it('should be able to create a new random uuid everytime its called', () => {
    const uuid = generateUuid();
    const anotherUuid = generateUuid();

    expect(isUUID(uuid)).toBe(true);
    expect(uuid === anotherUuid).toBe(false);
  });
});
