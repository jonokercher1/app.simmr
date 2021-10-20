import { useQuery, UseQueryOptions } from 'react-query';
import RequestManager from '../../utils/RequestManager/RequestManager';
import { GetSelfResponse } from './getSelf.types';

const getSelf = async () => {
    const { data } = await RequestManager.get<GetSelfResponse>('/self');

    return data;
};

export const useGetSelf = (options?: UseQueryOptions<GetSelfResponse>) => {
  return useQuery<GetSelfResponse>('self', getSelf, options);
};
