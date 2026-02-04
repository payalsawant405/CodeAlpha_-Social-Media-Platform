
import React from 'react';
import { User, Post } from './types';

export const INITIAL_USERS: User[] = [
  {
    id: 'u1',
    username: 'alex_vibes',
    name: 'Alex Rivera',
    avatar: 'https://picsum.photos/seed/alex/200',
    bio: 'Digital nomad and coffee enthusiast. Exploring the intersection of tech and art.',
    followers: ['u2', 'u3'],
    following: ['u2'],
    joinedDate: '2023-10-01'
  },
  {
    id: 'u2',
    username: 'sarah_codes',
    name: 'Sarah Chen',
    avatar: 'https://picsum.photos/seed/sarah/200',
    bio: 'Full-stack developer | Open source contributor | Dog lover',
    followers: ['u1'],
    following: ['u1', 'u3'],
    joinedDate: '2023-11-15'
  },
  {
    id: 'u3',
    username: 'mike_tours',
    name: 'Mike Peterson',
    avatar: 'https://picsum.photos/seed/mike/200',
    bio: 'Traveling the world one mountain at a time.',
    followers: ['u2'],
    following: ['u1'],
    joinedDate: '2024-01-20'
  }
];

export const INITIAL_POSTS: Post[] = [
  {
    id: 'p1',
    userId: 'u2',
    content: 'Just deployed my first production app with Gemini integration! The possibilities are endless. 🚀 #AI #React',
    imageUrl: 'https://picsum.photos/seed/post1/600/400',
    likes: ['u1', 'u3'],
    comments: [
      { id: 'c1', userId: 'u1', content: 'That looks awesome! How was the latency?', timestamp: '2024-03-20T10:30:00Z' }
    ],
    timestamp: '2024-03-20T10:00:00Z'
  },
  {
    id: 'p2',
    userId: 'u1',
    content: 'Morning views from the new studio. Ready to create! ☕🎨',
    imageUrl: 'https://picsum.photos/seed/post2/600/400',
    likes: ['u2'],
    comments: [],
    timestamp: '2024-03-21T08:15:00Z'
  }
];
