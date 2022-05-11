import { Post } from './post';

export type Meta = Pick<Post, 'description' | 'image' | 'title'> & {
  date?: string;
  type?: string;
};
