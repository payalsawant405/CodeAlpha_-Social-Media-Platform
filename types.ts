
export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  followers: string[]; // user ids
  following: string[]; // user ids
  joinedDate: string;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  imageUrl?: string;
  likes: string[]; // user ids
  comments: Comment[];
  timestamp: string;
}

export interface AppState {
  currentUser: User;
  users: User[];
  posts: Post[];
}
