export interface ApiProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string | number;
    city: string;
    zipcode: number;
    geo: {
      lat?: string | number;
      ing?: string | number;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
