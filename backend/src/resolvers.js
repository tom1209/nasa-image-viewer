module.exports = {
  Query: {
    images: (_, {q, from}, {dataSources}) =>
      dataSources.nasaImageAPI.getImageByQuery({q, from})
  }
}