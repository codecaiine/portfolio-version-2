import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'im8lopbc',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skSPSllZ4XLPx3p8zhOJNCZF51HI7ilj6itQbOmO1nXjTNCOuzZbTQm9PNlNJcedaNobcUV7er7GVQtlW0twomukEbYXtLZJnFikeLiOLBT2z7saF0N0sBjIMGOLkjyQOlz8O5lWTEwFLhbzUh4FHsQ0ZaFWDY1PjUWc6eZxMJvB7nRt5cMK',
}); 