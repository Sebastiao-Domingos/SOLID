export type userResquest = {
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };

  results: {
    email: string;
    gender: string;
    id: {
      name: string;
      value: string;
    };
    phone: string;
    name: {
      title: string;
      last: string;
      first: string;
    };
  }[];
};
