import axios, { AxiosError } from 'axios';
import md5 from 'md5';

const publickey = 'dd8d2888dccc269b3aafae04713ff414';
const privatekey = 'fbd10f9c75d097086f59ba0d745ef3924376c61e';
const time = new Date().getTime();

const hash = md5(time + privatekey + publickey);

export const urlDetails = '';

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: publickey,
    hash: hash,
    limit: 100,
    orderBy: 'modified'
  }
});
