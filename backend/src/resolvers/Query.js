const { forwardTo } = require("prisma-binding");

const Query = {
  // if the query is exactly the same, this forwards the query from prisma to the Yoga server. All you need to do is write the following line:
  items: forwardTo("db"),
  item: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   console.log("Getting Items!!");
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
