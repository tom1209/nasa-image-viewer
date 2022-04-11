module.exports = {
  Query: {
    images: (_, {q}, {dataSources}) =>
      dataSources.nasaImageAPI.getImageByQuery({q})
  }
}