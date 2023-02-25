import { db } from "../src/utils/db.server";

type User = {
  email: string;
  username: string;
  password: string;
};

type Note = {
  title: string;
  contentUrl: string;
};

type Flashcard = {
  title: string;
  contentUrl: string;
};

type Image = {
  imageUrl: string;
};
