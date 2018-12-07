const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);
    console.log(item);
    return item;
  },
  async updateItem(parent, args, ctx, info) {
    // Copy of the updates
    const updates = { ...args };
    // Remove ID from the update
    delete updates.id;
    // Run the update method
    const item = await ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
    return item;
  }
};

module.exports = Mutations;
