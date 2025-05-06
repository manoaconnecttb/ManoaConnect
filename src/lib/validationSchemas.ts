import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const AddFeedbackSchema = Yup.object({
  name: Yup.string().required(),
  response: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const MakePostSchema = Yup.object({
  title: Yup.string().required(),
  image: Yup.string().required(),
  author: Yup.string().required(),
  content: Yup.string().required(),
  owner: Yup.string().required(),
});

export interface Post {
  id: number;
  title: string;
  image: string;
  author: string;
  content: string;
  likes: number;
  comments: string[];
  owner: string;
}
