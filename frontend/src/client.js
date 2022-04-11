import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'im8lopbc',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: '',
}); 