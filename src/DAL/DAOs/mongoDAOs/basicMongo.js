export default class basicMongo {
  constructor(model) {
    this.model = model;
  }
  async findAll() {
    try {
      const response = await this.model.findOne();
      return response;
    } catch (error) {
      return error;
    }
  }
  async findOneById(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      return error;
    }
  }
  async createOne(obj) {
    try {
      const response = await this.model.createOne(obj);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateOne(id, obj) {
    try {
      const response = await this.model.findByIdAndUpdate(id, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async deleteOne(id) {
    try {
      const response = await this.model.findByIdAndDelete({ _id: id });
      return response;
    } catch (error) {
      return error;
    }
  }
}

export const businessMongo = new businessMongo();
