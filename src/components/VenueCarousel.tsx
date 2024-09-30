import { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox'; // Import Dropbox SDK
import { Card, Avatar, Text } from '@radix-ui/themes'; // Import Radix UI components

const VenuesCarousel = () => {
  interface Venue {
    name: string;
    description: string;
    image: string;
  }

  const [venues, setVenues] = useState<Venue[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const accessToken = import.meta.env.VITE_DROPBOX_ACCESS_TOKEN;
    if (!accessToken) {
      setError(new Error('Dropbox access token is missing'));
      return;
    }
    const dbx = new Dropbox({ accessToken });

    const fetchVenues = async () => {
      try {
        // Fetch the list of folders from Dropbox (representing venues)
        const response = await dbx.filesListFolder({ path: '/Venues' }); // Replace '/Venues' with the actual folder path
        for (let i = 0; i < response.result.entries.length; i++) {
          const resturaunt = response.result.entries[i];
          // Fetch all the files for each restaurant
          const venue = await dbx.filesListFolder({ path: resturaunt.path_display! });
          // Get the first image for the venue
          const image = await dbx.filesGetTemporaryLink({ path: venue.result.entries[0].path_display! });
          // Get the content of the description file
          const description = await dbx.filesDownload({ path: venue.result.entries[1].path_display! });
          const fileBlob = (description.result as any).fileBlob as Blob;
          const text = await fileBlob.text();
          setVenues((prevVenues) => [...prevVenues, { name: resturaunt.name, description: text, image: image.result.link }]);
        }
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchVenues(); // Fetch the venues on component mount
  }, []);

  return (
    <div className="venues-container">
      {error ? (
        <p>Error fetching venues: {error.message}</p>
      ) : (
        <div className="venues-flexbox">
          {venues.map((venue, index) => (
            <Card key={index} className="venue-card">
              <Avatar src={venue.image} alt={venue.name} fallback={venue.name}/>
              <Text as="p">{venue.name}</Text>
              <Text>{venue.description}</Text>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default VenuesCarousel;
