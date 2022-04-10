import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '',
    dataset: '',
    apiVersion: '',
    useCdn: true,
    token: '',
});