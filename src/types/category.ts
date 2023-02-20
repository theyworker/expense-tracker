export type Category = {
  name: String;
  createdAt: Number | Date;
  description: String;
  config: {
    customType: boolean;
    user: String;
  };
  id: String;
  icon?: String;
  active: Boolean
};
