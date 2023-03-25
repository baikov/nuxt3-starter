import type { MenuItem } from 'types'

export const useMenu = () => {
  const config = useRuntimeConfig()

  const getCatalogMenu = async () => {
    try {
      const { data: menu } = await useFetch<MenuItem[]>(
        `${config.public.apiUrl}/categories/menu/`,
      )
      // const data = await $fetch<MenuItem[]>(
      //   `${config.public.apiUrl}/categories/menu/`
      // );
      // return data as MenuItem[];
      return menu
    }
    catch (e) {
      // showError({ statusCode: 500, statusMessage: 'Server Error' })
    }
  }

  return { getCatalogMenu }
}
