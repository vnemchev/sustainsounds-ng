export interface IArtist {
  _id: string;
  email: string;
  alias: string;
  genre?: string;
  imageUrl?: string;
  bio?: string;
  eventsAttended?: string[];
  eventsCreated?: string[];
}
