import useSWR from 'swr';

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export function getOfferDetails (id) {
  const { data, error, isLoading } = useSWR(id ? `https://subsapi-dev.epoch.cloud/chargebee/get_offer_details?offer_id=${id}` : null, fetcher);

  return {
    offer: data && data.data,
    isLoading,
    isError: error || data?.error
  }
}