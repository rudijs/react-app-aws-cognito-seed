const config = {
  user: {
    can: [
      "account",
      "post:add",
      {
        name: "post:save",
        when: async params => params.userId === params.ownerId
      },
      "user:create",
      {
        name: "user:*",
        when: async params => params.id === params.userId
      }
    ]
  },
  manager: {
    can: ["post:save", "post:delete", "account:*"],
    inherits: ["user"]
  },
  admin: {
    can: ["rule the server"],
    inherits: ["manager"]
  }
};
