export interface Review {
  id: number | null;
  rating: number;
  description: string;
  createdAt: string | null;
  gameId: number | null;
  user: {
    id: number;
    username: string;
    role: string;
    profilePic: string;
  } | null;
  reviewFlags: [
    {
      id: number;
      isFlagged: boolean;
      userId: number;
    } | null
  ];
  reviewVotes: [
    {
      id: number;
      vote: number;
      userId: number;
    } | null
  ];
}
