import { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (request) => {
  throw request.redirect(307, "/home/");
};
