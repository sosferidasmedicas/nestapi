import { config } from 'dotenv';
import * as crypto from 'node:crypto';
config();

const algorithm = 'aes-256-cbc';
const baseIv = 'MNLFW8Eyg8sW56sT';
const secretKeyVar = process.env.CIPHER_SECRET_KEY;

export const encryptData = (data: string) => {
  const iv = Buffer.from(baseIv);
  const cipher = crypto.createCipheriv(algorithm, secretKeyVar, iv);
  let encryptedText = cipher.update(data, 'utf-8', 'hex');
  encryptedText += cipher.final('hex');
  return encryptedText;
};

export const decryptData = (encryptedData: string) => {
  const iv = Buffer.from(baseIv);
  const decipher = crypto.createDecipheriv(algorithm, secretKeyVar, iv);
  let decryptedText = decipher.update(encryptedData, 'hex', 'utf-8');
  decryptedText += decipher.final('utf-8');
  return decryptedText;
};
