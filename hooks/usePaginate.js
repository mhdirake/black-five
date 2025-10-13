"use client";

import { DEFAULT_PAGE_LENGTH } from '@/constants/general';
import { useSearchParams } from 'next/navigation';

export default function usePaginate(params = {}) {
  const { tableKey = '' } = params; // Default to an empty object to avoid undefined errors
  const searchParams = useSearchParams();

  const keyPrefix = tableKey ? `${tableKey}_` : '';
  const pageSearch = +searchParams.get(`${keyPrefix}page`) || 1;
  const countSearch = +searchParams.get(`${keyPrefix}count`) || DEFAULT_PAGE_LENGTH;

  const page = pageSearch;
  const count = countSearch;

  return { page, count };
}
