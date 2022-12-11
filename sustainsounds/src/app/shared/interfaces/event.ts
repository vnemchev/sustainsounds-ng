export interface IEvent {
  _id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  price: number;
  imageUrl?: string;
  description?: string;
  _ownerId: string;
}
