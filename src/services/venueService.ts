import { Dropbox } from 'dropbox';

export interface Venue {
  name: string;
  description: string;
  tags: string[];
  image: string;
  location: string;
  mapLink: string;
}

export interface VenueData {
  venues: Venue[];
  tags: string[];
}

export const fetchVenues = async (): Promise<VenueData> => {
  const accessToken = import.meta.env.VITE_DROPBOX_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error('Dropbox access token is missing');
  }
  const dbx = new Dropbox({ accessToken });

  const response = await dbx.filesListFolder({ path: '/Venues' });
  const fetchedVenues: Venue[] = [];
  const allTags = new Set<string>();

  for (const entry of response.result.entries) {
    const venue = await dbx.filesListFolder({ path: entry.path_display! });
    const image = await dbx.filesGetTemporaryLink({ path: venue.result.entries[0].path_display! });
    const description = await dbx.filesDownload({ path: venue.result.entries[1].path_display! });
    const fileBlob = (description.result as any).fileBlob as Blob;
    
    const jsonText = await fileBlob.text();
    const details = JSON.parse(jsonText);

    fetchedVenues.push({
      name: entry.name,
      description: details.description,
      tags: details.tags,
      image: image.result.link,
      location: details.location,
      mapLink: details.mapLink,
    });

    details.tags.forEach((tag: string) => allTags.add(tag));
  }

  return { venues: fetchedVenues, tags: Array.from(allTags) };
};