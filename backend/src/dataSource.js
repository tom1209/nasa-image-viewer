const { RESTDataSource } = require("apollo-datasource-rest");

class NasaImageAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://images-api.nasa.gov/";
  }

  imageReducer(image) {
    return {
      id: Math.random().toString(36).slice(2),
      title: image.data[0].title || "",
      description: image.data[0].description || "",
      href: image.href || ""
    }
  } 

  async getImageByQuery({q}) {
    const response = await this.get("search", {q});
    const { items } = response.collection;
    return items.map( (image)=> this.imageReducer(image));
  }
}

module.exports = NasaImageAPI;