import instance from "../services/axios.config";
import MockAdapter from "axios-mock-adapter";

import modules from "./modules";

const mock = new MockAdapter(instance);

modules.forEach(m => {
  if (m.method === "GET") mock.onGet(m.url, {}).reply(m.code, m.data);
  else if (m.method === "POST") mock.onPost(m.url, {}).reply(m.code, m.data);
  else if (m.method === "PATCH") mock.onPatch(m.url, {}).reply(m.code, m.data);
  else if (m.method === "DELETE")
    mock.onDelete(m.url, {}).reply(m.code, m.data);
});
