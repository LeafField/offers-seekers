export type PrefecturesFetch = {
  message: null;
  result: {
    prefCode: number;
    prefName: string;
  }[];
};

export type SeekersFetcher = {
  message: null;
  result: {
    data: {
      broadName: string;
      middleName?: string;
      value: number | null;
    }[];
  };
};

type Unwrap<T> = T extends (infer U)[] ? U : never;

export type Seeker = Unwrap<SeekersFetcher["result"]["data"]>;
