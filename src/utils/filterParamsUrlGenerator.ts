export function filterParamsUrlGenerator({ search, region, sort }: {
    search: string | null | undefined;
    region: string | null | undefined;
    sort: string | null | undefined
}) {
    const newQueryParams = new URLSearchParams();
  
    if (search && search.trim().length > 0) {
      newQueryParams.append('search', search);
    }

    if (region && region === "Africa" || region === "Europe" || region === "Americas" || region === "Asia" || region === "Oceania" || region === "Antarctic") {
      newQueryParams.append('region', region);
    }

    if (sort && sort === "asc" || sort === "desc") {
      newQueryParams.append('sort', sort);
    }
  
    return newQueryParams.toString();
};