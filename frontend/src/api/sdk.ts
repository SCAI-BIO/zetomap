import { Configuration, QueryApi, ExperimentApi, PredictApi } from '.';

export const config = new Configuration({
  basePath: process.env.REACT_APP_API_URL,
});

// export const searchApi = new SearchApi(config);
// export const baseApi = new BaseApi(config);
// export const neighborsApi = new NeighborsApi(config);
// export const filesApi = new FilesApi(config);

export const queryApi = new QueryApi(config);
export const expApi = new ExperimentApi(config);
export const predictApi = new PredictApi(config);
