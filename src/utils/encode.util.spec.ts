process.env.CIPHER_SECRET_KEY = 'mMSHjwsHY32HpbpaWyzYKZRkmpCWDAQB';
import { decryptData, encryptData } from './encode.util';

describe('EncodeUtils', () => {
  describe('encryptData', () => {
    it('should be able to encrypt the string and the encrypted data should be the same', async () => {
      const result = encryptData('{"any":"any"}');
      const anotherResult = encryptData('{"any":"any"}');

      expect(result).toBe(anotherResult);
    });

    it('should be able to encrypt a tiny string', async () => {
      const string = '{"a":"a"}';

      const result = encryptData(string);

      expect(decryptData(result)).toBe(string);
    });

    it('should be able to encrypt a big string', async () => {
      const string =
        '{"KX3uyfppX9QXqRaRACXUNzqftEuPXmWeb8ARNR8nZDFwVuPCtAU6svCqcsy7H6YE9ygt7z2UN54Z8aLe4xHSTrVYJwC5URTQbaF9P8SYTcw6q6T8pXCz478q6cu9":"smZm8UYJtgk5QyB8zMrGNmXSwVqEx5ZKaxWAhTJzudtyeEkNrJutdG5KkpAj2pwTWB4VhZzXD57wQg5KU5xnxejmwPc32F2GhmgjCPHbm9EuMgxDvDB75U5ZWSrD"}';
      const result = encryptData(string);

      expect(decryptData(result)).toBe(string);
    });
  });

  describe('decryptData', () => {
    it('should be able to decrypt the encrypted data', async () => {
      const string = '{"any":"any"}';
      const testEncryptedData = encryptData(string);

      const result = decryptData(testEncryptedData);

      expect(result).toBe(string);
    });
  });
});
