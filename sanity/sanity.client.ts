import { createClient } from 'next-sanity';

export const projectId = '';
export const dataset = 'production';
const apiVersion = '2022-11-25';
const useCdn = process.env.NODE_ENV === 'production';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
