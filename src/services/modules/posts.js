import configs from "../../configs";
import httpApi from "../../utils/http-handler";

const urls = configs.urls.posts;

export default {
  getPostData(params) {
    const path = urls.getPosts;
    return httpApi.getRequest(path, params);
  },
  getPostByIdData(id) {
    const path = urls.getPostById(id);
    return httpApi.getRequest(path);
  }
};
